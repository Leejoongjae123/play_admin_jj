'use client';

import { PlayPreviewCard, ViewMoreLinkButton } from '@/components/common';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { Play } from '@/models/play';
import { useMemo } from 'react';

interface MainSearchResultPlaySectionProps {
  plays: Play[];
}

export default function MainSearchResultPlaySection({ plays }: MainSearchResultPlaySectionProps) {
  const breakpoint = useBreakpoint();
  const filteredPlays = useMemo(() => {
    if (breakpoint === 'xl' || breakpoint === '2xl') return plays.slice(0, 5);
    else return plays;
  }, [breakpoint]);

  return (
    <section className="flex w-full flex-col gap-5 pt-1 lg:pt-1.5">
      <div className="flex items-center justify-between">
        <span className="font-serif text-xl font-bold text-gray-1">희곡</span>
        <ViewMoreLinkButton href="/play" />
      </div>

      <div className="grid grid-cols-2 gap-3 overflow-hidden md:grid-cols-3 xl:grid-cols-5">
        {filteredPlays.map((play) => (
          <PlayPreviewCard key={play.id} play={play} />
        ))}
      </div>
    </section>
  );
}
