'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { BannerPrevious, BannerNext } from '@/components/icons';

export default function MainBannerCarousel() {
  const banners = [
    {
      id: 1,
      src: '/images/main-banner-1.webp',
    },
    {
      id: 2,
      src: '/images/main-banner-1.webp',
    },
    {
      id: 3,
      src: '/images/main-banner-1.webp',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(1);

  return (
    <Carousel
      className="w-full"
      opts={{
        loop: true,
        watchDrag: false,
      }}
      plugins={[Autoplay({ delay: 4000 })]}
      setApi={(api) => {
        if (!api) return;

        api.on('select', () => {
          const index = api.selectedScrollSnap();
          setCurrentIndex(index + 1);
        });
      }}
    >
      <CarouselContent>
        {banners.map((banner) => (
          <CarouselItem key={banner.id} className="pl-0">
            <div className="aspect-video h-full min-h-[208px] w-full min-w-[375px]">
              <Image
                src={banner.src}
                alt={`Main Banner ${banner.id}`}
                width={375}
                height={208}
                className="h-full w-full object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-[calc(100%+10px)] lg:-translate-y-[calc(100%+20px)]">
        <div className="relative flex h-[18px] w-[88px] items-center justify-center gap-2.5 lg:h-[34px] lg:w-[136px]">
          <CarouselPrevious
            variant="ghost"
            className="left-0 top-0 size-[18px] translate-y-0 bg-black p-0.5 hover:bg-black lg:size-[34px] lg:p-2"
          >
            <BannerPrevious color="#565656" className="size-3 lg:size-6" />
          </CarouselPrevious>

          <div className="flex gap-1">
            <span className="text-sm text-white lg:text-xl">{currentIndex}</span>
            <span className="text-sm text-primary lg:text-xl">/</span>
            <span className="text-sm text-primary lg:text-xl">{banners.length}</span>
          </div>

          <CarouselNext
            variant="ghost"
            className="right-0 top-0 size-[18px] translate-y-0 bg-black p-0.5 hover:bg-black lg:size-[34px] lg:p-2"
          >
            <BannerNext color="#565656" className="size-3 lg:size-6" />
          </CarouselNext>
        </div>
      </div>
    </Carousel>
  );
}
