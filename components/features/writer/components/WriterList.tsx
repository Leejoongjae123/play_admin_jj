import { WriterPreviewCard } from '@/components/features/writer/components';
import { Writer } from '@/models/writer';
import { cn } from '@/lib/utils';

interface WriterListProps {
  writerList: Writer[];
  className?: string;
}

export default function WriterList({ writerList, className }: WriterListProps) {
  return (
    <div className={cn('grid grid-cols-1 gap-4 lg:auto-rows-[320px] lg:grid-cols-3', className)}>
      {writerList.map((writer) => (
        <WriterPreviewCard key={writer.id} writer={writer} />
      ))}
    </div>
  );
}
