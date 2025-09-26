'use client';

import { EntryForm } from '@/components/forms';
import { Memo } from '@/models/memo';
import { Comment } from '@/models/comment';
import { CommentList } from '@/components/features/comment';

interface PlayMemoDetailSectionProps {
  playMemo: Memo;
  commentList: Comment[];
}

export default function PlayMemoDetailSection({
  playMemo,
  commentList,
}: PlayMemoDetailSectionProps) {
  // TODO: React query

  const handleSubmit = () => {
    // TODO: 메모 submit 로직 구현
    console.log('submit');
  };

  return (
    <section className="flex w-full flex-1 flex-col gap-5">
      <div className="flex items-center gap-1.5">
        <span className="font-serif text-xl font-bold text-gray-1 lg:text-[28px]">메모</span>
        <span className="font-serif text-xl font-bold text-orange-3 lg:text-[28px]">
          {playMemo.commentCount}
        </span>
      </div>

      <EntryForm submitButtonText="댓글 남기기" onSubmit={handleSubmit} />
      <CommentList commentList={commentList} />
    </section>
  );
}
