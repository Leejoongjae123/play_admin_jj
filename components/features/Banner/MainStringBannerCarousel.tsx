'use client';

import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import AutoScroll from 'embla-carousel-auto-scroll';

export default function MainStringBannerCarousel() {
  return (
    <Carousel
      className="relative w-full bg-primary"
      opts={{
        loop: true,
        watchDrag: false,
      }}
      plugins={[
        AutoScroll({
          speed: 1,
        }),
      ]}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, i) => (
          <CarouselItem key={`text-banner-${i}`} className="relative basis-auto pl-4">
            <Image
              src="/images/main-string-banner.webp"
              alt="Main String Banner"
              width={976}
              height={44}
              className="h-[44px] w-full object-contain lg:h-[76px]"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
