import { MemoList } from '@/components/features/memo';
import { Memo } from '@/models/memo';

interface WriterMemoListSectionProps {
  memoList: Memo[];
}

export default function WriterMemoListSection({ memoList }: WriterMemoListSectionProps) {
  return (
    <section className="flex w-full flex-col gap-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="font-serif text-xl font-bold text-gray-1 lg:text-[28px]">
            작가에게 남긴 메모
          </span>
          <span className="font-serif text-xl font-bold text-orange-3 lg:text-[28px]">
            {memoList.length}
          </span>
        </div>
      </div>

      <MemoList memoList={memoList} />
    </section>
  );
}
