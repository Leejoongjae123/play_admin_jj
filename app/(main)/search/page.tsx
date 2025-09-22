import { MainSearchResultSection } from '@/components/features/main/sections';

interface MainSearchPageProps {
  searchParams: {
    keyword: string;
  };
}

export default async function MainSearchPage({ searchParams }: MainSearchPageProps) {
  const { keyword } = await searchParams;

  return (
    <section className="flex w-full bg-background px-5 lg:px-[110px]">
      <MainSearchResultSection keyword={keyword} />
    </section>
  );
}
