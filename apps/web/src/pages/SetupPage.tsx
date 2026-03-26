import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "@tanstack/react-router";
import { trpc } from "@/lib/trpc";
import { useWorkflowStore } from "@/stores/workflow";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { toast } from "sonner";
import { Loader2, ChevronDown, ChevronUp, HelpCircle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { ParticlesBackground, getRandomPreset } from "@/components/ParticlesBackground";

const DRAFT_KEY = "weave-setup-draft";
const MAX_NAME_LENGTH = 64;
const MAX_KESTRA_LENGTH = 128;

function validateName(value: string): string | null {
  if (!value.trim()) return "请输入空间名称";
  if (value.length > MAX_NAME_LENGTH) return `名称不能超过 ${MAX_NAME_LENGTH} 个字符`;
  if (/[<>{}[\]\\/]/.test(value)) return "名称不能包含特殊字符 < > { } [ ] \\ /";
  return null;
}

function validateKestra(value: string): string | null {
  if (value && value.length > MAX_KESTRA_LENGTH)
    return `命名空间不能超过 ${MAX_KESTRA_LENGTH} 个字符`;
  if (value && !/^[a-zA-Z0-9._-]*$/.test(value))
    return "Kestra 命名空间只能包含字母、数字、点、下划线和连字符";
  return null;
}

export default function SetupPage() {
  const navigate = useNavigate();
  const setCurrentNamespace = useWorkflowStore((s) => s.setCurrentNamespace);
  const setHasNamespaces = useWorkflowStore((s) => s.setHasNamespaces);
  const hasNamespaces = useWorkflowStore((s) => s.hasNamespaces);

  useEffect(() => {
    if (hasNamespaces) {
      void navigate({ to: "/workflows" });
    }
  }, [hasNamespaces, navigate]);

  const [name, setName] = useState(() => {
    try {
      const saved = localStorage.getItem(DRAFT_KEY);
      if (saved) {
        const draft = JSON.parse(saved);
        return draft.name || "";
      }
    } catch {}
    return "";
  });
  const [kestraNamespace, setKestraNamespace] = useState(() => {
    try {
      const saved = localStorage.getItem(DRAFT_KEY);
      if (saved) {
        const draft = JSON.parse(saved);
        return draft.kestraNamespace || "";
      }
    } catch {}
    return "";
  });
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [particlePreset] = useState(() => getRandomPreset());

  const [nameError, setNameError] = useState<string | null>(null);
  const [kestraError, setKestraError] = useState<string | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(DRAFT_KEY, JSON.stringify({ name, kestraNamespace }));
    } catch {}
  }, [name, kestraNamespace]);

  useEffect(() => {
    if (hasInteracted) {
      setNameError(validateName(name));
      setKestraError(validateKestra(kestraNamespace));
    }
  }, [name, kestraNamespace, hasInteracted]);

  const createNamespace = trpc.namespace.create.useMutation({
    onSuccess: (result) => {
      setCurrentNamespace(result.id);
      setHasNamespaces(true);
      localStorage.removeItem(DRAFT_KEY);
      toast.success("项目空间创建成功");
      void navigate({ to: "/workflows" });
    },
    onError: (err) => {
      toast.error(
        <div className="flex items-center gap-2">
          <AlertCircle className="size-4 text-destructive" />
          <span>{err.message || "创建失败"}</span>
        </div>,
        {
          action: {
            label: "重试",
            onClick: () => handleSubmit(),
          },
        },
      );
    },
  });

  const handleSubmit = useCallback(
    (e?: React.FormEvent) => {
      e?.preventDefault();
      setHasInteracted(true);

      const nameErr = validateName(name);
      const kestraErr = validateKestra(kestraNamespace);

      setNameError(nameErr);
      setKestraError(kestraErr);

      if (nameErr || kestraErr) return;

      createNamespace.mutate({
        name: name.trim(),
        kestraNamespace: kestraNamespace.trim() || name.trim(),
      });
    },
    [name, kestraNamespace, createNamespace],
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault();
        handleSubmit();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleSubmit]);

  const isSubmitDisabled =
    !name.trim() || createNamespace.isPending || !!nameError || !!kestraError;

  const isMac =
    typeof navigator !== "undefined" && /Mac|iPhone|iPad|iPod/.test(navigator.userAgent);
  const modifierKey = isMac ? "⌘" : "Ctrl";

  return (
    <TooltipProvider delay={300}>
      <div
        className="relative flex min-h-screen items-center justify-center bg-gradient-to-b from-background to-muted px-6"
        role="main"
      >
        <ParticlesBackground
          preset={particlePreset}
          className="absolute inset-0 z-0 pointer-events-none"
        />

        <div className="relative z-10 w-full max-w-md space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-primary/10 p-2 ring-1 ring-primary/20 transition-all duration-300 hover:ring-primary/40 hover:shadow-lg hover:shadow-primary/10">
                <img src="/logo.png" alt="Weave Logo" className="size-12" width={48} height={48} />
              </div>
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-3xl font-bold text-transparent">
                Weave
              </span>
            </div>
            <p className="text-sm text-muted-foreground">可视化工作流编排平台</p>
          </div>

          <div className="mx-auto flex items-center gap-2" aria-hidden="true">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-border" />
            <div className="size-1.5 rounded-full bg-border" />
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-border" />
          </div>

          <div className="rounded-xl border bg-card/50 p-6 sm:p-8 shadow-lg backdrop-blur-sm transition-shadow duration-300 hover:shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6" aria-label="创建项目空间表单">
              <div className="space-y-2 text-center">
                <h1 className="text-lg font-semibold tracking-tight">创建您的第一个项目空间</h1>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  项目空间是组织和管理团队工作流的地方。
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-1">
                    <label htmlFor="ns-name" className="text-sm font-medium">
                      空间名称
                    </label>
                    <Tooltip>
                      <TooltipTrigger
                        className="text-muted-foreground hover:text-foreground transition-colors cursor-help"
                        aria-label="空间名称帮助"
                      >
                        <HelpCircle className="size-3.5" />
                      </TooltipTrigger>
                      <TooltipContent side="right" className="max-w-64">
                        <p>给项目空间取一个有意义的名称，比如团队名或项目名。</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <div className="relative">
                    <Input
                      id="ns-name"
                      placeholder="例如：数据团队"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (!hasInteracted) setHasInteracted(true);
                      }}
                      disabled={createNamespace.isPending}
                      autoFocus
                      maxLength={MAX_NAME_LENGTH}
                      aria-invalid={!!nameError}
                      aria-describedby={nameError ? "ns-name-error" : undefined}
                      className={cn(
                        "transition-all duration-200",
                        "focus-visible:ring-2 focus-visible:ring-primary/40",
                        "hover:border-primary/50",
                        nameError && "border-destructive focus-visible:ring-destructive/40",
                      )}
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
                      {name.length}/{MAX_NAME_LENGTH}
                    </span>
                  </div>
                  {nameError && (
                    <p
                      id="ns-name-error"
                      className="text-xs text-destructive flex items-center gap-1 animate-in fade-in duration-200"
                      role="alert"
                    >
                      <AlertCircle className="size-3" />
                      {nameError}
                    </p>
                  )}
                </div>

                <Collapsible open={showAdvanced} onOpenChange={setShowAdvanced}>
                  <CollapsibleTrigger
                    className="flex items-center gap-1 rounded-md px-2 py-1 text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                    aria-expanded={showAdvanced}
                    aria-controls="advanced-settings"
                  >
                    {showAdvanced ? (
                      <ChevronUp className="size-4 transition-transform duration-200" />
                    ) : (
                      <ChevronDown className="size-4 transition-transform duration-200" />
                    )}
                    高级设置
                  </CollapsibleTrigger>
                  <CollapsibleContent id="advanced-settings" className="pt-3">
                    <div className="space-y-2">
                      <div className="flex items-center gap-1">
                        <label htmlFor="kestra-ns" className="text-sm font-medium">
                          Kestra 命名空间
                        </label>
                        <Tooltip>
                          <TooltipTrigger
                            className="text-muted-foreground hover:text-foreground transition-colors cursor-help"
                            aria-label="Kestra 命名空间帮助"
                          >
                            <HelpCircle className="size-3.5" />
                          </TooltipTrigger>
                          <TooltipContent side="right" className="max-w-64">
                            <p>Kestra 是工作流引擎，这个命名空间对应 Kestra 中的工作流分组。</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                      <div className="relative">
                        <Input
                          id="kestra-ns"
                          placeholder="留空则自动使用空间名称"
                          value={kestraNamespace}
                          onChange={(e) => {
                            setKestraNamespace(e.target.value);
                            if (!hasInteracted) setHasInteracted(true);
                          }}
                          disabled={createNamespace.isPending}
                          maxLength={MAX_KESTRA_LENGTH}
                          aria-invalid={!!kestraError}
                          aria-describedby={kestraError ? "kestra-ns-error" : "kestra-ns-hint"}
                          className={cn(
                            "transition-all duration-200",
                            "focus-visible:ring-2 focus-visible:ring-primary/40",
                            "hover:border-primary/50",
                            kestraError && "border-destructive focus-visible:ring-destructive/40",
                          )}
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
                          {kestraNamespace.length}/{MAX_KESTRA_LENGTH}
                        </span>
                      </div>
                      {kestraError ? (
                        <p
                          id="kestra-ns-error"
                          className="text-xs text-destructive flex items-center gap-1 animate-in fade-in duration-200"
                          role="alert"
                        >
                          <AlertCircle className="size-3" />
                          {kestraError}
                        </p>
                      ) : (
                        <p id="kestra-ns-hint" className="text-xs text-muted-foreground">
                          支持字母、数字、点、下划线和连字符
                        </p>
                      )}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>

              <div className="space-y-3">
                <Button
                  type="submit"
                  className={cn(
                    "w-full bg-gradient-to-r from-primary to-primary/80",
                    "shadow-md transition-all duration-200",
                    "hover:shadow-lg hover:brightness-110 hover:scale-[1.02]",
                    "active:scale-[0.98]",
                    "disabled:hover:scale-100 disabled:hover:shadow-md",
                  )}
                  disabled={isSubmitDisabled}
                  aria-label={
                    createNamespace.isPending ? "正在创建项目空间" : "开始使用并创建项目空间"
                  }
                >
                  {createNamespace.isPending ? (
                    <>
                      <Loader2 className="mr-2 size-4 animate-spin" aria-hidden="true" />
                      <span>创建中…</span>
                    </>
                  ) : (
                    "创建并开始"
                  )}
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  按{" "}
                  <kbd className="rounded border bg-muted px-1.5 py-0.5 font-mono text-[10px]">
                    {modifierKey}
                  </kbd>{" "}
                  +{" "}
                  <kbd className="rounded border bg-muted px-1.5 py-0.5 font-mono text-[10px]">
                    Enter
                  </kbd>{" "}
                  快捷提交
                </p>
              </div>
            </form>
          </div>

          <div className="sr-only" role="status" aria-live="polite" aria-atomic="true">
            {createNamespace.isPending && "正在创建项目空间..."}
            {createNamespace.isError && `创建失败: ${createNamespace.error?.message}`}
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
