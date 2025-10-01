'use client';

import { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@/components/ui/modal';
import ModalDropdown from '@/components/ui/modal-dropdown';

interface AccountRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AccountRegistrationModal({
  isOpen,
  onClose,
}: AccountRegistrationModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    passwordConfirm2: '',
    status: 'Y',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    // 계정등록 처리 로직
    console.log('계정등록 데이터:', formData);
    onClose();
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <ModalContent className="h-full w-[520px]">
        <ModalHeader onClose={onClose}>계정등록/상세</ModalHeader>

        <ModalBody className="gap-8">
          {/* 이름 필드 */}
          <div className="flex w-full flex-col items-start">
            <div className="flex h-11 w-40 items-start gap-1 px-0 py-4">
              <div className="font-pretendard text-sm font-medium leading-4 text-gray-3">이름</div>
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
            <div className="flex h-11 w-40 items-start gap-1 px-0 py-4">
              <div className="font-pretendard text-sm font-medium leading-4 text-gray-3">ID</div>
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
            <div className="flex h-11 w-40 items-start gap-1 px-0 py-4">
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
            <div className="flex h-11 w-40 items-start gap-1 px-0 py-4">
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
            <div className="flex h-11 w-40 items-start gap-1 px-0 py-4">
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
          <ModalDropdown
            label="사용여부"
            value={formData.status}
            onChange={(value) => handleInputChange('status', value)}
            options={['Y', 'N']}
          />
        </ModalBody>

        <ModalFooter>
          <button
            onClick={handleSubmit}
            className="flex w-full items-center justify-center gap-2.5 rounded bg-primary px-[55px] py-5 hover:bg-primary/90"
          >
            <span className="font-pretendard text-lg font-bold leading-6 text-white">저장</span>
          </button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
