import { MemoList } from '@/components/features/memo';
import { Memo } from '@/models/memo';

interface PlayDetailMemoListSectionProps {
  playMemoList: Memo[];
}

export default function PlayDetailMemoListSection({
  playMemoList,
}: PlayDetailMemoListSectionProps) {
  return (
    <section className="flex w-full flex-col justify-center gap-5 px-[8vw] pt-10">
      <div className="mx-auto flex max-w-[793px] flex-col justify-center gap-7">
        <div className="flex items-center gap-1.5">
          <span className="font-serif text-xl font-bold text-gray-1 lg:text-[28px]">메모</span>
          <span className="font-serif text-xl font-bold text-orange-3 lg:text-[28px]">
            {playMemoList.length}
          </span>
        </div>

        <MemoList memoList={playMemoList} className="gap-6 lg:auto-rows-min lg:grid-cols-1" />
      </div>
    </section>
  );
}
