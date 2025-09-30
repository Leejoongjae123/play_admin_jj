'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { X, ChevronUp, Calendar } from 'lucide-react';

interface SuspensionModalProps {
  isOpen: boolean;
  onClose: () => void;
  memberId: string;
}

const suspensionReasons = [
  '스팸 메시지 발송',
  '부적절한 콘텐츠 게시',
  '욕설 및 비방',
  '악의적 행동',
  '기타',
];

export default function SuspensionModal({ isOpen, onClose, memberId }: SuspensionModalProps) {
  const [selectedReason, setSelectedReason] = useState('정지 사유 선택');
  const [reasonText, setReasonText] = useState('');
  const [startDate, setStartDate] = useState('2025-08-08');
  const [endDate, setEndDate] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = () => {
    // 활동 정지 처리 로직
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
      {/* 배�� 오버레이 */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      
      {/* 모달 */}
      <div className="relative flex w-[520px] flex-col items-center gap-[46px] rounded-xl bg-white p-11 shadow-[0_0_10px_0_rgba(146,46,0,0.08)]">
        {/* 헤더 */}
        <div className="flex w-full flex-col items-start gap-6">
          <div className="flex w-full items-start justify-between">
            <h2 className="font-pretendard text-xl font-bold leading-6 text-[#202224]">
              활동 정지
            </h2>
            <button onClick={onClose} className="p-0">
              <X size={24} color="#6D6D6D" strokeWidth={1.6} />
            </button>
          </div>

          {/* 콘텐츠 */}
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

            {/* 정지 사유 선택 */}
            <div className="flex w-full flex-col items-start gap-3">
              <div className="relative w-full">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex w-full items-center justify-between rounded-md border border-[#EBEBEB] bg-white px-3 py-3"
                >
                  <span className={`font-pretendard text-xs font-bold leading-normal ${
                    selectedReason === '정지 사유 선택' ? 'text-primary' : 'text-primary'
                  }`}>
                    {selectedReason}
                  </span>
                  <ChevronUp 
                    size={10} 
                    color="#911A00" 
                    className={`transition-transform ${isDropdownOpen ? 'rotate-0' : 'rotate-180'}`}
                  />
                </button>

                {/* 드롭다운 메뉴 */}
                {isDropdownOpen && (
                  <div className="absolute top-full z-10 mt-1 w-full rounded-md border border-[#EBEBEB] bg-white shadow-lg">
                    {suspensionReasons.map((reason) => (
                      <button
                        key={reason}
                        onClick={() => {
                          setSelectedReason(reason);
                          setIsDropdownOpen(false);
                        }}
                        className="w-full px-3 py-2 text-left font-pretendard text-xs font-bold text-primary hover:bg-gray-50"
                      >
                        {reason}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* 사유 입력 텍스트박스 */}
              <div className="relative w-full rounded-lg border border-gray-6 bg-[#FAF8F6] p-5">
                <textarea
                  value={reasonText}
                  onChange={(e) => setReasonText(e.target.value)}
                  placeholder="해당 회원을 정지하려는 사유를 입력해주세요. 해당 회원을 정지하려는 사유를 입력해주세요."
                  className="h-[84px] w-full resize-none bg-transparent font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-orange-3 placeholder-orange-3 focus:outline-none"
                />
                <div className="absolute bottom-2 right-2 h-3 w-2 rotate-[135deg] bg-[#E0E2E7]" 
                     style={{
                       clipPath: 'polygon(0 100%, 100% 100%, 100% 0)'
                     }}
                />
              </div>

              {/* 제재 기간 선택 */}
              <div className="flex w-full flex-col items-start gap-2">
                <h3 className="font-pretendard text-base font-bold leading-6 text-gray-2">
                  제재 기간 선택
                </h3>
                <div className="flex w-full items-center gap-2.5">
                  {/* 시작일 */}
                  <div className="flex flex-1 items-center justify-between rounded-md border border-[#EBEBEB] bg-white px-3 py-3">
                    <span className="font-pretendard text-xs font-bold leading-normal text-primary">
                      {startDate}
                    </span>
                    <Calendar size={12} color="#727272" />
                  </div>
                  
                  {/* 구분자 */}
                  <span className="font-pretendard text-xs font-bold leading-normal text-[#727272]">
                    -
                  </span>
                  
                  {/* 종료일 */}
                  <div className="flex flex-1 items-center justify-between rounded-md border border-[#EBEBEB] bg-white px-3 py-3">
                    <span className={`font-pretendard text-xs leading-normal ${
                      endDate ? 'font-bold text-primary' : 'font-medium text-[#727272]'
                    }`}>
                      {endDate || '날짜 입력'}
                    </span>
                    <Calendar size={12} color="#727272" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 활동 정지 버튼 */}
        <Button
          onClick={handleSubmit}
          className="flex w-full items-center justify-center gap-2.5 rounded bg-primary px-[55px] py-5 hover:bg-primary/90"
        >
          <span className="font-pretendard text-lg font-bold leading-6 text-white">
            활동 정지
          </span>
        </Button>
      </div>
    </div>
  );
}
