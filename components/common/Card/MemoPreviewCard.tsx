'use client';

import { Memo } from '@/models/memo';
import { Like, Comment } from '@/components/icons';
import { cn, formatRelativeTime } from '@/lib/utils';

interface MemoPreviewCardProps {
  memo: Memo;
}

export default function MemoPreviewCard({ memo }: MemoPreviewCardProps) {
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
    <div className="flex h-[360px] w-[335px] flex-1 shrink-0 flex-col border border-orange-4 bg-white p-8 shadow-[-4px_4px_4px_0_rgba(172,121,58,0.10)] lg:h-[380px] lg:w-[389px]">
      <div className="flex flex-1 flex-col justify-between">
        <div className="flex flex-col gap-2">
          {/* User info section */}
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-2">{username}</span>
              </div>
              <span className="text-sm font-semibold text-gray-4">
                {formatRelativeTime(createdAt)}
              </span>
            </div>
          </div>

          {/* Content section */}
          <div className="flex flex-col gap-2.5">
            {title && (
              <span className="line-clamp-1 text-xl font-semibold text-primary">{title}</span>
            )}
            <p className="line-clamp-6 max-h-44 text-gray-2">{content}</p>
          </div>
        </div>

        {/* Bottom section with interactions and book info */}
        <div className="mt-4 flex items-end justify-between">
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
            <div className="flex max-w-[150px] flex-col justify-between gap-1">
              <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-right text-sm font-medium text-gray-3">
                {authorName}
              </span>
              <span className="line-clamp-1 flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-right text-sm font-semibold text-primary">
                {`『${playTitle}』`}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
