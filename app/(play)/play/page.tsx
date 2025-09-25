import { Suspense } from 'react';
import { SearchInput } from '@/components/common';
import { PlaySection, PlayMemoSection, PlayHeroSection } from '@/components/features/play';
import { DummyPlays } from '@/models/play';
import { DummyMemos } from '@/models/memo';

export default async function PlayPage() {
  const DummyPlayMemoList = DummyMemos.filter((memo) => memo.type === 'play');

  return (
    <section className="flex w-full flex-1 flex-col gap-[60px] px-[8vw] pt-10">
      <Suspense fallback={<div />}>
        <SearchInput searchPath="/play/search" />
      </Suspense>

      <Suspense fallback={<div />}>
        <PlaySection playList={DummyPlays} />
      </Suspense>

      <PlayMemoSection playMemoList={DummyPlayMemoList} />
      <PlayHeroSection />
    </section>
  );
}
