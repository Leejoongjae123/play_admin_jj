'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

interface SendNotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'notification' | 'message';
}

export default function SendNotificationModal({ isOpen, onClose, type }: SendNotificationModalProps) {
  const [content, setContent] = useState('');

  if (!isOpen) return null;

  const title = type === 'notification' ? '[알림] 보내기' : '[쪽지] 보내기';

  const handleSubmit = () => {
    // 전송 로직 구현
    console.log('전송 내용:', content);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className="flex w-[520px] flex-col items-center rounded-xl bg-white relative"
        style={{
          boxShadow: '0 0 10px 0 rgba(146, 46, 0, 0.08)',
          height: '506px',
          padding: '44px',
          gap: '46px'
        }}
      >
        {/* 헤더 */}
        <div className="flex flex-col items-start self-stretch" style={{ gap: '24px' }}>
          <div className="flex justify-between items-start self-stretch">
            <h2 className="text-xl font-semibold text-[#202224] font-pretendard">
              {title}
            </h2>
            <button 
              onClick={onClose}
              className="w-6 h-6 flex items-center justify-center"
            >
              <X size={16} className="text-[#6D6D6D]" strokeWidth={1.6} />
            </button>
          </div>

          {/* 정보 테이블 */}
          <div className="flex flex-col items-start self-stretch border border-gray-7">
            {/* 작성자 행 */}
            <div className="flex h-12 items-center self-stretch border-b border-gray-7">
              <div className="flex w-40 px-6 py-2.5 items-center gap-2.5 self-stretch bg-gray-7">
                <span className="text-base font-normal text-gray-2 font-pretendard" style={{ letterSpacing: '-0.32px' }}>
                  작성자
                </span>
              </div>
              <div className="flex px-6 py-2.5 items-center gap-2.5 flex-1">
                <span className="text-base font-normal text-gray-1 font-pretendard" style={{ letterSpacing: '-0.32px' }}>
                  인스크립트 운영자
                </span>
              </div>
            </div>

            {/* 받는 사람 행 */}
            <div className="flex h-12 items-center self-stretch border-b border-gray-7">
              <div className="flex w-40 px-6 py-2.5 items-center gap-2.5 self-stretch bg-gray-7">
                <span className="text-base font-normal text-gray-2 font-pretendard" style={{ letterSpacing: '-0.32px' }}>
                  받는 사람
                </span>
              </div>
              <div className="flex px-6 py-2.5 items-center gap-2.5 flex-1">
                <span className="text-base font-normal text-gray-1 font-pretendard" style={{ letterSpacing: '-0.32px' }}>
                  &lt;바이 하트&gt; 북토크 신청자
                </span>
              </div>
            </div>
          </div>

          {/* 입력 영역 */}
          <div
            className="flex flex-col items-end self-stretch rounded-lg border border-gray-6 relative"
            style={{
              backgroundColor: '#FAF8F6',
              padding: '20px',
              gap: '84px'
            }}
          >
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="보낼 내용을 입력해주세요"
              className="w-full bg-transparent text-base font-normal text-gray-1 font-pretendard resize-none border-none outline-none"
              style={{
                letterSpacing: '-0.32px',
                lineHeight: '24px',
                color: content ? '#2A2A2A' : '#CCBCAB'
              }}
              rows={3}
            />
            <div className="absolute bottom-5 right-5">
              <svg
                width="12"
                height="8"
                viewBox="0 0 7 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ transform: 'rotate(135deg)' }}
              >
                <path
                  d="M6.67466 5.74715C6.71829 6.35472 6.21319 6.85982 5.60562 6.8162L1.02376 6.48723C0.169203 6.42588 -0.217554 5.38851 0.388262 4.7827L4.64116 0.529803C5.24698 -0.0760114 6.28435 0.310745 6.3457 1.1653L6.67466 5.74715Z"
                  fill="#E0E2E7"
                />
              </svg>
            </div>
          </div>

          {/* 전송 버튼 */}
          <button
            onClick={handleSubmit}
            className="flex justify-center items-center self-stretch rounded bg-primary"
            style={{
              padding: '20px 55px',
              gap: '10px',
              borderRadius: '4px'
            }}
          >
            <span className="font-pretendard font-semibold text-white" style={{ fontSize: '18px', lineHeight: '24px' }}>
              전송
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
