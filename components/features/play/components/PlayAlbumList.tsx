import { PlayPreviewCard, ShowMoreButton } from '@/components/common';
import { Play } from '@/models/play';
import { Card, CardContent } from '@/components/ui/card';

interface PlayAlbumListProps {
  playList: Play[];
}

export default function PlayAlbumList({ playList }: PlayAlbumListProps) {
  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-6">
        {playList.map((play) => (
          <PlayPreviewCard key={play.id} play={play} />
        ))}

        <Card className="xl:hidden">
          <CardContent className="aspect-[220/300] p-0">
            <ShowMoreButton type="mobile" />
          </CardContent>
        </Card>
      </div>

      <div className="hidden justify-center xl:flex">
        <ShowMoreButton />
      </div>
    </div>
  );
}
