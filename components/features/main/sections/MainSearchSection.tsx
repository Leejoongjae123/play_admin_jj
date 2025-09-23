import Image from 'next/image';
import { SearchInput } from '@/components/common';

const hashTags = ['#로맨스', '#고전주의', '#신화', '#비극'];

export default function MainSearchSection() {
  return (
    <section className="flex w-full justify-center bg-[#F8F1EA]">
      <div className="flex w-[376px] flex-col items-center justify-end gap-8 px-5 pb-[100px] pt-11 lg:w-[720px] lg:px-0 lg:pt-[72px]">
        {/* Play Icon Container */}
        <div className="relative h-20 w-20 lg:h-[112px] lg:w-[112px]">
          <Image src="/images/play.webp" alt="Play icon" className="object-contain" priority fill />
        </div>

        {/* Content Container: Title and search input */}
        <div className="flex w-full flex-col items-center gap-5">
          {/* Title */}
          <h1 className="w-full text-center font-pretendard text-2xl font-bold text-primary lg:text-[32px]">
            오늘 찾아볼 희곡은 무엇인가요?
          </h1>

          {/* Search Input */}
          <SearchInput
            className="lg:h-16 lg:text-xl"
            wrapperClassName="bg-transparent"
            placeholder={hashTags.join(' ')}
          />
        </div>
      </div>
    </section>
  );
}
