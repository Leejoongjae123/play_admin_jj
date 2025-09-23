'use client';

import { useSearchParams } from 'next/navigation';
import { PlayViewToggle, PlayAlbumList } from '../components';
import { PlayView } from '../types';
import { Play } from '@/models/play';

interface PlaySectionProps {
  playList: Play[];
}

export default function PlaySection({ playList }: PlaySectionProps) {
  const searchParams = useSearchParams();
  const view = (searchParams.get('view') as PlayView) || 'album';

  return (
    <section className="flex w-full flex-1 flex-col gap-5">
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-gray-1">희곡</span>
        <div className="flex items-center gap-5">
          <span className="text-lg font-semibold text-orange-2">보기 방식</span>
          <PlayViewToggle view={view} />
        </div>
      </div>

      <PlayAlbumList playList={playList} />
    </section>
  );
}
