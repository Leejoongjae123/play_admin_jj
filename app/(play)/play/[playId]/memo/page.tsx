import { PlayDetailHeader, PlayDetailMemoListSection } from '@/components/features/play';
import { DummyMemos } from '@/models/memo';
import { DummyPlays } from '@/models/play';

interface PlayDetailMemoListParams {
  playId: string;
}

interface PlayDetailMemoListProps {
  params: Promise<PlayDetailMemoListParams>;
}

export default async function PlayDetailMemoListPage({ params }: PlayDetailMemoListProps) {
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
      <PlayDetailMemoListSection playMemoList={playMemoList} />
    </section>
  );
}
