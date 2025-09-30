'use client';

import { useState } from 'react';
import { X, ChevronUp } from 'lucide-react';

interface AccountRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AccountRegistrationModal({ isOpen, onClose }: AccountRegistrationModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    passwordConfirm2: '',
    status: 'Y'
  });
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);

  if (!isOpen) return null;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    // 계정등록 처리 로직
    console.log('계정등록 데이터:', formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* 배경 오버레이 */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      
      {/* 모달 */}
      <div className="relative flex h-[832px] w-[520px] flex-col items-center gap-[46px] rounded-xl bg-white p-11 shadow-[0_0_10px_0_rgba(146,46,0,0.08)]">
        {/* 헤더 */}
        <div className="flex w-full flex-col items-start gap-6">
          <div className="flex w-full items-start justify-between">
            <h2 className="font-pretendard text-xl font-bold leading-6 text-[#202224]">
              계정등록/상세
            </h2>
            <button onClick={onClose} className="p-0">
              <X size={24} color="#6D6D6D" strokeWidth={1.6} />
            </button>
          </div>

          {/* 폼 필드들 */}
          <div className="flex w-full flex-col items-start gap-8">
            {/* 이름 필드 */}
            <div className="flex w-full flex-col items-start">
              <div className="flex w-40 h-11 items-start gap-1 px-0 py-4">
                <div className="font-pretendard text-sm font-medium leading-4 text-gray-3">
                  이름
                </div>
              </div>
              <div className="flex h-12 w-full items-start justify-between rounded border border-red-3 bg-orange-4 px-4 py-3">
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="이름을 입력해주세요"
                  className="flex-1 bg-transparent font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-black outline-none placeholder:text-orange-3"
                />
              </div>
            </div>

            {/* ID 필드 */}
            <div className="flex w-full flex-col items-start">
              <div className="flex w-40 h-11 items-start gap-1 px-0 py-4">
                <div className="font-pretendard text-sm font-medium leading-4 text-gray-3">
                  ID
                </div>
              </div>
              <div className="flex h-12 w-full items-start justify-between rounded border border-red-3 bg-orange-4 px-4 py-3">
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="이메일을 입력해주세요"
                  className="flex-1 bg-transparent font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-black outline-none placeholder:text-orange-3"
                />
              </div>
            </div>

            {/* 비밀번호 필드 */}
            <div className="flex w-full flex-col items-start">
              <div className="flex w-40 h-11 items-start gap-1 px-0 py-4">
                <div className="font-pretendard text-sm font-medium leading-4 text-gray-3">
                  비밀번호
                </div>
              </div>
              <div className="flex h-12 w-full items-start justify-between rounded border border-red-3 bg-orange-4 px-4 py-3">
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  placeholder="비밀번호를 입력해주세요"
                  className="flex-1 bg-transparent font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-black outline-none placeholder:text-orange-3"
                />
              </div>
            </div>

            {/* 비밀번호 확인 필드 */}
            <div className="flex w-full flex-col items-start">
              <div className="flex w-40 h-11 items-start gap-1 px-0 py-4">
                <div className="font-pretendard text-sm font-medium leading-4 text-gray-3">
                  비밀번호 확인
                </div>
              </div>
              <div className="flex h-12 w-full items-start justify-between rounded border border-red-3 bg-orange-4 px-4 py-3">
                <input
                  type="password"
                  value={formData.passwordConfirm}
                  onChange={(e) => handleInputChange('passwordConfirm', e.target.value)}
                  placeholder="새 비밀번호를 다시 한 번 입력해주세요"
                  className="flex-1 bg-transparent font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-black outline-none placeholder:text-orange-3"
                />
              </div>
            </div>

            {/* 비밀번호 확인 2 필드 */}
            <div className="flex w-full flex-col items-start">
              <div className="flex w-40 h-11 items-start gap-1 px-0 py-4">
                <div className="font-pretendard text-sm font-medium leading-4 text-gray-3">
                  비밀번호 확인
                </div>
              </div>
              <div className="flex h-12 w-full items-start justify-between rounded border border-red-3 bg-orange-4 px-4 py-3">
                <input
                  type="password"
                  value={formData.passwordConfirm2}
                  onChange={(e) => handleInputChange('passwordConfirm2', e.target.value)}
                  placeholder="새 비밀번호를 다시 한 번 입력해주세요"
                  className="flex-1 bg-transparent font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-black outline-none placeholder:text-orange-3"
                />
              </div>
            </div>

            {/* 사용여부 필드 */}
            <div className="flex w-full flex-col items-start">
              <div className="flex w-40 h-11 items-start gap-1 px-0 py-4">
                <div className="font-pretendard text-sm font-medium leading-4 text-gray-3">
                  사용여부
                </div>
              </div>
              <div className="relative w-full">
                <button
                  onClick={() => setIsStatusDropdownOpen(!isStatusDropdownOpen)}
                  className="flex h-12 w-full items-center justify-between rounded border border-red-3 bg-orange-4 px-5 py-4"
                >
                  <div className="flex flex-1 items-center justify-between">
                    <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-orange-3">
                      {formData.status}
                    </span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`transition-transform ${isStatusDropdownOpen ? 'rotate-180' : ''}`}
                    >
                      <path
                        d="M11.1719 17.0336C11.5685 17.6198 12.4318 17.6198 12.8284 17.0336L19.9905 6.44734C20.4398 5.78326 19.964 4.88699 19.1622 4.88699H4.83802C4.03624 4.88699 3.56048 5.78326 4.00976 6.44734L11.1719 17.0336Z"
                        fill="#911A00"
                      />
                    </svg>
                  </div>
                </button>

                {/* 드롭다운 메뉴 */}
                {isStatusDropdownOpen && (
                  <div className="absolute top-full z-10 mt-1 w-full rounded border border-red-3 bg-white shadow-lg">
                    {['Y', 'N'].map((status) => (
                      <button
                        key={status}
                        onClick={() => {
                          handleInputChange('status', status);
                          setIsStatusDropdownOpen(false);
                        }}
                        className="w-full px-5 py-3 text-left font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-orange-3 hover:bg-orange-4"
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 저장 버튼 */}
        <button
          onClick={handleSubmit}
          className="flex w-full items-center justify-center gap-2.5 rounded bg-primary px-[55px] py-5 hover:bg-primary/90"
        >
          <span className="font-pretendard text-lg font-bold leading-6 text-white">
            저장
          </span>
        </button>
      </div>
    </div>
  );
}
