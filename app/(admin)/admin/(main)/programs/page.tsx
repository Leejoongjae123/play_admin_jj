'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import DateEdit from '@/components/ui/date-edit';
import FilterDropdown from '@/components/ui/filter-dropdown';
import SearchInputWithFilter from '@/components/ui/search-input-with-filter';
import Pagination from '@/components/ui/pagination';
import Calendar from '@/components/icons/Calendar';
import Search from '@/components/icons/Search';
import Refresh from '@/components/icons/Refresh';
import Excel from '@/components/icons/Excel';

interface Program {
  id: string;
  programId: string;
  programName: string;
  eventDateTime: string;
  eventLocation: string;
  applicationPeriod: string;
  status: 'progress' | 'ended';
  registrationDate: string;
  worksCount: number | string;
  memoCount: number | string;
  scrapCount: number | string;
  isHighlighted?: boolean;
}

const mockPrograms: Program[] = [
  {
    id: '12345',
    programId: 'P00123',
    programName: '<바이 하트> 북토크',
    eventDateTime: '2025-09-20 18:00',
    eventLocation: '인스크립트홀',
    applicationPeriod: '2025-09-01~09-18',
    status: 'progress',
    registrationDate: '2025-01-01',
    worksCount: '-',
    memoCount: '-',
    scrapCount: '-',
  },
  {
    id: '12345',
    programId: 'P00123',
    programName: '신진 작가 쇼케이스',
    eventDateTime: '2025-09-20 18:00',
    eventLocation: '인스크립트홀',
    applicationPeriod: '2025-09-01~09-18',
    status: 'progress',
    registrationDate: '2025-01-01',
    worksCount: 23,
    memoCount: 45,
    scrapCount: 67,
  },
  {
    id: '12345',
    programId: 'P00123',
    programName: '번역 워크숍',
    eventDateTime: '2025-09-20 18:00',
    eventLocation: '문은 열려 있거나 닫혀 있어야 하오',
    applicationPeriod: '2025-09-01~09-18',
    status: 'progress',
    registrationDate: '2025-01-01',
    worksCount: 12,
    memoCount: 23,
    scrapCount: 64,
    isHighlighted: true,
  },
  {
    id: '12345',
    programId: 'P00123',
    programName: '희곡 낭독회',
    eventDateTime: '2025-09-20 18:00',
    eventLocation: '인스크립트홀',
    applicationPeriod: '2025-09-01~09-18',
    status: 'ended',
    registrationDate: '2025-01-01',
    worksCount: 23,
    memoCount: 45,
    scrapCount: 67,
  },
  {
    id: '12345',
    programId: 'P00123',
    programName: '프로그램명프로그램명',
    eventDateTime: '2025-09-20 18:00',
    eventLocation: '인스크립트홀',
    applicationPeriod: '2025-09-01~09-18',
    status: 'progress',
    registrationDate: '2025-01-01',
    worksCount: 23,
    memoCount: 45,
    scrapCount: 67,
  },
  {
    id: '12345',
    programId: 'P00123',
    programName: '프로그램명프로그램명',
    eventDateTime: '2025-09-20 18:00',
    eventLocation: '인스크립트홀',
    applicationPeriod: '2025-09-01~09-18',
    status: 'ended',
    registrationDate: '2025-01-01',
    worksCount: 23,
    memoCount: 45,
    scrapCount: 67,
  },
  {
    id: '12345',
    programId: 'P00123',
    programName: '프로그램명프로그램명',
    eventDateTime: '2025-09-20 18:00',
    eventLocation: '인스크립트홀',
    applicationPeriod: '2025-09-01~09-18',
    status: 'progress',
    registrationDate: '2025-01-01',
    worksCount: 23,
    memoCount: 45,
    scrapCount: 67,
  },
  {
    id: '12345',
    programId: 'P00123',
    programName: '프로그램명프로그램명',
    eventDateTime: '2025-09-20 18:00',
    eventLocation: '인스크립트홀',
    applicationPeriod: '2025-09-01~09-18',
    status: 'progress',
    registrationDate: '2025-01-01',
    worksCount: 23,
    memoCount: 45,
    scrapCount: 67,
  },
  {
    id: '12345',
    programId: 'P00123',
    programName: '프로그램명프로그램명',
    eventDateTime: '2025-09-20 18:00',
    eventLocation: '인스크립트홀',
    applicationPeriod: '2025-09-01~09-18',
    status: 'progress',
    registrationDate: '2025-01-01',
    worksCount: 23,
    memoCount: 45,
    scrapCount: 67,
  },
  {
    id: '12345',
    programId: 'P00123',
    programName: '프로그램명프로그램명',
    eventDateTime: '2025-09-20 18:00',
    eventLocation: '인스크립트홀',
    applicationPeriod: '2025-09-01~09-18',
    status: 'progress',
    registrationDate: '2025-01-01',
    worksCount: 23,
    memoCount: 45,
    scrapCount: 67,
  },
];

function StatusBadge({ status }: { status: 'progress' | 'ended' }) {
  if (status === 'progress') {
    return (
      <div className="inline-flex items-center justify-center gap-2 rounded-full border border-[#B0D5F2] bg-[#F6FBFF] px-3 py-1.5 text-sm font-medium text-[#2581F9]">
        진행중
      </div>
    );
  }
  return (
    <div className="inline-flex items-center justify-center gap-2 rounded-full bg-gray-5 px-3 py-1.5 text-sm font-medium text-gray-1">
      종료
    </div>
  );
}

function StatisticCard({ title, count }: { title: string; count: string }) {
  return (
    <div className="flex flex-col items-center justify-center rounded border border-orange-3 bg-background px-10 py-6">
      <div className="flex items-center justify-center px-4 py-2">
        <span className="text-lg font-semibold leading-6 text-primary">{title}</span>
      </div>
      <div className="w-[180px] overflow-hidden text-center text-2xl font-semibold leading-8 text-black">
        {count}
      </div>
    </div>
  );
}

export default function AdminProgramsPage() {
  const router = useRouter();
  const [startDate, setStartDate] = useState<Date | null>(new Date(2025, 7, 8));
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [exposureFilter, setExposureFilter] = useState('전체');
  const [statusFilter, setStatusFilter] = useState('전체');
  const [searchType, setSearchType] = useState('프로그램명');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState('10개씩 보기');
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);

  const startDateRef = useRef<HTMLDivElement>(null);
  const endDateRef = useRef<HTMLDivElement>(null);

  const totalPages = 10;

  const formatDate = (date: Date | null) => {
    if (!date) return '';
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleSearch = () => {
    // 검색 로직 구현
  };

  const handleReset = () => {
    setStartDate(new Date(2025, 7, 8));
    setEndDate(null);
    setExposureFilter('전체');
    setStatusFilter('전체');
    setSearchType('프로그램명');
    setSearchTerm('');
    setItemsPerPage('10개씩 보기');
    setCurrentPage(1);
  };

  // 외부 클릭 시 날짜 피커 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (startDateRef.current && !startDateRef.current.contains(event.target as Node)) {
        setShowStartDatePicker(false);
      }
      if (endDateRef.current && !endDateRef.current.contains(event.target as Node)) {
        setShowEndDatePicker(false);
      }
    };

    if (showStartDatePicker || showEndDatePicker) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showStartDatePicker, showEndDatePicker]);

  return (
    <div className="flex w-full flex-col items-center gap-[34px] p-11">
      {/* 제목 */}
      <h1 className="self-stretch text-2xl font-semibold leading-8 text-gray-1">프로그램 목록</h1>

      {/* 필터 섹션 */}
      <div className="flex w-full flex-col gap-4 rounded-lg bg-background p-8">
        {/* 첫 번째 줄: 날짜, 노출여부, 상태 */}
        <div className="flex w-full items-start gap-6">
          {/* 가입일 */}
          <div className="flex items-center gap-2">
            <span className="text-base font-semibold text-gray-2">가입일</span>
            <div className="flex items-center gap-2.5">
              {/* 시작일 */}
              <div className="relative" ref={startDateRef}>
                <button
                  onClick={() => setShowStartDatePicker(!showStartDatePicker)}
                  className="flex w-[140px] items-center justify-between rounded-md border border-[#EBEBEB] bg-white px-3 py-3 hover:bg-[#FFF5F2]"
                >
                  <span className="text-xs font-semibold text-primary">
                    {formatDate(startDate)}
                  </span>
                  <Calendar size={12} color="#727272" />
                </button>
                {showStartDatePicker && (
                  <div className="absolute left-0 top-full z-50 mt-2">
                    <DateEdit
                      value={startDate || new Date()}
                      onChange={setStartDate}
                      onConfirm={(date) => {
                        setStartDate(date);
                        setShowStartDatePicker(false);
                      }}
                      onCancel={() => setShowStartDatePicker(false)}
                    />
                  </div>
                )}
              </div>
              <span className="text-xs font-semibold text-[#727272]">-</span>
              {/* 종료일 */}
              <div className="relative" ref={endDateRef}>
                <button
                  onClick={() => setShowEndDatePicker(!showEndDatePicker)}
                  className="flex w-[140px] items-center justify-between rounded-md border border-[#EBEBEB] bg-white px-3 py-3 hover:bg-[#FFF5F2]"
                >
                  <span className="text-xs font-medium text-[#727272]">
                    {formatDate(endDate) || '날짜 입력'}
                  </span>
                  <Calendar size={12} color="#727272" />
                </button>
                {showEndDatePicker && (
                  <div className="absolute left-0 top-full z-50 mt-2">
                    <DateEdit
                      value={endDate || new Date()}
                      onChange={setEndDate}
                      onConfirm={(date) => {
                        setEndDate(date);
                        setShowEndDatePicker(false);
                      }}
                      onCancel={() => setShowEndDatePicker(false)}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 노출여부 */}
          <div className="flex flex-1 items-center gap-2">
            <span className="text-base font-semibold text-gray-2">노출여부</span>
            <FilterDropdown
              value={exposureFilter}
              options={['전체', '노출', '비노출']}
              onChange={setExposureFilter}
            />
          </div>

          {/* 상태 */}
          <div className="flex flex-1 items-center gap-2">
            <span className="text-base font-semibold text-gray-2">상태</span>
            <FilterDropdown
              value={statusFilter}
              options={['전체', '진행중', '종료']}
              onChange={setStatusFilter}
            />
          </div>
        </div>

        {/* 두 번째 줄: 검색 */}
        <div className="flex w-full items-center gap-6">
          {/* 검색 입력 */}
          <SearchInputWithFilter
            filterValue={searchType}
            filterOptions={['프로그램명', '행사장소']}
            onFilterChange={setSearchType}
            searchValue={searchTerm}
            onSearchChange={setSearchTerm}
            placeholder="검색조건을 입력해주세요"
          />

          {/* 버튼들 */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleSearch}
              className="flex h-[43px] w-[120px] items-center justify-center gap-2.5 rounded bg-primary text-white hover:bg-primary/90"
            >
              <Search size={16} color="white" />
              <span className="text-base font-semibold">검색</span>
            </button>
            <button
              onClick={handleReset}
              className="flex h-[43px] w-[120px] items-center justify-center gap-2.5 rounded border-[1.3px] border-primary bg-white hover:bg-[#FFF5F2]"
            >
              <Refresh size={16} />
              <span className="text-base font-semibold text-primary">초기화</span>
            </button>
          </div>
        </div>
      </div>

      {/* 통계 섹션 */}
      <div className="flex w-full flex-col items-center gap-6">
        <div className="flex items-start gap-[34px]">
          <StatisticCard title="진행중" count="3건" />
          <StatisticCard title="종료" count="123건" />
        </div>

        <div className="flex w-full flex-col items-end gap-4">
          <div className="flex w-full items-center justify-between">
            <span className="text-xl font-medium leading-6 tracking-tight">
              <span className="text-[#6D6D6D]">총 </span>
              <span className="text-primary">12,345</span>
              <span className="text-[#6D6D6D]">명</span>
            </span>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-3 rounded border-[1.6px] border-[#4CA452] bg-white px-3 py-2.5 hover:bg-white/90">
                <Excel size={16} />
                <span className="text-sm font-semibold leading-4 tracking-tight text-[#4CA452]">
                  엑셀 다운로드
                </span>
              </button>
              <button
                onClick={() => router.push('/admin/programs/edit')}
                className="flex w-[120px] items-center justify-center rounded bg-primary py-2.5 text-sm font-semibold leading-4 tracking-tight text-white hover:bg-primary/90"
              >
                프로그램 등록
              </button>
            </div>
          </div>

          {/* 테이블 */}
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              {/* 테이블 헤더 */}
              <thead>
                <tr className="h-[50px] bg-[#EEE]">
                  <th className="px-2.5 text-xs font-bold text-[#515151]">NO</th>
                  <th className="px-2.5 text-xs font-bold text-[#515151]">프로그램ID</th>
                  <th className="px-2.5 text-xs font-bold text-[#515151]">프로그램명</th>
                  <th className="px-2.5 text-xs font-bold text-[#515151]">행사일시</th>
                  <th className="px-2.5 text-xs font-bold text-[#515151]">행사장소</th>
                  <th className="px-2.5 text-xs font-bold text-[#515151]">신청기간</th>
                  <th className="px-2.5 text-xs font-bold text-[#515151]">상태</th>
                  <th className="px-2.5 text-xs font-bold text-[#515151]">등록/신청일</th>
                  <th className="px-2.5 text-xs font-bold text-[#515151]">작품수</th>
                  <th className="px-2.5 text-xs font-bold text-[#515151]">메모수</th>
                  <th className="px-2.5 text-xs font-bold text-[#515151]">스크랩수</th>
                </tr>
              </thead>

              {/* 테이블 본문 */}
              <tbody>
                {mockPrograms.map((program, index) => (
                  <tr
                    key={index}
                    onClick={() => router.push(`/admin/programs/${program.id}`)}
                    className="h-[50px] cursor-pointer bg-white transition-colors hover:bg-[#FFF5F2]"
                  >
                    <td className="px-2.5 text-center text-xs font-medium text-[#686868]">
                      {program.id}
                    </td>
                    <td className="px-2.5 text-center text-xs font-medium text-[#686868]">
                      {program.programId}
                    </td>
                    <td className="px-2.5 text-center text-xs font-medium text-[#686868]">
                      {program.programName}
                    </td>
                    <td className="px-2.5 text-center text-xs font-medium text-[#686868]">
                      {program.eventDateTime}
                    </td>
                    <td className="max-w-[88px] truncate px-2.5 text-center text-xs font-medium text-[#686868]">
                      {program.eventLocation}
                    </td>
                    <td className="px-2.5 text-center text-xs font-medium text-[#686868]">
                      {program.applicationPeriod}
                    </td>
                    <td className="px-2.5 text-center">
                      <div className="flex justify-center">
                        <StatusBadge status={program.status} />
                      </div>
                    </td>
                    <td className="px-2.5 text-center text-xs font-medium text-[#686868]">
                      {program.registrationDate}
                    </td>
                    <td className="px-2.5 text-center text-xs font-medium text-[#686868]">
                      {program.worksCount}
                    </td>
                    <td className="px-2.5 text-center text-xs font-medium text-[#686868]">
                      {program.memoCount}
                    </td>
                    <td className="px-2.5 text-center text-xs font-medium text-[#686868]">
                      {program.scrapCount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 하단 컨트롤 */}
          <div className="flex w-full items-center justify-between">
            <FilterDropdown
              value={itemsPerPage}
              options={['10개씩 보기', '20개씩 보기', '50개씩 보기']}
              onChange={setItemsPerPage}
              width="w-[140px]"
            />

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
