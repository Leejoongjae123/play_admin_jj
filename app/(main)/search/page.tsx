import {
  MainSearchResultSection,
  MainSearchResultPlaySection,
  MainSearchResultWriterSection,
  MainSearchResultProgramSection,
} from '@/components/features/main/sections';
import { DummyPlays } from '@/models/play';
import { DummyWriters } from '@/models/writer';
import { DummyPrograms } from '@/models/program';

interface MainSearchPageSearchParams {
  keyword: string;
}

interface MainSearchPageProps {
  searchParams: Promise<MainSearchPageSearchParams>;
}

export default async function MainSearchPage({ searchParams }: MainSearchPageProps) {
  const { keyword } = await searchParams;

  return (
    <section className="flex w-full flex-col bg-background px-[8vw]">
      <MainSearchResultSection keyword={keyword} />

      <div className="flex flex-col gap-[60px] lg:gap-20">
        <MainSearchResultPlaySection plays={DummyPlays} />
        <MainSearchResultWriterSection writers={DummyWriters} />
        <MainSearchResultProgramSection programs={DummyPrograms} />
      </div>
    </section>
  );
}
