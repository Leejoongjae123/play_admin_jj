import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Play } from '@/models/play';
import { Card, CardContent } from '@/components/ui/card';

interface PlayPreviewCardProps {
  play: Play;
}

export default function PlayPreviewCard({ play }: PlayPreviewCardProps) {
  const { title, author, keywords, line1, id } = play;

  return (
    <Card>
      <CardContent className="flex flex-col gap-4 p-0">
        {/* Main card */}
        <Link
          href={`/play/${id}`}
          className="group flex aspect-[220/300] h-full w-full cursor-pointer justify-between rounded-[3px] bg-primary p-4 transition-all duration-500 ease-in-out hover:bg-[#EDE0DE] lg:p-7"
        >
          <div className="flex aspect-[220/300] flex-col gap-2 group-hover:hidden">
            <span className="font-serif text-xl font-bold text-white">{title}</span>
            <div className="font-semibold text-orange-1">{author}</div>
          </div>
          <div className="hidden aspect-[220/300] overflow-y-auto group-hover:flex">
            <p className="font-serif text-sm font-bold text-primary sm:text-base xl:text-xl">
              {line1}
            </p>
          </div>
        </Link>

        {/* keywords */}
        <div className="flex flex-wrap gap-1.5">
          {keywords.map((keyword, index) => (
            <Badge key={`${keyword}-${index}`} variant="outline" size="md">
              {keyword}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
