'use client';

import { useState, useRef, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import DateEdit from '@/components/ui/date-edit';
import ParticipationChart from './components/ParticipationChart';
import Calendar from '@/components/icons/Calendar';

type MemberType = '일반회원' | '작가회원' | '멤버십회원' | '비회원';
type PeriodType = '일간' | '주간' | '월간';

export default function AdminParticipationPatternsPage() {
  const [activeMemberType, setActiveMemberType] = useState<MemberType>('일반회원');
  const [activePeriod, setActivePeriod] = useState<PeriodType>('일간');
  const [startDate, setStartDate] = useState<Date>(new Date(2025, 7, 8)); // 2025-08-08
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [isStartDateOpen, setIsStartDateOpen] = useState(false);
  const [isEndDateOpen, setIsEndDateOpen] = useState(false);

  const startDateRef = useRef<HTMLDivElement>(null);
  const endDateRef = useRef<HTMLDivElement>(null);

  const memberTypes: MemberType[] = ['일반회원', '작가회원'];
  const periods: PeriodType[] = ['일간', '주간', '월간'];

  const chartSections = [
    { title: '프로그램 신청', id: 'program' },
    { title: '메모', id: 'memo' },
    { title: '희곡 등록 신청', id: 'play' },
    { title: '커뮤니티 게시글 작성', id: 'community' },
  ];

  // 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (startDateRef.current && !startDateRef.current.contains(event.target as Node)) {
        setIsStartDateOpen(false);
      }
      if (endDateRef.current && !endDateRef.current.contains(event.target as Node)) {
        setIsEndDateOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // 날짜 포맷팅 함수
  const formatDate = (date: Date | null) => {
    if (!date) return '날짜 입력';
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="p-8">
      <div className="flex w-full flex-col gap-8 rounded-[5px] bg-white p-11">
        {/* 헤더 */}
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <h1 className="font-pretendard text-2xl font-bold leading-8 text-gray-1">
              회원별 참여 패턴
            </h1>
          </div>

          {/* 탭 네비게이션 */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center border-b border-red-3 px-3">
              {memberTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveMemberType(type)}
                  className={`flex flex-1 items-center justify-center gap-2.5 p-2.5 ${
                    activeMemberType === type
                      ? 'border-b border-primary text-primary'
                      : 'text-orange-2'
                  }`}
                >
                  <span className="text-center font-pretendard text-base font-normal leading-5">
                    {type}
                  </span>
                </button>
              ))}
            </div>

            {/* 필터 섹션 */}
            <div className="flex w-[560px] items-center justify-between">
              {/* 기간 필터 */}
              <div className="flex items-center gap-3">
                {periods.map((period) => (
                  <Badge
                    key={period}
                    variant={activePeriod === period ? 'default' : 'outline'}
                    size="default"
                    className={`cursor-pointer rounded-full px-3 py-1.5 ${
                      activePeriod === period
                        ? 'bg-primary text-white'
                        : 'border border-primary bg-white text-primary'
                    }`}
                    onClick={() => setActivePeriod(period)}
                  >
                    <span className="font-pretendard text-sm font-normal leading-4">{period}</span>
                  </Badge>
                ))}
              </div>

              {/* 날짜 선택 */}
              <div className="flex items-center gap-2">
                <span className="font-pretendard text-sm font-bold leading-4 tracking-[-0.28px] text-gray-2">
                  기간 선택
                </span>
                <div className="flex w-[306px] items-center gap-2.5">
                  {/* 시작일 */}
                  <div ref={startDateRef} className="relative">
                    <button
                      onClick={() => {
                        setIsStartDateOpen(!isStartDateOpen);
                        setIsEndDateOpen(false);
                      }}
                      className="flex h-10 w-[140px] items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm hover:bg-gray-50"
                    >
                      <span className="font-bold text-primary">{formatDate(startDate)}</span>
                      <Calendar className="h-4 w-4 text-gray-500" />
                    </button>
                    {isStartDateOpen && (
                      <div className="absolute left-0 top-12 z-50">
                        <DateEdit
                          value={startDate}
                          onChange={(date) => setStartDate(date)}
                          onConfirm={(date) => {
                            setStartDate(date);
                            setIsStartDateOpen(false);
                          }}
                          onCancel={() => setIsStartDateOpen(false)}
                        />
                      </div>
                    )}
                  </div>
                  <span className="text-center font-pretendard text-xs font-bold leading-normal text-gray-3">
                    -
                  </span>
                  {/* 종료일 */}
                  <div ref={endDateRef} className="relative">
                    <button
                      onClick={() => {
                        setIsEndDateOpen(!isEndDateOpen);
                        setIsStartDateOpen(false);
                      }}
                      className="flex h-10 w-[140px] items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm hover:bg-gray-50"
                    >
                      <span className={endDate ? 'font-bold text-primary' : 'text-gray-400'}>
                        {formatDate(endDate)}
                      </span>
                      <Calendar className="h-4 w-4 text-gray-500" />
                    </button>
                    {isEndDateOpen && (
                      <div className="absolute left-0 top-12 z-50">
                        <DateEdit
                          value={endDate || new Date()}
                          onChange={(date) => setEndDate(date)}
                          onConfirm={(date) => {
                            setEndDate(date);
                            setIsEndDateOpen(false);
                          }}
                          onCancel={() => setIsEndDateOpen(false)}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 차트 섹션�� */}
        <div className="flex flex-col gap-5">
          {chartSections.map((section) => (
            <div key={section.id} className="flex h-[270px] flex-col gap-5">
              <h2 className="font-pretendard text-2xl font-bold leading-[150%] tracking-[-0.48px] text-gray-2">
                {section.title}
              </h2>
              <ParticipationChart />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
