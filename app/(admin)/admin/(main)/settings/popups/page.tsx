'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Calendar, Search, Refresh } from '@/components/icons';
import FilterDropdown from '@/components/ui/filter-dropdown';
import SearchInputWithFilter from '@/components/ui/search-input-with-filter';
import Pagination from '@/components/ui/pagination';
import DateEdit from '@/components/ui/date-edit';
import PopupStatusBadge from './components/PopupStatusBadge';
import type { Popup, PopupFilter } from './types';

// 목업 데이터
const mockPopups: Popup[] = [
  {
    id: 12345,
    popupId: 'PU1234',
    title: '신규 프로그램 <바이 하트> 북토크 신청 안내',
    startDate: '2024-08-15',
    endDate: '2024-08-31',
    status: 'waiting',
    createdAt: '2025-01-01',
  },
  {
    id: 12346,
    popupId: 'PU1234',
    title: '신규 프로그램 <바이 하트> 북토크 신청 안내',
    startDate: '2024-08-15',
    endDate: '2024-08-31',
    status: 'active',
    createdAt: '2025-01-01',
  },
  {
    id: 12347,
    popupId: 'PU1234',
    title: '여름 시즌 기획전: 희곡 등록 이벤트 안내',
    startDate: '2024-08-15',
    endDate: '2024-08-31',
    status: 'active',
    createdAt: '2025-01-01',
  },
  {
    id: 12348,
    popupId: 'PU1234',
    title: '신규 프로그램 <바이 하트> 북토크 신청 안내',
    startDate: '2024-08-15',
    endDate: '2024-08-31',
    status: 'ended',
    createdAt: '2025-01-01',
  },
  {
    id: 12349,
    popupId: 'PU1234',
    title: '신규 프로그램 <바이 하트> 북토크 신청 안내',
    startDate: '2024-08-15',
    endDate: '2024-08-31',
    status: 'ended',
    createdAt: '2025-01-01',
  },
  {
    id: 12350,
    popupId: 'PU1234',
    title: '신규 프로그램 <바이 하트> 북토크 신청 안내',
    startDate: '2024-08-15',
    endDate: '2024-08-31',
    status: 'ended',
    createdAt: '2025-01-01',
  },
  {
    id: 12351,
    popupId: 'PU1234',
    title: '신규 프로그램 <바이 하트> 북토크 신청 안내',
    startDate: '2024-08-15',
    endDate: '2024-08-31',
    status: 'ended',
    createdAt: '2025-01-01',
  },
  {
    id: 12352,
    popupId: 'PU1234',
    title: '신규 프로그램 <바이 하트> 북토크 신청 안내',
    startDate: '2024-08-15',
    endDate: '2024-08-31',
    status: 'ended',
    createdAt: '2025-01-01',
  },
  {
    id: 12353,
    popupId: 'PU1234',
    title: '신규 프로그램 <바이 하트> 북토크 신청 안내',
    startDate: '2024-08-15',
    endDate: '2024-08-31',
    status: 'ended',
    createdAt: '2025-01-01',
  },
  {
    id: 12354,
    popupId: 'PU1234',
    title: '신규 프로그램 <바이 하트> 북토크 신청 안내',
    startDate: '2024-08-15',
    endDate: '2024-08-31',
    status: 'ended',
    createdAt: '2025-01-01',
  },
];

export default function AdminPopupsPage() {
  const router = useRouter();
  const [filters, setFilters] = useState<PopupFilter>({
    startDate: '2025-08-08',
    endDate: '',
    status: '전체',
    searchCategory: '전체',
    searchQuery: '',
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);

  const startDateRef = useRef<HTMLDivElement>(null);
  const endDateRef = useRef<HTMLDivElement>(null);

  const totalCount = 12345;
  const totalPages = Math.ceil(totalCount / itemsPerPage);

  const statusOptions = ['전체', '대기', '진행중', '종료'];
  const searchOptions = ['전체', '팝업ID', '제목'];
  const itemsPerPageOptions = ['10개씩 보기', '20개씩 보기', '30개씩 보기', '50개씩 보기'];

  // 날짜를 YYYY-MM-DD 형식으로 변환
  const formatDateToString = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

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

  const handleSearch = () => {
    // 검색 처리
  };

  const handleReset = () => {
    setFilters({
      startDate: '',
      endDate: '',
      status: '전체',
      searchCategory: '전체',
      searchQuery: '',
    });
    setCurrentPage(1);
  };

  const handleRegisterPopup = () => {
    router.push('/admin/settings/popups/edit');
  };

  const handleStartDateConfirm = (date: Date) => {
    setFilters((prev) => ({ ...prev, startDate: formatDateToString(date) }));
    setShowStartDatePicker(false);
  };

  const handleEndDateConfirm = (date: Date) => {
    setFilters((prev) => ({ ...prev, endDate: formatDateToString(date) }));
    setShowEndDatePicker(false);
  };

  return (
    <div className="flex w-full flex-col items-start gap-8 p-11">
      {/* 제목 */}
      <h1 className="font-pretendard text-2xl font-bold leading-8 text-gray-1">팝업관리</h1>

      {/* 필터 영역 */}
      <div className="flex w-full flex-col items-start gap-5 rounded-lg bg-background p-8">
        {/* 첫 번째 행 - 등록일과 상태 */}
        <div className="flex w-full items-start gap-6">
          {/* 등록일 */}
          <div className="flex items-center gap-2">
            <span className="font-pretendard text-base font-bold text-gray-2">등록일</span>
            <div className="flex w-[306px] items-center gap-2">
              {/* 시작일 */}
              <div className="relative" ref={startDateRef}>
                <button
                  type="button"
                  onClick={() => {
                    setShowStartDatePicker(!showStartDatePicker);
                    setShowEndDatePicker(false);
                  }}
                  className="flex w-[140px] items-center justify-between rounded-md border border-[#EBEBEB] bg-white p-3 transition-colors hover:border-primary"
                >
                  <span
                    className={`font-pretendard text-xs ${
                      filters.startDate ? 'font-bold text-primary' : 'font-medium text-[#727272]'
                    }`}
                  >
                    {filters.startDate || '날짜 입력'}
                  </span>
                  <Calendar size={12} color="#727272" />
                </button>
                {showStartDatePicker && (
                  <div className="absolute left-0 top-full z-50 mt-2">
                    <DateEdit
                      value={filters.startDate ? new Date(filters.startDate) : new Date()}
                      onConfirm={handleStartDateConfirm}
                      onCancel={() => setShowStartDatePicker(false)}
                    />
                  </div>
                )}
              </div>

              <span className="font-pretendard text-xs font-bold text-[#727272]">-</span>

              {/* 종료일 */}
              <div className="relative" ref={endDateRef}>
                <button
                  type="button"
                  onClick={() => {
                    setShowEndDatePicker(!showEndDatePicker);
                    setShowStartDatePicker(false);
                  }}
                  className="flex w-[140px] items-center justify-between rounded-md border border-[#EBEBEB] bg-white p-3 transition-colors hover:border-primary"
                >
                  <span
                    className={`font-pretendard text-xs ${
                      filters.endDate ? 'font-bold text-primary' : 'font-medium text-[#727272]'
                    }`}
                  >
                    {filters.endDate || '날짜 입력'}
                  </span>
                  <Calendar size={12} color="#727272" />
                </button>
                {showEndDatePicker && (
                  <div className="absolute left-0 top-full z-50 mt-2">
                    <DateEdit
                      value={filters.endDate ? new Date(filters.endDate) : new Date()}
                      onConfirm={handleEndDateConfirm}
                      onCancel={() => setShowEndDatePicker(false)}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 상태 */}
          <div className="flex flex-1 items-center gap-2">
            <span className="font-pretendard text-base font-bold text-gray-2">상태</span>
            <FilterDropdown
              value={filters.status}
              options={statusOptions}
              onChange={(value) => setFilters((prev) => ({ ...prev, status: value }))}
            />
          </div>
        </div>

        {/* 두 번째 행 - 검색 */}
        <div className="flex w-full items-center gap-6">
          {/* 검색 영역 */}
          <SearchInputWithFilter
            filterValue={filters.searchCategory}
            filterOptions={searchOptions}
            onFilterChange={(value) => setFilters((prev) => ({ ...prev, searchCategory: value }))}
            searchValue={filters.searchQuery}
            onSearchChange={(value) => setFilters((prev) => ({ ...prev, searchQuery: value }))}
            placeholder="검색조건을 입력해주세요"
          />

          {/* 버튼들 */}
          <div className="flex items-center gap-2">
            <Button
              className="flex h-[43px] w-[120px] items-center justify-center gap-2 rounded bg-primary px-0 py-3"
              onClick={handleSearch}
            >
              <Search size={16} color="white" />
              <span className="font-pretendard text-base font-bold text-white">검색</span>
            </Button>
            <Button
              variant="outline"
              className="flex h-[43px] w-[120px] items-center justify-center gap-2 rounded border-[1.3px] border-primary bg-white px-0 py-3 hover:bg-gray-50"
              onClick={handleReset}
            >
              <Refresh size={16} color="#911A00" />
              <span className="font-pretendard text-base font-bold text-primary">초기화</span>
            </Button>
          </div>
        </div>
      </div>

      {/* 결과 영역 */}
      <div className="flex w-full flex-1 flex-col items-end gap-4">
        {/* 상단 정보 */}
        <div className="flex w-full items-center justify-between">
          <div className="font-pretendard text-xl font-medium leading-6 tracking-[-0.4px] text-[#6D6D6D]">
            총{' '}
            <span className="font-pretendard text-xl font-medium text-primary">
              {totalCount.toLocaleString()}
            </span>
            명
          </div>
          <Button
            className="flex h-10 w-[120px] items-center justify-center rounded bg-primary px-0 py-2.5"
            onClick={handleRegisterPopup}
          >
            <span className="font-pretendard text-sm font-bold leading-4 tracking-[-0.28px] text-white">
              팝업 등록
            </span>
          </Button>
        </div>

        {/* 테이블 */}
        <div className="flex w-full flex-1 flex-col items-start gap-6">
          <div className="flex w-full flex-1 flex-col">
            {/* 테이블 헤더 */}
            <div className="flex h-[50px] w-full items-center justify-between rounded-sm bg-[#EEE] px-4">
              <div className="flex w-10 items-center justify-center p-2">
                <span className="font-pretendard text-xs font-bold text-[#515151]">NO</span>
              </div>
              <div className="flex w-[100px] items-center justify-center p-2">
                <span className="font-pretendard text-xs font-bold text-[#515151]">팝업ID</span>
              </div>
              <div className="flex w-[318px] max-w-[318px] items-center justify-center p-2">
                <span className="font-pretendard text-xs font-bold text-[#515151]">제목</span>
              </div>
              <div className="flex w-[180px] max-w-[180px] items-center justify-center p-2">
                <span className="font-pretendard text-xs font-bold text-[#515151]">기간</span>
              </div>
              <div className="flex w-[100px] items-center justify-center p-2">
                <span className="font-pretendard text-xs font-bold text-[#515151]">상태</span>
              </div>
              <div className="flex w-[124px] items-center justify-center p-2">
                <span className="font-pretendard text-xs font-bold text-[#515151]">등록일</span>
              </div>
            </div>

            {/* 테이블 본문 */}
            {mockPopups.map((popup) => (
              <div
                key={popup.id}
                className="group flex h-[50px] w-full cursor-pointer items-center justify-between px-4 transition-colors hover:rounded-sm hover:bg-[#EBE1DF]"
              >
                <div className="flex w-10 items-center justify-center p-2">
                  <span className="font-pretendard text-xs font-medium text-[#686868] transition-colors group-hover:text-primary">
                    {popup.id}
                  </span>
                </div>
                <div className="flex w-[100px] items-center justify-center p-2">
                  <span className="font-pretendard text-xs font-medium text-[#686868] transition-colors group-hover:text-primary">
                    {popup.popupId}
                  </span>
                </div>
                <div className="flex w-[318px] max-w-[318px] items-center justify-center p-2">
                  <span className="max-h-4 text-center font-pretendard text-xs font-medium text-[#686868] transition-colors group-hover:text-primary">
                    {popup.title}
                  </span>
                </div>
                <div className="flex w-[180px] max-w-[180px] items-center justify-center p-2">
                  <span className="font-pretendard text-xs font-medium text-[#686868] transition-colors group-hover:text-primary">
                    {popup.startDate} ~ {popup.endDate}
                  </span>
                </div>
                <div className="flex w-[100px] items-center justify-center px-2 py-0">
                  <PopupStatusBadge status={popup.status} />
                </div>
                <div className="flex w-[124px] items-center justify-center p-2">
                  <span className="font-pretendard text-xs font-medium text-[#686868] transition-colors group-hover:text-primary">
                    {popup.createdAt}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* 페이지네이션 */}
          <div className="flex w-full items-center justify-between">
            {/* 항목 수 선택 */}
            <FilterDropdown
              value={`${itemsPerPage}개씩 보기`}
              options={itemsPerPageOptions}
              onChange={(value) => {
                const count = parseInt(value.replace('개씩 보기', ''));
                setItemsPerPage(count);
                setCurrentPage(1);
              }}
              width="w-[104px]"
            />

            {/* 페이지 번호 */}
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
