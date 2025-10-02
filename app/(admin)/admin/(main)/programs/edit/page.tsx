'use client';

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Plus, Search } from '@/components/icons';
import DateEdit from '@/components/ui/date-edit';

interface ProgramFormData {
  programName: string;
  eventDateTime: Date | null;
  applicationPeriod: Date | null;
  location: string;
  capacity: string;
  guidelines: string;
  keywords: string;
  description: string;
  visibility: 'visible' | 'hidden';
}

export default function ProgramEditPage() {
  const [formData, setFormData] = useState<ProgramFormData>({
    programName: '',
    eventDateTime: null,
    applicationPeriod: null,
    location: '',
    capacity: '',
    guidelines: '',
    keywords: '',
    description: '',
    visibility: 'visible',
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [showEventDatePicker, setShowEventDatePicker] = useState(false);
  const [showApplicationDatePicker, setShowApplicationDatePicker] = useState(false);
  const eventDateRef = useRef<HTMLDivElement>(null);
  const applicationDateRef = useRef<HTMLDivElement>(null);

  const handleInputChange =
    (field: keyof ProgramFormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const formatDate = (date: Date | null) => {
    if (!date) return '';
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleEventDateConfirm = (date: Date) => {
    setFormData((prev) => ({ ...prev, eventDateTime: date }));
    setShowEventDatePicker(false);
  };

  const handleApplicationDateConfirm = (date: Date) => {
    setFormData((prev) => ({ ...prev, applicationPeriod: date }));
    setShowApplicationDatePicker(false);
  };

  const handleSubmit = () => {
    // 저장 로직 구현
    console.log('Form data:', formData);
    console.log('Selected file:', selectedFile);
  };

  const handleCancel = () => {
    // 취소 로직 구현
    console.log('Cancel');
  };

  const handlePreview = () => {
    // 미리보기 로직 구현
    console.log('Preview');
  };

  return (
    <div className="flex w-full justify-center p-8">
      <div className="flex w-full flex-col items-center justify-center gap-20 rounded-md bg-white px-11 py-11">
        {/* 헤더 */}
        <div className="flex w-full flex-col gap-4">
          <div className="flex items-center justify-between">
            <h1 className="font-pretendard text-2xl font-bold text-gray-1">
              프로그램 등록 및 수정
            </h1>
          </div>

          {/* 프로그램명 */}
          <div className="flex w-full items-center">
            <div className="flex w-40 items-start gap-1 py-4">
              <span className="font-pretendard text-xl font-bold text-gray-3">프로그램명</span>
              <span className="font-pretendard text-xl font-bold text-red">*</span>
            </div>
            <div className="flex flex-1 rounded border border-red-3 bg-orange-4 px-5 py-4">
              <input
                type="text"
                placeholder="프로그램명을 입력해주세요"
                value={formData.programName}
                onChange={handleInputChange('programName')}
                className="flex-1 bg-transparent font-pretendard text-base placeholder:text-orange-3 focus:outline-none"
              />
            </div>
          </div>

          {/* 행사일시 & 신청기간 */}
          <div className="flex w-full gap-4">
            {/* 행사일시 */}
            <div className="flex flex-1 items-center">
              <div className="flex w-40 items-start gap-1 py-4">
                <span className="font-pretendard text-xl font-bold text-gray-3">행사일시</span>
                <span className="font-pretendard text-xl font-bold text-red">*</span>
              </div>
              <div className="relative flex-1" ref={eventDateRef}>
                <div className="flex items-center justify-between rounded border border-red-3 bg-orange-4 px-5 py-4">
                  <input
                    type="text"
                    placeholder="프로그램 날짜를 선택해주세요"
                    value={formatDate(formData.eventDateTime)}
                    readOnly
                    className="flex-1 cursor-pointer bg-transparent font-pretendard text-base placeholder:text-orange-3 focus:outline-none"
                    onClick={() => setShowEventDatePicker(!showEventDatePicker)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowEventDatePicker(!showEventDatePicker)}
                  >
                    <Calendar size={24} color="#911A00" />
                  </button>
                </div>
                {showEventDatePicker && (
                  <div className="absolute top-full z-50 mt-2">
                    <DateEdit
                      value={formData.eventDateTime || undefined}
                      onConfirm={handleEventDateConfirm}
                      onCancel={() => setShowEventDatePicker(false)}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* 신청기간 */}
            <div className="flex flex-1 items-center">
              <div className="flex w-40 items-start gap-1 py-4">
                <span className="font-pretendard text-xl font-bold text-gray-3">신청기간</span>
                <span className="font-pretendard text-xl font-bold text-red">*</span>
              </div>
              <div className="relative flex-1" ref={applicationDateRef}>
                <div className="flex items-center justify-between rounded border border-red-3 bg-orange-4 px-5 py-4">
                  <input
                    type="text"
                    placeholder="신청 가능한 날짜를 선택해주세요"
                    value={formatDate(formData.applicationPeriod)}
                    readOnly
                    className="flex-1 cursor-pointer bg-transparent font-pretendard text-base placeholder:text-orange-3 focus:outline-none"
                    onClick={() => setShowApplicationDatePicker(!showApplicationDatePicker)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowApplicationDatePicker(!showApplicationDatePicker)}
                  >
                    <Calendar size={24} color="#911A00" />
                  </button>
                </div>
                {showApplicationDatePicker && (
                  <div className="absolute top-full z-50 mt-2">
                    <DateEdit
                      value={formData.applicationPeriod || undefined}
                      onConfirm={handleApplicationDateConfirm}
                      onCancel={() => setShowApplicationDatePicker(false)}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 장소 & 인원 */}
          <div className="flex w-full gap-4">
            {/* 장소 */}
            <div className="flex flex-1 items-center">
              <div className="flex w-40 items-start gap-1 py-4">
                <span className="font-pretendard text-xl font-bold text-gray-3">장소</span>
                <span className="font-pretendard text-xl font-bold text-red">*</span>
              </div>
              <div className="flex flex-1 rounded border border-red-3 bg-orange-4 px-5 py-4">
                <input
                  type="text"
                  placeholder="프로그램 진행 장소를 입력해주세요"
                  value={formData.location}
                  onChange={handleInputChange('location')}
                  className="flex-1 bg-transparent font-pretendard text-base placeholder:text-orange-3 focus:outline-none"
                />
              </div>
            </div>

            {/* 인원 */}
            <div className="flex flex-1 items-center">
              <div className="flex w-40 items-start py-4">
                <span className="font-pretendard text-xl font-bold text-gray-3">인원</span>
              </div>
              <div className="flex flex-1 rounded border border-red-3 bg-orange-4 px-5 py-4">
                <input
                  type="text"
                  placeholder="신청 가능한 인원수를 입력해주세요"
                  value={formData.capacity}
                  onChange={handleInputChange('capacity')}
                  className="flex-1 bg-transparent font-pretendard text-base placeholder:text-orange-3 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* 안내사항 */}
          <div className="flex h-[181px] w-full">
            <div className="flex w-40 items-start gap-1 py-4">
              <span className="font-pretendard text-xl font-bold text-gray-3">안내사항</span>
              <span className="font-pretendard text-xl font-bold text-red">*</span>
            </div>
            <div className="flex flex-1 rounded border border-red-3 bg-orange-4 px-5 py-4">
              <textarea
                placeholder="기타 안내사항을 입력해주세요"
                value={formData.guidelines}
                onChange={handleInputChange('guidelines')}
                className="h-full w-full resize-none bg-transparent font-pretendard text-base placeholder:text-orange-3 focus:outline-none"
              />
            </div>
          </div>

          {/* 키워드 */}
          <div className="flex w-full items-center">
            <div className="flex w-40 items-start gap-1 py-4">
              <span className="font-pretendard text-xl font-bold text-gray-3">키워드</span>
              <span className="font-pretendard text-xl font-bold text-red">*</span>
            </div>
            <div className="flex flex-1 rounded border border-red-3 bg-orange-4 px-5 py-4">
              <input
                type="text"
                placeholder="키워드를 입력해주세요, 쉼표 (,)로 구분합니다."
                value={formData.keywords}
                onChange={handleInputChange('keywords')}
                className="flex-1 bg-transparent font-pretendard text-base placeholder:text-orange-3 focus:outline-none"
              />
            </div>
          </div>

          {/* 프로그램 소개 */}
          <div className="flex h-[181px] w-full">
            <div className="flex w-40 items-start gap-1 py-4">
              <span className="font-pretendard text-xl font-bold text-gray-3">
                프로그램
                <br />
                소개
              </span>
              <span className="font-pretendard text-xl font-bold text-red">*</span>
            </div>
            <div className="flex flex-1 rounded border border-red-3 bg-orange-4 px-5 py-4">
              <textarea
                placeholder="프로그램에 대한 설명을 입력해주세요"
                value={formData.description}
                onChange={handleInputChange('description')}
                className="h-full w-full resize-none bg-transparent font-pretendard text-base placeholder:text-orange-3 focus:outline-none"
              />
            </div>
          </div>

          {/* 대표 이미지 */}
          <div className="flex w-full items-center">
            <div className="flex w-40 items-start gap-1 py-4">
              <span className="font-pretendard text-xl font-bold text-gray-3">대표 이미지</span>
              <span className="font-pretendard text-xl font-bold text-red">*</span>
            </div>
            <div className="flex items-center gap-4">
              <label className="flex cursor-pointer items-center gap-2 rounded bg-red-2 px-[18px] py-[10px]">
                <Plus size={24} color="#911A00" />
                <span className="font-pretendard text-base text-primary">파일 첨부하기</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
              <div className="flex flex-col gap-1">
                <span className="font-pretendard text-sm text-primary">
                  15MB 이하의 파일만 첨부 가능합니다.
                </span>
                {selectedFile && (
                  <span className="font-pretendard text-sm text-gray-3">
                    선택된 파일: {selectedFile.name}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* 노출여부 */}
          <div className="flex w-[590px] items-center">
            <div className="flex w-40 items-center gap-1">
              <span className="font-pretendard text-xl font-bold text-gray-3">노출여부</span>
              <span className="font-pretendard text-xl font-bold text-red">*</span>
            </div>
            <div className="flex items-center">
              {/* 노출 */}
              <div
                className="flex cursor-pointer items-center gap-2 px-2 py-2"
                onClick={() => setFormData((prev) => ({ ...prev, visibility: 'visible' }))}
              >
                <div className="flex h-6 w-6 items-center justify-center">
                  {formData.visibility === 'visible' ? (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.8"
                        y="1.69063"
                        width="22.4"
                        height="22.4"
                        rx="11.2"
                        stroke="#911A00"
                        strokeWidth="1.6"
                      />
                      <circle cx="12" cy="12.8906" r="6" fill="#911A00" />
                    </svg>
                  ) : (
                    <div className="h-6 w-6 rounded-full border-[1.6px] border-gray-3"></div>
                  )}
                </div>
                <span
                  className={`font-pretendard text-base ${
                    formData.visibility === 'visible'
                      ? 'font-bold text-primary'
                      : 'font-normal text-gray-3'
                  }`}
                >
                  노출
                </span>
              </div>

              {/* 미노출 */}
              <div
                className="flex cursor-pointer items-center gap-2 px-2 py-2"
                onClick={() => setFormData((prev) => ({ ...prev, visibility: 'hidden' }))}
              >
                <div className="flex h-6 w-6 items-center justify-center">
                  {formData.visibility === 'hidden' ? (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.8"
                        y="1.69063"
                        width="22.4"
                        height="22.4"
                        rx="11.2"
                        stroke="#911A00"
                        strokeWidth="1.6"
                      />
                      <circle cx="12" cy="12.8906" r="6" fill="#911A00" />
                    </svg>
                  ) : (
                    <div className="h-6 w-6 rounded-full border-[1.6px] border-gray-3"></div>
                  )}
                </div>
                <span
                  className={`font-pretendard text-base ${
                    formData.visibility === 'hidden'
                      ? 'font-bold text-primary'
                      : 'font-normal text-gray-3'
                  }`}
                >
                  미노출
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 버튼 */}
        <div className="flex w-full items-center justify-between">
          <button
            onClick={handlePreview}
            className="flex h-9 w-[94px] items-center justify-center gap-1.5 rounded border border-gray-4 bg-white hover:bg-gray-50"
          >
            <Search size={16} color="#555555" />
            <span className="font-pretendard text-sm font-bold text-gray-2">미리보기</span>
          </button>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handleCancel}
              type="button"
              className="h-9 w-12 rounded border border-primary bg-white hover:bg-red-50"
            >
              <span className="font-pretendard text-sm font-bold text-primary">취소</span>
            </button>
            <button
              onClick={handleSubmit}
              type="button"
              className="h-9 w-12 rounded bg-primary hover:bg-primary/90"
            >
              <span className="font-pretendard text-sm font-bold text-white">저장</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
