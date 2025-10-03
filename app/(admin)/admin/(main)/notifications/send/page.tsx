'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import DateEdit from '@/components/ui/date-edit';
import FilterDropdown from '@/components/ui/filter-dropdown';
import SearchInputWithFilter from '@/components/ui/search-input-with-filter';
import Pagination from '@/components/ui/pagination';
import { Search, Refresh, Excel, Calendar } from '@/components/icons';

// 알림 데이터 타입
interface NotificationData {
  no: number;
  id: string;
  type: string;
  content: string;
  sender: string;
  status: string;
  createdAt: string;
  state: string;
  successFail: string;
}

// 샘플 데이터
const mockData: NotificationData[] = Array.from({ length: 12 }, (_, index) => ({
  no: 12345,
  id: 'CM00123',
  type: index === 1 ? '무엇이든 물어보세요' : '프로그램',
  content: index === 1 ? '내 게시글에 댓글 알림' : '신규 프로그램 등록 알림',
  sender: 'system',
  status: '노출중',
  createdAt: '2025-09-05 11:22',
  state: index === 1 ? '12' : '발송중',
  successFail: index === 1 ? '20/20' : '1200/-',
}));

export default function AdminNotificationsSendPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFilter, setSearchFilter] = useState('내용');
  const [selectedType, setSelectedType] = useState('전체');
  const [startDate, setStartDate] = useState<Date>(new Date(2025, 7, 8));
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [showStartCalendar, setShowStartCalendar] = useState(false);
  const [showEndCalendar, setShowEndCalendar] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const totalItems = 12345;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startDateRef = useRef<HTMLDivElement>(null);
  const endDateRef = useRef<HTMLDivElement>(null);

  // 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (startDateRef.current && !startDateRef.current.contains(event.target as Node)) {
        setShowStartCalendar(false);
      }
      if (endDateRef.current && !endDateRef.current.contains(event.target as Node)) {
        setShowEndCalendar(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearch = () => {
    console.log('검색 실행');
  };

  const handleReset = () => {
    setSearchQuery('');
    setSearchFilter('내용');
    setSelectedType('전체');
    setStartDate(new Date(2025, 7, 8));
    setEndDate(null);
  };

  const formatDate = (date: Date | null) => {
    if (!date) return '';
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleExcelDownload = () => {
    console.log('엑셀 다운로드');
  };

  const handleRegister = () => {
    console.log('커뮤니티 등록');
  };

  return (
    <div className="flex w-full flex-col items-center gap-[34px] p-11">
      {/* 페이지 제목 */}
      <h1 className="self-stretch text-2xl font-bold leading-8 text-gray-1">시스템 알림 발송</h1>

      {/* 필터 섹션 */}
      <div className="flex w-full flex-col items-start gap-[18px] rounded-lg bg-[#FAF8F6] p-8">
        <div className="flex w-full items-start gap-6">
          {/* 가입일 */}
          <div className="flex items-center gap-2">
            <span className="text-base font-bold text-gray-2">가입일</span>
            <div className="flex w-[306px] items-center gap-2">
              {/* 시작일 */}
              <div className="relative" ref={startDateRef}>
                <button
                  type="button"
                  onClick={() => {
                    setShowStartCalendar(!showStartCalendar);
                    setShowEndCalendar(false);
                  }}
                  className="flex w-[140px] items-center justify-between rounded-md border border-[#EBEBEB] bg-white p-3 transition-colors hover:border-primary"
                >
                  <span
                    className={`font-pretendard text-xs ${
                      startDate ? 'font-bold text-primary' : 'font-medium text-[#727272]'
                    }`}
                  >
                    {formatDate(startDate) || '날짜 입력'}
                  </span>
                  <Calendar size={12} color="#727272" />
                </button>
                {showStartCalendar && (
                  <div className="absolute left-0 top-full z-50 mt-2">
                    <DateEdit
                      value={startDate}
                      onChange={setStartDate}
                      onConfirm={(date) => {
                        setStartDate(date);
                        setShowStartCalendar(false);
                      }}
                      onCancel={() => setShowStartCalendar(false)}
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
                    setShowEndCalendar(!showEndCalendar);
                    setShowStartCalendar(false);
                  }}
                  className="flex w-[140px] items-center justify-between rounded-md border border-[#EBEBEB] bg-white p-3 transition-colors hover:border-primary"
                >
                  <span
                    className={`font-pretendard text-xs ${
                      endDate ? 'font-bold text-primary' : 'font-medium text-[#727272]'
                    }`}
                  >
                    {formatDate(endDate) || '날짜 입력'}
                  </span>
                  <Calendar size={12} color="#727272" />
                </button>
                {showEndCalendar && (
                  <div className="absolute left-0 top-full z-50 mt-2">
                    <DateEdit
                      value={endDate || new Date()}
                      onChange={setEndDate}
                      onConfirm={(date) => {
                        setEndDate(date);
                        setShowEndCalendar(false);
                      }}
                      onCancel={() => setShowEndCalendar(false)}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 유형 */}
          <div className="flex flex-1 items-center gap-2">
            <span className="text-base font-bold text-gray-2">유형</span>
            <FilterDropdown
              value={selectedType}
              options={['전체', '프로그램', '댓글']}
              onChange={setSelectedType}
            />
          </div>
        </div>

        {/* 검색 영역 */}
        <div className="flex w-full items-center gap-6">
          <SearchInputWithFilter
            filterValue={searchFilter}
            filterOptions={['내용', '발신자', '알림ID']}
            onFilterChange={setSearchFilter}
            searchValue={searchQuery}
            onSearchChange={setSearchQuery}
            placeholder="검색조건을 입력해주세요"
          />
          <div className="flex items-center gap-2">
            <Button
              onClick={handleSearch}
              className="flex h-[43px] w-[120px] items-center justify-center gap-[10px] rounded bg-primary px-0"
            >
              <Search size={16} color="white" />
              <span className="text-base font-bold text-white">검색</span>
            </Button>
            <Button
              onClick={handleReset}
              variant="outline"
              className="flex h-[43px] w-[120px] items-center justify-center gap-[10px] rounded border-[1.3px] border-primary bg-white hover:bg-white/90"
            >
              <Refresh size={16} color="#911A00" />
              <span className="text-base font-bold text-primary">초기화</span>
            </Button>
          </div>
        </div>
      </div>

      {/* 결과 섹션 */}
      <div className="flex w-full flex-col items-center gap-6">
        <div className="flex w-full flex-col items-end gap-4">
          {/* 상단 툴바 */}
          <div className="flex w-full items-center justify-between">
            <div className="text-xl font-normal text-gray-3">
              총 <span className="text-primary">{totalItems.toLocaleString()}</span>건
            </div>
            <div className="flex items-center gap-3">
              <Button
                onClick={handleExcelDownload}
                variant="outline"
                className="flex h-[36px] w-[127px] items-center gap-3 rounded border-[1.6px] border-[#4CA452] bg-white hover:bg-white/90"
              >
                <Excel size={16} color="#4CA452" />
                <span className="text-sm font-bold text-[#4CA452]">엑셀 다운로드</span>
              </Button>
              {/* <Button
                onClick={handleRegister}
                className="flex h-10 h-[36px] w-[120px] items-center justify-center rounded bg-primary"
              >
                <span className="text-sm font-bold text-white">커뮤니티 등록</span>
              </Button> */}
            </div>
          </div>

          {/* 테이블 */}
          <div className="flex w-full flex-col">
            {/* 테이블 헤더 */}
            <div className="flex h-[50px] items-center justify-between rounded-sm bg-[#EEE] px-4">
              <div className="flex w-10 justify-center">
                <span className="text-xs font-bold text-[#515151]">NO</span>
              </div>
              <div className="flex w-[60px] justify-center">
                <span className="text-xs font-bold text-[#515151]">알림ID</span>
              </div>
              <div className="flex w-[100px] justify-center">
                <span className="text-xs font-bold text-[#515151]">유형</span>
              </div>
              <div className="flex w-[240px] justify-center">
                <span className="text-xs font-bold text-[#515151]">내용</span>
              </div>
              <div className="flex w-[88px] justify-center">
                <span className="text-xs font-bold text-[#515151]">발신자</span>
              </div>
              <div className="flex w-[100px] justify-center">
                <span className="text-xs font-bold text-[#515151]">상태</span>
              </div>
              <div className="flex w-[114px] justify-center">
                <span className="text-xs font-bold text-[#515151]">작성일시</span>
              </div>
              <div className="flex w-[60px] justify-center">
                <span className="text-xs font-bold text-[#515151]">상태</span>
              </div>
              <div className="flex w-[60px] justify-center">
                <span className="text-xs font-bold text-[#515151]">성공/실패</span>
              </div>
            </div>

            {/* 테이블 데이터 */}
            {mockData.map((item, index) => (
              <div
                key={index}
                className="flex h-[50px] items-center justify-between px-4 transition-colors hover:rounded-sm hover:bg-[#EBE1DF] bg-white"
              >
                <div className="flex w-10 justify-center">
                  <span className="text-xs font-normal text-[#686868]">{item.no}</span>
                </div>
                <div className="flex w-[60px] justify-center">
                  <span className="text-xs font-normal text-[#686868]">{item.id}</span>
                </div>
                <div className="flex w-[100px] justify-center">
                  <span className="text-xs font-normal text-[#686868]">{item.type}</span>
                </div>
                <div className="flex w-[240px] justify-center">
                  <span className="text-xs font-normal text-[#686868]">{item.content}</span>
                </div>
                <div className="flex w-[88px] justify-center">
                  <span className="text-xs font-normal text-[#686868]">{item.sender}</span>
                </div>
                <div className="flex w-[100px] justify-center">
                  <Badge className="rounded-full border border-[#B0D5F2] bg-[#F6FBFF] px-3 py-[6px] text-sm font-normal text-[#2581F9]">
                    {item.status}
                  </Badge>
                </div>
                <div className="flex w-[114px] justify-center">
                  <span className="text-xs font-normal text-[#686868]">{item.createdAt}</span>
                </div>
                <div className="flex w-[60px] justify-center">
                  <span className="text-xs font-normal text-[#686868]">{item.state}</span>
                </div>
                <div className="flex w-[60px] justify-center">
                  <span className="text-xs font-normal text-[#686868]">{item.successFail}</span>
                </div>
              </div>
            ))}
          </div>

          {/* 페이지네이션 */}
          <div className="flex w-full items-center justify-between">
            <FilterDropdown
              value={`${itemsPerPage}개씩 보기`}
              options={['10개씩 보기', '20개씩 보기', '50개씩 보기']}
              onChange={(value) => setItemsPerPage(parseInt(value.replace('개씩 보기', '')))}
              width="w-auto min-w-[130px]"
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
