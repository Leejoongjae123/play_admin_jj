'use client';

import { Button } from '@/components/ui/button';

interface SanctionRecord {
  id: number;
  memberId: string;
  nickname: string;
  email: string;
  sanctionType: string;
  reason: string;
  period: string;
  status: 'active' | 'released';
  sanctionDate: string;
  releaseDate: string;
  admin: string;
}

interface SanctionDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  sanctionData: SanctionRecord;
  onRelease: (sanctionId: number) => void;
}

export default function SanctionDetailModal({
  isOpen,
  onClose,
  sanctionData,
  onRelease,
}: SanctionDetailModalProps) {
  if (!isOpen) return null;

  const formatDate = (dateString: string) => {
    return dateString.split('-').slice(0, 3).join('-');
  };

  const handleRelease = () => {
    onRelease(sanctionData.id);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div 
        className="flex w-[520px] flex-col items-center gap-[46px] rounded-xl bg-white p-11"
        style={{ boxShadow: '0 0 10px 0 rgba(146, 46, 0, 0.08)' }}
      >
        {/* 헤더 */}
        <div className="flex w-full flex-col items-start gap-6">
          <div className="flex w-full items-start justify-between">
            <h2 className="text-xl font-bold leading-6 text-gray-1">
              제재 상세 보기
            </h2>
            <button onClick={onClose} className="flex h-6 w-6 items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 19.5L12 12.5M12 12.5L19 5.5M12 12.5L5 5.5M12 12.5L19 19.5"
                  stroke="#6D6D6D"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* 정보 테이블 */}
          <div className="flex w-full flex-col">
            {/* 회원ID */}
            <div className="flex h-12 w-full items-center border-b border-gray-7">
              <div className="flex h-full w-40 items-center bg-gray-7 px-6 py-2.5">
                <span className="text-base font-normal leading-6 tracking-[-0.32px] text-gray-3">
                  회원ID
                </span>
              </div>
              <div className="flex h-full flex-1 items-center px-6 py-2.5">
                <span className="text-base font-normal leading-6 tracking-[-0.32px] text-gray-1">
                  {sanctionData.memberId} ({sanctionData.nickname})
                </span>
              </div>
            </div>

            {/* ID */}
            <div className="flex h-12 w-full items-center border-b border-gray-7">
              <div className="flex h-full w-40 items-center bg-gray-7 px-6 py-2.5">
                <span className="text-base font-normal leading-6 tracking-[-0.32px] text-gray-3">
                  ID
                </span>
              </div>
              <div className="flex h-full flex-1 items-center px-6 py-2.5">
                <span className="text-base font-normal leading-6 tracking-[-0.32px] text-gray-1">
                  {sanctionData.email}
                </span>
              </div>
            </div>

            {/* 제재 유형 */}
            <div className="flex h-12 w-full items-center border-b border-gray-7">
              <div className="flex h-full w-40 items-center bg-gray-7 px-6 py-2.5">
                <span className="text-base font-normal leading-6 tracking-[-0.32px] text-gray-3">
                  제재 유형
                </span>
              </div>
              <div className="flex h-full flex-1 items-center px-6 py-2.5">
                <span className="text-base font-normal leading-6 tracking-[-0.32px] text-gray-1">
                  {sanctionData.sanctionType}
                </span>
              </div>
            </div>

            {/* 기간 */}
            <div className="flex h-12 w-full items-center border-b border-gray-7">
              <div className="flex h-full w-40 items-center bg-gray-7 px-6 py-2.5">
                <span className="text-base font-normal leading-6 tracking-[-0.32px] text-gray-3">
                  기간
                </span>
              </div>
              <div className="flex h-full flex-1 items-center px-6 py-2.5">
                <span className="text-base font-normal leading-6 tracking-[-0.32px] text-gray-1">
                  {sanctionData.period}
                </span>
              </div>
            </div>

            {/* 제재일 */}
            <div className="flex h-12 w-full items-center border-b border-gray-7">
              <div className="flex h-full w-40 items-center bg-gray-7 px-6 py-2.5">
                <span className="text-base font-normal leading-6 tracking-[-0.32px] text-gray-3">
                  제재일
                </span>
              </div>
              <div className="flex h-full flex-1 items-center px-6 py-2.5">
                <span className="text-base font-normal leading-6 tracking-[-0.32px] text-gray-1">
                  {formatDate(sanctionData.sanctionDate)}
                </span>
              </div>
            </div>

            {/* 해제일 */}
            <div className="flex h-12 w-full items-center border-b border-gray-7">
              <div className="flex h-full w-40 items-center bg-gray-7 px-6 py-2.5">
                <span className="text-base font-normal leading-6 tracking-[-0.32px] text-gray-3">
                  해제일
                </span>
              </div>
              <div className="flex h-full flex-1 items-center px-6 py-2.5">
                <span className="text-base font-normal leading-6 tracking-[-0.32px] text-gray-1">
                  {sanctionData.status === 'released' ? formatDate(sanctionData.releaseDate) : '-'}
                </span>
              </div>
            </div>

            {/* 제재사유 */}
            <div className="flex h-12 w-full items-center border-b border-gray-7">
              <div className="flex h-full w-40 items-center bg-gray-7 px-6 py-2.5">
                <span className="text-base font-normal leading-6 tracking-[-0.32px] text-gray-3">
                  제재사유
                </span>
              </div>
              <div className="flex h-full flex-1 items-center px-6 py-2.5">
                <span className="text-base font-normal leading-6 tracking-[-0.32px] text-gray-1">
                  {sanctionData.reason}
                </span>
              </div>
            </div>

            {/* 운영자 */}
            <div className="flex h-12 w-full items-center border-b border-gray-7">
              <div className="flex h-full w-40 items-center bg-gray-7 px-6 py-2.5">
                <span className="text-base font-normal leading-6 tracking-[-0.32px] text-gray-3">
                  운영자
                </span>
              </div>
              <div className="flex h-full flex-1 items-center px-6 py-2.5">
                <span className="text-base font-normal leading-6 tracking-[-0.32px] text-gray-1">
                  {sanctionData.admin}
                </span>
              </div>
            </div>
          </div>

          {/* 해제하기 버튼 */}
          <Button
            onClick={handleRelease}
            disabled={sanctionData.status === 'released'}
            className="flex w-full items-center justify-center gap-2.5 rounded bg-primary px-[55px] py-5 text-lg font-bold leading-6 text-white hover:bg-primary/90 disabled:bg-gray-4 disabled:text-gray-6"
          >
            {sanctionData.status === 'released' ? '해제됨' : '해제하기'}
          </Button>
        </div>
      </div>
    </div>
  );
}
