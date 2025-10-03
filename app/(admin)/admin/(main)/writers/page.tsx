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
import WriterStatusBadge from '@/components/ui/WriterStatusBadge';

interface Writer {
  id: number;
  writerId: string;
  name: string;
  email: string;
  representative: string;
  status: '노출중' | '비공개' | '승인대기' | '반려';
  registeredAt: string;
  worksCount: number | null;
  memosCount: number | null;
  scrapsCount: number | null;
}

const mockWriters: Writer[] = [
  {
    id: 12345,
    writerId: 'P00123',
    name: 'Gary Owen',
    email: 'qwe12@gmail.com',
    representative: '갈라테아',
    status: '노출중',
    registeredAt: '2025-01-01',
    worksCount: null,
    memosCount: null,
    scrapsCount: null,
  },
  {
    id: 12345,
    writerId: 'P00123',
    name: 'Gary Owen',
    email: 'qwe12@gmail.com',
    representative: '갈라테아',
    status: '노출중',
    registeredAt: '2025-01-01',
    worksCount: 23,
    memosCount: 45,
    scrapsCount: 67,
  },
  {
    id: 12345,
    writerId: 'P00123',
    name: '작가명작가명작가명작가명',
    email: 'qwe12@gmail.com',
    representative: '문은 열려 있거나 닫혀 있어야 하오',
    status: '노출중',
    registeredAt: '2025-01-01',
    worksCount: 12,
    memosCount: 23,
    scrapsCount: 64,
  },
  {
    id: 12345,
    writerId: 'P00123',
    name: 'Gary Owen',
    email: 'qwe12@gmail.com',
    representative: '문은 열려 있거나 닫혀 있어야 하오',
    status: '비공개',
    registeredAt: '2025-01-01',
    worksCount: 23,
    memosCount: 45,
    scrapsCount: 67,
  },
  {
    id: 12345,
    writerId: 'P00123',
    name: 'Gary Owen',
    email: 'qwe12@gmail.com',
    representative: '문은 열려 있거나 닫혀 있어야 하오',
    status: '승인대기',
    registeredAt: '2025-01-01',
    worksCount: 23,
    memosCount: 45,
    scrapsCount: 67,
  },
  {
    id: 12345,
    writerId: 'P00123',
    name: 'Gary Owen',
    email: 'qwe12@gmail.com',
    representative: '문은 열려 있거나 닫혀 있어야 하오',
    status: '반려',
    registeredAt: '2025-01-01',
    worksCount: 23,
    memosCount: 45,
    scrapsCount: 67,
  },
  {
    id: 12345,
    writerId: 'P00123',
    name: 'Gary Owen',
    email: 'qwe12@gmail.com',
    representative: '갈라테아',
    status: '노출중',
    registeredAt: '2025-01-01',
    worksCount: 23,
    memosCount: 45,
    scrapsCount: 67,
  },
  {
    id: 12345,
    writerId: 'P00123',
    name: 'Gary Owen',
    email: 'qwe12@gmail.com',
    representative: '갈라테아',
    status: '노출중',
    registeredAt: '2025-01-01',
    worksCount: 23,
    memosCount: 45,
    scrapsCount: 67,
  },
  {
    id: 12345,
    writerId: 'P00123',
    name: 'Gary Owen',
    email: 'qwe12@gmail.com',
    representative: '갈라테아',
    status: '노출중',
    registeredAt: '2025-01-01',
    worksCount: 23,
    memosCount: 45,
    scrapsCount: 67,
  },
  {
    id: 12345,
    writerId: 'P00123',
    name: 'Gary Owen',
    email: 'qwe12@gmail.com',
    representative: '갈라테아',
    status: '노출중',
    registeredAt: '2025-01-01',
    worksCount: 23,
    memosCount: 45,
    scrapsCount: 67,
  },
];

export default function AdminWritersPage() {
  const router = useRouter();
  const [startDate, setStartDate] = useState<Date | null>(new Date(2025, 7, 8));
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [statusFilter, setStatusFilter] = useState('전체');
  const [searchType, setSearchType] = useState('작품명');
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
    setStatusFilter('전체');
    setSearchType('작품명');
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

  const exposedWriters = mockWriters.filter((writer) => writer.status === '노출중').length;
  const hiddenWriters = mockWriters.filter((writer) => writer.status === '비공개').length;
  const totalWriters = mockWriters.length;

  return (
    <div className="flex w-full flex-col items-center gap-8 p-11">
      {/* 제목 */}
      <h1 className="self-stretch text-2xl font-semibold leading-8 text-gray-1">작가 관리</h1>

      {/* 필터 영역 */}
      <div className="flex flex-col gap-4 self-stretch rounded-lg bg-[#FAF8F6] p-8">
        {/* 첫 번째 행: 가입일, 상태 */}
        <div className="flex items-start gap-6 self-stretch">
          {/* 가입일 */}
          <div className="flex items-center gap-2">
            <div className="text-base font-semibold leading-6 text-gray-2">가입일</div>
            <div className="flex items-center gap-2.5">
              {/* 시작일 */}
              <div className="relative" ref={startDateRef}>
                <button
                  onClick={() => setShowStartDatePicker(!showStartDatePicker)}
                  className="flex w-[140px] items-center justify-between rounded-md border border-[#EBEBEB] bg-white p-3 hover:bg-[#FFF5F2]"
                >
                  <div className="text-xs font-semibold text-primary">{formatDate(startDate)}</div>
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
              <div className="text-center text-xs font-semibold text-[#727272]">-</div>
              {/* 종료일 */}
              <div className="relative" ref={endDateRef}>
                <button
                  onClick={() => setShowEndDatePicker(!showEndDatePicker)}
                  className="flex w-[140px] items-center justify-between rounded-md border border-[#EBEBEB] bg-white p-3 hover:bg-[#FFF5F2]"
                >
                  <div className="text-xs font-medium text-[#727272]">
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

          {/* 상태 */}
          <div className="flex flex-1 items-center gap-2">
            <div className="text-base font-semibold leading-6 text-gray-2">상태</div>
            <FilterDropdown
              value={statusFilter}
              options={['전체', '노출중', '비공개', '승인대기', '반려']}
              onChange={setStatusFilter}
            />
          </div>
        </div>

        {/* 두 번째 행: 검색 */}
        <div className="flex items-center gap-6 self-stretch">
          <SearchInputWithFilter
            filterValue={searchType}
            filterOptions={['작품명', '작가명', 'ID']}
            onFilterChange={setSearchType}
            searchValue={searchTerm}
            onSearchChange={setSearchTerm}
            placeholder="검색조건을 입력해주세요"
          />
          <div className="flex items-center gap-2">
            {/* 검색 버튼 */}
            <button
              onClick={handleSearch}
              className="flex h-[43px] w-[120px] items-center justify-center gap-2.5 rounded bg-primary text-white hover:bg-primary/90"
            >
              <Search size={16} color="white" />
              <div className="text-base font-semibold">검색</div>
            </button>
            {/* 초기화 버튼 */}
            <button
              onClick={handleReset}
              className="flex h-[43px] w-[120px] items-center justify-center gap-2.5 rounded border-[1.3px] border-primary bg-white hover:bg-[#FFF5F2]"
            >
              <Refresh size={16} color="#911A00" />
              <div className="text-base font-semibold text-primary">초기화</div>
            </button>
          </div>
        </div>
      </div>

      {/* 통계 영역 */}
      <div className="flex flex-col items-center gap-6 self-stretch">
        {/* 통계 카드들 */}
        <div className="flex items-start gap-8">
          {/* 노출작가 */}
          <div className="flex flex-col items-center justify-center gap-0 rounded border border-[#CCBCAB] bg-[#FAF8F6] px-10 py-5">
            <div className="flex w-[120px] items-center justify-center gap-2 px-4 py-2">
              <div className="text-lg font-semibold leading-6 text-primary">노출작가</div>
            </div>
            <div className="w-[180px] truncate text-center text-2xl font-semibold leading-8 text-black">
              1,123명
            </div>
          </div>

          {/* 미노출 작가 */}
          <div className="flex flex-col items-center justify-center gap-0 rounded border border-[#CCBCAB] bg-[#FAF8F6] px-10 py-5">
            <div className="flex w-[120px] items-center justify-center gap-2 px-4 py-2">
              <div className="text-lg font-semibold leading-6 text-primary">미노출 작가</div>
            </div>
            <div className="w-[180px] truncate text-center text-2xl font-semibold leading-8 text-black">
              23명
            </div>
          </div>
        </div>

        {/* 총 수와 액션 버튼들 */}
        <div className="flex flex-col items-end gap-4 self-stretch">
          <div className="flex items-center justify-between self-stretch">
            <div className="text-xl font-medium leading-6 tracking-tight text-[#6D6D6D]">
              총 <span className="text-primary">12,345</span>명
            </div>
            <div className="flex items-center gap-3">
              {/* 엑셀 다운로드 */}
              <button className="flex items-center gap-3 rounded border-[1.6px] border-[#4CA452] bg-white px-3 py-2.5 hover:bg-white/90">
                <Excel size={16} color="#4CA452" />
                <div className="text-sm font-semibold leading-4 tracking-tight text-[#4CA452]">
                  엑셀 다운로드
                </div>
              </button>
              {/* 희곡 등록 */}
              <button 
                onClick={() => router.push('/admin/writers/edit')}
                className="flex w-[120px] items-center justify-center gap-2.5 rounded bg-primary px-0 py-2.5 hover:bg-primary/90"
              >
                <div className="text-sm font-semibold leading-4 tracking-tight text-white">
                  작가 등록
                </div>
              </button>
            </div>
          </div>

          {/* 테이블 */}
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              {/* 헤더 */}
              <thead>
                <tr className="h-[50px] bg-[#EEE]">
                  <th className="px-2.5 text-xs font-bold text-[#515151]">NO</th>
                  <th className="px-2.5 text-xs font-bold text-[#515151]">작가ID</th>
                  <th className="px-2.5 text-xs font-bold text-[#515151]">작가명</th>
                  <th className="px-2.5 text-xs font-bold text-[#515151]">ID</th>
                  <th className="px-2.5 text-xs font-bold text-[#515151]">대표작</th>
                  <th className="px-2.5 text-xs font-bold text-[#515151]">상태</th>
                  <th className="px-2.5 text-xs font-bold text-[#515151]">등록/신청일</th>
                  <th className="px-2.5 text-xs font-bold text-[#515151]">작품수</th>
                  <th className="px-2.5 text-xs font-bold text-[#515151]">메모수</th>
                  <th className="px-2.5 text-xs font-bold text-[#515151]">스크랩수</th>
                </tr>
              </thead>

              {/* 테이블 행들 */}
              <tbody>
                {mockWriters.map((writer, index) => (
                  <tr
                    key={`${writer.id}-${index}`}
                    onClick={() => router.push(`/admin/writers/${writer.id}`)}
                    className="h-[50px] cursor-pointer bg-white transition-colors hover:bg-[#FFF5F2]"
                  >
                    <td className="px-2.5 text-center text-xs font-medium text-[#686868]">
                      {writer.id}
                    </td>
                    <td className="px-2.5 text-center text-xs font-medium text-[#686868]">
                      {writer.writerId}
                    </td>
                    <td className="max-w-[100px] truncate px-2.5 text-center text-xs font-medium text-[#686868]">
                      {writer.name}
                    </td>
                    <td className="px-2.5 text-center text-xs font-medium text-[#686868]">
                      {writer.email}
                    </td>
                    <td className="px-2.5 text-center text-xs font-medium text-[#686868]">
                      {writer.representative}
                    </td>
                    <td className="px-2.5 text-center">
                      <div className="flex justify-center">
                        <WriterStatusBadge status={writer.status} />
                      </div>
                    </td>
                    <td className="px-2.5 text-center text-xs font-medium text-[#686868]">
                      {writer.registeredAt}
                    </td>
                    <td className="px-2.5 text-center text-xs font-medium text-[#686868]">
                      {writer.worksCount || '-'}
                    </td>
                    <td className="px-2.5 text-center text-xs font-medium text-[#686868]">
                      {writer.memosCount || '-'}
                    </td>
                    <td className="px-2.5 text-center text-xs font-medium text-[#686868]">
                      {writer.scrapsCount || '-'}
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
    </div>
  );
}
