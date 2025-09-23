import { Plus } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ShowMoreButtonProps {
  type?: 'pc' | 'mobile';
  className?: string;
  onClick?: () => void;
}

export default function ShowMoreButton({ type = 'pc', className, onClick }: ShowMoreButtonProps) {
  return type === 'mobile' ? (
    <Button
      variant="muted"
      className={cn(
        'flex h-full w-full cursor-pointer flex-col items-center gap-2.5 rounded-[3px]',
        className,
      )}
    >
      <Plus className="size-8 text-primary" />
      <span className="text-sm font-bold text-primary">더 불러오기</span>
    </Button>
  ) : (
    <Button variant="secondary" size="md" className={cn('cursor-pointer', className)}>
      <Plus className="size-8 text-primary" />
      <span className="text-lg font-semibold text-primary">더 불러오기</span>
    </Button>
  );
}
