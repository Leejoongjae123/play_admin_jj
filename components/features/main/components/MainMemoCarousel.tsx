'use client';

import { useMemo } from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { MemoPreviewCard } from '@/components/common/Card';
import { DummyMemos } from '@/models/memo';
import { useBreakpoint } from '@/hooks';
import AutoScroll from 'embla-carousel-auto-scroll';

export default function MainMemoCarousel() {
  const breakpoint = useBreakpoint();

  const carouselPlugins = useMemo(() => {
    if (breakpoint === 'lg' || breakpoint === 'xl' || breakpoint === '2xl') {
      return [
        AutoScroll({
          speed: 1,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ];
    } else {
      return [];
    }
  }, [breakpoint]);

  return (
    <Carousel
      opts={{
        align: 'center',
        loop: true,
      }}
      plugins={carouselPlugins}
      className="absolute -top-[87px] mx-auto w-full"
    >
      <CarouselContent className="-ml-5">
        {DummyMemos.map((memo) => (
          <CarouselItem key={memo.id} className="mb-1 basis-auto pl-5">
            <MemoPreviewCard
              memo={memo}
              className="shadow-[-4px_4px_4px_0_rgba(172,121,58,0.10)]"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
