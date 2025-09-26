'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { BookmarkButton, ShareButton } from '@/components/common/Button';
import { Play } from '@/models/play';

interface PlayDetailHeaderProps {
  play: Play;
}

export default function PlayDetailHeader({ play }: PlayDetailHeaderProps) {
  const handleBookmarkButtonClick = () => {
    console.log('bookmark button clicked');
  };

  const handleShareButtonClick = () => {
    console.log('share button clicked');
  };

  return (
    <div className="flex w-full flex-col gap-3 border-b border-primary px-[8vw] pb-5 lg:gap-5">
      <h1 className="flex font-serif text-2xl font-bold leading-[28px] text-gray-1 lg:text-[48px] lg:leading-[62.4px]">
        {play.title}
      </h1>
      <div className="flex items-center justify-between">
        <Link href={`/writer/${play.writer.id}`} className="flex items-center gap-1.5">
          <span className="font-serif text-sm font-bold leading-[18px] text-primary lg:text-[28px] lg:leading-[36.4px]">
            {play.writer.writerName}
          </span>
          <ChevronRight className="h-5 w-5 font-normal text-primary lg:h-9 lg:w-9" />
        </Link>

        <div className="flex items-center gap-3">
          <BookmarkButton onClick={handleBookmarkButtonClick} />
          <ShareButton onClick={handleShareButtonClick} />
        </div>
      </div>
    </div>
  );
}
