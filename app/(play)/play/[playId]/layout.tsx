import { PlayDetailHeader } from '@/components/features/play';
import { DummyPlays } from '@/models/play';

interface PlayDetailLayoutParams {
  playId: string;
}

interface PlayDetailLayoutProps {
  params: Promise<PlayDetailLayoutParams>;
  children: React.ReactNode;
}

export default async function PlayDetailLayout({ params, children }: PlayDetailLayoutProps) {
  const { playId } = await params;

  // TODO: API 연동
  // const play = await getPlay(playId);
  const play = DummyPlays.find((play) => play.id === playId);

  if (!play) {
    // TODO: Not Found
    return;
  }

  return (
    <section className="flex w-full flex-1 flex-col pb-[60px] pt-11 lg:pt-[80px]">
      <PlayDetailHeader play={play} />
      {children}
    </section>
  );
}
