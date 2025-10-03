'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import DateEdit from '@/components/ui/date-edit';
import FilterDropdown from '@/components/ui/filter-dropdown';
import SearchInputWithFilter from '@/components/ui/search-input-with-filter';
import Pagination from '@/components/ui/pagination';
import MemoStatusBadge from '@/components/ui/MemoStatusBadge';
import Calendar from '@/components/icons/Calendar';
import Search from '@/components/icons/Search';
import Refresh from '@/components/icons/Refresh';
import Excel from '@/components/icons/Excel';

interface MemoData {
  id: number;
  memoId: string;
  category: string;
  target: string;
  authorId: string;
  content: string;
  likes: number | string;
  comments: number | string;
  reports: number | string;
  status: 'visible' | 'hidden';
  createdAt: string;
  isHighlighted?: boolean;
}

// 샘플 데이터
const sampleData: MemoData[] = [
  {
    id: 12345,
    memoId: 'M00123',
    category: '희곡',
    target: '시골에서의 한 달',
    authorId: '홍길동(user1)',
    content: '이 장면 정말 인상깊어요, 혹시 어떤 내용인지 아시는 분?',
    likes: '-',
    comments: '-',
    reports: '-',
    status: 'visible',
    createdAt: '2025-09-05 11:22',
  },
  {
    id: 12345,
    memoId: 'M00123',
    category: '희곡',
    target: '시골에서의 한 달',
    authorId: '홍길동(user1)',
    content: '이 장면 정말 인상깊어요, 혹시 어떤 내용인지 아시는 분?',
    likes: '-',
    comments: '-',
    reports: '-',
    status: 'visible',
    createdAt: '2025-09-05 11:22',
  },
  {
    id: 12345,
    memoId: 'M00123',
    category: '희곡',
    target: '시골에서의 한 달',
    authorId: '홍길동(user1)',
    content: '이 장면 정말 인상깊어요, 혹시 어떤 내용인지 아시는 분?',
    likes: '-',
    comments: '-',
    reports: '-',
    status: 'visible',
    createdAt: '2025-09-05 11:22',
  },
  {
    id: 12345,
    memoId: 'M00123',
    category: '희곡',
    target: '시골에서의 한 달',
    authorId: '홍길동(user1)',
    content: '이 장면 정말 인상깊어요, 혹시 어떤 내용인지 아시는 분?',
    likes: '-',
    comments: '-',
    reports: '-',
    status: 'visible',
    createdAt: '2025-09-05 11:22',
  },
  {
    id: 12345,
    memoId: 'M00123',
    category: '희곡',
    target: '시골에서의 한 달',
    authorId: '홍길동(user1)',
    content: '이 장면 정말 인상깊어요, 혹시 어떤 내용인지 아시는 분?',
    likes: 12,
    comments: 23,
    reports: 64,
    status: 'hidden',
    createdAt: ']2025-09-05 11:22',
    isHighlighted: true,
  },
  {
    id: 12345,
    memoId: 'M00123',
    category: '작가',
    target: '홍길동',
    authorId: '홍길동(user1)',
    content: '이 장면 정말 인상깊어요, 혹시 어떤 내용인지 아시는 분?',
    likes: 123,
    comments: 123,
    reports: 12,
    status: 'hidden',
    createdAt: '2025-09-05 11:22',
  },
  {
    id: 12345,
    memoId: 'M00123',
    category: '희곡',
    target: '시골에서의 한 달',
    authorId: '홍길동(user1)',
    content: '이 장면 정말 인상깊어요, 혹시 어떤 내용인지 아시는 분?',
    likes: '-',
    comments: '-',
    reports: '-',
    status: 'visible',
    createdAt: '2025-09-05 11:22',
  },
  {
    id: 12345,
    memoId: 'M00123',
    category: '희곡',
    target: '시골에서의 한 달',
    authorId: '홍길동(user1)',
    content: '이 장면 정말 인상깊어요, 혹시 어떤 내용인지 아시는 분?',
    likes: '-',
    comments: '-',
    reports: '-',
    status: 'visible',
    createdAt: '2025-09-05 11:22',
  },
  {
    id: 12345,
    memoId: 'M00123',
    category: '희곡',
    target: '시골에서의 한 달',
    authorId: '홍길동(user1)',
    content: '이 장면 정말 인상깊어요, 혹시 어떤 내용인지 아시는 분?',
    likes: '-',
    comments: '-',
    reports: '-',
    status: 'visible',
    createdAt: '2025-09-05 11:22',
  },
  {
    id: 12345,
    memoId: 'M00123',
    category: '희곡',
    target: '시골에서의 한 달',
    authorId: '홍길동(user1)',
    content: '이 장면 정말 인상깊어요, 혹시 어떤 내용인지 아시는 분?',
    likes: '-',
    comments: '-',
    reports: '-',
    status: 'visible',
    createdAt: '2025-09-05 11:22',
  },
];

export default function AdminMemosPage() {
  const router = useRouter();
  const [startDate, setStartDate] = useState<Date | null>(new Date(2025, 7, 8));
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [exposureFilter, setExposureFilter] = useState('전체');
  const [statusFilter, setStatusFilter] = useState('전체');
  const [authorFilter, setAuthorFilter] = useState('작성자');
  const [searchTerm, setSearchTerm] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState('10개씩 보기');
  const [currentPage, setCurrentPage] = useState(1);
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
    setAuthorFilter('작성자');
    setSearchTerm('');
    setItemsPerPage('10개씩 보기');
    setCurrentPage(1);
  };

  const handleExcelDownload = () => {
    // 엑셀 다운로드 로직 구현
  };

  const handlePlayRegister = () => {
    // 희곡 등록 로직 구현
  };

  const handleRowClick = (memoId: number) => {
    router.push(`/admin/memos/${memoId}`);
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
      {/* 페이지 제목 */}
      <div className="w-full">
        <h1 className="font-pretendard text-2xl font-bold leading-8 text-gray-1">메모 관리</h1>
      </div>

      {/* 필터 섹션 */}
      <div className="flex w-full flex-col gap-4 rounded-lg bg-[#FAF8F6] p-8">
        {/* 첫 번째 행: 가입일, 노출여부, 상태 */}
        <div className="flex w-full items-start gap-6">
          {/* 가입일 */}
          <div className="flex items-center gap-2">
            <span className="font-pretendard text-base font-bold text-gray-2">가입일</span>
            <div className="flex items-center gap-2.5">
              {/* 시작일 */}
              <div className="relative" ref={startDateRef}>
                <button
                  onClick={() => setShowStartDatePicker(!showStartDatePicker)}
                  className="flex w-[140px] items-center justify-between rounded-md border border-[#EBEBEB] bg-white px-3 py-3 hover:bg-[#FFF5F2]"
                >
                  <span className="font-pretendard text-xs font-bold text-primary">
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
              <span className="font-pretendard text-xs font-bold text-[#727272]">-</span>
              {/* 종료일 */}
              <div className="relative" ref={endDateRef}>
                <button
                  onClick={() => setShowEndDatePicker(!showEndDatePicker)}
                  className="flex w-[140px] items-center justify-between rounded-md border border-[#EBEBEB] bg-white px-3 py-3 hover:bg-[#FFF5F2]"
                >
                  <span
                    className={
                      endDate
                        ? 'font-pretendard text-xs font-bold text-primary'
                        : 'font-pretendard text-xs font-medium text-[#727272]'
                    }
                  >
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
            <span className="font-pretendard text-base font-bold text-gray-2">노출여부</span>
            <FilterDropdown
              value={exposureFilter}
              options={['전체', '노출중', '비공개']}
              onChange={setExposureFilter}
            />
          </div>

          {/* 상태 */}
          <div className="flex flex-1 items-center gap-2">
            <span className="font-pretendard text-base font-bold text-gray-2">상태</span>
            <FilterDropdown
              value={statusFilter}
              options={['전체', '정상', '신고됨']}
              onChange={setStatusFilter}
            />
          </div>
        </div>

        {/* 두 번째 행: 검색 */}
        <div className="flex w-full items-center gap-6">
          <SearchInputWithFilter
            filterValue={authorFilter}
            filterOptions={['작성자', '제목', '내용']}
            onFilterChange={setAuthorFilter}
            searchValue={searchTerm}
            onSearchChange={setSearchTerm}
            placeholder="검색조건을 입력해주세요"
          />

          <div className="flex items-center gap-2">
            <button
              onClick={handleSearch}
              className="flex h-[43px] w-[120px] items-center justify-center gap-2.5 rounded bg-primary text-white hover:bg-primary/90"
            >
              <Search size={16} color="white" />
              <span className="font-pretendard text-base font-bold">검색</span>
            </button>
            <button
              onClick={handleReset}
              className="flex h-[43px] w-[120px] items-center justify-center gap-2.5 rounded border-[1.3px] border-primary bg-white text-primary hover:bg-[#FFF5F2]"
            >
              <Refresh size={16} color="#911A00" />
              <span className="font-pretendard text-base font-bold">초기화</span>
            </button>
          </div>
        </div>
      </div>

      {/* 결과 및 액션 버튼 */}
      <div className="flex w-full flex-col items-center gap-6">
        <div className="flex w-full flex-col items-end gap-4">
          <div className="flex w-full items-center justify-between">
            <div className="font-pretendard text-xl leading-6 tracking-[-0.4px]">
              <span className="text-[#6D6D6D]">총 </span>
              <span className="text-primary">12,345</span>
              <span className="text-[#6D6D6D]">명</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleExcelDownload}
                className="flex items-center gap-3 rounded border-[1.6px] border-[#4CA452] bg-white px-3 py-2.5"
              >
                <Excel size={16} color="#4CA452" />
                <span className="w- font-pretendard text-sm font-bold leading-4 tracking-[-0.28px] text-[#4CA452]">
                  엑셀 다운로드
                </span>
              </button>
              <button
                onClick={handlePlayRegister}
                className="flex h-9 w-[120px] items-center justify-center gap-[10px] rounded bg-primary px-0 py-2.5"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_861_7463)">
                    <path
                      d="M3.67709 12.9727H15V0.972656H3.64584C3.14353 0.974271 2.66225 1.17453 2.30706 1.52972C1.95187 1.88491 1.75162 2.36619 1.75 2.8685V13.918H1.75034C1.75034 13.9227 1.75 13.9273 1.75 13.9321C1.75 15.0384 2.61819 15.9727 3.64584 15.9727H15V14.9727H3.64584C3.177 14.9727 2.75 14.4767 2.75 13.932C2.75 13.412 3.17453 12.9727 3.67709 12.9727ZM11.75 1.98306V7.38356L10.2375 6.05575L8.75 7.37578V1.98306H11.75ZM7.75 1.97266V8.72266H8.73878L10.2411 7.38956L11.7595 8.72266H12.75V1.97266H14V11.9727H4.7525L4.75 1.97266H7.75ZM3.64584 1.97266H3.75L3.75237 11.9727H3.67697C3.35181 11.9727 3.0323 12.0576 2.75 12.219V2.87631C2.74924 2.63777 2.84312 2.40866 3.01107 2.23925C3.17901 2.06984 3.4073 1.97396 3.64584 1.97266Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_861_7463">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(0.5 0.472656)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span className="font-pretendard text-sm font-bold leading-4 tracking-[-0.28px] text-white">
                  희곡 등록
                </span>
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
                  <th className="px-2.5 text-xs font-bold text-[#515151]">메모ID</th>
                  <th className="px-2.5 text-xs font-bold text-[#515151]">구분</th>
                  <th className="px-2.5 text-xs font-bold text-[#515151]">대상</th>
                  <th className="px-2.5 text-xs font-bold text-[#515151]">작성자(ID)</th>
                  <th className="px-2.5 text-xs font-bold text-[#515151]">메모내용 (요약)</th>
                  <th className="px-2.5 text-xs font-bold text-[#515151]">좋아요</th>
                  <th className="px-2.5 text-xs font-bold text-[#515151]">댓글</th>
                  <th className="px-2.5 text-xs font-bold text-[#515151]">신고</th>
                  <th className="px-2.5 text-xs font-bold text-[#515151]">상태</th>
                  <th className="px-2.5 text-xs font-bold text-[#515151]">등록일시</th>
                </tr>
              </thead>

              {/* 테이블 바디 */}
              <tbody>
                {sampleData.map((memo, index) => (
                  <tr
                    key={index}
                    onClick={() => handleRowClick(memo.id)}
                    className="group h-[50px] cursor-pointer bg-white transition-colors hover:bg-[#EBE1DF]"
                  >
                    <td className="px-2.5 text-center text-xs font-medium text-[#686868] group-hover:text-[#911A00]">
                      {memo.id}
                    </td>
                    <td className="px-2.5 text-center text-xs font-medium text-[#686868] group-hover:text-[#911A00]">
                      {memo.memoId}
                    </td>
                    <td className="px-2.5 text-center text-xs font-medium text-[#686868] group-hover:text-[#911A00]">
                      {memo.category}
                    </td>
                    <td className="px-2.5 text-center text-xs font-medium text-[#686868] group-hover:text-[#911A00]">
                      {memo.target}
                    </td>
                    <td className="max-w-[88px] truncate px-2.5 text-center text-xs font-medium text-[#686868] group-hover:text-[#911A00]">
                      {memo.authorId}
                    </td>
                    <td className="max-w-[160px] truncate px-2.5 text-center text-xs font-medium text-[#686868] group-hover:text-[#911A00]">
                      {memo.content}
                    </td>
                    <td className="px-2.5 text-center text-xs font-medium text-[#686868] group-hover:text-[#911A00]">
                      {memo.likes}
                    </td>
                    <td className="px-2.5 text-center text-xs font-medium text-[#686868] group-hover:text-[#911A00]">
                      {memo.comments}
                    </td>
                    <td className="px-2.5 text-center text-xs font-medium text-[#686868] group-hover:text-[#911A00]">
                      {memo.reports}
                    </td>
                    <td className="px-2.5 text-center">
                      <div className="flex justify-center">
                        <MemoStatusBadge status={memo.status} />
                      </div>
                    </td>
                    <td className="px-2.5 text-center text-xs font-medium text-[#686868] group-hover:text-[#911A00]">
                      {memo.createdAt}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 페이지네이션 */}
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
