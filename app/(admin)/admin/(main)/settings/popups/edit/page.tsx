'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Toggle from '@/components/ui/toggle';
import DateEdit from '@/components/ui/date-edit';
import FilterDropdown from '@/components/ui/filter-dropdown';
import { Plus, Calendar, ChevronDown, Close, Hamburger } from '@/components/icons';

interface PopupImage {
  id: number;
  image?: File | string;
  url: string;
  isPublished: boolean;
}

export default function PopupEditPage() {
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState(new Date(2025, 7, 8)); // 2025-08-08
  const [startHour, setStartHour] = useState('00시');
  const [startMinute, setStartMinute] = useState('00분');
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [endHour, setEndHour] = useState('00시');
  const [endMinute, setEndMinute] = useState('00분');
  const [closeMethod, setCloseMethod] = useState('today');
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);

  const startDateRef = useRef<HTMLDivElement>(null);
  const endDateRef = useRef<HTMLDivElement>(null);

  const [images, setImages] = useState<PopupImage[]>([
    {
      id: 1,
      image: '/sample-image.jpg',
      url: 'https://www.instagram.com/inscriptbooks/',
      isPublished: true,
    },
    { id: 2, url: 'http://', isPublished: true },
    { id: 3, url: 'http://', isPublished: false },
    {
      id: 4,
      image: '/sample-image.jpg',
      url: 'https://www.instagram.com/inscriptbooks/',
      isPublished: false,
    },
    { id: 5, url: 'http://', isPublished: true },
  ]);

  // 시간/분 옵션 생성
  const hourOptions = Array.from({ length: 24 }, (_, i) => `${i.toString().padStart(2, '0')}시`);
  const minuteOptions = Array.from({ length: 60 }, (_, i) => `${i.toString().padStart(2, '0')}분`);

  // 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (startDateRef.current && !startDateRef.current.contains(event.target as Node)) {
        setShowStartDatePicker(false);
      }
      if (endDateRef.current && !endDateRef.current.contains(event.target as Node)) {
        setShowEndDatePicker(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleImageToggle = (id: number) => {
    setImages(
      images.map((img) => (img.id === id ? { ...img, isPublished: !img.isPublished } : img)),
    );
  };

  const handleImageUrlChange = (id: number, url: string) => {
    setImages(images.map((img) => (img.id === id ? { ...img, url } : img)));
  };

  const handleImageDelete = (id: number) => {
    setImages(images.filter((img) => img.id !== id));
  };

  const handleImageUpload = (id: number, file: File) => {
    setImages(images.map((img) => (img.id === id ? { ...img, image: file } : img)));
  };

  // 날짜 포맷팅 함수
  const formatDate = (date: Date | null) => {
    if (!date) return '날짜 입력';
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const renderImageCard = (image: PopupImage) => (
    <div key={image.id} className="flex flex-col gap-4 rounded-md bg-[#FAF8F6] p-8">
      <div className="flex items-center justify-between">
        <h3 className="font-pretendard text-xl font-bold text-gray-1">이미지 {image.id}</h3>
        <button onClick={() => handleImageDelete(image.id)} className="flex items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M7 21C6.45 21 5.97933 20.8043 5.588 20.413C5.19667 20.0217 5.00067 19.5507 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.8043 20.021 18.413 20.413C18.0217 20.805 17.5507 21.0007 17 21H7ZM17 6H7V19H17V6ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z"
              fill="#D65856"
            />
          </svg>
          <span className="font-pretendard text-sm font-bold text-[#D65856]">삭제</span>
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {/* 이미지 영역 */}
        <div className="relative">
          {image.image ? (
            <div
              className="flex h-[200px] items-end justify-end rounded-md bg-cover bg-center p-2"
              style={{
                backgroundImage: "url('/images_jj/sample.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <button className="flex h-6 w-6 items-center justify-center rounded-sm bg-[#F4EFEA]">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M11.9283 4.91352L13.9511 2.89066C14.1464 2.6954 14.463 2.6954 14.6582 2.89066L16.7236 4.95603C16.9189 5.15129 16.9189 5.46788 16.7236 5.66314L14.7008 7.68599M11.9283 4.91352L4.17385 12.6679C4.06407 12.7777 3.98136 12.9115 3.93227 13.0588L2.93691 16.0449C2.80662 16.4358 3.17849 16.8077 3.56937 16.6774L6.55544 15.682C6.70272 15.6329 6.83655 15.5502 6.94632 15.4404L14.7008 7.68599M11.9283 4.91352L14.7008 7.68599"
                    stroke="#911A00"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          ) : (
            <div className="flex h-[200px] flex-col items-center justify-center rounded-md border border-dashed border-gray-4 bg-[#F2F2F2]">
              <div className="flex flex-col items-center gap-2">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <path
                    d="M12.5008 38.5L21.4654 28.5354C22.403 27.598 23.6746 27.0714 25.0004 27.0714C26.3262 27.0714 27.5977 27.598 28.5354 28.5354L40.0004 40.0004M35.0004 35.0004L38.9654 31.0354C39.903 30.098 41.1746 29.5714 42.5004 29.5714C43.8262 29.5714 45.0977 30.098 46.0354 31.0354L48.001 34.5M35.0004 20.0004H35.0254M48.5359 48.5359V11.4648H11.4648V48.5359H48.5359Z"
                    stroke="#A0A0A0"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex flex-col items-center gap-2">
                  <span className="font-pretendard text-lg font-bold text-gray-4">업로드하기</span>
                  <span className="text-center font-pretendard text-xs font-normal text-gray-4">
                    가로 (width)는 최소 320px
                    <br />
                    이상을 권장합니다.
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 링크 URL 입력 */}
        <div className="flex flex-col gap-0">
          <div className="flex h-11 items-center">
            <label className="font-pretendard text-sm font-bold text-gray-2">링크 URL</label>
          </div>
          <div className="flex h-12 items-center gap-3 rounded-md border border-[#EBEBEB] bg-white px-3">
            <input
              type="text"
              value={image.url}
              onChange={(e) => handleImageUrlChange(image.id, e.target.value)}
              className="flex-1 font-pretendard text-xs font-normal text-[#727272] outline-none"
              placeholder="http://"
            />
            {image.url !== 'http://' && (
              <button
                onClick={() => handleImageUrlChange(image.id, 'http://')}
                className="flex h-4 w-4 items-center justify-center rounded-full bg-gray-4 shadow-sm"
              >
                <Close size={10} color="white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 게시/미게시 토글 */}
      <Toggle
        checked={image.isPublished}
        onChange={() => handleImageToggle(image.id)}
        label={image.isPublished ? '게시' : '미게시'}
      />
    </div>
  );

  return (
    <div className="flex w-full gap-[10px] p-8">
      <div className="flex flex-1 flex-col gap-20 rounded-md bg-white p-11">
        {/* 헤더 */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h1 className="font-pretendard text-2xl font-bold text-gray-1">팝업관리</h1>
          </div>

          {/* 제목 입력 */}
          <div className="flex">
            <div className="flex flex-1 items-center justify-between rounded-md border border-[#EBE1DF] bg-[#F4EFEA] px-5 py-4">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="제목을 입력해주세요"
                className="flex-1 bg-transparent font-pretendard text-base font-normal text-[#CCBCAB] outline-none placeholder:text-[#CCBCAB]"
              />
            </div>
          </div>

          {/* 기간 설정 */}
          <div className="flex flex-col gap-4">
            <h2 className="font-pretendard text-xl font-bold text-gray-1">기간 설정</h2>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                {/* 시작 날짜 */}
                <div className="relative" ref={startDateRef}>
                  <button
                    type="button"
                    onClick={() => {
                      setShowStartDatePicker(!showStartDatePicker);
                      setShowEndDatePicker(false);
                    }}
                    className="flex h-12 w-[140px] items-center justify-between gap-2 rounded-md border border-[#EBEBEB] bg-white px-3 py-3 transition-colors hover:border-primary"
                  >
                    <span className="font-pretendard text-xs font-normal text-gray-3">
                      {formatDate(startDate)}
                    </span>
                    <Calendar size={16} color="#6D6D6D" />
                  </button>
                  {showStartDatePicker && (
                    <div className="absolute left-0 top-full z-50 mt-2">
                      <DateEdit
                        value={startDate}
                        onConfirm={(date) => {
                          setStartDate(date);
                          setShowStartDatePicker(false);
                        }}
                        onCancel={() => setShowStartDatePicker(false)}
                      />
                    </div>
                  )}
                </div>

                {/* 시작 시간 */}
                <FilterDropdown
                  value={startHour}
                  options={hourOptions}
                  onChange={setStartHour}
                  width="w-[80px]"
                />

                {/* 시작 분 */}
                <FilterDropdown
                  value={startMinute}
                  options={minuteOptions}
                  onChange={setStartMinute}
                  width="w-[80px]"
                />
              </div>

              <span className="font-pretendard text-xs font-bold text-gray-3">-</span>

              <div className="flex items-center gap-2">
                {/* 종료 날짜 */}
                <div className="relative" ref={endDateRef}>
                  <button
                    type="button"
                    onClick={() => {
                      setShowEndDatePicker(!showEndDatePicker);
                      setShowStartDatePicker(false);
                    }}
                    className="flex h-12 w-[140px] items-center justify-between gap-2 rounded-md border border-[#EBEBEB] bg-white px-3 py-3 transition-colors hover:border-primary"
                  >
                    <span className="font-pretendard text-xs font-normal text-gray-3">
                      {formatDate(endDate)}
                    </span>
                    <Calendar size={16} color="#6D6D6D" />
                  </button>
                  {showEndDatePicker && (
                    <div className="absolute left-0 top-full z-50 mt-2">
                      <DateEdit
                        value={endDate || new Date()}
                        onConfirm={(date) => {
                          setEndDate(date);
                          setShowEndDatePicker(false);
                        }}
                        onCancel={() => setShowEndDatePicker(false)}
                      />
                    </div>
                  )}
                </div>

                {/* 종료 시간 */}
                <FilterDropdown
                  value={endHour}
                  options={hourOptions}
                  onChange={setEndHour}
                  width="w-[80px]"
                />

                {/* 종료 분 */}
                <FilterDropdown
                  value={endMinute}
                  options={minuteOptions}
                  onChange={setEndMinute}
                  width="w-[80px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 상세 이미지 */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="font-pretendard text-xl font-bold text-gray-1">상세 이미지</h2>
          </div>

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 rounded-md bg-[#DEC6C1] px-[18px] py-[10px]">
              <Plus size={24} color="#911A00" />
              <span className="font-pretendard text-base font-normal text-primary">
                팝업 이미지 추가
              </span>
            </button>
            <span className="font-pretendard text-sm font-normal text-primary">
              15MB 이하의 파일만 첨부 가능합니다.
            </span>
          </div>

          {/* 이미지 카드들 */}
          <div className="grid grid-cols-3 gap-4">
            {images.map(renderImageCard)}

            {/* 이미지 추가 카드 */}
            <div className="flex min-h-[300px] flex-col items-center justify-center gap-4 rounded-md bg-[#EBE1DF] p-8">
              <div className="flex flex-col items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center">
                  <Plus size={24} color="#911A00" />
                </div>
                <span className="font-pretendard text-[20px] font-bold text-primary">
                  팝업 이미지 추가
                </span>
                <span className="text-center font-pretendard text-[14px] font-normal text-primary">
                  15MB 이하의 파일만 첨부 가능합니다.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 창닫기 방법 */}
        <div className="flex w-full items-center">
          <div className="flex h-14 w-40 items-center gap-1">
            <span className="font-pretendard text-xl font-bold text-gray-3">창닫기 방법</span>
            <span className="font-pretendard text-xl font-bold text-[#D65856]">*</span>
          </div>
          <div className="flex items-center">
            <RadioGroup
              value={closeMethod}
              onValueChange={setCloseMethod}
              className="flex items-center gap-0"
            >
              <div className="flex items-center gap-2 p-2">
                <RadioGroupItem value="today" className="h-6 w-6" />
                <span
                  className={`font-pretendard text-base font-bold ${closeMethod === 'today' ? 'text-primary' : 'text-gray-3'}`}
                >
                  오늘 하루 열지 않음
                </span>
              </div>
              <div className="flex items-center gap-2 p-2">
                <RadioGroupItem value="daily" className="h-6 w-6" />
                <div className="flex items-center gap-1">
                  <div className="flex items-center gap-3 rounded-sm border border-[#EBEBEB] bg-white p-2">
                    <ChevronDown size={12} />
                  </div>
                  <span className="font-pretendard text-base font-normal text-gray-3">
                    일간 열지 않음
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 p-2">
                <RadioGroupItem value="never" className="h-6 w-6" />
                <span className="font-pretendard text-base font-normal text-gray-3">
                  다시 열지 않음
                </span>
              </div>
            </RadioGroup>
          </div>
        </div>

        {/* 하단 버튼들 */}
        <div className="flex w-full items-center justify-between">
          <Button
            variant="outline"
            size="sm"
            className="flex h-9 w-[94px] items-center gap-2 rounded-[4px] bg-white hover:bg-white/90"
          >
            <Hamburger size={16} color="#555555" />
            <span className="font-pretendard text-sm font-bold text-gray-2">목록으로</span>
          </Button>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-9 w-12 border-primary text-primary">
              <span className="font-pretendard text-sm font-bold">삭제</span>
            </Button>
            <Button size="sm" className="h-9 w-12 bg-primary text-white">
              <span className="font-pretendard text-sm font-bold">저장</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
