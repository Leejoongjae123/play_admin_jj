import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Program } from '@/models/program';

interface ProgramPreviewCardProps {
  program: Program;
}

export default function ProgramPreviewCard({ program }: ProgramPreviewCardProps) {
  const { id, title, description, thumbnailUrl } = program;

  return (
    <Card className="flex min-h-[270px] min-w-[335px] flex-1 flex-col gap-2.5">
      <Link href={`/program/${id}`} className="flex flex-1">
        <CardContent className="flex flex-1 flex-col justify-between gap-2 p-0">
          {/* Image section */}
          <div className="relative flex aspect-video flex-1 items-center justify-center overflow-hidden rounded-[4px]">
            {thumbnailUrl ? (
              <Image
                // FIXME: 추후 개선
                // src={thumbnailUrl}
                src={'/images/main-ad-banner-1.webp'}
                alt={title}
                fill
              />
            ) : (
              <div className="flex h-full w-full flex-1 items-center justify-center bg-gray-5">
                <span className="text-xl font-semibold text-primary">
                  *프로그램 이미지
                  <br />
                  (16:9 비율 버전)
                </span>
              </div>
            )}
          </div>

          {/* Content section */}
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-semibold text-gray-1 xl:text-xl">{title}</h3>
            <p className="line-clamp-3 text-gray-1">{description}</p>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
