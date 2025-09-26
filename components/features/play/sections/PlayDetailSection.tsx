'use client';

import Link from 'next/link';
import { Play } from '@/models/play';
import { ChevronRight } from 'lucide-react';
import { BookmarkButton, ShareButton } from '@/components/common/Button';
import { Badge } from '@/components/ui/badge';
import { PublicStatusLabel } from '@/models/play';

interface PlayDetailSectionProps {
  play: Play;
}

export default function PlayDetailSection({ play }: PlayDetailSectionProps) {
  const handleBookmarkButtonClick = () => {
    console.log('bookmark button clicked');
  };

  const handleShareButtonClick = () => {
    console.log('share button clicked');
  };

  return (
    <section className="flex w-full flex-col pb-10">
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

      <div className="flex justify-center px-[8vw] pt-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:justify-between">
          <div className="flex flex-col gap-2.5 lg:basis-[58%]">
            <h2 className="text-lg font-semibold leading-[20px] text-gray-1 lg:text-[20px]">
              대사
            </h2>

            <p className="whitespace-pre-line font-serif text-2xl font-bold leading-[32px] text-primary lg:text-[32px] lg:leading-[44px]">
              {play.line1}
            </p>
            <p className="whitespace-pre-line font-serif text-2xl font-bold leading-[32px] text-red-1 lg:text-[32px] lg:leading-[44px]">
              {play.line2}
            </p>
            <p className="whitespace-pre-line font-serif text-2xl font-bold leading-[32px] text-red-1 lg:text-[32px] lg:leading-[44px]">
              {play.line3}
            </p>
          </div>

          <div className="flex flex-1 flex-col gap-10">
            <div className="flex justify-between">
              <div className="flex basis-1/2 flex-col gap-2.5">
                <h2 className="text-lg font-semibold text-gray-1 lg:text-[20px]">연도</h2>
                <span className="text-gray-2">{play.year}</span>
              </div>
              <div className="flex basis-1/2 flex-col gap-2.5">
                <h2 className="text-lg font-semibold text-gray-1 lg:text-[20px]">나라</h2>
                <span className="text-gray-2">{play.country}</span>
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <h2 className="text-lg font-semibold text-gray-1 lg:text-[20px]">키워드</h2>
              <div className="flex flex-wrap gap-2">
                {play.keywords.map((keyword) => (
                  <Badge key={keyword} size="md" variant="light" className="rounded-full">
                    {keyword}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <h2 className="text-lg font-semibold text-gray-1 lg:text-[20px]">줄거리</h2>
              <p className="whitespace-pre-line leading-[24px] text-gray-2">{play.summary}</p>
            </div>

            <div className="flex justify-between">
              <div className="flex basis-1/2 flex-col gap-2.5">
                <h2 className="text-lg font-semibold text-gray-1 lg:text-[20px]">등장인물 수</h2>
                <span className="text-gray-2">{`여 ${play.femaleCharacterCount} / 남 ${play.maleCharacterCount}`}</span>
              </div>
              <div className="flex basis-1/2 flex-col gap-2.5">
                <h2 className="text-lg font-semibold text-gray-1 lg:text-[20px]">등장인물</h2>
                <p className="break-keep text-gray-2">{play.characterList?.join(', ')}</p>
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <h2 className="text-lg font-semibold text-gray-1 lg:text-[20px]">출간</h2>
              <p className="whitespace-pre-line leading-[24px] text-gray-2">
                {play.publicStatus ? PublicStatusLabel[play.publicStatus] : '-'}
              </p>
            </div>

            {play.publicHistory && (
              <div className="flex flex-col gap-2.5">
                <h2 className="text-lg font-semibold text-gray-1 lg:text-[20px]">출간내역</h2>
                <p className="whitespace-pre-line leading-[24px] text-gray-2">
                  {play.publicHistory}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
