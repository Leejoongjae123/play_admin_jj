import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Writer } from '@/models/writer';
import { formatRelativeTime } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface WriterPreviewCardProps {
  writer: Writer;
}

export default function WriterPreviewCard({ writer }: WriterPreviewCardProps) {
  const { id, name, createdAt, description, keyword } = writer;

  return (
    <Link href={`/writer/${id}`} className="h-full w-full">
      <Card className="flex h-full w-full flex-col rounded-lg bg-white">
        <CardContent className="flex flex-1 flex-col p-8">
          <div className="flex flex-1 flex-col gap-5">
            {/* Header section with username and date */}
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-3">
                <span className="line-clamp-1 text-sm font-medium text-gray-1 md:text-xl">
                  {name}
                </span>
              </div>
              <span className="min-w-[40px] text-sm font-semibold text-gray-4 md:text-base">
                {formatRelativeTime(createdAt)}
              </span>
            </div>

            {/* Description text */}
            <p className="line-clamp-6 text-gray-2">{description}</p>
          </div>

          {/* Tags section */}
          <div className="mt-4 flex items-center gap-2">
            {keyword.map((tag, index) => (
              <Badge
                key={`${tag}-${index}`}
                variant="light"
                size="md"
                className="rounded-full px-3"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
