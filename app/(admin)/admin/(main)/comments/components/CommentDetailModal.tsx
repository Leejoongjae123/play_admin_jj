'use client';

import { Close } from '@/components/icons';

interface CommentDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  comment: {
    commentId: string;
    category: string;
    originalText: string;
    author: string;
    createdAt: string;
    content: string;
    status: string;
  };
  onStatusChange?: (commentId: string, newStatus: string) => void;
}

export default function CommentDetailModal({
  isOpen,
  onClose,
  comment,
  onStatusChange
}: CommentDetailModalProps) {
  if (!isOpen) return null;

  const handleToggleStatus = () => {
    const newStatus = comment.status === '노출중' ? '비공개' : '노출중';
    if (onStatusChange) {
      onStatusChange(comment.commentId, newStatus);
    }
    console.log('상태 변경:', newStatus);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative flex h-[686px] w-[520px] flex-col items-center gap-[46px] rounded-xl bg-white p-11 shadow-[0_0_10px_0_rgba(146,46,0,0.08)]">
        {/* 헤더 */}
        <div className="flex w-full flex-col items-start gap-6">
          <div className="flex w-full items-start justify-between">
            <h2 className="font-pretendard text-xl font-bold leading-6 text-gray-1">
              댓글 관리
            </h2>
            <button onClick={onClose} className="flex items-center justify-center">
              <Close size={24} color="#6D6D6D" />
            </button>
          </div>

          {/* 댓글 정보 테이블 */}
          <div className="flex w-full flex-col border border-gray-7">
            {/* 댓글ID */}
            <div className="flex h-12 border-b border-gray-7">
              <div className="flex w-40 items-center bg-gray-7 px-6 py-[10px]">
                <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">
                  댓글ID
                </span>
              </div>
              <div className="flex flex-1 items-center px-6 py-[10px]">
                <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-1">
                  {comment.commentId}
                </span>
              </div>
            </div>

            {/* 구분 */}
            <div className="flex h-12 border-b border-gray-7">
              <div className="flex w-40 items-center bg-gray-7 px-6 py-[10px]">
                <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">
                  구분
                </span>
              </div>
              <div className="flex flex-1 items-center px-6 py-[10px]">
                <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-1">
                  {comment.category}
                </span>
              </div>
            </div>

            {/* 대상링크 */}
            <div className="flex h-12 border-b border-gray-7">
              <div className="flex w-40 items-center bg-gray-7 px-6 py-[10px]">
                <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">
                  대상링크
                </span>
              </div>
              <div className="flex flex-1 items-center px-6 py-[10px]">
                <a
                  href="#"
                  className="font-pretendard text-base font-medium leading-6 tracking-[-0.32px] text-[#2581F9] underline"
                >
                  원문 바로가기
                </a>
              </div>
            </div>

            {/* 작성자 */}
            <div className="flex h-12 border-b border-gray-7">
              <div className="flex w-40 items-center bg-gray-7 px-6 py-[10px]">
                <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">
                  작성자
                </span>
              </div>
              <div className="flex flex-1 items-center px-6 py-[10px]">
                <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-1">
                  {comment.author}
                </span>
              </div>
            </div>

            {/* 작성일시 */}
            <div className="flex h-12">
              <div className="flex w-40 items-center bg-gray-7 px-6 py-[10px]">
                <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">
                  작성일시
                </span>
              </div>
              <div className="flex flex-1 items-center px-6 py-[10px]">
                <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-1">
                  {comment.createdAt}
                </span>
              </div>
            </div>
          </div>

          {/* 댓글 내용 */}
          <div className="flex w-full flex-col items-start gap-3">
            <h3 className="font-pretendard text-base font-bold leading-[150%] text-gray-1">
              댓글 내용
            </h3>
            <div className="relative flex w-full flex-col items-end gap-[84px] rounded-lg border border-gray-6 bg-[#FAF8F6] p-5">
              <div className="w-full font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">
                {comment.content}
              </div>
              {/* 말풍선 꼬리 */}
              <svg
                className="absolute bottom-5 right-5 h-2 w-3 rotate-[135deg] fill-[#E0E2E7]"
                width="7"
                height="7"
                viewBox="0 0 7 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.67466 5.74715C6.71829 6.35472 6.21319 6.85982 5.60562 6.8162L1.02376 6.48723C0.169203 6.42588 -0.217554 5.38851 0.388262 4.7827L4.64116 0.529803C5.24698 -0.0760114 6.28435 0.310745 6.3457 1.1653L6.67466 5.74715Z"
                  fill="#E0E2E7"
                />
              </svg>
            </div>
          </div>

          {/* 비공개 버튼 */}
          <button
            onClick={handleToggleStatus}
            className="flex w-full items-center justify-center gap-[10px] rounded bg-primary px-[55px] py-5"
          >
            <span className="font-pretendard text-lg font-bold leading-6 text-white">
              {comment.status === '노출중' ? '비공개' : '공개'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
