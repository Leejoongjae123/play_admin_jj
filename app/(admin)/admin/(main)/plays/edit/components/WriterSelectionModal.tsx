'use client';

import { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody } from '@/components/ui/modal';

interface Writer {
  id: string;
  name: string;
  englishName: string;
  representative: string;
}

interface WriterSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (writer: Writer) => void;
}

// 임시 데이터
const mockWriters: Writer[] = [
  { id: '1', name: '무대인', englishName: 'modaein', representative: 'modaein' },
  { id: '2', name: '무대인', englishName: 'modaein', representative: 'modaein' },
  { id: '3', name: '무대인', englishName: 'modaein', representative: 'modaein' },
  { id: '4', name: '무대인', englishName: 'modaein', representative: 'modaein' },
  { id: '5', name: '무대인', englishName: 'modaein', representative: 'modaein' },
];

export default function WriterSelectionModal({
  isOpen,
  onClose,
  onSelect,
}: WriterSelectionModalProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedWriter, setSelectedWriter] = useState<Writer | null>(null);

  const handleConfirm = () => {
    if (selectedWriter) {
      onSelect(selectedWriter);
      onClose();
    }
  };

  const handleCancel = () => {
    setSelectedWriter(null);
    onClose();
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <ModalContent className="w-[520px]">
        <div className="flex w-full flex-col items-start gap-6">
          <ModalHeader onClose={onClose}>
            <span className="font-pretendard text-xl font-bold leading-6 text-[#202224]">
              작가 회원
            </span>
          </ModalHeader>

          <ModalBody className="gap-6">
            {/* 검색 입력 필드 */}
            <div className="flex w-full items-start">
              <div className="relative flex w-full items-center">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="작가명 (한글/영문) 검색"
                  className="flex h-14 w-full items-center justify-between rounded border border-red-3 bg-orange-4 px-5 py-4 font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-1 placeholder:text-orange-3 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <svg
                  className="absolute right-5"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle cx="11.5" cy="11.8008" r="9.5" stroke="#911A00" strokeWidth="2" />
                  <path
                    d="M18.5 18.8008L22 22.3008"
                    stroke="#911A00"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            {/* 작가 목록 테이블 */}
            <div className="flex w-full flex-col items-start">
              <div className="flex w-full flex-col items-start bg-white">
                {/* 테이블 헤더 */}
                <div className="flex w-full items-center justify-between border-b border-gray-7 bg-gray-7 px-4 py-2.5">
                  <div className="text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">
                    선택
                  </div>
                  <div className="w-[120px] text-center text-sm font-medium leading-4 text-[#6A6A6A]">
                    작가명
                  </div>
                  <div className="w-[120px] text-center text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">
                    영문명
                  </div>
                  <div className="w-[120px] text-center text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">
                    대표작
                  </div>
                </div>

                {/* 테이블 데이터 */}
                {mockWriters.map((writer, index) => (
                  <div
                    key={writer.id}
                    className="flex w-full items-center justify-between border-b border-gray-7 px-4 py-2.5"
                  >
                    <div className="flex items-center">
                      <button
                        onClick={() => setSelectedWriter(writer)}
                        className="flex items-center"
                      >
                        <div className="relative">
                          <div
                            className={`h-6 w-6 rounded-full border-[1.6px] ${
                              selectedWriter?.id === writer.id
                                ? 'border-primary'
                                : 'border-gray-3'
                            }`}
                          >
                            {selectedWriter?.id === writer.id && (
                              <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"></div>
                            )}
                          </div>
                        </div>
                      </button>
                    </div>
                    <div className="w-[120px] text-center text-sm font-medium leading-4 text-[#6A6A6A]">
                      {writer.name}
                    </div>
                    <div className="w-[120px] text-center text-sm font-medium leading-4 text-[#6A6A6A]">
                      {writer.englishName}
                    </div>
                    <div className="w-[120px] text-center text-sm font-medium leading-4 text-[#6A6A6A]">
                      {writer.representative}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 버튼 */}
            <div className="flex w-full items-start gap-3">
              <button
                onClick={handleCancel}
                className="flex flex-1 items-center justify-center gap-2.5 rounded bg-gray-5 px-6 py-5 font-pretendard text-lg font-bold leading-6 text-gray-3"
              >
                취소
              </button>
              <button
                onClick={handleConfirm}
                disabled={!selectedWriter}
                className={`flex flex-1 items-center justify-center gap-2.5 rounded px-6 py-5 font-pretendard text-lg font-bold leading-6 ${
                  selectedWriter
                    ? 'bg-primary text-white hover:bg-primary/90'
                    : 'bg-primary text-white'
                }`}
              >
                확인
              </button>
            </div>
          </ModalBody>
        </div>
      </ModalContent>
    </Modal>
  );
}
