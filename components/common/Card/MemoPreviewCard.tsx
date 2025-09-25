'use client';

import { Memo } from '@/models/memo';
import { Like, Comment } from '@/components/icons';
import { Card, CardContent } from '@/components/ui/card';
import { cn, formatRelativeTime } from '@/lib/utils';

interface MemoPreviewCardProps {
  memo: Memo;
  className?: string;
}

export default function MemoPreviewCard({ memo, className }: MemoPreviewCardProps) {
  const {
    username,
    createdAt,
    title,
    content,
    authorName,
    playTitle,
    likeCount,
    commentCount,
    isLiked,
  } = memo;

  return (
    <Card
      className={cn(
        'flex h-[360px] flex-1 shrink-0 flex-col border border-orange-4 bg-white p-8 md:h-[380px]',
        className,
      )}
    >
      <CardContent className="flex flex-1 flex-col justify-between p-0">
        <div className="flex flex-col gap-2">
          {/* User info section */}
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-3">
                <span className="line-clamp-1 text-sm font-medium text-gray-2">{username}</span>
              </div>
              <span className="min-w-[40px] text-sm font-semibold text-gray-4">
                {formatRelativeTime(createdAt)}
              </span>
            </div>
          </div>

          {/* Content section */}
          <div className="flex flex-col gap-2.5">
            {title && (
              <span className="line-clamp-1 text-xl font-semibold text-primary">{title}</span>
            )}
            <p className="line-clamp-8 text-gray-2">{content}</p>
          </div>
        </div>

        {/* Bottom section with interactions and book info */}
        <div className="mt-4 flex items-end justify-between gap-2">
          {/* Interaction icons */}
          <div className="flex items-center gap-5">
            <div className="line-clamp-1 flex h-6 max-w-[200px] items-center gap-2">
              <Like className={cn(`${isLiked ? 'fill-gray-3 text-gray-3' : 'text-gray-3'}`)} />
              <span className="text-sm font-semibold text-gray-3">{likeCount}</span>
            </div>
            <div className="flex items-center gap-2">
              <Comment className="text-gray-3" />
              <span className="text-sm font-semibold text-gray-3">{commentCount}</span>
            </div>
          </div>

          {/* Author and book info */}
          {authorName && playTitle && (
            <div className="flex-1 flex-col justify-between gap-1 overflow-hidden">
              <span className="line-clamp-1 flex-1 text-right text-sm font-medium text-gray-3">
                {authorName}
              </span>
              <span className="line-clamp-1 flex-1 text-right text-sm font-semibold text-primary">
                {`『${playTitle}』`}
              </span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
