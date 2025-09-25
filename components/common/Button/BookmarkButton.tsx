import { Bookmark } from '@/components/icons';
import { Button } from '@/components/ui/button';

interface BookmarkButtonProps {
  onClick: () => void;
}

export default function BookmarkButton({ onClick }: BookmarkButtonProps) {
  return (
    <Button type="button" variant="muted" size="icon" className="lg:size-12" onClick={onClick}>
      <Bookmark className="size-5 text-primary lg:size-8" />
    </Button>
  );
}
