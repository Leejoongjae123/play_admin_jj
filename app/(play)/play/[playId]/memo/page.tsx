import { PlayDetailMemoListSection } from '@/components/features/play';
import { DummyMemos } from '@/models/memo';

interface PlayDetailMemoListParams {
  playId: string;
}

interface PlayDetailMemoListProps {
  params: Promise<PlayDetailMemoListParams>;
}

export default async function PlayDetailMemoListPage({ params }: PlayDetailMemoListProps) {
  const { playId } = await params;

  const playMemoList = DummyMemos.filter(
    (memo) => memo.type === 'play' && memo.play.id === playId,
  ).slice(0, 6);

  return (
    <section className="flex w-full flex-1 flex-col">
      <PlayDetailMemoListSection playMemoList={playMemoList} />
    </section>
  );
}
