'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Search, Refresh, UpArrow, Arrow } from '@/components/icons';
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
  const [filters, setFilters] = useState<PopupFilter>({
    startDate: '2025-08-08',
    endDate: '',
    status: '전체',
    searchCategory: '전체',
    searchQuery: '',
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const totalCount = 12345;

  const handleStatusDropdownToggle = () => {
    // 상태 드롭다운 토글 처리
  };

  const handleSearchDropdownToggle = () => {
    // 검색 드롭다운 토글 처리
  };

  const handleItemsPerPageToggle = () => {
    // 항목 수 드롭다운 토글 처리
  };

  const handleSearch = () => {
    // 검색 처리
  };

  const handleReset = () => {
    // 초기화 처리
    setFilters({
      startDate: '',
      endDate: '',
      status: '전체',
      searchCategory: '전체',
      searchQuery: '',
    });
  };

  const handleRegisterPopup = () => {
    // 팝업 등록 처리
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
              <div className="flex w-[140px] items-center justify-between rounded-md border border-[#EBEBEB] bg-white p-3">
                <span className="font-pretendard text-xs font-bold text-primary">
                  {filters.startDate || '2025-08-08'}
                </span>
                <Calendar size={12} color="#727272" />
              </div>
              <span className="font-pretendard text-xs font-bold text-[#727272]">-</span>
              <div className="flex w-[140px] items-center justify-between rounded-md border border-[#EBEBEB] bg-white p-3">
                <span className="font-pretendard text-xs font-medium text-[#727272]">
                  날짜 입력
                </span>
                <Calendar size={12} color="#727272" />
              </div>
            </div>
          </div>

          {/* 상태 */}
          <div className="flex flex-1 items-center gap-2">
            <span className="font-pretendard text-base font-bold text-gray-2">상태</span>
            <div 
              className="flex flex-1 cursor-pointer items-center justify-between rounded-md border border-[#EBEBEB] bg-white px-3 py-3"
              onClick={handleStatusDropdownToggle}
            >
              <span className="font-pretendard text-xs font-bold text-primary">전체</span>
              <UpArrow size={10} color="#911A00" />
            </div>
          </div>
        </div>

        {/* 두 번째 행 - 검색 */}
        <div className="flex w-full items-center gap-6">
          {/* 검색 영역 */}
          <div className="flex flex-1 items-center rounded-md border border-[#EBEBEB] bg-white px-3 py-3">
            <div className="flex items-center gap-2">
              <span className="font-pretendard text-xs font-bold text-primary">전체</span>
              <UpArrow size={10} color="#911A00" />
            </div>
            <input
              type="text"
              className="ml-3 flex-1 font-pretendard text-xs font-medium text-[#727272] placeholder:text-[#727272] focus:outline-none"
              placeholder="검색조건을 입력해주세요"
              value={filters.searchQuery}
              onChange={(e) => setFilters(prev => ({ ...prev, searchQuery: e.target.value }))}
            />
          </div>

          {/* 버튼들 */}
          <div className="flex items-center gap-2">
            <Button 
              className="flex h-12 w-[120px] items-center justify-center gap-2 rounded bg-primary px-0 py-3"
              onClick={handleSearch}
            >
              <Search size={16} color="white" />
              <span className="font-pretendard text-base font-bold text-white">검색</span>
            </Button>
            <Button
              variant="outline"
              className="flex h-12 w-[120px] items-center justify-center gap-2 rounded border-[1.3px] border-primary bg-white px-0 py-3 hover:bg-gray-50"
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
            {mockPopups.map((popup, index) => (
              <div
                key={popup.id}
                className={`flex h-[50px] w-full items-center justify-between px-4 ${
                  index === 2 ? 'rounded-sm bg-[#EBE1DF]' : ''
                }`}
              >
                <div className="flex w-10 items-center justify-center p-2">
                  <span
                    className={`font-pretendard text-xs font-medium ${
                      index === 2 ? 'text-primary' : 'text-[#686868]'
                    }`}
                  >
                    {popup.id}
                  </span>
                </div>
                <div className="flex w-[100px] items-center justify-center p-2">
                  <span
                    className={`font-pretendard text-xs font-medium ${
                      index === 2 ? 'text-primary' : 'text-[#686868]'
                    }`}
                  >
                    {popup.popupId}
                  </span>
                </div>
                <div className="flex w-[318px] max-w-[318px] items-center justify-center p-2">
                  <span
                    className={`font-pretendard text-xs font-medium text-center max-h-4 ${
                      index === 2 ? 'text-primary' : 'text-[#686868]'
                    }`}
                  >
                    {popup.title}
                  </span>
                </div>
                <div className="flex w-[180px] max-w-[180px] items-center justify-center p-2">
                  <span
                    className={`font-pretendard text-xs font-medium ${
                      index === 2 ? 'text-primary' : 'text-[#686868]'
                    }`}
                  >
                    {popup.startDate} ~ {popup.endDate}
                  </span>
                </div>
                <div className="flex w-[100px] items-center justify-center px-2 py-0">
                  <PopupStatusBadge status={popup.status} />
                </div>
                <div className="flex w-[124px] items-center justify-center p-2">
                  <span
                    className={`font-pretendard text-xs font-medium ${
                      index === 2 ? 'text-primary' : 'text-[#686868]'
                    }`}
                  >
                    {popup.createdAt}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* 페이지네이션 */}
          <div className="flex w-full items-center justify-between">
            {/* 항목 수 선택 */}
            <div 
              className="flex cursor-pointer items-center gap-3 rounded-md border border-[#EBEBEB] bg-white px-3 py-3"
              onClick={handleItemsPerPageToggle}
            >
              <span className="font-pretendard text-xs font-bold text-primary">10개씩 보기</span>
              <UpArrow size={10} color="#911A00" />
            </div>

            {/* 페이지 번호 */}
            <div className="flex items-center gap-4">
              <Arrow direction="left" size={24} color="#A0A0A0" />
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 flex-col items-center justify-center rounded-sm bg-primary">
                  <span className="font-pretendard text-sm font-medium text-white">1</span>
                </div>
                <div className="flex h-6 w-6 flex-col items-center justify-center">
                  <span className="font-pretendard text-sm font-medium text-orange-3">2</span>
                </div>
                <div className="flex h-6 w-6 flex-col items-center justify-center">
                  <span className="font-pretendard text-sm font-medium text-orange-3">...</span>
                </div>
                <div className="flex h-6 w-6 flex-col items-center justify-center">
                  <span className="font-pretendard text-sm font-medium text-orange-3">9</span>
                </div>
                <div className="flex h-6 w-6 flex-col items-center justify-center">
                  <span className="font-pretendard text-sm font-medium text-orange-3">10</span>
                </div>
              </div>
              <Arrow direction="right" size={24} color="#911A00" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
