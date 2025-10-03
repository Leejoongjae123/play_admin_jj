'use client';

import { useState, useRef, useEffect } from 'react';
import DateEdit from '@/components/ui/date-edit';
import FilterDropdown from '@/components/ui/filter-dropdown';
import SearchInputWithFilter from '@/components/ui/search-input-with-filter';
import Pagination from '@/components/ui/pagination';
import { Badge } from '@/components/ui/badge';
import Calendar from '@/components/icons/Calendar';
import Search from '@/components/icons/Search';
import Refresh from '@/components/icons/Refresh';
import Excel from '@/components/icons/Excel';
import ProgramReservationDetailModal from './components/ProgramReservationDetailModal';

interface ProgramReservation {
  id: string;
  reservationId: string;
  programName: string;
  memberId: string;
  name: string;
  email: string;
  phone: string;
  status: 'completed' | 'cancelled' | 'ended';
  registrationDate: string;
  memberNickname?: string;
}

const mockReservations: ProgramReservation[] = [
  {
    id: '12345',
    reservationId: 'BK1234',
    programName: '<바이 하트> 북토크',
    memberId: 'user_001',
    name: '김서연',
    email: 'seoyeon***@gmail.com',
    phone: '010-2345-6789',
    status: 'completed',
    registrationDate: '2025-09-05 11:22',
    memberNickname: '문학소년',
  },
  {
    id: '12346',
    reservationId: 'P00123',
    programName: '번역 워크숍',
    memberId: 'user_002',
    name: '박민수',
    email: 'minsu***@naver.com',
    phone: '010-3456-7890',
    status: 'cancelled',
    registrationDate: '2025-09-03 14:30',
    memberNickname: '번역가',
  },
  {
    id: '12347',
    reservationId: 'DR001',
    programName: '희곡 낭독회',
    memberId: 'user_003',
    name: '이영희',
    email: 'younghee***@gmail.com',
    phone: '010-4567-8901',
    status: 'ended',
    registrationDate: '2025-08-28 16:45',
    memberNickname: '연극인',
  },
  {
    id: '12348',
    reservationId: 'BK1235',
    programName: '<바이 하트> 북토크',
    memberId: 'user_004',
    name: '최지원',
    email: 'jiwon***@daum.net',
    phone: '010-5678-9012',
    status: 'completed',
    registrationDate: '2025-09-04 09:15',
    memberNickname: '독서광',
  },
  {
    id: '12349',
    reservationId: 'WS002',
    programName: '창작 워크숍',
    memberId: 'user_005',
    name: '정한솔',
    email: 'hansol***@gmail.com',
    phone: '010-6789-0123',
    status: 'completed',
    registrationDate: '2025-09-06 13:20',
    memberNickname: '작가꿈나무',
  },
  {
    id: '12350',
    reservationId: 'PT003',
    programName: '시 낭송회',
    memberId: 'user_006',
    name: '김태현',
    email: 'taehyun***@outlook.com',
    phone: '010-7890-1234',
    status: 'completed',
    registrationDate: '2025-09-07 10:50',
    memberNickname: '시인',
  },
  {
    id: '12351',
    reservationId: 'LT004',
    programName: '문학 토론회',
    memberId: 'user_007',
    name: '송미라',
    email: 'mira***@hanmail.net',
    phone: '010-8901-2345',
    status: 'completed',
    registrationDate: '2025-09-08 15:30',
    memberNickname: '문학애호가',
  },
  {
    id: '12352',
    reservationId: 'DR002',
    programName: '희곡 낭독회',
    memberId: 'user_008',
    name: '강수진',
    email: 'sujin***@naver.com',
    phone: '010-9012-3456',
    status: 'ended',
    registrationDate: '2025-08-30 11:40',
    memberNickname: '배우',
  },
  {
    id: '12353',
    reservationId: 'BT005',
    programName: '북클럽 모임',
    memberId: 'user_009',
    name: '윤채영',
    email: 'chaeyoung***@gmail.com',
    phone: '010-0123-4567',
    status: 'ended',
    registrationDate: '2025-08-25 17:20',
    memberNickname: '책벌레',
  },
  {
    id: '12354',
    reservationId: 'CF006',
    programName: '창작 컨퍼런스',
    memberId: 'user_010',
    name: '홍길동',
    email: 'gildong***@yahoo.com',
    phone: '010-1357-2468',
    status: 'ended',
    registrationDate: '2025-08-22 12:10',
    memberNickname: '작가',
  },
];

function StatusBadge({ status }: { status: 'completed' | 'cancelled' | 'ended' }) {
  if (status === 'completed') {
    return (
      <div className="inline-flex items-center justify-center gap-2 rounded-full border border-[#078D46] bg-[#D9F8D7] px-3 py-1.5 text-sm font-medium text-[#078D46]">
        신청완료
      </div>
    );
  }
  if (status === 'cancelled') {
    return (
      <div className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D65856] px-3 py-1.5 text-sm font-medium text-white">
        취소
      </div>
    );
  }
  return (
    <div className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E0E0E0] px-3 py-1.5 text-sm font-medium text-[#2A2A2A]">
      종료
    </div>
  );
}

export default function AdminProgramReservationsPage() {
  const [startDate, setStartDate] = useState<Date | null>(new Date(2025, 7, 8));
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [exposureFilter, setExposureFilter] = useState('전체');
  const [statusFilter, setStatusFilter] = useState('전체');
  const [searchType, setSearchType] = useState('이름');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState('10개씩 보기');
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);
  const [selectedReservation, setSelectedReservation] = useState<ProgramReservation | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    setSearchType('이름');
    setSearchTerm('');
    setItemsPerPage('10개씩 보기');
    setCurrentPage(1);
  };

  const handleExcelDownload = () => {
    // 엑셀 다운로드 로직 구현
  };

  const handleRowClick = (reservation: ProgramReservation) => {
    setSelectedReservation(reservation);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedReservation(null);
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
      <h1 className="self-stretch text-2xl font-semibold leading-8 text-gray-1">프로그램 예약</h1>

      {/* 필터 섹션 */}
      <div className="flex w-full flex-col gap-[18px] rounded-lg bg-background p-8">
        {/* 첫 번째 줄: 날짜, 노출여부, 상태 */}
        <div className="flex w-full items-start gap-6">
          {/* 신청일시 */}
          <div className="flex items-center gap-2">
            <span className="text-base font-semibold text-gray-2">신청일시</span>
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
                  <span
                    className={
                      endDate
                        ? 'text-xs font-semibold text-primary'
                        : 'text-xs font-medium text-[#727272]'
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
              options={['전체', '신청완료', '취소', '종료']}
              onChange={setStatusFilter}
            />
          </div>
        </div>

        {/* 두 번째 줄: 검색 */}
        <div className="flex w-full items-center gap-6">
          {/* 검색 입력 */}
          <SearchInputWithFilter
            filterValue={searchType}
            filterOptions={['이름', '이메일', '휴대폰번호']}
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

      {/* 결과 및 액션 섹션 */}
      <div className="flex w-full flex-col items-end gap-4">
        <div className="flex w-full items-center justify-between">
          <span className="text-xl font-medium leading-6 tracking-tight">
            <span className="text-[#6D6D6D]">총 </span>
            <span className="text-primary">12,345</span>
            <span className="text-[#6D6D6D]">명</span>
          </span>
          <button
            onClick={handleExcelDownload}
            className="flex items-center gap-3 rounded border-[1.6px] border-[#4CA452] bg-white px-3 py-2.5 hover:bg-white/90"
          >
            <Excel size={16} />
            <span className="text-sm font-semibold leading-4 tracking-tight text-[#4CA452]">
              엑셀 다운로드
            </span>
          </button>
        </div>

        {/* 테이블 */}
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            {/* 테이블 헤더 */}
            <thead>
              <tr className="h-[50px] bg-[#EEE]">
                <th className="px-4 text-xs font-bold text-[#515151]">
                  <div className="w-10 text-center">NO</div>
                </th>
                <th className="px-4 text-xs font-bold text-[#515151]">
                  <div className="w-[60px] max-w-[60px] text-center">예약ID</div>
                </th>
                <th className="px-4 text-xs font-bold text-[#515151]">
                  <div className="w-[100px] text-center">프로그램명</div>
                </th>
                <th className="px-4 text-xs font-bold text-[#515151]">
                  <div className="w-[124px] text-center">회원ID</div>
                </th>
                <th className="px-4 text-xs font-bold text-[#515151]">
                  <div className="w-[88px] max-w-[88px] text-center">이름</div>
                </th>
                <th className="px-4 text-xs font-bold text-[#515151]">
                  <div className="w-[120px] text-center">이메일</div>
                </th>
                <th className="px-4 text-xs font-bold text-[#515151]">
                  <div className="w-[114px] text-center">휴대폰번호</div>
                </th>
                <th className="px-4 text-xs font-bold text-[#515151]">
                  <div className="w-[100px] text-center">상태</div>
                </th>
                <th className="px-4 text-xs font-bold text-[#515151]">
                  <div className="w-[114px] max-w-[114px] text-center">등록/신청일</div>
                </th>
              </tr>
            </thead>

            {/* 테이블 본문 */}
            <tbody>
              {mockReservations.map((reservation, index) => (
                <tr
                  key={index}
                  onClick={() => handleRowClick(reservation)}
                  className="group h-[50px] cursor-pointer bg-white transition-colors hover:bg-[#EBE1DF]"
                >
                  <td className="px-4 py-0">
                    <div className="flex h-[50px] w-10 items-center justify-center text-xs font-medium text-[#686868] group-hover:text-[#911A00]">
                      {reservation.id}
                    </div>
                  </td>
                  <td className="px-4 py-0">
                    <div className="flex h-[50px] w-[60px] max-w-[60px] items-center justify-center text-xs font-medium text-[#686868] group-hover:text-[#911A00]">
                      {reservation.reservationId}
                    </div>
                  </td>
                  <td className="px-4 py-0">
                    <div className="flex h-[50px] w-[100px] max-w-[100px] items-center justify-center overflow-hidden text-xs font-medium text-[#686868] group-hover:text-[#911A00]">
                      {reservation.programName}
                    </div>
                  </td>
                  <td className="px-4 py-0">
                    <div className="flex h-[50px] w-[124px] items-center justify-center text-xs font-medium text-[#686868] group-hover:text-[#911A00]">
                      {reservation.memberId}
                    </div>
                  </td>
                  <td className="px-4 py-0">
                    <div className="flex h-[50px] w-[88px] max-w-[88px] items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap text-xs font-medium text-[#686868] group-hover:text-[#911A00]">
                      {reservation.name}
                    </div>
                  </td>
                  <td className="px-4 py-0">
                    <div className="flex h-[50px] w-[120px] max-w-[120px] items-center justify-center text-xs font-medium text-[#686868] group-hover:text-[#911A00]">
                      {reservation.email}
                    </div>
                  </td>
                  <td className="px-4 py-0">
                    <div className="flex h-[50px] w-[114px] items-center justify-center text-xs font-medium text-[#686868] group-hover:text-[#911A00]">
                      {reservation.phone}
                    </div>
                  </td>
                  <td className="px-4 py-0">
                    <div className="flex h-[50px] w-[100px] items-center justify-center">
                      <StatusBadge status={reservation.status} />
                    </div>
                  </td>
                  <td className="px-4 py-0">
                    <div className="flex h-[50px] w-[114px] max-w-[114px] items-center justify-center text-xs font-medium text-[#686868] group-hover:text-[#911A00]">
                      {reservation.registrationDate}
                    </div>
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

      {/* 프로그램 예약 상세 모달 */}
      <ProgramReservationDetailModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        reservation={selectedReservation}
      />
    </div>
  );
}
