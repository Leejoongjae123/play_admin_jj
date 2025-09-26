'use client';

import { ViewMoreLinkButton } from '@/components/common';
import { MemoList } from '@/components/features/memo';
import { EntryForm } from '@/components/forms';
import { Memo } from '@/models/memo';

interface PlayDetailMemoSectionProps {
  playId: string;
  playMemoList: Memo[];
}

export default function PlayDetailMemoSection({
  playId,
  playMemoList,
}: PlayDetailMemoSectionProps) {
  const handleSubmit = () => {
    // TODO: 메모 submit 로직 구현
    console.log('submit');
  };

  return (
    <section className="flex w-full flex-col gap-5 px-[8vw]">
      {/* 헤더 */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="font-serif text-xl font-bold text-gray-1 lg:text-[28px]">메모</span>
          <span className="font-serif text-xl font-bold text-orange-3 lg:text-[28px]">
            {playMemoList.length}
          </span>
        </div>

        <ViewMoreLinkButton href={`/play/${playId}/memos`} />
      </div>

      {/* 메모 작성 폼 */}
      <EntryForm submitButtonText="메모 남기기" onSubmit={handleSubmit} />

      {/* 메모 리스트 */}
      <MemoList memoList={playMemoList} />
    </section>
  );
}
