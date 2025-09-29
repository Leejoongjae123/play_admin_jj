import { CharacterFilter } from '@/components/common';

export default function WriterCharacterFilterSection() {
  return (
    <section className="flex flex-col gap-5 py-8 lg:py-10">
      <span className="font-serif text-xl font-bold text-gray-1 lg:text-[28px]">작가</span>
      <CharacterFilter />
    </section>
  );
}
