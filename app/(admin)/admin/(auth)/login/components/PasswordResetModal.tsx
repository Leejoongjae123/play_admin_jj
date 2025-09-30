'use client';

import React, { useState } from 'react';
import { Close } from '@/components/icons';
import { useRouter } from 'next/navigation';
interface PasswordResetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const emailDomains = [
  '직접입력',
  'gmail.com',
  'naver.com',
  'daum.net',
  'hanmail.net',
  'nate.com',
  'yahoo.com',
];

export default function PasswordResetModal({ isOpen, onClose }: PasswordResetModalProps) {
  const [emailForm, setEmailForm] = useState({
    localPart: '',
    domain: '직접입력',
    customDomain: '',
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const email =
      emailForm.domain === '직접입력'
        ? `${emailForm.localPart}@${emailForm.customDomain}`
        : `${emailForm.localPart}@${emailForm.domain}`;

    console.log('비밀번호 찾기 요청:', email);
    // TODO: 비밀번호 찾기 API 호출
    onClose();
  };
  const handleFindPassword = () => {
    console.log('비밀번호 찾기 요청:', emailForm);
    // TODO: 비밀번호 찾기 API 호출
    router.push('/admin/send-mail');
  };

  const handleDomainSelect = (domain: string) => {
    setEmailForm((prev) => ({ ...prev, domain }));
    setIsDropdownOpen(false);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* 오버레이 */}
      <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={onClose} />

      {/* 모달 */}
      <div className="fixed left-1/2 top-1/2 z-50 flex h-96 w-[520px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-12 rounded-xl bg-white p-11 shadow-sm max-md:w-[90%] max-md:max-w-[480px] max-md:gap-9 max-md:p-8 max-sm:h-auto max-sm:w-[95%] max-sm:max-w-[400px] max-sm:gap-7 max-sm:p-6">
        <div className="flex flex-col items-start gap-6 self-stretch">
          {/* 헤더 */}
          <div className="flex flex-col items-start gap-3 self-stretch">
            <div className="flex items-start justify-between self-stretch">
              <div className="text-xl font-bold leading-6 text-neutral-800 max-md:text-lg max-md:leading-6 max-sm:text-base max-sm:leading-5">
                비밀번호 찾기
              </div>
              <button onClick={onClose} className="cursor-pointer">
                <Close className="h-6 w-6" />
              </button>
            </div>
            <div className="text-base leading-6 tracking-tight text-zinc-500 max-md:text-base max-md:leading-6 max-sm:text-sm max-sm:leading-5">
              가입 시 입력한 이메일 주소를 입력해주세요.
              <br />
              임시 비밀번호를 발송해드립니다.
            </div>
          </div>

          {/* 폼 */}
          <div className="flex flex-col items-center gap-3 self-stretch">
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-8 self-stretch">
              {/* 이메일 입력 */}
              <div className="flex flex-col items-start self-stretch">
                <div className="flex h-11 w-40 items-start gap-1 px-0 py-4">
                  <div className="text-sm leading-4 text-neutral-500 max-md:text-sm max-sm:text-xs">
                    아이디
                    <span className="text-sm leading-4 text-red-500">*</span>
                  </div>
                </div>
                <div className="flex h-12 items-center self-stretch max-sm:h-auto max-sm:flex-col max-sm:gap-3">
                  {/* 로컬 파트 */}
                  <div className="flex w-[200px] flex-col items-start gap-2.5 pr-3 max-md:w-[180px] max-sm:w-full">
                    <div className="flex flex-[1_0_0] items-start justify-between self-stretch rounded border border-solid border-stone-200 bg-orange-4 px-4 py-3">
                      <input
                        type="text"
                        value={emailForm.localPart}
                        onChange={(e) =>
                          setEmailForm((prev) => ({ ...prev, localPart: e.target.value }))
                        }
                        placeholder="email"
                        className="flex-[1_0_0] border-none bg-transparent text-base leading-6 tracking-tight text-neutral-800 outline-none placeholder:text-stone-300 max-md:text-base max-md:leading-6 max-sm:text-sm max-sm:leading-5"
                      />
                    </div>
                  </div>

                  {/* @ 기호와 도메인 */}
                  <div className="flex items-center gap-3">
                    <div className="text-sm leading-4 text-neutral-500">@</div>
                    <div className="relative w-[207px]">
                      {emailForm.domain === '직접입력' ? (
                        <div className="flex items-center self-stretch rounded border border-solid border-stone-200 bg-orange-4 px-4 py-3">
                          <input
                            type="text"
                            value={emailForm.customDomain}
                            onChange={(e) =>
                              setEmailForm((prev) => ({ ...prev, customDomain: e.target.value }))
                            }
                            placeholder="직접입력"
                            className="flex-1 border-none bg-transparent text-base leading-6 tracking-tight text-neutral-800 outline-none placeholder:text-stone-300 max-md:text-base max-md:leading-6 max-sm:text-sm max-sm:leading-5"
                          />
                          <button
                            type="button"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="ml-2 flex-shrink-0"
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                              <path
                                d="M11.1719 17.0343C11.5685 17.6205 12.4318 17.6205 12.8284 17.0343L19.9905 6.44807C20.4398 5.78399 19.964 4.88772 19.1622 4.88772H4.83802C4.03624 4.88772 3.56048 5.78399 4.00976 6.44807L11.1719 17.0343Z"
                                fill="#911A00"
                              />
                            </svg>
                          </button>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          className="flex w-full items-center justify-between rounded border border-solid border-stone-200 bg-orange-4 px-4 py-3"
                        >
                          <span className="text-base leading-6 tracking-tight text-neutral-800 max-md:text-base max-md:leading-6 max-sm:text-sm max-sm:leading-5">
                            {emailForm.domain}
                          </span>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="flex-shrink-0"
                          >
                            <path
                              d="M11.1719 17.0343C11.5685 17.6205 12.4318 17.6205 12.8284 17.0343L19.9905 6.44807C20.4398 5.78399 19.964 4.88772 19.1622 4.88772H4.83802C4.03624 4.88772 3.56048 5.78399 4.00976 6.44807L11.1719 17.0343Z"
                              fill="#911A00"
                            />
                          </svg>
                        </button>
                      )}

                      {/* 드롭다운 */}
                      {isDropdownOpen && (
                        <div className="absolute top-full z-10 mt-1 w-full rounded border border-solid border-stone-200 bg-white shadow-lg">
                          {emailDomains.map((domain) => (
                            <button
                              key={domain}
                              type="button"
                              onClick={() => handleDomainSelect(domain)}
                              className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                            >
                              {domain}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* 버튼 */}
              <button
                type="submit"
                className="flex cursor-pointer items-center justify-center gap-2.5 self-stretch rounded bg-red-800 px-14 py-5 transition-colors hover:bg-red-700 max-md:px-11 max-md:py-5 max-sm:px-9 max-sm:py-4"
                onClick={handleFindPassword}
              >
                <span className="text-lg font-bold leading-6 text-white max-md:text-base max-md:leading-6 max-sm:text-base max-sm:leading-5">
                  비밀번호 찾기
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
