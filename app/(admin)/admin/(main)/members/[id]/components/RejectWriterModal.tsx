'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/icons';

interface RejectWriterModalProps {
  isOpen: boolean;
  onClose: () => void;
  memberId: string;
}

export default function RejectWriterModal({ isOpen, onClose, memberId }: RejectWriterModalProps) {
  const [rejectionReason, setRejectionReason] = useState('');
  const [selectedReason, setSelectedReason] = useState('');
  const [startDate, setStartDate] = useState('2025-08-08');
  const [endDate, setEndDate] = useState('');
  const [isReasonDropdownOpen, setIsReasonDropdownOpen] = useState(false);

  const rejectionReasons = [
    '부적절한 내용',
    '신뢰할 수 없는 정보',
    '저작권 위반',
    '기타'
  ];

  if (!isOpen) return null;

  const handleSubmit = () => {
    // 반려 처리 로직 구현
    console.log('반려 처리:', {
      memberId,
      selectedReason,
      rejectionReason,
      startDate,
      endDate
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="flex w-[520px] flex-col items-center gap-12 rounded-xl bg-white p-11 shadow-[0_0_10px_0_rgba(146,46,0,0.08)]">
        {/* 헤더 */}
        <div className="flex w-full flex-col items-start gap-6">
          <div className="flex w-full items-start justify-between">
            <h2 className="font-pretendard text-xl font-bold leading-6 text-[#202224]">
              반려 처리
            </h2>
            <button onClick={onClose} className="flex h-6 w-6 items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 19L12 12M12 12L19 5M12 12L5 5M12 12L19 19"
                  stroke="#6D6D6D"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="flex w-full flex-col items-start gap-6">
            {/* 회원ID 테이블 */}
            <div className="flex h-12 w-full items-center border-b border-gray-7">
              <div className="flex w-40 items-center gap-2.5 bg-gray-7 px-6 py-2.5">
                <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">
                  회원ID
                </span>
              </div>
              <div className="flex flex-1 items-center gap-2.5 px-6 py-2.5">
                <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-1">
                  {memberId}
                </span>
              </div>
            </div>

            {/* 반려 사유 선택 및 입력 */}
            <div className="flex w-full flex-col items-start gap-3">
              {/* 반려 사유 선택 드롭다운 */}
              <div className="relative w-full">
                <button
                  onClick={() => setIsReasonDropdownOpen(!isReasonDropdownOpen)}
                  className="flex w-full items-center justify-between rounded-md border border-[#EBEBEB] bg-white px-3 py-3"
                >
                  <span className="font-pretendard text-xs font-bold text-primary">
                    {selectedReason || '반려 사유 선택'}
                  </span>
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    className={`transform transition-transform ${isReasonDropdownOpen ? 'rotate-180' : ''}`}
                  >
                    <path
                      d="M2.30018 3H7.70033C7.75501 3.00015 7.8086 3.01358 7.85534 3.03884C7.90208 3.06409 7.9402 3.10022 7.9656 3.14334C7.991 3.18645 8.00271 3.23492 7.99947 3.28352C7.99624 3.33211 7.97818 3.37901 7.94724 3.41915L5.24716 6.89201C5.13526 7.036 4.86585 7.036 4.75365 6.89201L2.05357 3.41915C2.02232 3.37909 2.00399 3.33217 2.00058 3.28349C1.99717 3.23481 2.00881 3.18623 2.03423 3.14303C2.05965 3.09982 2.09788 3.06365 2.14477 3.03843C2.19165 3.01322 2.24541 2.99992 2.30018 3Z"
                      fill="#911A00"
                    />
                  </svg>
                </button>
                
                {/* 드롭다운 메뉴 */}
                {isReasonDropdownOpen && (
                  <div className="absolute top-full z-10 mt-1 w-full rounded-md border border-[#EBEBEB] bg-white shadow-lg">
                    {rejectionReasons.map((reason) => (
                      <button
                        key={reason}
                        onClick={() => {
                          setSelectedReason(reason);
                          setIsReasonDropdownOpen(false);
                        }}
                        className="w-full px-3 py-2 text-left font-pretendard text-xs hover:bg-gray-50"
                      >
                        {reason}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* 반려 사유 입력 텍스트에어리어 */}
              <div className="relative flex w-full flex-col items-end gap-20 rounded-lg border border-gray-6 bg-[#FAF8F6] p-5">
                <textarea
                  value={rejectionReason}
                  onChange={(e) => setRejectionReason(e.target.value)}
                  placeholder="반려 처리 하는 사유를 입력해주세요."
                  className="w-full resize-none bg-transparent font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-orange-3 placeholder-orange-3 focus:outline-none"
                  rows={3}
                />
                <svg
                  className="h-2 w-3 rotate-[135deg] fill-[#E0E2E7]"
                  width="7"
                  height="7"
                  viewBox="0 0 7 7"
                  fill="none"
                >
                  <path d="M6.67466 5.74715C6.71829 6.35472 6.21319 6.85982 5.60562 6.8162L1.02376 6.48723C0.169203 6.42588 -0.217554 5.38851 0.388262 4.7827L4.64116 0.529803C5.24698 -0.0760114 6.28435 0.310745 6.3457 1.1653L6.67466 5.74715Z" />
                </svg>
              </div>

              {/* 제재 기간 선택 */}
              <div className="flex w-full flex-col items-start justify-center gap-2">
                <h3 className="font-pretendard text-base font-bold leading-6 text-gray-2">
                  제재 기간 선택
                </h3>
                <div className="flex w-full items-center gap-2.5 rounded-md">
                  {/* 시작 날짜 */}
                  <div className="flex flex-1 items-center justify-between rounded-md border border-[#EBEBEB] bg-white px-3 py-3">
                    <span className="font-pretendard text-xs font-bold text-primary">
                      {startDate}
                    </span>
                    <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                      <path
                        d="M3.33333 8.47656C3.14444 8.47656 2.98622 8.41256 2.85867 8.28456C2.73111 8.15656 2.66711 7.99834 2.66667 7.8099C2.66622 7.62145 2.73022 7.46323 2.85867 7.33523C2.98711 7.20723 3.14533 7.14323 3.33333 7.14323C3.52133 7.14323 3.67978 7.20723 3.80867 7.33523C3.93756 7.46323 4.00133 7.62145 4 7.8099C3.99867 7.99834 3.93467 8.15679 3.808 8.28523C3.68133 8.41367 3.52311 8.47745 3.33333 8.47656ZM6 8.47656C5.81111 8.47656 5.65289 8.41256 5.52533 8.28456C5.39778 8.15656 5.33378 7.99834 5.33333 7.8099C5.33289 7.62145 5.39689 7.46323 5.52533 7.33523C5.65378 7.20723 5.812 7.14323 6 7.14323C6.188 7.14323 6.34644 7.20723 6.47533 7.33523C6.60422 7.46323 6.668 7.62145 6.66667 7.8099C6.66533 7.99834 6.60133 8.15679 6.47467 8.28523C6.348 8.41367 6.18978 8.47745 6 8.47656ZM8.66667 8.47656C8.47778 8.47656 8.31956 8.41256 8.192 8.28456C8.06444 8.15656 8.00044 7.99834 8 7.8099C7.99956 7.62145 8.06356 7.46323 8.192 7.33523C8.32044 7.20723 8.47867 7.14323 8.66667 7.14323C8.85467 7.14323 9.01311 7.20723 9.142 7.33523C9.27089 7.46323 9.33467 7.62145 9.33333 7.8099C9.332 7.99834 9.268 8.15679 9.14133 8.28523C9.01467 8.41367 8.85644 8.47745 8.66667 8.47656ZM1.33333 13.8099C0.966667 13.8099 0.652889 13.6795 0.392 13.4186C0.131111 13.1577 0.000444444 12.8437 0 12.4766V3.14323C0 2.77656 0.130667 2.46278 0.392 2.2019C0.653333 1.94101 0.967111 1.81034 1.33333 1.8099H2V0.476562H3.33333V1.8099H8.66667V0.476562H10V1.8099H10.6667C11.0333 1.8099 11.3473 1.94056 11.6087 2.2019C11.87 2.46323 12.0004 2.77701 12 3.14323V12.4766C12 12.8432 11.8696 13.1572 11.6087 13.4186C11.3478 13.6799 11.0338 13.8103 10.6667 13.8099H1.33333ZM1.33333 12.4766H10.6667V5.8099H1.33333V12.4766Z"
                        fill="#727272"
                      />
                    </svg>
                  </div>
                  
                  {/* 구분자 */}
                  <span className="font-pretendard text-xs font-bold text-[#727272]">-</span>
                  
                  {/* 종료 날짜 */}
                  <div className="flex flex-1 items-center justify-between rounded-md border border-[#EBEBEB] bg-white px-3 py-3">
                    <span className="font-pretendard text-xs font-medium text-[#727272]">
                      {endDate || '날짜 입력'}
                    </span>
                    <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                      <path
                        d="M3.33333 8.47656C3.14444 8.47656 2.98622 8.41256 2.85867 8.28456C2.73111 8.15656 2.66711 7.99834 2.66667 7.8099C2.66622 7.62145 2.73022 7.46323 2.85867 7.33523C2.98711 7.20723 3.14533 7.14323 3.33333 7.14323C3.52133 7.14323 3.67978 7.20723 3.80867 7.33523C3.93756 7.46323 4.00133 7.62145 4 7.8099C3.99867 7.99834 3.93467 8.15679 3.808 8.28523C3.68133 8.41367 3.52311 8.47745 3.33333 8.47656ZM6 8.47656C5.81111 8.47656 5.65289 8.41256 5.52533 8.28456C5.39778 8.15656 5.33378 7.99834 5.33333 7.8099C5.33289 7.62145 5.39689 7.46323 5.52533 7.33523C5.65378 7.20723 5.812 7.14323 6 7.14323C6.188 7.14323 6.34644 7.20723 6.47533 7.33523C6.60422 7.46323 6.668 7.62145 6.66667 7.8099C6.66533 7.99834 6.60133 8.15679 6.47467 8.28523C6.348 8.41367 6.18978 8.47745 6 8.47656ZM8.66667 8.47656C8.47778 8.47656 8.31956 8.41256 8.192 8.28456C8.06444 8.15656 8.00044 7.99834 8 7.8099C7.99956 7.62145 8.06356 7.46323 8.192 7.33523C8.32044 7.20723 8.47867 7.14323 8.66667 7.14323C8.85467 7.14323 9.01311 7.20723 9.142 7.33523C9.27089 7.46323 9.33467 7.62145 9.33333 7.8099C9.332 7.99834 9.268 8.15679 9.14133 8.28523C9.01467 8.41367 8.85644 8.47745 8.66667 8.47656ZM1.33333 13.8099C0.966667 13.8099 0.652889 13.6795 0.392 13.4186C0.131111 13.1577 0.000444444 12.8437 0 12.4766V3.14323C0 2.77656 0.130667 2.46278 0.392 2.2019C0.653333 1.94101 0.967111 1.81034 1.33333 1.8099H2V0.476562H3.33333V1.8099H8.66667V0.476562H10V1.8099H10.6667C11.0333 1.8099 11.3473 1.94056 11.6087 2.2019C11.87 2.46323 12.0004 2.77701 12 3.14323V12.4766C12 12.8432 11.8696 13.1572 11.6087 13.4186C11.3478 13.6799 11.0338 13.8103 10.6667 13.8099H1.33333ZM1.33333 12.4766H10.6667V5.8099H1.33333V12.4766Z"
                        fill="#727272"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 반려 버튼 */}
        <Button
          onClick={handleSubmit}
          className="flex w-full justify-center items-center gap-2.5 rounded bg-primary px-14 py-5 hover:bg-primary/90"
        >
          <span className="font-pretendard text-lg font-bold leading-6 text-white">반려</span>
        </Button>
      </div>
    </div>
  );
}
