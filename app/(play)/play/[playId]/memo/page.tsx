import { PlayDetailHeader } from '@/components/features/play';
import { DummyMemos } from '@/models/memo';
import { DummyPlays } from '@/models/play';

interface PlayDetailMemoParams {
  playId: string;
}

interface PlayDetailMemoProps {
  params: Promise<PlayDetailMemoParams>;
}

export default async function PlayDetailMemoPage({ params }: PlayDetailMemoProps) {
  const { playId } = await params;
  // TODO: API 연동
  // const play = await getPlay(playId);

  const play = DummyPlays.find((play) => play.id === playId);
  const playMemoList = DummyMemos.filter(
    (memo) => memo.type === 'play' && memo.play.id === playId,
  ).slice(0, 6);

  if (!play) {
    // TODO: Not Found
    return;
  }

  return (
    <section className="flex w-full flex-1 flex-col pb-[60px] pt-11 lg:pt-[80px]">
      <PlayDetailHeader play={play} />
      {/* <PlayDetailMemoListSection/> */}
    </section>
  );
}
