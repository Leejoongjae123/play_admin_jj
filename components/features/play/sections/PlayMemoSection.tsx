import { MemoPreviewCard, ViewMoreLinkButton } from '@/components/common';
import { Memo } from '@/models/memo';

interface PlayMemoSectionProps {
  playMemoList: Memo[];
}

export default function PlayMemoSection({ playMemoList }: PlayMemoSectionProps) {
  return (
    <section className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <span className="font-serif text-xl font-bold text-gray-1 lg:text-[28px]">희곡 메모</span>
        <ViewMoreLinkButton href="/play/memos" />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {playMemoList.map((memo) => (
          <MemoPreviewCard
            key={memo.id}
            memo={memo}
            className="flex aspect-[389/380] h-full w-full lg:h-full lg:w-full"
          />
        ))}
      </div>
    </section>
  );
}
