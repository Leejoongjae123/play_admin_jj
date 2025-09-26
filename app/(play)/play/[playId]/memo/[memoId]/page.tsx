import { MemoPreviewCard, PlayMemoDetailSection } from '@/components/features/memo';
import { DummyComments } from '@/models/comment';
import { DummyMemos } from '@/models/memo';

interface PlayMemoDetailPageParams {
  playId: string;
  memoId: string;
}

interface PlayMemoDetailPageProps {
  params: Promise<PlayMemoDetailPageParams>;
}

export default async function PlayDetailMemoPage({ params }: PlayMemoDetailPageProps) {
  // TODO: 최초 SSR API 연동
  const { memoId } = await params;
  const memo = DummyMemos.find((memo) => memo.id === memoId);
  const commentList = DummyComments.filter(
    (comment) => comment.targetId === memoId && comment.targetType === 'memo',
  );

  if (!memo) {
    // TODO: Not Found
    return;
  }

  return (
    <section className="flex w-full flex-1 flex-col gap-10 px-[8vw] pt-11 lg:pt-[80px]">
      <MemoPreviewCard memo={memo} />
      <PlayMemoDetailSection playMemo={memo} commentList={commentList} />
    </section>
  );
}
