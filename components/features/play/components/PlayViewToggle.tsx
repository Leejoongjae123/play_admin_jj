import Link from 'next/link';
import { AlbumView, TextView } from '@/components/icons';
import { cn } from '@/lib/utils';
import { PlayView } from '../types';

interface PlayViewToggleProps {
  view: PlayView;
}

export default function PlayViewToggle({ view }: PlayViewToggleProps) {
  const handleAlbumViewClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (view !== 'text') {
      e.preventDefault();
    }
  };

  const handleTextViewClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (view !== 'album') {
      e.preventDefault();
    }
  };

  return (
    <div className="flex items-center gap-2.5">
      <Link href="/play/search?view=album" onClick={handleAlbumViewClick}>
        <AlbumView className={cn(view === 'text' ? 'text-orange-2' : 'text-primary')} />
      </Link>
      <Link href="/play/search?view=text" onClick={handleTextViewClick}>
        <TextView className={cn(view === 'text' ? 'text-primary' : 'text-orange-2')} />
      </Link>
    </div>
  );
}
