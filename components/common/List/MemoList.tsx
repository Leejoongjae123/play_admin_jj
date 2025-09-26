import Link from 'next/link';
import { MemoPreviewCard } from '@/components/common';
import { Memo } from '@/models/memo';
import { cn } from '@/lib/utils';

interface MemoListProps {
  memoList: Memo[];
  className?: string;
}

function getMemoLink(memo: Memo): string {
  switch (memo.type) {
    case 'play':
      return `/play/memos/${memo.play.id}`;
    case 'writer':
      return `/writer/memos/${memo.writer.id}`;
    case 'program':
      return `/program/memos/${memo.program.id}`;
    default:
      throw new Error(`처리되지 않은 메모 타입: ${(memo as any).type}`);
  }
}

export default function MemoList({ memoList, className }: MemoListProps) {
  return (
    <div className={cn('grid grid-cols-1 gap-4 lg:grid-cols-3', className)}>
      {memoList.map((memo) => (
        <Link href={getMemoLink(memo)} key={memo.id}>
          <MemoPreviewCard memo={memo} />
        </Link>
      ))}
    </div>
  );
}
