'use client';

import { cn } from '@/lib/utils';

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  className?: string;
}

export default function Toggle({ checked, onChange, label, className }: ToggleProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <button
        type="button"
        onClick={() => onChange(!checked)}
        className={cn(
          'relative flex h-6 w-[46px] items-center rounded-full transition-colors',
          checked ? 'bg-primary' : 'bg-gray-4',
        )}
      >
        <div
          className={cn(
            'h-[18px] w-[18px] rounded-full bg-white transition-transform',
            checked ? 'translate-x-6' : 'translate-x-[3px]',
          )}
        />
      </button>
      {label && (
        <span
          className={cn(
            'font-pretendard text-sm font-bold',
            checked ? 'text-primary' : 'text-gray-4',
          )}
        >
          {label}
        </span>
      )}
    </div>
  );
}
