'use client';

import { useState, useRef, useEffect } from 'react';
import DateEdit from '@/components/ui/date-edit';
import FilterDropdown from '@/components/ui/filter-dropdown';
import SearchInputWithFilter from '@/components/ui/search-input-with-filter';
import Pagination from '@/components/ui/pagination';
import Calendar from '@/components/icons/Calendar';
import Search from '@/components/icons/Search';
import Refresh from '@/components/icons/Refresh';
import Excel from '@/components/icons/Excel';

interface CommunityPost {
  id: number;
  postId: string;
  category: string;
  title: string;
  author: string;
  status: 'exposed' | 'hidden';
  likes: number;
  comments: number;
  reports: number;
  createdAt: string;
  isHighlighted?: boolean;
}

const mockData: CommunityPost[] = [
  {
    id: 12345,
    postId: 'CM00123',
    category: '동료찾기',
    title: '연극 <마타하리> 제작 크루 모집',
    author: '홍길동(user1)',
    status: 'exposed',
    likes: 123,
    comments: 3,
    reports: 2,
    createdAt: '2025-09-05 11:22',
  },
  {
    id: 12345,
    postId: 'CM00123',
    category: '무엇이든 물어보세요',
    title: '연극 <마타하리> 제작 크루 모집',
    author: '홍길동(user1)',
    status: 'exposed',
    likes: 12,
    comments: 23,
    reports: 64,
    createdAt: '2025-09-05 11:22',
    isHighlighted: true,
  },
  // 추가 데이터들...
  ...Array.from({ length: 8 }, (_, index) => ({
    id: 12345,
    postId: 'CM00123',
    category:
      index % 2 === 0
        ? '동료찾기'
        : index % 3 === 0
          ? '거래'
          : index % 4 === 0
            ? '인스크립트 소식'
            : '작가커뮤니티',
    title: '연극 <마타하리> 제작 크루 모집',
    author: '홍길동(user1)',
    status: index >= 5 ? 'hidden' : 'exposed',
    likes: 123,
    comments: 3,
    reports: 2,
    createdAt: '2025-09-05 11:22',
  })),
] as CommunityPost[];

export default function AdminCommunityPage() {
  const [startDate, setStartDate] = useState<Date | null>(new Date(2025, 7, 8));
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [category, setCategory] = useState('전체');
  const [status, setStatus] = useState('전체');
  const [searchType, setSearchType] = useState('제목');
  const [searchQuery, setSearchQuery] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState('10개씩 보기');
  const [currentPage, setCurrentPage] = useState(1);
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);

  const startDateRef = useRef<HTMLDivElement>(null);
  const endDateRef = useRef<HTMLDivElement>(null);

  const totalPages = 10; // 실제로는 데이터 기반으로 계산

  const formatDate = (date: Date | null) => {
    if (!date) return '';
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleReset = () => {
    setStartDate(new Date(2025, 7, 8));
    setEndDate(null);
    setCategory('전체');
    setStatus('전체');
    setSearchType('제목');
    setSearchQuery('');
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

  const StatusBadge = ({ status }: { status: string }) => {
    if (status === 'exposed') {
      return (
        <div className="flex items-center justify-center rounded-full border border-[#B0D5F2] bg-[#F6FBFF] px-3 py-1.5">
          <span className="text-sm font-normal text-[#2581F9]">노출중</span>
        </div>
      );
    }
    return (
      <div className="flex items-center justify-center rounded-full bg-gray-5 px-3 py-1.5">
        <span className="text-sm font-normal text-gray-1">비공개</span>
      </div>
    );
  };

  return (
    <div className="flex w-full flex-col gap-8 p-11">
      {/* 제목 */}
      <h1 className="text-2xl font-bold text-gray-1">커뮤니티 관리</h1>

      {/* 필터 섹션 */}
      <div className="flex flex-col gap-4 rounded-lg bg-[#FAF8F6] p-8">
        {/* 첫 번째 행: 가입일, 카테고리, 상태 */}
        <div className="flex items-start gap-6">
          {/* 가입일 */}
          <div className="flex items-center gap-2">
            <span className="text-base font-bold text-gray-2">가입일</span>
            <div className="flex items-center gap-2.5">
              {/* 시작일 */}
              <div className="relative" ref={startDateRef}>
                <button
                  onClick={() => setShowStartDatePicker(!showStartDatePicker)}
                  className="flex w-[140px] items-center justify-between rounded-md border border-[#EBEBEB] bg-white px-3 py-3 hover:bg-[#FFF5F2]"
                >
                  <span className="text-xs font-bold text-primary">{formatDate(startDate)}</span>
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
              <span className="text-xs font-bold text-[#727272]">-</span>
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

          {/* 카테고리 */}
          <div className="flex flex-1 items-center gap-2">
            <span className="text-base font-bold text-gray-2">카테고리</span>
            <FilterDropdown
              value={category}
              options={[
                '전체',
                '동료찾기',
                '거래',
                '무엇이든 물어보세요',
                '인스크립트 소식',
                '작가커뮤니티',
              ]}
              onChange={setCategory}
            />
          </div>

          {/* 상태 */}
          <div className="flex flex-1 items-center gap-2">
            <span className="text-base font-bold text-gray-2">상태</span>
            <FilterDropdown
              value={status}
              options={['전체', '노출중', '비공개']}
              onChange={setStatus}
            />
          </div>
        </div>

        {/* 두 번째 행: 검색 */}
        <div className="flex items-center gap-6">
          {/* 검색 입력 */}
          <SearchInputWithFilter
            filterValue={searchType}
            filterOptions={['제목', '작성자']}
            onFilterChange={setSearchType}
            searchValue={searchQuery}
            onSearchChange={setSearchQuery}
            placeholder="검색조건을 입력해주세요"
          />

          {/* 검색/초기화 버튼 */}
          <div className="flex items-center gap-2">
            <button className="flex w-[120px] h-[43px] items-center justify-center gap-2.5 rounded bg-primary py-3 text-white hover:bg-primary/90">
              <Search size={16} color="white" />
              <span className="text-base font-bold">검색</span>
            </button>
            <button
              onClick={handleReset}
              className="flex w-[120px] h-[43px] items-center justify-center gap-2.5 rounded border-[1.3px] border-primary bg-white py-3 text-primary hover:bg-[#FFF5F2]"
            >
              <Refresh size={16} color="#911A00" />
              <span className="text-base font-bold text-primary">초기화</span>
            </button>
          </div>
        </div>
      </div>

      {/* 결과 정보 및 액션 버튼 */}
      <div className="flex flex-col gap-6">
        <div className="flex items-end justify-between">
          <div className="flex items-center gap-4">
            <p className="text-xl text-gray-3">
              총 <span className="text-primary">12,345</span>건
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-3 rounded border-[1.6px] border-[#4CA452] bg-white px-3 py-2.5">
              <Excel size={16} color="#4CA452" />
              <span className="text-sm font-bold text-[#4CA452]">엑셀 다운로드</span>
            </button>
            <button className="flex w-[120px] items-center justify-center rounded bg-primary py-2.5 text-white">
              <span className="text-sm font-bold">게시글 등록</span>
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
                <th className="px-2.5 text-xs font-bold text-[#515151]">글ID</th>
                <th className="px-2.5 text-xs font-bold text-[#515151]">카테고리</th>
                <th className="px-2.5 text-xs font-bold text-[#515151]">제목</th>
                <th className="px-2.5 text-xs font-bold text-[#515151]">작성자</th>
                <th className="px-2.5 text-xs font-bold text-[#515151]">상태</th>
                <th className="px-2.5 text-xs font-bold text-[#515151]">좋아요</th>
                <th className="px-2.5 text-xs font-bold text-[#515151]">댓글</th>
                <th className="px-2.5 text-xs font-bold text-[#515151]">신고</th>
                <th className="px-2.5 text-xs font-bold text-[#515151]">작성일시</th>
              </tr>
            </thead>

            {/* 테이블 바디 */}
            <tbody>
              {mockData.map((post, index) => (
                <tr
                  key={index}
                  className="h-[50px] cursor-pointer bg-white transition-colors hover:bg-[#FFF5F2]"
                >
                  <td className="px-2.5 text-center text-xs font-medium text-[#686868]">
                    {post.id}
                  </td>
                  <td className="px-2.5 text-center text-xs font-medium text-[#686868]">
                    {post.postId}
                  </td>
                  <td className="px-2.5 text-center text-xs font-medium text-[#686868]">
                    {post.category}
                  </td>
                  <td className="px-2.5 text-center text-xs font-medium text-[#686868]">
                    {post.title}
                  </td>
                  <td className="max-w-[120px] truncate px-2.5 text-center text-xs font-medium text-[#686868]">
                    {post.author}
                  </td>
                  <td className="px-2.5 text-center">
                    <div className="flex justify-center">
                      <StatusBadge status={post.status} />
                    </div>
                  </td>
                  <td className="px-2.5 text-center text-xs font-medium text-[#686868]">
                    {post.likes}
                  </td>
                  <td className="px-2.5 text-center text-xs font-medium text-[#686868]">
                    {post.comments}
                  </td>
                  <td className="px-2.5 text-center text-xs font-medium text-[#686868]">
                    {post.reports}
                  </td>
                  <td className="px-2.5 text-center text-xs font-medium text-[#686868]">
                    {post.createdAt}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 페이지네이션 */}
        <div className="flex items-center justify-between">
          {/* 페이지당 항목 수 */}
          <FilterDropdown
            value={itemsPerPage}
            options={['10개씩 보기', '20개씩 보기', '50개씩 보기']}
            onChange={setItemsPerPage}
            width="w-[140px]"
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
  );
}
