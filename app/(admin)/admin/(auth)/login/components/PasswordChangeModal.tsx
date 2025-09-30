'use client';

import React, { useState } from 'react';
import { Close } from '@/components/icons';
import { FaCheck } from 'react-icons/fa';
import Image from 'next/image';
interface PasswordChangeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PasswordChangeModal({ isOpen, onClose }: PasswordChangeModalProps) {
  const [passwords, setPasswords] = useState({
    newPassword: '',
    confirmPassword: '',
  });
  const [validations, setValidations] = useState({
    isLengthValid: false,
    hasLetterAndNumber: false,
    passwordsMatch: false,
  });

  const handlePasswordChange = (field: 'newPassword' | 'confirmPassword', value: string) => {
    const updatedPasswords = { ...passwords, [field]: value };
    setPasswords(updatedPasswords);

    // 비밀번호 검증
    const isLengthValid =
      updatedPasswords.newPassword.length >= 8 && updatedPasswords.newPassword.length <= 16;
    const hasLetterAndNumber = /^(?=.*[A-Za-z])(?=.*\d)/.test(updatedPasswords.newPassword);
    const passwordsMatch =
      updatedPasswords.newPassword === updatedPasswords.confirmPassword &&
      updatedPasswords.confirmPassword.length > 0;

    setValidations({
      isLengthValid,
      hasLetterAndNumber,
      passwordsMatch,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validations.isLengthValid && validations.hasLetterAndNumber && validations.passwordsMatch) {
      console.log('비밀번호 변경 요청:', passwords);
      // TODO: 비밀번호 변경 API 호출
      onClose();
    }
  };

  const isFormValid =
    validations.isLengthValid && validations.hasLetterAndNumber && validations.passwordsMatch;

  if (!isOpen) return null;

  return (
    <>
      {/* 오버레이 */}
      <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={onClose} />

      {/* 모달 */}
      <div className="fixed left-1/2 top-1/2 z-50 flex w-[520px] -translate-x-1/2 -translate-y-1/2 flex-col justify-center rounded-xl bg-white p-11 shadow-sm max-md:w-[90%] max-md:max-w-[480px] max-md:px-5 max-sm:w-[95%] max-sm:max-w-[400px] max-sm:px-4">
        <div className="w-full">
          <div className="w-full">
            {/* 헤더 */}
            <div className="flex w-full items-start justify-between gap-10 text-xl font-semibold leading-tight text-neutral-800 max-md:gap-6 max-sm:text-lg">
              <div>비밀번호 변경</div>
              <button onClick={onClose} className="cursor-pointer">
                <Close className="aspect-square h-6 w-6 shrink-0" />
              </button>
            </div>

            {/* 설명 */}
            <div className="mt-3 text-base leading-6 tracking-tight text-zinc-500 max-sm:text-sm">
              가입 시 입력한 이메일 주소를 입력해주세요.
              <br />
              임시 비밀번호를 발송해드립니다.
            </div>
          </div>

          {/* 폼 */}
          <div className="mt-6 w-full">
            <form onSubmit={handleSubmit} className="w-full">
              <div className="w-full">
                {/* 새 비밀번호 */}
                <div className="w-full">
                  <div className="flex min-h-11 w-40 max-w-full items-start gap-1 py-3.5 text-sm font-medium leading-none text-neutral-500">
                    <div className="text-neutral-500">새 비밀번호</div>
                  </div>
                  <div className="flex min-h-12 w-full items-start justify-between rounded border border-solid border-stone-200 bg-orange-4 px-4 py-3 text-base tracking-tight">
                    <input
                      type="password"
                      value={passwords.newPassword}
                      onChange={(e) => handlePasswordChange('newPassword', e.target.value)}
                      placeholder="새 비밀번호를 입력해주세요"
                      className="flex-1 shrink basis-0 border-none bg-transparent text-stone-800 outline-none placeholder:text-stone-300"
                    />
                  </div>
                </div>

                {/* 검증 메시지 */}
                <div className="mt-3 flex w-full items-center gap-1.5 px-3 text-xs font-medium leading-6">
                  <Image src="/images_jj/check.png" alt="check" width={16} height={16} />
                  <div className="my-auto self-stretch text-green-500">8~16자 영문, 숫자 혼용</div>
                </div>

                {/* 비밀번호 확인 */}
                <div className="mt-3 w-full">
                  <div className="flex w-40 max-w-full items-start gap-1 py-3.5 text-sm font-medium leading-none text-neutral-500 min-h-11">
                    <div className="text-neutral-500">비밀번호 확인</div>
                  </div>
                  <div className="flex min-h-12 w-full items-start justify-between rounded border border-solid border-stone-200 bg-orange-4 px-4 py-3 text-base tracking-tight">
                    <input
                      type="password"
                      value={passwords.confirmPassword}
                      onChange={(e) => handlePasswordChange('confirmPassword', e.target.value)}
                      placeholder="새 비밀번호를 다시 한 번 입력해주세요"
                      className="flex-1 shrink basis-0 border-none bg-transparent text-stone-800 outline-none placeholder:text-stone-300"
                    />
                  </div>

                  {/* 비밀번호 일치 확인 메시지 */}
                </div>
              </div>

              {/* 저장 버튼 */}
              <button
                type="submit"
                disabled={!isFormValid}
                className={`mt-8 flex w-full cursor-pointer items-center justify-center gap-2.5 rounded px-14 py-5 text-lg font-semibold leading-none text-white transition-colors max-md:px-5 ${
                  isFormValid ? 'bg-red-800 hover:bg-red-700' : 'cursor-not-allowed bg-gray-300'
                }`}
              >
                <div className="my-auto self-stretch whitespace-nowrap text-white">저장하기</div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
