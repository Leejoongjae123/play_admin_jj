'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import DateEdit from '@/components/ui/date-edit';
import FilterDropdown from '@/components/ui/filter-dropdown';
import SearchInputWithFilter from '@/components/ui/search-input-with-filter';
import Pagination from '@/components/ui/pagination';
import { Button } from '@/components/ui/button';
import MemberStatusBadge from '@/components/ui/MemberStatusBadge';
import CustomRadio from '@/components/ui/CustomRadio';
import Calendar from '@/components/icons/Calendar';
import Search from '@/components/icons/Search';
import Refresh from '@/components/icons/Refresh';
import Excel from '@/components/icons/Excel';

interface Member {
  id: number;
  memberId: string;
  nickname: string;
  email: string;
  signupMethod: string;
  isWriter: boolean;
  status: 'normal' | 'suspended' | 'blacklist';
  lastLogin: string;
  joinDate: string;
}

// 목업 데이터
const mockMembers: Member[] = [
  {
    id: 12345,
    memberId: 'asdfghjkl001',
    nickname: '김이수',
    email: 'hong***@gmail.com',
    signupMethod: '이메일',
    isWriter: false,
    status: 'normal',
    lastLogin: '2025-01-01-00:00:00',
    joinDate: '2025-01-01-00:00:00',
  },
  {
    id: 12346,
    memberId: 'asdfghjkl001',
    nickname: '닉네임닉네임닉네...',
    email: 'hong***********@gmail.co...',
    signupMethod: '카카오',
    isWriter: true,
    status: 'normal',
    lastLogin: '2025-01-01-00:00:00',
    joinDate: '2025-01-01-00:00:00',
  },
  {
    id: 12347,
    memberId: 'asdfghjkl001',
    nickname: '김이수',
    email: 'hong***@gmail.com',
    signupMethod: '구글',
    isWriter: false,
    status: 'normal',
    lastLogin: '2025-01-01-00:00:00',
    joinDate: '2025-01-01-00:00:00',
  },
  {
    id: 12348,
    memberId: 'asdfghjkl001',
    nickname: '김이수',
    email: 'hong***@gmail.com',
    signupMethod: '이메일',
    isWriter: false,
    status: 'normal',
    lastLogin: '2025-01-01-00:00:00',
    joinDate: '2025-01-01-00:00:00',
  },
  {
    id: 12349,
    memberId: 'asdfghjkl001',
    nickname: '김이수',
    email: 'hong***@gmail.com',
    signupMethod: '카카오',
    isWriter: false,
    status: 'suspended',
    lastLogin: '2025-01-01-00:00:00',
    joinDate: '2025-01-01-00:00:00',
  },
  {
    id: 12350,
    memberId: 'asdfghjkl001',
    nickname: '김이수',
    email: 'hong***@gmail.com',
    signupMethod: '구글',
    isWriter: false,
    status: 'normal',
    lastLogin: '2025-01-01-00:00:00',
    joinDate: '2025-01-01-00:00:00',
  },
  {
    id: 12351,
    memberId: 'asdfghjkl001',
    nickname: '김이수',
    email: 'hong***@gmail.com',
    signupMethod: '구글',
    isWriter: false,
    status: 'normal',
    lastLogin: '2025-01-01-00:00:00',
    joinDate: '2025-01-01-00:00:00',
  },
  {
    id: 12352,
    memberId: 'asdfghjkl001',
    nickname: '김이수',
    email: 'hong***@gmail.com',
    signupMethod: '구글',
    isWriter: false,
    status: 'blacklist',
    lastLogin: '2025-01-01-00:00:00',
    joinDate: '2025-01-01-00:00:00',
  },
  {
    id: 12353,
    memberId: 'asdfghjkl001',
    nickname: '김이수',
    email: 'hong***@gmail.com',
    signupMethod: '이메일',
    isWriter: false,
    status: 'normal',
    lastLogin: '2025-01-01-00:00:00',
    joinDate: '2025-01-01-00:00:00',
  },
  {
    id: 12354,
    memberId: 'asdfghjkl001',
    nickname: '김이수',
    email: 'hong***@gmail.com',
    signupMethod: '이메일',
    isWriter: false,
    status: 'normal',
    lastLogin: '2025-01-01-00:00:00',
    joinDate: '2025-01-01-00:00:00',
  },
];

export default function AdminMembersPage() {
  const router = useRouter();
  const [startDate, setStartDate] = useState<Date | null>(new Date(2025, 7, 8));
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [writerFilter, setWriterFilter] = useState('writer');
  const [membershipFilter, setMembershipFilter] = useState('전체');
  const [statusFilter, setStatusFilter] = useState('전체');
  const [searchCategory, setSearchCategory] = useState('전체');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState('10개씩 보기');
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);

  const startDateRef = useRef<HTMLDivElement>(null);
  const endDateRef = useRef<HTMLDivElement>(null);

  const totalMembers = 12345;
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
    setWriterFilter('writer');
    setMembershipFilter('전체');
    setStatusFilter('전체');
    setSearchCategory('전체');
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
    <div className="flex w-full flex-col items-start gap-8 p-11">
      {/* 제목 */}
      <h1 className="font-pretendard text-2xl font-bold leading-8 text-[#2A2A2A]">회원 관리</h1>

      {/* 필터 영역 */}
      <div className="flex w-full flex-col gap-4 rounded-lg bg-[#FAF8F6] p-8">
        {/* 첫 번째 행 */}
        <div className="flex w-full items-center gap-6">
          {/* 가입일 */}
          <div className="flex items-center gap-2">
            <span className="font-pretendard text-base font-bold text-[#555]">가입일</span>
            <div className="flex items-center gap-2">
              {/* 시작일 */}
              <div className="relative" ref={startDateRef}>
                <button
                  onClick={() => setShowStartDatePicker(!showStartDatePicker)}
                  className="flex w-[140px] items-center justify-between rounded-md border border-[#EBEBEB] bg-white p-3 hover:bg-[#FFF5F2]"
                >
                  <span className="font-pretendard text-xs font-bold text-[#911A00]">
                    {formatDate(startDate)}
                  </span>
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
              <span className="font-pretendard text-xs font-bold text-[#727272]">-</span>
              {/* 종료일 */}
              <div className="relative" ref={endDateRef}>
                <button
                  onClick={() => setShowEndDatePicker(!showEndDatePicker)}
                  className="flex w-[140px] items-center justify-between rounded-md border border-[#EBEBEB] bg-white p-3 hover:bg-[#FFF5F2]"
                >
                  <span
                    className={
                      endDate
                        ? 'font-pretendard text-xs font-bold text-[#911A00]'
                        : 'font-pretendard text-xs font-medium text-[#727272]'
                    }
                  >
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

          {/* 작가여부 */}
          <div className="flex flex-1 items-center gap-2">
            <span className="font-pretendard text-base font-bold text-[#555]">작가여부</span>
            <div className="flex items-center gap-0">
              <CustomRadio
                value="writer"
                checked={writerFilter === 'writer'}
                onChange={setWriterFilter}
                label="작가"
              />
              <CustomRadio
                value="normal"
                checked={writerFilter === 'normal'}
                onChange={setWriterFilter}
                label="일반"
              />
            </div>
          </div>

          {/* 멤버십 */}
          <div className="flex flex-1 items-center gap-2">
            <span className="font-pretendard text-base font-bold text-[#555]">멤버십</span>
            <FilterDropdown
              value={membershipFilter}
              options={['전체', '정상', '활동정지', '블랙리스트']}
              onChange={setMembershipFilter}
            />
          </div>

          {/* 상태 */}
          <div className="flex flex-1 items-center gap-2">
            <span className="font-pretendard text-base font-bold text-[#555]">상태</span>
            <FilterDropdown
              value={statusFilter}
              options={['전체', '정상', '활동정지', '블랙리스트']}
              onChange={setStatusFilter}
            />
          </div>
        </div>

        {/* 두 번째 행 */}
        <div className="flex w-full items-center gap-6">
          {/* 검색 영역 */}
          <SearchInputWithFilter
            filterValue={searchCategory}
            filterOptions={['전체', '회원 ID', '닉네임', 'ID']}
            onFilterChange={setSearchCategory}
            searchValue={searchQuery}
            onSearchChange={setSearchQuery}
            placeholder="검색조건을 입력해주세요"
          />

          {/* 버튼들 */}
          <div className="flex items-center gap-2">
            <Button
              onClick={handleSearch}
              className="flex h-[43px] w-[120px] items-center justify-center gap-2 rounded bg-[#911A00] px-0 py-3 hover:bg-[#911A00]/90"
            >
              <Search size={16} color="white" />
              <span className="font-pretendard text-base font-bold text-white">검색</span>
            </Button>
            <Button
              onClick={handleReset}
              variant="outline"
              className="flex h-[43px] w-[120px] items-center justify-center gap-2 rounded border-[1.3px] border-[#911A00] bg-white px-0 py-3 hover:bg-[#FFF5F2]"
            >
              <Refresh size={16} />
              <span className="font-pretendard text-base font-bold text-[#911A00]">초기화</span>
            </Button>
          </div>
        </div>
      </div>

      {/* 결과 영역 */}
      <div className="flex w-full flex-1 flex-col items-end gap-4">
        {/* 상단 정보 */}
        <div className="flex w-full items-center justify-between">
          <div className="font-pretendard text-xl font-medium leading-6 text-[#6D6D6D]">
            총{' '}
            <span className="font-pretendard text-xl font-medium text-[#911A00]">
              {totalMembers.toLocaleString()}
            </span>
            명
          </div>
          <Button
            variant="outline"
            className="flex h-[36px] w-[128px] items-center gap-3 rounded border-[1.6px] border-[#4CA452] bg-white px-3 hover:bg-white/90"
          >
            <Excel size={16} />
            <span className="font-pretendard text-sm font-bold text-[#4CA452]">엑셀 다운로드</span>
          </Button>
        </div>

        {/* 테이블 */}
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            {/* 테이블 헤더 */}
            <thead>
              <tr className="h-[50px] bg-[#EEE]">
                <th className="px-2 text-xs font-bold text-[#515151]">NO</th>
                <th className="px-2 text-xs font-bold text-[#515151]">회원 ID</th>
                <th className="px-2 text-xs font-bold text-[#515151]">닉네임</th>
                <th className="px-2 text-xs font-bold text-[#515151]">ID</th>
                <th className="px-2 text-xs font-bold text-[#515151]">가입방식</th>
                <th className="px-2 text-xs font-bold text-[#515151]">작가여부</th>
                <th className="px-2 text-xs font-bold text-[#515151]">상태</th>
                <th className="px-2 text-xs font-bold text-[#515151]">최근 로그인</th>
                <th className="px-2 text-xs font-bold text-[#515151]">가입일시</th>
              </tr>
            </thead>

            {/* 테이블 본문 */}
            <tbody>
              {mockMembers.map((member, index) => (
                <tr
                  key={member.id}
                  onClick={() => router.push(`/admin/members/${member.id}`)}
                  className="group h-[50px] cursor-pointer bg-white transition-colors hover:bg-[#EBE1DF]"
                >
                  <td className="px-2 text-center text-xs font-medium text-[#686868] group-hover:text-[#911A00]">
                    {member.id}
                  </td>
                  <td className="px-2 text-center text-xs font-medium text-[#686868] group-hover:text-[#911A00]">
                    {member.memberId}
                  </td>
                  <td className="px-2 text-center text-xs font-medium text-[#686868] group-hover:text-[#911A00]">
                    {member.nickname}
                  </td>
                  <td className="px-2 text-center text-xs font-medium text-[#686868] group-hover:text-[#911A00]">
                    {member.email}
                  </td>
                  <td className="px-2 text-center text-xs font-medium text-[#686868] group-hover:text-[#911A00]">
                    {member.signupMethod}
                  </td>
                  <td className="px-2 text-center text-xs font-medium text-[#686868] group-hover:text-[#911A00]">
                    {member.isWriter ? 'Y' : 'N'}
                  </td>
                  <td className="px-2 text-center">
                    <div className="flex justify-center">
                      <MemberStatusBadge status={member.status} />
                    </div>
                  </td>
                  <td className="px-2 text-center text-xs font-medium text-[#686868] group-hover:text-[#911A00]">
                    {member.lastLogin}
                  </td>
                  <td className="px-2 text-center text-xs font-medium text-[#686868] group-hover:text-[#911A00]">
                    {member.joinDate}
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
            options={['10개씩 보기', '50개씩 보기', '100개씩 보기']}
            onChange={setItemsPerPage}
            width="w-[150px]"
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
