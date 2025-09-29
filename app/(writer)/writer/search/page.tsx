import {
  WriterCharacterFilterSection,
  WriterSearchResultSection,
} from '@/components/features/writer/sections';

interface WriterSearchPageSearchParams {
  keyword: string;
}

interface WriterSearchPageProps {
  searchParams: Promise<WriterSearchPageSearchParams>;
}

export default async function WriterSearchPage({ searchParams }: WriterSearchPageProps) {
  const { keyword } = await searchParams;

  return (
    <section className="flex w-full flex-1 flex-col bg-background px-[8vw]">
      <WriterSearchResultSection keyword={keyword} />
      <WriterCharacterFilterSection />
    </section>
  );
}
