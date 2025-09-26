import { ViewMoreLinkButton } from '@/components/common';
import { MemoList } from '@/components/features/memo';
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

      <MemoList memoList={playMemoList} />
    </section>
  );
}
