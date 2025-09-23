import { SearchInput } from '@/components/common';
import { PlaySection } from '@/components/features/play';

export default function PlayPage() {
  return (
    <section className="flex w-full flex-1 flex-col gap-[60px] px-[8%] pt-10">
      <SearchInput />
      <PlaySection />
    </section>
  );
}
