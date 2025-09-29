import { Suspense } from 'react';
import { SearchInput } from '@/components/common';
import { WriterCharacterFilterSection, WriterMemoListSection } from '@/components/features/writer';
import { DummyMemos } from '@/models/memo';

export default function WriterPage() {
  const DummyPlayMemoList = DummyMemos.filter((memo) => memo.type === 'writer').slice(0, 6);

  return (
    <section className="flex w-full flex-1 flex-col px-[8vw] pb-[60px] pt-10">
      <Suspense fallback={<div />}>
        <SearchInput searchPath="/writer/search" />
      </Suspense>

      <WriterCharacterFilterSection />
      <WriterMemoListSection memoList={DummyPlayMemoList} />
    </section>
  );
}
