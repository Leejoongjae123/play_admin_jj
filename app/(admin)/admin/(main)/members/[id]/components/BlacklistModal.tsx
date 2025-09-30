'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { X, ChevronUp, Calendar } from 'lucide-react';

interface BlacklistModalProps {
  isOpen: boolean;
  onClose: () => void;
  memberId: string;
}

const blacklistReasons = [
  '스팸 메시지 발송',
  '부적절한 콘텐츠 게시',
  '욕설 및 비방',
  '악의적 행동',
  '기타',
];

export default function BlacklistModal({ isOpen, onClose, memberId }: BlacklistModalProps) {
  const [selectedReason, setSelectedReason] = useState('블랙리스트 사유 선택');
  const [reasonText, setReasonText] = useState('');
  const [startDate, setStartDate] = useState('2025-08-08');
  const [endDate, setEndDate] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = () => {
    // 블랙리스트 처리 로직
    console.log({
      memberId,
      reason: selectedReason,
      reasonText,
      startDate,
      endDate,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* 배경 오버레이 */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      
      {/* 모달 */}
      <div className="relative flex w-[520px] flex-col items-center gap-[46px] rounded-xl bg-white p-11 shadow-[0_0_10px_0_rgba(146,46,0,0.08)]">
        {/* 헤더 */}
        <div className="flex w-full flex-col items-start gap-6">
          <div className="flex w-full items-start justify-between">
            <h2 className="font-pretendard text-xl font-bold leading-6 text-[#202224]">
              블랙리스트
            </h2>
            <button onClick={onClose} className="p-0">
              <X size={24} color="#6D6D6D" strokeWidth={1.6} />
            </button>
          </div>

          {/* 콘텐츠 */}
          <div className="flex w-full flex-col items-start gap-6">
            {/* 회원ID 테이블 */}
            <div className="flex h-12 w-full items-center border-b border-[#F3F2F0]">
              <div className="flex w-40 items-center gap-2.5 bg-[#F3F2F0] px-6 py-2.5">
                <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-[#555]">
                  회원ID
                </span>
              </div>
              <div className="flex flex-1 items-center gap-2.5 px-6 py-2.5">
                <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-[#2A2A2A]">
                  {memberId}
                </span>
              </div>
            </div>

            {/* 블랙리스트 사유 선택 */}
            <div className="flex w-full flex-col items-start gap-3">
              <div className="relative w-full">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex w-full items-center justify-between rounded-md border border-[#EBEBEB] bg-white px-3 py-3"
                >
                  <span className="font-pretendard text-xs font-bold leading-normal text-[#911A00]">
                    {selectedReason}
                  </span>
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transition-transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                  >
                    <path 
                      d="M2.30018 3H7.70033C7.75501 3.00015 7.8086 3.01358 7.85534 3.03884C7.90208 3.06409 7.9402 3.10022 7.9656 3.14334C7.991 3.18645 8.00271 3.23492 7.99947 3.28352C7.99624 3.33211 7.97818 3.37901 7.94724 3.41915L5.24716 6.89201C5.13526 7.036 4.86585 7.036 4.75365 6.89201L2.05357 3.41915C2.02232 3.37909 2.00399 3.33217 2.00058 3.28349C1.99717 3.23481 2.00881 3.18623 2.03423 3.14303C2.05965 3.09982 2.09788 3.06365 2.14477 3.03843C2.19165 3.01322 2.24541 2.99992 2.30018 3Z" 
                      fill="#911A00"
                    />
                  </svg>
                </button>

                {/* 드롭다운 메뉴 */}
                {isDropdownOpen && (
                  <div className="absolute top-full z-10 mt-1 w-full rounded-md border border-[#EBEBEB] bg-white shadow-lg">
                    {blacklistReasons.map((reason) => (
                      <button
                        key={reason}
                        onClick={() => {
                          setSelectedReason(reason);
                          setIsDropdownOpen(false);
                        }}
                        className="w-full px-3 py-2 text-left font-pretendard text-xs font-bold text-[#911A00] hover:bg-gray-50"
                      >
                        {reason}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* 사유 입력 텍스트박스 */}
              <div className="relative w-full rounded-lg border border-[#F2F2F2] bg-[#FAF8F6] p-5">
                <textarea
                  value={reasonText}
                  onChange={(e) => setReasonText(e.target.value)}
                  placeholder="해당 회원을 정지하려는 사유를 입력해주세요. 해당 회원을 정지하려는 사유를 입력해주세요."
                  className="h-[84px] w-full resize-none bg-transparent font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-[#CCBCAB] placeholder-[#CCBCAB] focus:outline-none"
                />
                <svg
                  className="absolute bottom-2 right-2 rotate-[135deg]"
                  width="12"
                  height="8"
                  viewBox="0 0 7 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M6.67466 5.74813C6.71829 6.3557 6.21319 6.86079 5.60562 6.81717L1.02376 6.48821C0.169203 6.42686 -0.217554 5.38949 0.388262 4.78367L4.64116 0.53078C5.24698 -0.0750349 6.28435 0.311721 6.3457 1.16627L6.67466 5.74813Z" 
                    fill="#E0E2E7"
                  />
                </svg>
              </div>

              {/* 제재 기간 선택 */}
              <div className="flex w-full flex-col items-start gap-2">
                <h3 className="font-pretendard text-base font-bold leading-[150%] text-[#555]">
                  제재 기간 선택
                </h3>
                <div className="flex w-full items-center gap-2.5">
                  {/* 시작일 */}
                  <div className="flex flex-1 items-center justify-between rounded-md border border-[#EBEBEB] bg-white px-3 py-3">
                    <span className="font-pretendard text-xs font-bold leading-normal text-[#911A00]">
                      {startDate}
                    </span>
                    <svg 
                      width="12" 
                      height="14" 
                      viewBox="0 0 12 14" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        d="M3.33333 8.47559C3.14444 8.47559 2.98622 8.41159 2.85867 8.28359C2.73111 8.15559 2.66711 7.99736 2.66667 7.80892C2.66622 7.62048 2.73022 7.46225 2.85867 7.33425C2.98711 7.20625 3.14533 7.14225 3.33333 7.14225C3.52133 7.14225 3.67978 7.20625 3.80867 7.33425C3.93756 7.46225 4.00133 7.62048 4 7.80892C3.99867 7.99736 3.93467 8.15581 3.808 8.28425C3.68133 8.4127 3.52311 8.47648 3.33333 8.47559ZM6 8.47559C5.81111 8.47559 5.65289 8.41159 5.52533 8.28359C5.39778 8.15559 5.33378 7.99736 5.33333 7.80892C5.33289 7.62048 5.39689 7.46225 5.52533 7.33425C5.65378 7.20625 5.812 7.14225 6 7.14225C6.188 7.14225 6.34644 7.20625 6.47533 7.33425C6.60422 7.46225 6.668 7.62048 6.66667 7.80892C6.66533 7.99736 6.60133 8.15581 6.47467 8.28425C6.348 8.4127 6.18978 8.47648 6 8.47559ZM8.66667 8.47559C8.47778 8.47559 8.31956 8.41159 8.192 8.28359C8.06444 8.15559 8.00044 7.99736 8 7.80892C7.99956 7.62048 8.06356 7.46225 8.192 7.33425C8.32044 7.20625 8.47867 7.14225 8.66667 7.14225C8.85467 7.14225 9.01311 7.20625 9.142 7.33425C9.27089 7.46225 9.33467 7.62048 9.33333 7.80892C9.332 7.99736 9.268 8.15581 9.14133 8.28425C9.01467 8.4127 8.85644 8.47648 8.66667 8.47559ZM1.33333 13.8089C0.966667 13.8089 0.652889 13.6785 0.392 13.4176C0.131111 13.1567 0.000444444 12.8427 0 12.4756V3.14225C0 2.77559 0.130667 2.46181 0.392 2.20092C0.653333 1.94003 0.967111 1.80936 1.33333 1.80892H2V0.475586H3.33333V1.80892H8.66667V0.475586H10V1.80892H10.6667C11.0333 1.80892 11.3473 1.93959 11.6087 2.20092C11.87 2.46225 12.0004 2.77603 12 3.14225V12.4756C12 12.8423 11.8696 13.1563 11.6087 13.4176C11.3478 13.6789 11.0338 13.8094 10.6667 13.8089H1.33333ZM1.33333 12.4756H10.6667V5.80892H1.33333V12.4756Z" 
                        fill="#727272"
                      />
                    </svg>
                  </div>
                  
                  {/* 구분자 */}
                  <span className="font-pretendard text-xs font-bold leading-normal text-[#727272]">
                    -
                  </span>
                  
                  {/* 종료일 */}
                  <div className="flex flex-1 items-center justify-between rounded-md border border-[#EBEBEB] bg-white px-3 py-3">
                    <span className={`font-pretendard text-xs leading-normal ${
                      endDate ? 'font-bold text-[#911A00]' : 'font-medium text-[#727272]'
                    }`}>
                      {endDate || '날짜 입력'}
                    </span>
                    <svg 
                      width="12" 
                      height="14" 
                      viewBox="0 0 12 14" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        d="M3.33333 8.47559C3.14444 8.47559 2.98622 8.41159 2.85867 8.28359C2.73111 8.15559 2.66711 7.99736 2.66667 7.80892C2.66622 7.62048 2.73022 7.46225 2.85867 7.33425C2.98711 7.20625 3.14533 7.14225 3.33333 7.14225C3.52133 7.14225 3.67978 7.20625 3.80867 7.33425C3.93756 7.46225 4.00133 7.62048 4 7.80892C3.99867 7.99736 3.93467 8.15581 3.808 8.28425C3.68133 8.4127 3.52311 8.47648 3.33333 8.47559ZM6 8.47559C5.81111 8.47559 5.65289 8.41159 5.52533 8.28359C5.39778 8.15559 5.33378 7.99736 5.33333 7.80892C5.33289 7.62048 5.39689 7.46225 5.52533 7.33425C5.65378 7.20625 5.812 7.14225 6 7.14225C6.188 7.14225 6.34644 7.20625 6.47533 7.33425C6.60422 7.46225 6.668 7.62048 6.66667 7.80892C6.66533 7.99736 6.60133 8.15581 6.47467 8.28425C6.348 8.4127 6.18978 8.47648 6 8.47559ZM8.66667 8.47559C8.47778 8.47559 8.31956 8.41159 8.192 8.28359C8.06444 8.15559 8.00044 7.99736 8 7.80892C7.99956 7.62048 8.06356 7.46225 8.192 7.33425C8.32044 7.20625 8.47867 7.14225 8.66667 7.14225C8.85467 7.14225 9.01311 7.20625 9.142 7.33425C9.27089 7.46225 9.33467 7.62048 9.33333 7.80892C9.332 7.99736 9.268 8.15581 9.14133 8.28425C9.01467 8.4127 8.85644 8.47648 8.66667 8.47559ZM1.33333 13.8089C0.966667 13.8089 0.652889 13.6785 0.392 13.4176C0.131111 13.1567 0.000444444 12.8427 0 12.4756V3.14225C0 2.77559 0.130667 2.46181 0.392 2.20092C0.653333 1.94003 0.967111 1.80936 1.33333 1.80892H2V0.475586H3.33333V1.80892H8.66667V0.475586H10V1.80892H10.6667C11.0333 1.80892 11.3473 1.93959 11.6087 2.20092C11.87 2.46225 12.0004 2.77603 12 3.14225V12.4756C12 12.8423 11.8696 13.1563 11.6087 13.4176C11.3478 13.6789 11.0338 13.8094 10.6667 13.8089H1.33333ZM1.33333 12.4756H10.6667V5.80892H1.33333V12.4756Z" 
                        fill="#727272"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 블랙 리스트 버튼 */}
        <Button
          onClick={handleSubmit}
          className="flex w-full items-center justify-center gap-2.5 rounded bg-[#2A2A2A] px-[55px] py-5 hover:bg-[#2A2A2A]/90"
        >
          <span className="font-pretendard text-lg font-bold leading-6 text-white">
            블랙 리스트
          </span>
        </Button>
      </div>
    </div>
  );
}
