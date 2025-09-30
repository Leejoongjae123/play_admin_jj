'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import CustomRadio from '@/components/ui/CustomRadio';
import Search from '@/components/icons/Search';
import ChevronDown from '@/components/icons/ChevronDown';

export default function WriterEditPage() {
  const [formData, setFormData] = useState({
    koreanName: '',
    englishName: '',
    genre: '',
    keywords: '',
    introduction: '',
    visibility: '노출'
  });

  const [isGenreDropdownOpen, setIsGenreDropdownOpen] = useState(false);

  const genreOptions = ['드라마', '코미디', '뮤지컬', '실험극', '아동극'];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleVisibilityChange = (value: string) => {
    setFormData(prev => ({ ...prev, visibility: value }));
  };

  const handleGenreSelect = (genre: string) => {
    setFormData(prev => ({ ...prev, genre }));
    setIsGenreDropdownOpen(false);
  };

  const handlePreview = () => {
    console.log('미리보기:', formData);
  };

  const handleCancel = () => {
    console.log('취소');
  };

  const handleSave = () => {
    console.log('저장:', formData);
  };

  return (
    <div className="flex w-full max-w-[1180px] items-start gap-2.5 p-8">
      <div className="flex flex-1 flex-col items-center justify-center gap-20 rounded-[5px] bg-white p-11">
        {/* 헤더 */}
        <div className="flex w-full flex-col items-start gap-4">
          <div className="flex w-full items-center justify-between">
            <h1 className="font-pretendard text-2xl font-semibold leading-8 text-gray-1">
              작가 관리
            </h1>
          </div>

          {/* 작가명 필드들 */}
          <div className="flex w-full items-start gap-4">
            {/* 작가(한) */}
            <div className="flex flex-1 items-start">
              <div className="flex w-40 items-start gap-1 px-0 py-4">
                <span className="font-pretendard text-xl font-semibold leading-6 text-gray-3">
                  작가(한)
                </span>
                <span className="font-pretendard text-xl font-semibold leading-6 text-red">
                  *
                </span>
              </div>
              <div className="flex flex-1 items-start self-stretch rounded border border-red-3 bg-orange-4 px-5 py-4">
                <input
                  type="text"
                  placeholder="작가명을 입력해주세요"
                  value={formData.koreanName}
                  onChange={(e) => handleInputChange('koreanName', e.target.value)}
                  className="flex-1 bg-transparent font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-black placeholder:text-orange-3 outline-none"
                />
              </div>
            </div>

            {/* 작가(영) */}
            <div className="flex flex-1 items-start">
              <div className="flex w-40 items-start gap-1 px-0 py-4">
                <span className="font-pretendard text-xl font-semibold leading-6 text-gray-3">
                  작가(영)
                </span>
                <span className="font-pretendard text-xl font-semibold leading-6 text-red">
                  *
                </span>
              </div>
              <div className="flex flex-1 items-start self-stretch rounded border border-red-3 bg-gray-6 px-5 py-4">
                <input
                  type="text"
                  placeholder="작가명(영문)을 입력해주세요"
                  value={formData.englishName}
                  onChange={(e) => handleInputChange('englishName', e.target.value)}
                  className="flex-1 bg-transparent font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-black placeholder:text-orange-3 outline-none"
                />
              </div>
            </div>
          </div>

          {/* 장르 필드 */}
          <div className="flex w-full h-14 items-start">
            <div className="flex w-40 h-14 items-start gap-1 px-0 py-4">
              <span className="font-pretendard text-xl font-semibold leading-6 text-gray-3">
                장르
              </span>
            </div>
            <div className="relative flex flex-1 self-stretch">
              <div 
                className="flex w-full cursor-pointer items-center justify-between rounded border border-red-3 bg-orange-4 px-5 py-4"
                onClick={() => setIsGenreDropdownOpen(!isGenreDropdownOpen)}
              >
                <span className={`font-pretendard text-base font-normal leading-6 tracking-[-0.32px] ${
                  formData.genre ? 'text-black' : 'text-orange-3'
                }`}>
                  {formData.genre || '장르를 선택해주세요'}
                </span>
                <div className="transform transition-transform" style={{
                  transform: isGenreDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                }}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.1719 17.0346C11.5685 17.6208 12.4318 17.6208 12.8284 17.0346L19.9905 6.44832C20.4398 5.78424 19.964 4.88796 19.1622 4.88796H4.83802C4.03624 4.88796 3.56048 5.78424 4.00976 6.44832L11.1719 17.0346Z"
                      fill="#911A00"
                    />
                  </svg>
                </div>
              </div>
              
              {/* 드롭다운 메뉴 */}
              {isGenreDropdownOpen && (
                <div className="absolute top-full left-0 right-0 z-10 mt-1 rounded border border-red-3 bg-white shadow-lg">
                  {genreOptions.map((option) => (
                    <div
                      key={option}
                      className="cursor-pointer px-5 py-3 hover:bg-orange-4 font-pretendard text-base text-gray-1"
                      onClick={() => handleGenreSelect(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* 키워드 필드 */}
          <div className="flex w-full items-start">
            <div className="flex w-40 items-start gap-1 px-0 py-4">
              <span className="font-pretendard text-xl font-semibold leading-6 text-gray-3">
                키워드
              </span>
              <span className="font-pretendard text-xl font-semibold leading-6 text-red">
                *
              </span>
            </div>
            <div className="flex flex-1 items-start self-stretch rounded border border-red-3 bg-orange-4 px-5 py-4">
              <input
                type="text"
                placeholder="키워드를 입력해주세요, 쉼표 (,)로 구분합니다."
                value={formData.keywords}
                onChange={(e) => handleInputChange('keywords', e.target.value)}
                className="flex-1 bg-transparent font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-black placeholder:text-orange-3 outline-none"
              />
            </div>
          </div>

          {/* 작가 소개 필드 */}
          <div className="flex w-full h-[181px] items-start">
            <div className="flex w-40 h-14 items-start gap-1 px-0 py-4">
              <span className="font-pretendard text-xl font-semibold leading-6 text-gray-3">
                작가 소개
              </span>
              <span className="font-pretendard text-xl font-semibold leading-6 text-red">
                *
              </span>
            </div>
            <div className="flex flex-1 self-stretch rounded border border-red-3 bg-orange-4 px-5 py-4">
              <textarea
                placeholder="줄거리를 입력해주세요"
                value={formData.introduction}
                onChange={(e) => handleInputChange('introduction', e.target.value)}
                className="flex-1 resize-none bg-transparent font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-black placeholder:text-orange-3 outline-none"
              />
            </div>
          </div>

          {/* 노출여부 필드 */}
          <div className="flex w-[590px] items-center">
            <div className="flex w-40 h-14 items-center gap-1">
              <span className="font-pretendard text-xl font-semibold leading-6 text-gray-3">
                노출여부
              </span>
              <span className="font-pretendard text-xl font-semibold leading-6 text-red">
                *
              </span>
            </div>
            <div className="flex items-center">
              {/* 노출 라디오 */}
              <div className="flex items-center gap-2.5 p-2">
                <div 
                  className="flex h-6 w-6 cursor-pointer items-center justify-center"
                  onClick={() => handleVisibilityChange('노출')}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.8"
                      y="0.8"
                      width="22.4"
                      height="22.4"
                      rx="11.2"
                      stroke="#911A00"
                      strokeWidth="1.6"
                    />
                    {formData.visibility === '노출' && (
                      <circle cx="12" cy="12" r="6" fill="#911A00" />
                    )}
                  </svg>
                </div>
                <span className="font-pretendard text-base font-bold leading-6 tracking-[-0.32px] text-primary">
                  노출
                </span>
              </div>

              {/* 미노출 라디오 */}
              <div className="flex items-center gap-2.5 p-2">
                <div 
                  className="flex h-6 w-6 cursor-pointer items-center justify-center"
                  onClick={() => handleVisibilityChange('미노출')}
                >
                  <div 
                    className="h-6 w-6 rounded-full border-[1.6px] border-gray-3"
                    style={{
                      borderColor: formData.visibility === '미노출' ? '#911A00' : '#6D6D6D'
                    }}
                  >
                    {formData.visibility === '미노출' && (
                      <div className="h-full w-full rounded-full flex items-center justify-center">
                        <div className="h-3 w-3 rounded-full bg-primary"></div>
                      </div>
                    )}
                  </div>
                </div>
                <span className={`font-pretendard text-base leading-6 tracking-[-0.32px] ${
                  formData.visibility === '미노출' ? 'font-bold text-primary' : 'font-normal text-gray-3'
                }`}>
                  미노출
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 버튼 영역 */}
        <div className="flex w-full items-center justify-between">
          {/* 미리보기 버튼 */}
          <button
            onClick={handlePreview}
            className="flex items-center justify-center gap-1.5 rounded border border-gray-4 bg-white px-3 py-2.5"
          >
            <Search size={16} color="#555555" />
            <span className="font-pretendard text-sm font-semibold leading-4 tracking-[-0.28px] text-gray-2">
              미리보기
            </span>
          </button>

          {/* 우측 버튼들 */}
          <div className="flex items-center gap-2.5">
            {/* 취소 버튼 */}
            <button
              onClick={handleCancel}
              className="flex items-center justify-center gap-1.5 rounded border border-primary bg-white px-3 py-2.5"
            >
              <span className="font-pretendard text-sm font-semibold leading-4 tracking-[-0.28px] text-primary">
                취소
              </span>
            </button>

            {/* 저장 버튼 */}
            <button
              onClick={handleSave}
              className="flex items-center justify-center gap-1.5 rounded bg-primary px-3 py-2.5"
            >
              <span className="font-pretendard text-sm font-semibold leading-4 tracking-[-0.28px] text-white">
                저장
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
