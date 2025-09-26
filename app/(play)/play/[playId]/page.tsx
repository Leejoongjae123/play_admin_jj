import { PlayDetailMemoSection, PlayDetailSection } from '@/components/features/play/sections';
import { DummyMemos } from '@/models/memo';
import { DummyPlays } from '@/models/play';

interface PlayDetailPageParams {
  playId: string;
}

interface PlayDetailPageProps {
  params: Promise<PlayDetailPageParams>;
}

export default async function PlayDetailPage({ params }: PlayDetailPageProps) {
  const { playId } = await params;
  // TODO: API 연동
  // const play = await getPlay(playId);
  // const playMemoList = await getPlayMemoList(playId);

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
      <PlayDetailSection play={play} />
      <PlayDetailMemoSection playId={playId} playMemoList={playMemoList} />
    </section>
  );
}
