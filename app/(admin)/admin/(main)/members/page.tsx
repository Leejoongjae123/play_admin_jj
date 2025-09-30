'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import MemberStatusBadge from '@/components/ui/MemberStatusBadge';
import CustomRadio from '@/components/ui/CustomRadio';
import Calendar from '@/components/icons/Calendar';
import Search from '@/components/icons/Search';
import Refresh from '@/components/icons/Refresh';
import Excel from '@/components/icons/Excel';
import Arrow from '@/components/icons/Arrow';
import FilterDropdown from './components/FilterDropdown';
import SearchInputWithFilter from './components/SearchInputWithFilter';

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
  const [startDate, setStartDate] = useState('2025-08-08');
  const [endDate, setEndDate] = useState('');
  const [writerFilter, setWriterFilter] = useState('writer');
  const [membershipFilter, setMembershipFilter] = useState('전체');
  const [statusFilter, setStatusFilter] = useState('전체');
  const [searchCategory, setSearchCategory] = useState('전체');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const totalMembers = 12345;

  return (
    <div className="flex w-full flex-col items-start gap-8 p-11">
      {/* 제목 */}
      <h1 className="font-pretendard text-2xl font-bold leading-8 text-[#2A2A2A]">회원 관리</h1>

      {/* 필터 영역 */}
      <div className="flex w-full flex-col items-start gap-4 rounded-lg bg-[#FAF8F6] p-8">
        {/* 첫 번째 행 */}
        <div className="flex w-full items-center gap-6">
          {/* 가입일 */}
          <div className="flex items-center gap-2">
            <span className="font-pretendard text-base font-bold text-[#555]">가입일</span>
            <div className="flex w-[306px] items-center gap-2">
              <div className="flex w-[140px] items-center justify-between rounded-md border border-[#EBEBEB] bg-white p-3">
                <span className="font-pretendard text-xs font-bold text-[#911A00]">
                  {startDate}
                </span>
                <Calendar size={12} />
              </div>
              <span className="font-pretendard text-xs font-bold text-[#727272]">-</span>
              <div className="flex w-[140px] items-center justify-between rounded-md border border-[#EBEBEB] bg-white p-3">
                <span className="font-pretendard text-xs font-medium text-[#727272]">
                  날짜 입력
                </span>
                <Calendar size={12} />
              </div>
            </div>
          </div>

          {/* 작가여�� */}
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
            <Button className="flex h-[43px] w-[120px] items-center justify-center gap-2 rounded bg-[#911A00] px-0 py-3">
              <Search size={16} color="white" />
              <span className="font-pretendard text-base font-bold text-white">검색</span>
            </Button>
            <Button
              variant="outline"
              className="flex h-[43px] w-[120px] items-center justify-center gap-2 rounded border-[1.3px] border-[#911A00] bg-white px-0 py-3 hover:bg-[#F2F2F2]"
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
            className="flex items-center gap-3 rounded border-[1.6px] border-[#4CA452] bg-white px-3 h-[36px] hover:bg-[#F2F2F2]"
          >
            <Excel size={16} />
            <span className="font-pretendard text-sm font-bold text-[#4CA452]">엑셀 다운로드</span>
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
                <span className="font-pretendard text-xs font-bold text-[#515151]">회원 ID</span>
              </div>
              <div className="flex w-[100px] items-center justify-center p-2">
                <span className="font-pretendard text-xs font-bold text-[#515151]">닉네임</span>
              </div>
              <div className="flex w-[160px] items-center justify-center p-2">
                <span className="font-pretendard text-xs font-bold text-[#515151]">ID</span>
              </div>
              <div className="flex w-11 items-center justify-center p-2">
                <span className="font-pretendard text-xs font-bold text-[#515151]">가입방식</span>
              </div>
              <div className="flex items-center justify-center p-2">
                <span className="font-pretendard text-xs font-bold text-[#515151]">작가여부</span>
              </div>
              <div className="flex w-[100px] items-center justify-center p-2">
                <span className="font-pretendard text-xs font-bold text-[#515151]">상태</span>
              </div>
              <div className="flex w-[124px] items-center justify-center p-2">
                <span className="font-pretendard text-xs font-bold text-[#515151]">
                  최근 로그인
                </span>
              </div>
              <div className="flex w-[124px] items-center justify-center p-2">
                <span className="font-pretendard text-xs font-bold text-[#515151]">가입일시</span>
              </div>
            </div>

            {/* 테이블 본문 */}
            {mockMembers.map((member, index) => (
              <div
                key={member.id}
                className={`flex h-[50px] w-full items-center justify-between px-4 ${
                  index === 1 ? 'rounded-sm bg-[#EBE1DF]' : ''
                }`}
              >
                <div className="flex w-10 items-center justify-center p-2">
                  <span
                    className={`font-pretendard text-xs font-medium ${
                      index === 1 ? 'text-[#911A00]' : 'text-[#686868]'
                    }`}
                  >
                    {member.id}
                  </span>
                </div>
                <div className="flex w-[100px] items-center justify-center p-2">
                  <span
                    className={`font-pretendard text-xs font-medium ${
                      index === 1 ? 'text-[#911A00]' : 'text-[#686868]'
                    }`}
                  >
                    {member.memberId}
                  </span>
                </div>
                <div className="flex w-[100px] items-center justify-center p-2">
                  <span
                    className={`font-pretendard text-xs font-medium ${
                      index === 1 ? 'text-[#911A00]' : 'text-[#686868]'
                    }`}
                  >
                    {member.nickname}
                  </span>
                </div>
                <div className="flex w-[160px] items-center justify-center p-2">
                  <span
                    className={`font-pretendard text-xs font-medium ${
                      index === 1 ? 'text-[#911A00]' : 'text-[#686868]'
                    }`}
                  >
                    {member.email}
                  </span>
                </div>
                <div className="flex w-11 items-center justify-center p-2">
                  <span
                    className={`font-pretendard text-xs font-medium ${
                      index === 1 ? 'text-[#911A00]' : 'text-[#686868]'
                    }`}
                  >
                    {member.signupMethod}
                  </span>
                </div>
                <div className="flex items-center justify-center p-2">
                  <span
                    className={`font-pretendard text-xs font-medium ${
                      index === 1 ? 'text-[#911A00]' : 'text-[#686868]'
                    }`}
                  >
                    {member.isWriter ? 'Y' : 'N'}
                  </span>
                </div>
                <div className="flex w-[100px] items-center justify-center px-2">
                  <MemberStatusBadge status={member.status} />
                </div>
                <div className="flex w-[124px] items-center justify-center p-2">
                  <span
                    className={`font-pretendard text-xs font-medium ${
                      index === 1 ? 'text-[#911A00]' : 'text-[#686868]'
                    }`}
                  >
                    {member.lastLogin}
                  </span>
                </div>
                <div className="flex w-[124px] items-center justify-center p-2">
                  <span
                    className={`font-pretendard text-xs font-medium ${
                      index === 1 ? 'text-[#911A00]' : 'text-[#686868]'
                    }`}
                  >
                    {member.joinDate}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* 페이지네이션 */}
          <div className="flex w-full items-center justify-between">
            {/* 항목 수 선택 */}
            <FilterDropdown
              value={`${itemsPerPage}개씩 보기`}
              options={['10개씩 보기', '50개씩 보기', '100개씩 보기']}
              onChange={(value) => {
                const count = parseInt(value.replace('개씩 보기', ''));
                setItemsPerPage(count);
              }}
              width="w-[150px]"
            />

            {/* 페이지 번호 */}
            <div className="flex items-center gap-4">
              <Arrow direction="left" size={24} color="#A0A0A0" />
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 flex-col items-center justify-center rounded-sm bg-[#911A00]">
                  <span className="font-pretendard text-sm font-medium text-white">1</span>
                </div>
                <div className="flex h-6 w-6 flex-col items-center justify-center">
                  <span className="font-pretendard text-sm font-medium text-[#CCBCAB]">2</span>
                </div>
                <div className="flex h-6 w-6 flex-col items-center justify-center">
                  <span className="font-pretendard text-sm font-medium text-[#CCBCAB]">...</span>
                </div>
                <div className="flex h-6 w-6 flex-col items-center justify-center">
                  <span className="font-pretendard text-sm font-medium text-[#CCBCAB]">9</span>
                </div>
                <div className="flex h-6 w-6 flex-col items-center justify-center">
                  <span className="font-pretendard text-sm font-medium text-[#CCBCAB]">10</span>
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
