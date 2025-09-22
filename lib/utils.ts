import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import {
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
  differenceInWeeks,
  differenceInMonths,
  differenceInYears,
} from 'date-fns';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();

  const minutes = differenceInMinutes(now, date);
  if (minutes < 1) return '1분 전';
  if (minutes < 60) return `${minutes}분 전`;

  const hours = differenceInHours(now, date);
  if (hours < 24) return `${hours}시간 전`;

  const days = differenceInDays(now, date);
  if (days < 7) return `${days}일 전`;

  const weeks = differenceInWeeks(now, date);
  if (weeks < 5) return `${weeks}주 전`;

  const months = differenceInMonths(now, date);
  if (months < 12) return `${months}달 전`;

  const years = differenceInYears(now, date);
  return `${years}년 전`;
}
