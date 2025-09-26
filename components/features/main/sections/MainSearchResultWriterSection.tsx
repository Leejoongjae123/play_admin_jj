'use client';

import { useMemo } from 'react';
import { ViewMoreLinkButton } from '@/components/common/Button';
import { WriterPreviewCard } from '@/components/features/writer';
import { Writer } from '@/models/writer';
import { useBreakpoint } from '@/hooks/useBreakpoint';

interface MainSearchResultWriterSectionProps {
  writers: Writer[];
}

export default function MainSearchResultWriterSection({
  writers,
}: MainSearchResultWriterSectionProps) {
  const breakpoint = useBreakpoint();
  const filteredWriters = useMemo(() => {
    if (breakpoint !== 'xl' && breakpoint !== '2xl') return writers.slice(0, 2);
    else return writers;
  }, [breakpoint]);

  return (
    <section className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <span className="font-serif text-xl font-bold text-gray-1 lg:text-[28px]">작가</span>
        <ViewMoreLinkButton href="/writer" />
      </div>

      <div className="sm: grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
        {filteredWriters.map((writer) => (
          <WriterPreviewCard key={writer.id} writer={writer} />
        ))}
      </div>
    </section>
  );
}
