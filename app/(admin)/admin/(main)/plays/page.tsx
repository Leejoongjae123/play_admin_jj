'use client';

import { useState, useRef, useEffect } from 'react';
import DateEdit from '@/components/ui/date-edit';
import FilterDropdown from '@/components/ui/filter-dropdown';
import SearchInputWithFilter from '@/components/ui/search-input-with-filter';
import Pagination from '@/components/ui/pagination';
import { Button } from '@/components/ui/button';
import Calendar from '@/components/icons/Calendar';
import Search from '@/components/icons/Search';
import Refresh from '@/components/icons/Refresh';
import Excel from '@/components/icons/Excel';

// 상태 뱃지 컴포넌트
function StatusBadge({ status }: { status: string }) {
  const statusConfig = {
    노출중: {
      className: 'border border-[#B0D5F2] bg-[#F6FBFF] text-[#2581F9]',
    },
    비공개: {
      className: 'bg-gray-5',
    },
    승인대기: {
      className: 'border border-[#D7825E] bg-[#FBEEE8] text-[#D44F34]',
    },
    반려: {
      className: 'bg-red text-white',
    },
  };

  const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.노출중;

  return (
    <div
      className={`flex items-center justify-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium ${config.className}`}
    >
      {status}
    </div>
  );
}

// 통계 카드 컴포넌트
function StatCard({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-6 rounded border border-orange-3 bg-background p-6">
      <div className="flex items-center gap-2 px-4 py-2">
        {icon}
        <span className="text-lg font-semibold text-primary">{title}</span>
      </div>
      <div className="line-clamp-1 w-[180px] text-center text-2xl font-semibold text-black">
        {value}
      </div>
    </div>
  );
}

// 테이블 데이터 타입
interface PlayData {
  no: number;
  playId: string;
  title: string;
  author: string;
  registrationDate: string;
  status: string;
  tags: string;
  views: number;
  memos: number;
  scraps: number;
  isHighlighted?: boolean;
}

// 샘플 데이터
const sampleData: PlayData[] = [
  {
    no: 12345,
    playId: 'P00123',
    title: '갈라테아',
    author: 'Gary Owen',
    registrationDate: '2025-01-01',
    status: '노출중',
    tags: '-',
    views: 0,
    memos: 0,
    scraps: 0,
  },
  {
    no: 12345,
    playId: 'P00123',
    title: '갈라테아',
    author: 'Gary Owen',
    registrationDate: '2025-01-01',
    status: '노출중',
    tags: '질투,삼각관계,사실주의',
    views: 23,
    memos: 45,
    scraps: 67,
  },
  {
    no: 12345,
    playId: 'P00123',
    title: '문은 열려 있거나 닫혀 있어야 하오',
    author: '작가명작가명작가명작가명',
    registrationDate: '2025-01-01',
    status: '노출중',
    tags: '질투,삼각관계,사실주의',
    views: 12,
    memos: 23,
    scraps: 64,
    isHighlighted: true,
  },
  {
    no: 12345,
    playId: 'P00123',
    title: '문은 열려 있거나 닫혀 있어야 하오',
    author: 'Gary Owen',
    registrationDate: '2025-01-01',
    status: '비공개',
    tags: '질투,삼각관계,사실주의',
    views: 23,
    memos: 45,
    scraps: 67,
  },
  {
    no: 12345,
    playId: 'P00123',
    title: '문은 열려 있거나 닫혀 있어야 하오',
    author: 'Gary Owen',
    registrationDate: '2025-01-01',
    status: '승인대기',
    tags: '질투,삼각관계,사실주의',
    views: 23,
    memos: 45,
    scraps: 67,
  },
  {
    no: 12345,
    playId: 'P00123',
    title: '문은 열려 있거나 닫혀 있어야 하오',
    author: 'Gary Owen',
    registrationDate: '2025-01-01',
    status: '반려',
    tags: '질투,삼각관계,사실주의',
    views: 23,
    memos: 45,
    scraps: 67,
  },
];

export default function AdminPlaysPage() {
  const [startDate, setStartDate] = useState<Date | null>(new Date(2025, 7, 8));
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [tagCategory, setTagCategory] = useState('전체');
  const [status, setStatus] = useState('전체');
  const [searchType, setSearchType] = useState('작품명');
  const [searchQuery, setSearchQuery] = useState('');
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
    setTagCategory('전체');
    setStatus('전체');
    setSearchType('작품명');
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

  return (
    <div className="flex w-full flex-col items-center gap-8 p-11">
      {/* 페이지 제목 */}
      <h1 className="self-stretch text-2xl font-semibold leading-8 text-gray-1">희곡 관리</h1>

      {/* 필터 섹션 */}
      <div className="flex flex-col gap-4 self-stretch rounded-lg bg-background p-8">
        {/* 첫 번째 행: 등록일자, 태그분류, 상태 */}
        <div className="flex items-start gap-6 self-stretch">
          {/* 등록일자 */}
          <div className="flex items-center gap-2">
            <span className="text-base font-semibold text-gray-2">등록일자</span>
            <div className="flex items-center gap-2.5">
              {/* 시작일 */}
              <div className="relative" ref={startDateRef}>
                <button
                  onClick={() => setShowStartDatePicker(!showStartDatePicker)}
                  className="flex w-[140px] items-center justify-between rounded-md border border-[#EBEBEB] bg-white px-3 py-3 hover:bg-[#FFF5F2]"
                >
                  <span className="text-xs font-semibold text-primary">{formatDate(startDate)}</span>
                  <Calendar size={12} />
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
              <span className="text-xs font-semibold text-gray-4">-</span>
              {/* 종료일 */}
              <div className="relative" ref={endDateRef}>
                <button
                  onClick={() => setShowEndDatePicker(!showEndDatePicker)}
                  className="flex w-[140px] items-center justify-between rounded-md border border-[#EBEBEB] bg-white px-3 py-3 hover:bg-[#FFF5F2]"
                >
                  <span className="text-xs font-medium text-gray-4">
                    {formatDate(endDate) || '날짜 입력'}
                  </span>
                  <Calendar size={12} />
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

          {/* 태그분류 */}
          <div className="flex flex-1 items-center gap-2">
            <span className="text-base font-semibold text-gray-2">태그분류</span>
            <FilterDropdown
              value={tagCategory}
              options={['전체', '로맨스', '코미디', '드라마']}
              onChange={setTagCategory}
            />
          </div>

          {/* 상태 */}
          <div className="flex flex-1 items-center gap-2">
            <span className="text-base font-semibold text-gray-2">상태</span>
            <FilterDropdown
              value={status}
              options={['전체', '노출중', '비공개', '승인대기', '반려']}
              onChange={setStatus}
            />
          </div>
        </div>

        {/* 두 번째 행: 검색 */}
        <div className="flex items-center gap-6 self-stretch">
          <SearchInputWithFilter
            filterValue={searchType}
            filterOptions={['작품명', '작가명']}
            onFilterChange={setSearchType}
            searchValue={searchQuery}
            onSearchChange={setSearchQuery}
            placeholder="검색조건을 입력해주세요"
          />
          <div className="flex items-center gap-2">
            <Button
              onClick={handleSearch}
              className="flex h-auto w-[120px] items-center justify-center gap-2.5 rounded bg-primary px-0 py-3"
            >
              <Search size={16} color="white" />
              <span className="text-base font-semibold text-white">검색</span>
            </Button>
            <Button
              onClick={handleReset}
              variant="outline"
              className="flex h-auto w-[120px] items-center justify-center gap-2.5 rounded border-[1.3px] border-primary bg-white px-0 py-3"
            >
              <Refresh size={16} />
              <span className="text-base font-semibold text-primary">초기화</span>
            </Button>
          </div>
        </div>
      </div>

      {/* 통계 섹션 */}
      <div className="flex flex-col items-center gap-6 self-stretch">
        <div className="flex items-start gap-8">
          <StatCard
            icon={
              <svg width="24" height="24" viewBox="0 0 25 25" fill="none">
                <path
                  d="M8.9 21.4727C7.38333 21.4727 6.104 20.952 5.062 19.9107C4.02 18.8693 3.49933 17.59 3.5 16.0727C3.5 15.4393 3.60833 14.8227 3.825 14.2227C4.04167 13.6227 4.35 13.081 4.75 12.5977L8.3 8.32266L6.6 4.92266C6.43333 4.58932 6.446 4.26432 6.638 3.94766C6.83 3.63099 7.11733 3.47266 7.5 3.47266H17.5C17.8833 3.47266 18.171 3.63099 18.363 3.94766C18.555 4.26432 18.5673 4.58932 18.4 4.92266L16.7 8.32266L20.25 12.5977C20.65 13.081 20.9583 13.6227 21.175 14.2227C21.3917 14.8227 21.5 15.4393 21.5 16.0727C21.5 17.5893 20.975 18.8687 19.925 19.9107C18.875 20.9527 17.6 21.4733 16.1 21.4727H8.9ZM12.5 16.4727C11.95 16.4727 11.4793 16.277 11.088 15.8857C10.6967 15.4943 10.5007 15.0233 10.5 14.4727C10.4993 13.922 10.6953 13.4513 11.088 13.0607C11.4807 12.67 11.9513 12.474 12.5 12.4727C13.0487 12.4713 13.5197 12.6673 13.913 13.0607C14.3063 13.454 14.502 13.9247 14.5 14.4727C14.498 15.0207 14.3023 15.4917 13.913 15.8857C13.5237 16.2797 13.0527 16.4753 12.5 16.4727ZM10.125 7.47266H14.875L15.875 5.47266H9.125L10.125 7.47266ZM8.9 19.4727H16.1C17.05 19.4727 17.8543 19.1437 18.513 18.4857C19.1717 17.8277 19.5007 17.0233 19.5 16.0727C19.5 15.6727 19.429 15.2853 19.287 14.9107C19.145 14.536 18.9493 14.1983 18.7 13.8977L15.025 9.47266H10L6.3 13.8727C6.05 14.1727 5.85433 14.5143 5.713 14.8977C5.57167 15.281 5.50067 15.6727 5.5 16.0727C5.5 17.0227 5.82933 17.827 6.488 18.4857C7.14667 19.1443 7.95067 19.4733 8.9 19.4727Z"
                  fill="#911A00"
                />
              </svg>
            }
            title="총 결제금액"
            value="34,545,000 ₩"
          />
          <StatCard
            icon={
              <svg width="24" height="24" viewBox="0 0 25 25" fill="none">
                <path
                  d="M15.2997 18.3527L18.6597 14.9927M19.7797 5.47266L5.21973 12.1927L11.9397 13.5927M19.7797 5.47266L11.9397 13.5927M19.7797 5.47266L17.3297 11.8427M11.9397 13.5927L12.2897 15.2027M19.7797 16.6727C19.7797 17.4153 19.4847 18.1275 18.9596 18.6526C18.4345 19.1777 17.7223 19.4727 16.9797 19.4727C16.2371 19.4727 15.5249 19.1777 14.9998 18.6526C14.4747 18.1275 14.1797 17.4153 14.1797 16.6727C14.1797 15.9301 14.4747 15.2179 14.9998 14.6928C15.5249 14.1677 16.2371 13.8727 16.9797 13.8727C17.7223 13.8727 18.4345 14.1677 18.9596 14.6928C19.4847 15.2179 19.7797 15.9301 19.7797 16.6727Z"
                  stroke="#911A00"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            title="구독 취소"
            value="23건"
          />
        </div>

        {/* 결과 및 액션 */}
        <div className="flex items-end justify-between self-stretch">
          <div className="text-xl font-medium leading-6 tracking-[-0.4px]">
            <span className="text-gray-3">총 </span>
            <span className="text-primary">12,345</span>
            <span className="text-gray-3">건</span>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="flex h-auto items-center gap-3 rounded border-[1.6px] border-[#4CA452] bg-white px-3 py-2.5 hover:bg-white/90"
            >
              <Excel size={16} />
              <span className="text-sm font-semibold leading-4 tracking-[-0.28px] text-[#4CA452]">
                엑셀 다운로드
              </span>
            </Button>
            <Button className="h-auto w-[120px] rounded bg-primary px-0 py-2.5">
              <span className="text-sm font-semibold leading-4 tracking-[-0.28px] text-white">
                희곡 등록
              </span>
            </Button>
          </div>
        </div>

        {/* 테이블 */}
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            {/* 테이블 헤더 */}
            <thead>
              <tr className="h-[50px] bg-[#EEE]">
                <th className="px-2.5 text-xs font-bold text-[#515151]">NO</th>
                <th className="px-2.5 text-xs font-bold text-[#515151]">작품ID</th>
                <th className="px-2.5 text-xs font-bold text-[#515151]">작품명</th>
                <th className="px-2.5 text-xs font-bold text-[#515151]">작가명</th>
                <th className="px-2.5 text-xs font-bold text-[#515151]">등록일자</th>
                <th className="px-2.5 text-xs font-bold text-[#515151]">상태</th>
                <th className="px-2.5 text-xs font-bold text-[#515151]">태그</th>
                <th className="px-2.5 text-xs font-bold text-[#515151]">조회수</th>
                <th className="px-2.5 text-xs font-bold text-[#515151]">메모수</th>
                <th className="px-2.5 text-xs font-bold text-[#515151]">스크랩수</th>
              </tr>
            </thead>

            {/* 테이블 바디 */}
            <tbody>
              {sampleData.map((row, index) => (
                <tr
                  key={index}
                  className="h-[50px] cursor-pointer bg-white transition-colors hover:bg-[#FFF5F2]"
                >
                  <td className="px-2.5 text-center text-xs font-medium text-[#686868]">{row.no}</td>
                  <td className="px-2.5 text-center text-xs font-medium text-[#686868]">
                    {row.playId}
                  </td>
                  <td className="px-2.5 text-center text-xs font-medium text-[#686868]">
                    {row.title}
                  </td>
                  <td className="max-w-[100px] truncate px-2.5 text-center text-xs font-medium text-[#686868]">
                    {row.author}
                  </td>
                  <td className="px-2.5 text-center text-xs font-medium text-[#686868]">
                    {row.registrationDate}
                  </td>
                  <td className="px-2.5 text-center">
                    <div className="flex justify-center">
                      <StatusBadge status={row.status} />
                    </div>
                  </td>
                  <td className="px-2.5 text-center text-xs font-medium text-[#686868]">
                    {row.tags}
                  </td>
                  <td className="px-2.5 text-center text-xs font-medium text-[#686868]">
                    {row.views || '-'}
                  </td>
                  <td className="px-2.5 text-center text-xs font-medium text-[#686868]">
                    {row.memos || '-'}
                  </td>
                  <td className="px-2.5 text-center text-xs font-medium text-[#686868]">
                    {row.scraps || '-'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 페이지네이션 */}
        <div className="flex items-center justify-between self-stretch">
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
  );
}
