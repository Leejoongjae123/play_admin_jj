import { formatRelativeTime } from '@/lib/utils';
import { Comment } from '@/models/comment';

interface CommentListProps {
  commentList: Comment[];
}

export default function CommentList({ commentList }: CommentListProps) {
  return (
    <div className="flex flex-col gap-5">
      {commentList.map((comment) => (
        <div key={comment.id}>
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-3">
                <span className="line-clamp-1 text-sm font-medium text-gray-2">
                  {comment.user.name}
                </span>
              </div>
              <span className="min-w-[40px] text-sm font-semibold text-gray-4">
                {formatRelativeTime(comment.createdAt)}
              </span>
            </div>
          </div>

          <p className="font-medium text-gray-2">{comment.content}</p>
        </div>
      ))}
    </div>
  );
}
