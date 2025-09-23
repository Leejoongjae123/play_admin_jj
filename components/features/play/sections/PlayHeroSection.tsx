import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function PlayHeroSection() {
  return (
    <section className="relative -mx-[8vw] flex aspect-[375/262] w-screen max-w-[1920px] items-center justify-center py-[60px] md:aspect-[1440/318] md:py-[80px]">
      <Image src="/images/play-hero.webp" alt="Play Hero" fill className="object-cover" />

      <div className="z-10 flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center justify-center gap-2.5">
          <h1 className="font-serif text-xl font-bold text-white md:text-[28px]">희곡 등록하기</h1>
          <p className="text-xs font-semibold text-white md:text-xl">
            희곡 DB에 새로운 작품을 등록하고 싶다면?
          </p>
        </div>

        <Button size="sm" className="text-lg font-semibold">
          희곡 등록하기
        </Button>
      </div>
    </section>
  );
}
