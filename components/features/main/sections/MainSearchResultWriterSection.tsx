import { ViewMoreLinkButton } from '@/components/common/Button';
import { WriterPreviewCard } from '@/components/common/Card';
import { Writer } from '@/models/writer';

interface MainSearchResultWriterSectionProps {
  writers: Writer[];
}

export default function MainSearchResultWriterSection({
  writers,
}: MainSearchResultWriterSectionProps) {
  return (
    <section className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <span className="font-serif text-xl font-bold text-gray-1">작가</span>
        <ViewMoreLinkButton href="/writer" />
      </div>

      <div className="sm: grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
        {writers.map((writer) => (
          <WriterPreviewCard key={writer.id} writer={writer} />
        ))}
      </div>
    </section>
  );
}
