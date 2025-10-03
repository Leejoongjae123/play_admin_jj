'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import DateEdit from '@/components/ui/date-edit';
import FilterDropdown from '@/components/ui/filter-dropdown';
import SearchInputWithFilter from '@/components/ui/search-input-with-filter';
import Pagination from '@/components/ui/pagination';
import ReportStatusBadge from '@/components/ui/ReportStatusBadge';
import Calendar from '@/components/icons/Calendar';
import Search from '@/components/icons/Search';
import Refresh from '@/components/icons/Refresh';
import Excel from '@/components/icons/Excel';

interface ReportData {
  id: number;
  reportId: string;
  category: string;
  targetId: string;
  preview: string;
  reporter: string;
  reportType: string;
  status: 'completed' | 'pending' | 'invalid';
  date: string;
  isHighlighted?: boolean;
}

const mockData: ReportData[] = [
  {
    id: 12345,
    reportId: 'RP00123',
    category: '댓글',
    targetId: 'C9804',
    preview: '장면 전환이 매끄럽고 몰입되는 느낌이었습니다',
    reporter: '홍길동(user1)',
    reportType: '스팸',
    status: 'completed',
    date: '2025-09-05 11:22',
  },
  {
    id: 12345,
    reportId: 'RP00123',
    category: '댓글',
    targetId: 'C9804',
    preview: '연극 <마타하리> 제작 크루 모집',
    reporter: '홍길동(user1)',
    reportType: '홍보성',
    status: 'completed',
    date: '2025-09-05 11:22',
    isHighlighted: true,
  },
  {
    id: 12345,
    reportId: 'RP00123',
    category: '게시물',
    targetId: 'C9804',
    preview: '장면 전환이 매끄럽고 몰입되는 느낌이었습니다',
    reporter: '홍길동(user1)',
    reportType: '욕설·비방',
    status: 'pending',
    date: '2025-09-05 11:22',
  },
  {
    id: 12345,
    reportId: 'RP00123',
    category: '메모',
    targetId: 'C9804',
    preview: '장면 전환이 매끄럽고 몰입되는 느낌이었습니다',
    reporter: '홍길동(user1)',
    reportType: '기타',
    status: 'invalid',
    date: '2025-09-05 11:22',
  },
  {
    id: 12345,
    reportId: 'RP00123',
    category: '댓글',
    targetId: 'C9804',
    preview: '장면 전환이 매끄럽고 몰입되는 느낌이었습니다',
    reporter: '홍길동(user1)',
    reportType: '스팸',
    status: 'completed',
    date: '2025-09-05 11:22',
  },
  {
    id: 12345,
    reportId: 'RP00123',
    category: '댓글',
    targetId: 'C9804',
    preview: '장면 전환이 매끄럽고 몰입되는 느낌이었습니다',
    reporter: '홍길동(user1)',
    reportType: '스팸',
    status: 'completed',
    date: '2025-09-05 11:22',
  },
  {
    id: 12345,
    reportId: 'RP00123',
    category: '댓글',
    targetId: 'C9804',
    preview: '장면 전환이 매끄럽고 몰입되는 느낌이었습니다',
    reporter: '홍길동(user1)',
    reportType: '스팸',
    status: 'completed',
    date: '2025-09-05 11:22',
  },
  {
    id: 12345,
    reportId: 'RP00123',
    category: '댓글',
    targetId: 'C9804',
    preview: '장면 전환이 매끄럽고 몰입되는 느낌이었습니다',
    reporter: '홍길동(user1)',
    reportType: '스팸',
    status: 'completed',
    date: '2025-09-05 11:22',
  },
  {
    id: 12345,
    reportId: 'RP00123',
    category: '댓글',
    targetId: 'C9804',
    preview: '장면 전환이 매끄럽고 몰입되는 느낌이었습니다',
    reporter: '홍길동(user1)',
    reportType: '스팸',
    status: 'completed',
    date: '2025-09-05 11:22',
  },
  {
    id: 12345,
    reportId: 'RP00123',
    category: '댓글',
    targetId: 'C9804',
    preview: '장면 전환이 매끄럽고 몰입되는 느낌이었습니다',
    reporter: '홍길동(user1)',
    reportType: '스팸',
    status: 'completed',
    date: '2025-09-05 11:22',
  },
];

export default function AdminReportsPage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [selectedStatus, setSelectedStatus] = useState('전체');
  const [searchBy, setSearchBy] = useState('작성자');
  const [searchTerm, setSearchTerm] = useState('');
  const [startDate, setStartDate] = useState<Date | null>(new Date(2025, 7, 8));
  const [endDate, setEndDate] = useState<Date | null>(null);
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

  const handleReset = () => {
    setStartDate(new Date(2025, 7, 8));
    setEndDate(null);
    setSelectedCategory('전체');
    setSelectedStatus('전체');
    setSearchBy('작성자');
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
      {/* 페이지 제목 */}
      <div className="self-stretch">
        <h1 className="color-gray-1 text-2xl font-bold leading-8">신고 관리</h1>
      </div>

      {/* 필터 섹션 */}
      <div className="flex flex-col gap-4 self-stretch rounded-lg bg-[#FAF8F6] p-8">
        {/* 첫 번째 행 */}
        <div className="flex items-start gap-6 self-stretch">
          {/* 신고일시 */}
          <div className="flex items-center gap-2">
            <div className="text-base font-bold leading-6 text-[#555]">신고일시</div>
            <div className="flex items-center gap-2.5">
              {/* 시작일 */}
              <div className="relative" ref={startDateRef}>
                <button
                  onClick={() => setShowStartDatePicker(!showStartDatePicker)}
                  className="flex w-[140px] items-center justify-between rounded-md border border-[#EBEBEB] bg-white p-3 hover:bg-[#FFF5F2]"
                >
                  <div className="text-xs font-bold leading-normal text-[#911A00]">
                    {formatDate(startDate)}
                  </div>
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
              <div className="text-center text-xs font-bold leading-normal text-[#727272]">-</div>
              {/* 종료일 */}
              <div className="relative" ref={endDateRef}>
                <button
                  onClick={() => setShowEndDatePicker(!showEndDatePicker)}
                  className="flex w-[140px] items-center justify-between rounded-md border border-[#EBEBEB] bg-white p-3 hover:bg-[#FFF5F2]"
                >
                  <div
                    className={
                      endDate
                        ? 'text-xs font-bold leading-normal text-[#911A00]'
                        : 'text-xs font-medium leading-normal text-[#727272]'
                    }
                  >
                    {formatDate(endDate) || '날짜 입력'}
                  </div>
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

          {/* 구분 */}
          <div className="flex flex-1 items-center gap-2">
            <div className="text-base font-bold leading-6 text-[#555]">구분</div>
            <FilterDropdown
              value={selectedCategory}
              options={['전체', '댓글', '게시물', '메모']}
              onChange={setSelectedCategory}
            />
          </div>

          {/* 상태 */}
          <div className="flex flex-1 items-center gap-2">
            <div className="text-base font-bold leading-6 text-[#555]">상태</div>
            <FilterDropdown
              value={selectedStatus}
              options={['전체', '처리완료', '대기중', '무효']}
              onChange={setSelectedStatus}
            />
          </div>
        </div>

        {/* 두 번째 행 */}
        <div className="flex items-center gap-6 self-stretch">
          {/* 검색 필드 */}
          <SearchInputWithFilter
            filterValue={searchBy}
            filterOptions={['작성자', '신고자']}
            onFilterChange={setSearchBy}
            searchValue={searchTerm}
            onSearchChange={setSearchTerm}
            placeholder="검색조건을 입력해주세요"
          />

          {/* 버튼들 */}
          <div className="flex items-center gap-2">
            <button className="flex h-[43px] w-[120px] items-center justify-center gap-2.5 rounded bg-[#911A00] text-white hover:bg-[#911A00]/90">
              <Search size={16} color="#FFF" />
              <div className="text-base font-bold leading-normal">검색</div>
            </button>
            <button
              onClick={handleReset}
              className="flex h-[43px] w-[120px] items-center justify-center gap-2.5 rounded border-[1.3px] border-[#911A00] bg-white hover:bg-[#FFF5F2]"
            >
              <Refresh size={16} color="#911A00" />
              <div className="text-base font-bold leading-normal text-[#911A00]">초기화</div>
            </button>
          </div>
        </div>
      </div>

      {/* 결과 섹션 */}
      <div className="flex flex-col items-center gap-6 self-stretch">
        <div className="flex flex-col items-end gap-4 self-stretch">
          <div className="flex items-center justify-between self-stretch">
            <div className="text-center text-xl font-medium leading-6 tracking-[-0.4px]">
              <span className="text-[#6D6D6D]">총 </span>
              <span className="text-[#911A00]">12,345</span>
              <span className="text-[#6D6D6D]">건</span>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-3 rounded border-[1.6px] border-[#4CA452] bg-white px-3 py-2.5">
                <Excel size={16} color="#4CA452" />
                <div className="text-sm font-bold leading-4 tracking-[-0.28px] text-[#4CA452]">
                  엑셀 다운로드
                </div>
              </button>
              <button className="flex w-[120px] items-center justify-center rounded bg-[#911A00] py-2.5">
                <div className="text-sm font-bold leading-4 tracking-[-0.28px] text-white">
                  커뮤니티 등록
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* 테이블 */}
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            {/* 테이블 헤더 */}
            <thead>
              <tr className="h-[50px] bg-[#EEE]">
                <th className="px-2.5 text-xs font-bold text-[#515151]">NO</th>
                <th className="px-2.5 text-xs font-bold text-[#515151]">신고ID</th>
                <th className="px-2.5 text-xs font-bold text-[#515151]">구분</th>
                <th className="px-2.5 text-xs font-bold text-[#515151]">대상ID</th>
                <th className="px-2.5 text-xs font-bold text-[#515151]">내용 미리보기</th>
                <th className="px-2.5 text-xs font-bold text-[#515151]">신고자</th>
                <th className="px-2.5 text-xs font-bold text-[#515151]">신고유형</th>
                <th className="px-2.5 text-xs font-bold text-[#515151]">상태</th>
                <th className="px-2.5 text-xs font-bold text-[#515151]">신고일시</th>
              </tr>
            </thead>

            {/* 테이블 바디 */}
            <tbody>
              {mockData.map((item, index) => (
                <tr
                  key={index}
                  onClick={() => router.push(`/admin/reports/${item.reportId}`)}
                  className="group h-[50px] cursor-pointer bg-white transition-colors hover:bg-[#EBE1DF]"
                >
                  <td className="px-2.5 text-center text-xs font-medium text-[#686868] group-hover:text-[#911A00]">
                    {item.id}
                  </td>
                  <td className="px-2.5 text-center text-xs font-medium text-[#686868] group-hover:text-[#911A00]">
                    {item.reportId}
                  </td>
                  <td className="px-2.5 text-center text-xs font-medium text-[#686868] group-hover:text-[#911A00]">
                    {item.category}
                  </td>
                  <td className="px-2.5 text-center text-xs font-medium text-[#686868] group-hover:text-[#911A00]">
                    {item.targetId}
                  </td>
                  <td className="max-w-[260px] truncate px-2.5 text-center text-xs font-medium text-[#686868] group-hover:text-[#911A00]">
                    {item.preview}
                  </td>
                  <td className="max-w-[88px] truncate px-2.5 text-center text-xs font-medium text-[#686868] group-hover:text-[#911A00]">
                    {item.reporter}
                  </td>
                  <td className="max-w-[88px] truncate px-2.5 text-center text-xs font-medium text-[#686868] group-hover:text-[#911A00]">
                    {item.reportType}
                  </td>
                  <td className="px-2.5 text-center">
                    <div className="flex justify-center">
                      <ReportStatusBadge status={item.status} />
                    </div>
                  </td>
                  <td className="px-2.5 text-center text-xs font-medium text-[#686868] group-hover:text-[#911A00]">
                    {item.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 페이징 */}
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
