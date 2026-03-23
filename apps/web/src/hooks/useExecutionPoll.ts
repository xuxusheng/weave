/**
 * useExecutionPoll — 执行状态轮询 + Kestra 健康检查
 */
import { useEffect, useRef } from "react"
import { useWorkflowStore } from "@/stores/workflow"
import { trpc } from "@/lib/trpc"
import { toast } from "sonner"
import { toExecutionSummary, isTerminalState } from "@/lib/apiTransforms"

/** Kestra 健康检查（启动时 + 每 5 分钟） */
export function useKestraHealthCheck() {
  const utils = trpc.useUtils()
  const setKestraHealthy = useWorkflowStore((s) => s.setKestraHealthy)

  const healthTimerRef = useRef<ReturnType<typeof setTimeout>>(undefined)

  useEffect(() => {
    let isMounted = true
    const check = () => {
      utils.workflow.kestraHealth.fetch().then((res) => {
        if (isMounted) setKestraHealthy(res.healthy, res.error)
      }).catch((err) => {
        if (isMounted) setKestraHealthy(false, err instanceof Error ? err.message : "健康检查失败")
      }).finally(() => {
        if (isMounted) healthTimerRef.current = setTimeout(check, 5 * 60_000)
      })
    }
    check()
    return () => {
      isMounted = false
      clearTimeout(healthTimerRef.current)
    }
  }, [utils, setKestraHealthy])
}

/** 执行状态轮询 — 运行中时每 3 秒查一次 */
export function useExecutionPoll() {
  const {
    currentExecution,
    isExecuting,
  } = useWorkflowStore((s) => ({
    currentExecution: s.currentExecution,
    isExecuting: s.isExecuting,
  }))
  const setCurrentExecution = useWorkflowStore((s) => s.setCurrentExecution)
  const setIsExecuting = useWorkflowStore((s) => s.setIsExecuting)
  const exitRunningMode = useWorkflowStore((s) => s.exitRunningMode)

  const currentExecutionRef = useRef(currentExecution)
  currentExecutionRef.current = currentExecution
  const setCurrentExecutionRef = useRef(setCurrentExecution)
  setCurrentExecutionRef.current = setCurrentExecution
  const setIsExecutingRef = useRef(setIsExecuting)
  setIsExecutingRef.current = setIsExecuting
  const exitRunningModeRef = useRef(exitRunningMode)
  exitRunningModeRef.current = exitRunningMode
  const utils = trpc.useUtils()
  const utilsRef = useRef(utils)
  utilsRef.current = utils
  const pollTimerRef = useRef<ReturnType<typeof setTimeout>>(undefined)

  useEffect(() => {
    const exec = currentExecutionRef.current
    if (!exec || isTerminalState(exec.state)) {
      if (isExecuting) setIsExecuting(false)
      return
    }

    let isMounted = true
    function tick() {
      const exec = currentExecutionRef.current
      if (!exec || !isMounted) return
      utilsRef.current.workflow.executionGet.fetch({
        executionId: exec.id,
      }).then((result) => {
        if (!isMounted || !result) return
        setCurrentExecutionRef.current(toExecutionSummary(result))
        if (isTerminalState(result.state)) {
          setIsExecutingRef.current(false)
          exitRunningModeRef.current()
          if (result.state === "SUCCESS") {
            toast.success("执行完成")
          } else if (result.state === "FAILED") {
            toast.error("执行失败")
          } else if (result.state === "WARNING") {
            toast.warning("执行完成（有警告）")
          } else if (result.state === "KILLED") {
            toast.warning("执行已终止")
          } else if (result.state === "CANCELLED") {
            toast.info("执行已取消")
          }
          return
        }
        pollTimerRef.current = setTimeout(tick, 3000)
      }).catch(() => {
        if (isMounted) pollTimerRef.current = setTimeout(tick, 3000)
      })
    }
    pollTimerRef.current = setTimeout(tick, 3000)

    return () => {
      isMounted = false
      clearTimeout(pollTimerRef.current)
    }
  }, [currentExecution?.id, currentExecution?.state, isExecuting])
}
