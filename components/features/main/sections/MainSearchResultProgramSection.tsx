import { ViewMoreLinkButton } from '@/components/common/Button';
import { ProgramPreviewCard } from '@/components/common/Card';
import { Program } from '@/models/program';

interface MainSearchResultProgramSectionProps {
  programs: Program[];
}

export default function MainSearchResultProgramSection({
  programs,
}: MainSearchResultProgramSectionProps) {
  return (
    <section className="mb-[60px] flex flex-col gap-5 lg:mb-20">
      <div className="flex items-center justify-between">
        <span className="font-serif text-xl font-bold text-gray-1 lg:text-[28px]">프로그램</span>
        <ViewMoreLinkButton href="/program" />
      </div>

      <div className="grid grid-cols-1 gap-4 md:gap-5 xl:grid-cols-3">
        {programs.map((program) => (
          <ProgramPreviewCard key={program.id} program={program} />
        ))}
      </div>
    </section>
  );
}
