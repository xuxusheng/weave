import {
  differenceInSeconds,
  differenceInMinutes,
  differenceInHours,
  isWithinInterval,
  subDays,
  subHours,
  formatDistanceToNow,
} from "date-fns";

export function formatExecutionDuration(startDate: string | Date, endDate: string | Date): string {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const seconds = differenceInSeconds(end, start);

  if (seconds < 60) return `${seconds}s`;

  const minutes = differenceInMinutes(end, start);
  if (minutes < 60) return `${minutes}m ${seconds % 60}s`;

  const hours = differenceInHours(end, start);
  return `${hours}h ${minutes % 60}m`;
}

export function isWithinTimeRange(date: Date | string, range: string): boolean {
  const d = new Date(date);
  const now = new Date();

  const rangeMap: Record<string, Date> = {
    "24h": subHours(now, 24),
    "7d": subDays(now, 7),
    "30d": subDays(now, 30),
  };

  const startDate = rangeMap[range];
  if (!startDate) return true;

  return isWithinInterval(d, { start: startDate, end: now });
}

export function formatRelativeTime(date: Date | string): string {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}

export function formatDateTime(date: Date | string): string {
  return new Date(date).toLocaleString();
}
