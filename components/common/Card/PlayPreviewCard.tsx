import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Play } from '@/models/play';
import { Card, CardContent } from '@/components/ui/card';

interface PlayPreviewCardProps {
  play: Play;
}

export default function PlayPreviewCard({ play }: PlayPreviewCardProps) {
  const { title, author, keyword, quote, id } = play;

  return (
    <Card className="flex min-h-[256px] min-w-[160px] flex-1">
      <CardContent className="flex flex-col gap-4 p-0">
        {/* Main card */}
        <Link
          href={`/play/${id}`}
          className="group flex h-[220px] cursor-pointer justify-between rounded-[3px] bg-primary px-4 py-8 transition-all duration-500 ease-in-out hover:bg-[#EDE0DE] hover:py-8 lg:px-7 lg:py-[60px] xl:h-[300px]"
        >
          <div className="flex flex-col gap-2 group-hover:hidden">
            <span className="font-serif text-xl font-bold text-white">{title}</span>
            <div className="font-semibold text-orange-1">{author}</div>
          </div>
          <div className="hidden overflow-y-auto group-hover:flex">
            <p className="line-clamp-8 xl:line-clamp-10 font-serif text-sm font-bold leading-5 text-primary xl:text-xl xl:leading-[24px]">
              {quote}
            </p>
          </div>
        </Link>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {keyword.map((tag, index) => (
            <Badge key={`${tag}-${index}`} variant="outline" size="md">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
