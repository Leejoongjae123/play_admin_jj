'use client';

import { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody } from '@/components/ui/modal';

interface PlayApprovalModalProps {
  isOpen: boolean;
  onClose: () => void;
  playData: {
    playId: string;
    userId: string;
    applicationDate: string;
    title: string;
    author: string;
    dialogue: string;
  };
  onApprove: () => void;
  onReject: (reason: string) => void;
}

export default function PlayApprovalModal({
  isOpen,
  onClose,
  playData,
  onApprove,
  onReject,
}: PlayApprovalModalProps) {
  const [rejectionReason, setRejectionReason] = useState('');

  const handleReject = () => {
    if (rejectionReason.trim()) {
      onReject(rejectionReason);
      setRejectionReason('');
    }
  };

  const handleApprove = () => {
    onApprove();
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader onClose={onClose}>희곡 등록 신청</ModalHeader>

        <ModalBody>
          {/* 작품 정보 테이블 */}
          <div className="flex w-full flex-col">
            {/* 작품ID */}
            <div className="flex h-12 items-center border-b border-gray-7">
              <div className="flex w-40 items-center bg-gray-7 px-6 py-2.5">
                <span className="text-base font-normal text-gray-2">작품ID</span>
              </div>
              <div className="flex flex-1 items-center px-6 py-2.5">
                <span className="text-base font-normal text-gray-1">{playData.playId}</span>
              </div>
            </div>

            {/* 등록회원ID */}
            <div className="flex h-12 items-stretch border-b border-gray-7">
              <div className="flex w-40 items-start bg-gray-7 px-6 py-2.5">
                <span className="text-base font-normal text-gray-2">등록회원ID</span>
              </div>
              <div className="flex flex-1 items-center px-6 py-2.5">
                <span className="text-base font-normal text-gray-1">{playData.userId}</span>
              </div>
            </div>

            {/* 신청일자 */}
            <div className="flex h-12 items-stretch border-b border-gray-7">
              <div className="flex w-40 items-start bg-gray-7 px-6 py-2.5">
                <span className="text-base font-normal text-gray-2">신청일자</span>
              </div>
              <div className="flex flex-1 items-center px-6 py-2.5">
                <span className="text-base font-normal text-gray-1">
                  {playData.applicationDate}
                </span>
              </div>
            </div>

            {/* 제목 */}
            <div className="flex h-12 items-stretch border-b border-gray-7">
              <div className="flex w-40 items-start bg-gray-7 px-6 py-2.5">
                <span className="text-base font-normal text-gray-2">제목</span>
              </div>
              <div className="flex flex-1 items-center px-6 py-2.5">
                <span className="text-base font-normal text-gray-1">{playData.title}</span>
              </div>
            </div>

            {/* 작가 */}
            <div className="flex h-12 items-stretch border-b border-gray-7">
              <div className="flex w-40 items-start bg-gray-7 px-6 py-2.5">
                <span className="text-base font-normal text-gray-2">작가</span>
              </div>
              <div className="flex flex-1 items-start px-6 py-2.5">
                <span className="text-base font-normal text-gray-1">{playData.author}</span>
              </div>
            </div>

            {/* 대사 */}
            <div className="flex h-full items-stretch border-b border-gray-7">
              <div className="flex w-40 items-start bg-gray-7 px-6 py-2.5">
                <span className="text-base font-normal text-gray-2">대사</span>
              </div>
              <div className="flex flex-1 items-start px-6 py-2.5">
                <span className="flex-1 text-base font-normal text-gray-1">
                  {playData.dialogue}
                </span>
              </div>
            </div>
          </div>

          {/* 반려사유 입력 */}
          <div className="flex w-full flex-col items-start">
            <div className="flex h-11 w-40 items-start gap-1 px-0 py-4">
              <span className="text-sm font-medium text-gray-3">반려사유</span>
            </div>
            <div className="relative flex w-full flex-col items-end gap-[84px] rounded-lg border border-gray-6 bg-[#FAF8F6] p-5">
              <textarea
                value={rejectionReason}
                onChange={(e) => setRejectionReason(e.target.value)}
                placeholder="희곡을 반려하려는 사유를 입력해주세요."
                className="w-full resize-none border-none bg-transparent text-base font-normal leading-6 text-gray-1 placeholder-orange-3 outline-none"
                rows={3}
              />
              <svg
                className="rotate-[135deg] transform"
                width="12"
                height="8"
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

          {/* 액션 버튼 */}
          <div className="flex w-full items-start gap-3">
            <button
              onClick={handleReject}
              disabled={!rejectionReason.trim()}
              className={`flex flex-1 items-center justify-center gap-2.5 rounded px-6 py-5 ${
                rejectionReason.trim()
                  ? 'bg-gray-5 text-gray-3 hover:bg-gray-4'
                  : 'bg-gray-5 text-gray-3'
              }`}
            >
              <span className="text-lg font-bold">반려</span>
            </button>
            <button
              onClick={handleApprove}
              className="flex flex-1 items-center justify-center gap-2.5 rounded bg-primary px-6 py-5 hover:bg-primary/90"
            >
              <span className="text-lg font-bold text-white">승인</span>
            </button>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
