'use client';

import React, { useState } from 'react';
import { CheckboxUI } from '@/components/common/Checkbox/CheckboxUI';
import FormTextareaInput from '@/components/common/Input/FormTextareaInput';
import Image from 'next/image';
import PasswordResetModal from './components/PasswordResetModal';
import PasswordChangeModal from './components/PasswordChangeModal';
export default function AdminLoginPage() {
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
    rememberPassword: false,
  });
  const [isPasswordResetModalOpen, setIsPasswordResetModalOpen] = useState(false);
  const [isPasswordChangeModalOpen, setIsPasswordChangeModalOpen] = useState(false);

  const handleInputChange = (field: string, value: string | boolean) => {
    setLoginForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 로그인 로직 구현
    console.log('로그인 시도:', loginForm);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-y-[51.84px] bg-background">
      <div className="flex w-[520px] flex-col items-end gap-12 rounded-xl bg-white px-16 pb-14 pt-20 shadow-sm max-md:w-[90%] max-md:max-w-[480px] max-md:gap-9 max-md:px-10 max-md:pb-10 max-md:pt-16 max-sm:w-[95%] max-sm:max-w-[360px] max-sm:gap-7 max-sm:px-6 max-sm:pb-8 max-sm:pt-10">
        <div className="flex flex-col items-start gap-6 self-stretch">
          <div className="text-xl font-bold leading-6 text-neutral-800 max-md:text-lg max-md:leading-6 max-sm:text-base max-sm:leading-5">
            로그인
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col items-center gap-3 self-stretch">
            <div className="flex flex-col items-center gap-8 self-stretch max-md:gap-6 max-sm:gap-5">
              {/* 아이��� 입력 */}
              <div className="flex flex-col items-start gap-3 self-stretch">
                <div className="flex flex-col items-start self-stretch">
                  <div className="flex h-11 w-40 items-start gap-1 px-0 py-4 max-md:h-auto max-md:w-full max-md:px-0 max-md:py-3 max-sm:px-0 max-sm:py-2">
                    <div className="text-sm leading-4 text-neutral-500 max-sm:text-sm max-sm:leading-4">
                      아이디
                    </div>
                  </div>
                  <div className="flex h-14 items-start justify-between self-stretch rounded border border-solid border-stone-200 bg-orange-4 px-5 py-4 max-md:h-[52px] max-md:px-4 max-md:py-3.5 max-sm:h-12 max-sm:px-4 max-sm:py-3">
                    <input
                      type="text"
                      value={loginForm.username}
                      onChange={(e) => handleInputChange('username', e.target.value)}
                      placeholder="아이디를 입력해주세요"
                      className="flex-[1_0_0] border-none bg-transparent text-base leading-6 tracking-tight text-orange-3 outline-none placeholder:text-orange-3 max-md:text-base max-md:leading-6 max-sm:text-sm max-sm:leading-5"
                    />
                  </div>
                </div>

                {/* 비밀번호 입력 */}
                <div className="flex flex-col items-start self-stretch">
                  <div className="flex h-11 w-40 items-start gap-1 px-0 py-4 max-md:h-auto max-md:w-full max-md:px-0 max-md:py-3 max-sm:px-0 max-sm:py-2">
                    <div className="text-sm leading-4 text-neutral-500 max-sm:text-sm max-sm:leading-4">
                      비밀번호
                    </div>
                  </div>
                  <div className="flex h-14 items-start justify-between self-stretch rounded border border-solid border-stone-200 bg-orange-4 px-5 py-4 max-md:h-[52px] max-md:px-4 max-md:py-3.5 max-sm:h-12 max-sm:px-4 max-sm:py-3">
                    <input
                      type="password"
                      value={loginForm.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      placeholder="비밀번호를 입력해주세요"
                      className="flex-[1_0_0] border-none bg-transparent text-base leading-6 tracking-tight text-orange-3 outline-none placeholder:text-orange-3 max-md:text-base max-md:leading-6 max-sm:text-sm max-sm:leading-5"
                    />
                  </div>
                </div>

                {/* 옵션 영역 */}
                <div className="flex items-center justify-between self-stretch max-sm:flex-col max-sm:items-start max-sm:gap-3">
                  <CheckboxUI
                    id="rememberPassword"
                    checked={loginForm.rememberPassword}
                    onChange={(checked) => handleInputChange('rememberPassword', checked)}
                    label="비밀번호 저장"
                    className="h-6 items-center gap-1"
                  />
                  <div className="flex flex-col items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setIsPasswordResetModalOpen(true)}
                      className="text-sm leading-4 text-neutral-500 hover:text-neutral-700 max-sm:text-sm max-sm:leading-4"
                    >
                      비밀번호를 잊어버리셨나요?
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsPasswordChangeModalOpen(true)}
                      className="text-sm leading-4 text-neutral-500 hover:text-neutral-700 max-sm:text-sm max-sm:leading-4"
                    >
                      비밀번호 변경(임시)
                    </button>
                  </div>
                </div>
              </div>

              {/* 로그인 버튼 */}
              <button
                type="submit"
                className="flex cursor-pointer items-center justify-center gap-2.5 self-stretch rounded bg-red-800 px-14 py-5 transition-colors hover:bg-red-700 max-md:px-10 max-md:py-5 max-sm:px-8 max-sm:py-4"
              >
                <span className="text-lg font-bold leading-6 text-white max-md:text-base max-md:leading-6 max-sm:text-base max-sm:leading-5">
                  로그인
                </span>
              </button>
            </div>
          </form>
        </div>

        {/* 로고 */}
        <div className="h-[17px] w-[76px] max-md:h-[15px] max-md:w-[68px] max-sm:h-[13px] max-sm:w-[60px]">
          <Image src="/images_jj/logo2.png" alt="logo" width={76} height={17}></Image>
        </div>
      </div>

      {/* 비밀번호 ��기 모달 */}
      <PasswordResetModal
        isOpen={isPasswordResetModalOpen}
        onClose={() => setIsPasswordResetModalOpen(false)}
      />

      {/* 비밀번호 변경 모달 */}
      <PasswordChangeModal
        isOpen={isPasswordChangeModalOpen}
        onClose={() => setIsPasswordChangeModalOpen(false)}
      />

      <div className="flex flex-col items-center gap-5 text-orange-2">
        <div>관리자 계정 생성을 위해서는 시스템 관리자에게 연락바랍니다.</div>
        <div>홍길동 과장 | 02-1234-1234 | admin@000.com</div>
      </div>
    </div>
  );
}
