import { PlayDetailMemoSection, PlayDetailSection } from '@/components/features/play/sections';
import { DummyMemos } from '@/models/memo';
import { DummyPlays } from '@/models/play';

interface PlayDetailPageParams {
  playId: string;
}

interface PlayDetailPageProps {
  params: PlayDetailPageParams;
}

export default async function PlayDetailPage({ params }: PlayDetailPageProps) {
  const { playId } = params;
  // TODO: API 연동
  // const play = await getPlay(playId);
  // const playMemoList = await getPlayMemoList(playId);

  const playMemoList = DummyMemos.filter((memo) => memo.type === 'play').slice(0, 6);

  return (
    <section className="flex w-full flex-1 flex-col pb-[60px] pt-11 lg:pt-[80px]">
      <PlayDetailSection play={DummyPlays[0]} />
      <PlayDetailMemoSection playId={playId} playMemoList={playMemoList} />
    </section>
  );
}
