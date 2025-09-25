import Link from 'next/link';
import { MemoPreviewCard } from '@/components/common';
import { Memo } from '@/models/memo';

interface MemoListProps {
  memoList: Memo[];
}

function getMemoLink(memo: Memo): string {
  switch (memo.type) {
    case 'play':
      return `/play/memos/${memo.playId}`;
    case 'writer':
      return `/writer/memos/${memo.writerId}`;
    case 'program':
      return `/program/memos/${memo.programId}`;
    default:
      throw new Error(`처리되지 않은 메모 타입: ${(memo as any).type}`);
  }
}

export default function MemoList({ memoList }: MemoListProps) {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      {memoList.map((memo) => (
        <Link href={getMemoLink(memo)} key={memo.id}>
          <MemoPreviewCard memo={memo} />
        </Link>
      ))}
    </div>
  );
}
