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
import SanctionStatusBadge from './components/SanctionStatusBadge';
import SanctionDetailModal from './components/SanctionDetailModal';

interface SanctionRecord {
  id: number;
  memberId: string;
  nickname: string;
  email: string;
  sanctionType: string;
  reason: string;
  period: string;
  status: 'active' | 'released';
  sanctionDate: string;
  releaseDate: string;
  admin: string;
  isHighlighted?: boolean;
}

const mockData: SanctionRecord[] = [
  {
    id: 12345,
    memberId: 'userA123',
    nickname: '수현짱',
    email: 'soo***@naver.com',
    sanctionType: '활동정지',
    reason: '욕설 및 비방 게시',
    period: '7일',
    status: 'released',
    sanctionDate: '2025-01-01-00:00:00',
    releaseDate: '2025-01-01-00:00:00',
    admin: 'admin01',
  },
  {
    id: 12346,
    memberId: 'asdfghjkl001',
    nickname: '닉네임닉네임닉네...',
    email: 'user***@gmail.com',
    sanctionType: '활동정지',
    reason: '타 회원 신고 다수',
    period: '7일',
    status: 'released',
    sanctionDate: '2025-01-01-00:00:00',
    releaseDate: '2025-01-01-00:00:00',
    admin: 'admin01',
    isHighlighted: true,
  },
  {
    id: 12347,
    memberId: 'testuser01',
    nickname: '김이수',
    email: 'kim***@hanmail.net',
    sanctionType: '블랙리스트',
    reason: '반복적인 광고성 글',
    period: '영구',
    status: 'active',
    sanctionDate: '2025-07-15-00:00:00',
    releaseDate: '',
    admin: 'admin02',
  },
  {
    id: 12348,
    memberId: 'member123',
    nickname: '박민수',
    email: 'park***@naver.com',
    sanctionType: '활동정지',
    reason: '타 회원 신고 다수',
    period: '7일',
    status: 'released',
    sanctionDate: '2025-01-01-00:00:00',
    releaseDate: '2025-01-08-00:00:00',
    admin: 'admin01',
  },
  {
    id: 12349,
    memberId: 'user456',
    nickname: '최영희',
    email: 'choi***@yahoo.com',
    sanctionType: '블랙리스트',
    reason: '불법 콘텐츠 업로드',
    period: '영구',
    status: 'active',
    sanctionDate: '2025-01-01-00:00:00',
    releaseDate: '',
    admin: 'admin03',
  },
  {
    id: 12350,
    memberId: 'member789',
    nickname: '이철수',
    email: 'lee***@gmail.com',
    sanctionType: '활동정지',
    reason: '반복적인 광고성 글',
    period: '30일',
    status: 'released',
    sanctionDate: '2025-01-01-00:00:00',
    releaseDate: '2025-01-31-00:00:00',
    admin: 'admin01',
  },
  {
    id: 12351,
    memberId: 'testuser02',
    nickname: '한지민',
    email: 'han***@daum.net',
    sanctionType: '활동정지',
    reason: '타 회원 신고 다수',
    period: '7일',
    status: 'released',
    sanctionDate: '2025-01-01-00:00:00',
    releaseDate: '2025-01-08-00:00:00',
    admin: 'admin02',
  },
  {
    id: 12352,
    memberId: 'user987',
    nickname: '정민수',
    email: 'jung***@naver.com',
    sanctionType: '활동정지',
    reason: '불법 콘텐츠 업로드',
    period: '7일',
    status: 'active',
    sanctionDate: '2025-01-15-00:00:00',
    releaseDate: '',
    admin: 'admin01',
  },
  {
    id: 12353,
    memberId: 'member456',
    nickname: '윤서현',
    email: 'yoon***@gmail.com',
    sanctionType: '블랙리스트',
    reason: '욕설 및 비방 게시',
    period: '영구',
    status: 'active',
    sanctionDate: '2025-01-01-00:00:00',
    releaseDate: '',
    admin: 'admin03',
  },
  {
    id: 12354,
    memberId: 'testuser03',
    nickname: '강민지',
    email: 'kang***@hotmail.com',
    sanctionType: '블랙리스트',
    reason: '욕설 및 비방 게시',
    period: '영구',
    status: 'released',
    sanctionDate: '2025-01-01-00:00:00',
    releaseDate: '2025-01-15-00:00:00',
    admin: 'admin02',
  },
];

export default function AdminMemberSanctionsPage() {
  const [startDate, setStartDate] = useState<Date | null>(new Date(2025, 7, 8));
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [sanctionType, setSanctionType] = useState('전체');
  const [status, setStatus] = useState('전체');
  const [searchType, setSearchType] = useState('회원 ID');
  const [searchValue, setSearchValue] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState('10개씩 보기');
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSanction, setSelectedSanction] = useState<SanctionRecord | null>(null);
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);

  const startDateRef = useRef<HTMLDivElement>(null);
  const endDateRef = useRef<HTMLDivElement>(null);

  const totalCount = 12345;
  const totalPages = 10;

  const formatDate = (date: Date | null) => {
    if (!date) return '';
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleRowClick = (record: SanctionRecord) => {
    setSelectedSanction(record);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSanction(null);
  };

  const handleReleaseSanction = (sanctionId: number) => {
    // TODO: API 호출로 제재 해제 처리
    // eslint-disable-next-line no-console
    console.log('제재 해제:', sanctionId);
  };

  const handleSearch = () => {
    // 검색 로직 구현
  };

  const handleReset = () => {
    setStartDate(new Date(2025, 7, 8));
    setEndDate(null);
    setSanctionType('전체');
    setStatus('전체');
    setSearchType('회원 ID');
    setSearchValue('');
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
    <div className="flex w-full flex-col items-start gap-[34px] p-11">
      {/* 제목 */}
      <h1 className="text-2xl font-bold leading-8 text-gray-1">회원 제재 이력</h1>

      {/* 검색 필터 섹션 */}
      <div className="flex w-full flex-col gap-4 rounded-lg bg-[#FAF8F6] p-8">
        {/* 첫 번째 행: 제재일자, 제재유형, 상태 */}
        <div className="flex w-full items-start gap-6">
          {/* 제재일자 */}
          <div className="flex items-center gap-2">
            <span className="text-base font-bold text-gray-2">제재일자</span>
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

          {/* 제재유형 */}
          <div className="flex flex-1 items-center gap-2">
            <span className="text-base font-bold text-gray-2">제재유형</span>
            <FilterDropdown
              value={sanctionType}
              options={['전체', '활동정지', '블랙리스트']}
              onChange={setSanctionType}
            />
          </div>

          {/* 상태 */}
          <div className="flex flex-1 items-center gap-2">
            <span className="text-base font-bold text-gray-2">상태</span>
            <FilterDropdown value={status} options={['전체', '제재중', '해제됨']} onChange={setStatus} />
          </div>
        </div>

        {/* 두 번째 행: 검색 */}
        <div className="flex w-full items-center gap-6">
          <SearchInputWithFilter
            filterValue={searchType}
            filterOptions={['회원 ID', '닉네임']}
            onFilterChange={setSearchType}
            searchValue={searchValue}
            onSearchChange={setSearchValue}
            placeholder="검색조건을 입력해주세요"
          />
          <div className="flex items-center gap-2">
            <Button
              onClick={handleSearch}
              className="flex h-12 w-[120px] h-[43px] items-center justify-center gap-2.5 rounded bg-primary px-0 py-3 hover:bg-primary/90"
            >
              <Search size={16} color="white" />
              <span className="text-base font-bold text-white">검색</span>
            </Button>
            <Button
              onClick={handleReset}
              variant="outline"
              className="flex h-12 w-[120px] h-[43px] items-center justify-center gap-2.5 rounded border-[1.3px] border-primary bg-white px-0 py-3 hover:bg-[#FFF5F2]"
            >
              <Refresh size={16} />
              <span className="text-base font-bold text-primary">초기화</span>
            </Button>
          </div>
        </div>
      </div>

      {/* 결과 및 엑셀 다운로드 */}
      <div className="flex w-full flex-col items-end gap-4">
        <div className="flex w-full items-center justify-between">
          <div className="text-xl font-medium leading-6 tracking-[-0.4px]">
            <span className="text-[#6D6D6D]">총 </span>
            <span className="text-primary">{totalCount.toLocaleString()}</span>
            <span className="text-[#6D6D6D]">건</span>
          </div>
          <Button
            variant="outline"
            className="flex items-center gap-3 rounded border-[1.6px] border-[#4CA452] bg-white px-3 py-2.5 hover:bg-white/90 h-[36px] w-[128px]"
          >
            <Excel size={16} color="#4CA452" />
            <span className="text-sm font-bold leading-4 tracking-[-0.28px] text-[#4CA452]">
              엑셀 다운로드
            </span>
          </Button>
        </div>

        {/* 테이블 */}
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            {/* 테이블 헤더 */}
            <thead>
              <tr className="h-[50px] bg-[#EEE]">
                <th className="px-2.5 text-xs font-bold text-[#515151]">NO</th>
                <th className="px-2.5 text-xs font-bold text-[#515151]">회원 ID</th>
                <th className="px-2.5 text-xs font-bold text-[#515151]">닉네임</th>
                <th className="px-2.5 text-xs font-bold text-[#515151]">제재유형</th>
                <th className="px-2.5 text-xs font-bold text-[#515151]">제재 사유</th>
                <th className="px-2.5 text-xs font-bold text-[#515151]">제재기간</th>
                <th className="px-2.5 text-xs font-bold text-[#515151]">상태</th>
                <th className="px-2.5 text-xs font-bold text-[#515151]">제재일자</th>
                <th className="px-2.5 text-xs font-bold text-[#515151]">해제일자</th>
                <th className="px-2.5 text-xs font-bold text-[#515151]">운영자</th>
              </tr>
            </thead>

            {/* 테이블 바디 */}
            <tbody>
              {mockData.map((record, index) => (
                <tr
                  key={index}
                  onClick={() => handleRowClick(record)}
                  className="h-[50px] cursor-pointer bg-white transition-colors hover:bg-[#FFF5F2]"
                >
                  <td className="px-2.5 text-center text-xs font-medium text-[#686868]">
                    {record.id}
                  </td>
                  <td className="px-2.5 text-center text-xs font-medium text-[#686868]">
                    {record.memberId}
                  </td>
                  <td className="px-2.5 text-center text-xs font-medium text-[#686868]">
                    {record.nickname}
                  </td>
                  <td className="px-2.5 text-center text-xs font-medium text-[#686868]">
                    {record.sanctionType}
                  </td>
                  <td className="px-2.5 text-center text-xs font-medium text-[#686868]">
                    {record.reason}
                  </td>
                  <td className="px-2.5 text-center text-xs font-medium text-[#686868]">
                    {record.period}
                  </td>
                  <td className="px-2.5 text-center">
                    <div className="flex justify-center">
                      <SanctionStatusBadge status={record.status} />
                    </div>
                  </td>
                  <td className="px-2.5 text-center text-xs font-medium text-[#686868]">
                    {record.sanctionDate}
                  </td>
                  <td className="px-2.5 text-center text-xs font-medium text-[#686868]">
                    {record.releaseDate}
                  </td>
                  <td className="px-2.5 text-center text-xs font-medium text-[#686868]">
                    {record.admin}
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

      {/* 제재 상세 보기 모달 */}
      {selectedSanction && (
        <SanctionDetailModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          sanctionData={selectedSanction}
          onRelease={handleReleaseSanction}
        />
      )}
    </div>
  );
}
