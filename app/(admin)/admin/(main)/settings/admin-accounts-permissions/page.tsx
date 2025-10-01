'use client';

import { useState } from 'react';
import SearchInputWithFilter from '@/components/ui/search-input-with-filter';
import FilterDropdown from '@/components/ui/filter-dropdown';
import Search from '@/components/icons/Search';
import Refresh from '@/components/icons/Refresh';
import AccountRegistrationModal from './components/AccountRegistrationModal';
import Pagination from '@/components/ui/pagination';

interface AdminAccount {
  id: string;
  no: string;
  name: string;
  email: string;
  status: string;
  type: string;
}

// 목업 데이터
const adminAccounts: AdminAccount[] = [
  {
    id: '1',
    no: '12345',
    name: '김아무개',
    email: 'asnd123@naver.com',
    status: 'Y',
    type: '서비스 관리자',
  },
  {
    id: '2',
    no: '12345',
    name: '김아무개2',
    email: 'asnd123@naver.com',
    status: 'N',
    type: '운영관리자',
  },
  {
    id: '3',
    no: '12345',
    name: '김아무개',
    email: 'asnd123@naver.com',
    status: 'Y',
    type: '일반관리자',
  },
  {
    id: '4',
    no: '12345',
    name: '김아무개',
    email: 'asnd123@naver.com',
    status: 'Y',
    type: '일반관리자',
  },
  {
    id: '5',
    no: '12345',
    name: '김아무개',
    email: 'asnd123@naver.com',
    status: 'Y',
    type: '일반관리자',
  },
  {
    id: '6',
    no: '12345',
    name: '김아무개',
    email: 'asnd123@naver.com',
    status: 'Y',
    type: '일반관리자',
  },
  {
    id: '7',
    no: '12345',
    name: '김아무개',
    email: 'asnd123@naver.com',
    status: 'Y',
    type: '일반관리자',
  },
  {
    id: '8',
    no: '12345',
    name: '김아무개',
    email: 'asnd123@naver.com',
    status: 'Y',
    type: '일반관리자',
  },
  {
    id: '9',
    no: '12345',
    name: '김아무개',
    email: 'asnd123@naver.com',
    status: 'Y',
    type: '일반관리자',
  },
  {
    id: '10',
    no: '12345',
    name: '김아무개',
    email: 'asnd123@naver.com',
    status: 'Y',
    type: '일반관리자',
  },
];

const searchFilterOptions = ['이름', '이메일'];
const statusOptions = ['전체', 'Y', 'N'];
const typeOptions = ['전체', '서비스 관리자', '운영��리자', '일반관리자'];
const itemsPerPageOptions = ['10개씩 보기', '20개씩 보기', '50개씩 보기'];

export default function AdminAccountsPermissionsPage() {
  const [searchFilter, setSearchFilter] = useState('이름');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('전체');
  const [typeFilter, setTypeFilter] = useState('전체');
  const [itemsPerPage, setItemsPerPage] = useState('10개씩 보기');
  const [currentPage, setCurrentPage] = useState(1);
  const [isAccountRegistrationModalOpen, setIsAccountRegistrationModalOpen] = useState(false);

  const handleSearch = () => {
    // 검색 로직 구현
    console.log('검색:', { searchTerm, statusFilter, typeFilter });
  };

  const handleReset = () => {
    setSearchFilter('이름');
    setSearchTerm('');
    setStatusFilter('전체');
    setTypeFilter('전체');
  };

  return (
    <div className="flex w-full flex-col items-start gap-[34px] p-11">
      {/* 제목 */}
      <h1 className="text-2xl font-bold leading-8 text-[#2A2A2A]">관리자 계정/권한</h1>

      {/* 검색 섹션 */}
      <div className="flex w-full flex-col items-start gap-[18px] rounded-lg bg-[#FAF8F6] p-8">
        <div className="flex w-full items-center gap-6">
          {/* 검색 필드 */}
          <SearchInputWithFilter
            filterValue={searchFilter}
            filterOptions={searchFilterOptions}
            onFilterChange={setSearchFilter}
            searchValue={searchTerm}
            onSearchChange={setSearchTerm}
            placeholder="검색조건을 입력해주세요"
          />

          {/* 필터 섹션 */}
          <div className="flex flex-1 items-start gap-6">
            {/* 상태 필터 */}
            <div className="flex flex-1 items-center gap-2">
              <span className="text-base font-bold text-[#555]">상태</span>
              <FilterDropdown
                value={statusFilter}
                options={statusOptions}
                onChange={setStatusFilter}
              />
            </div>

            {/* 타입 필터 */}
            <div className="flex flex-1 items-center gap-2">
              <span className="text-base font-bold text-[#555]">타입</span>
              <FilterDropdown value={typeFilter} options={typeOptions} onChange={setTypeFilter} />
            </div>
          </div>

          {/* 버튼 섹션 */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleSearch}
              className="flex h-[43px] w-[120px] items-center justify-center gap-2.5 rounded bg-[#911A00] px-0"
            >
              <Search size={16} color="white" />
              <span className="text-base font-bold text-white">검색</span>
            </button>
            <button
              onClick={handleReset}
              className="flex h-[43px] w-[120px] items-center justify-center gap-2.5 rounded border-[1.3px] border-[#911A00] px-0 py-3"
            >
              <Refresh size={16} color="#911A00" />
              <span className="text-base font-bold text-[#911A00]">초기화</span>
            </button>
          </div>
        </div>
      </div>

      {/* 결과 및 액션 섹션 */}
      <div className="flex w-full flex-col items-end gap-4">
        <div className="flex w-full items-center justify-between">
          <div className="text-xl text-[#6D6D6D]">
            총 <span className="text-[#911A00]">12</span>건
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAccountRegistrationModalOpen(true)}
              className="flex w-[120px] items-center justify-center rounded bg-[#911A00] py-2.5"
            >
              <span className="text-sm font-bold text-white">계정등록</span>
            </button>
          </div>
        </div>

        {/* 테이블 */}
        <div className="flex w-full flex-col items-start gap-6">
          <div className="flex w-full flex-col">
            {/* 테이��� 헤더 */}
            <div className="flex h-[50px] w-full items-center justify-between rounded-t bg-[#EEE] px-4">
              <div className="flex w-[60px] items-center justify-center py-4">
                <span className="w-10 text-center text-xs font-bold text-[#515151]">NO</span>
              </div>
              <div className="flex w-[120px] items-center justify-center py-4">
                <span className="w-[100px] text-center text-xs font-bold text-[#515151]">이름</span>
              </div>
              <div className="flex w-[338px] items-center justify-center py-4">
                <span className="w-[318px] text-center text-xs font-bold text-[#515151]">ID</span>
              </div>
              <div className="flex w-[100px] items-center justify-center py-4">
                <span className="w-20 text-center text-xs font-bold text-[#515151]">상태</span>
              </div>
              <div className="flex w-[144px] items-center justify-center py-4">
                <span className="w-[124px] text-center text-xs font-bold text-[#515151]">타입</span>
              </div>
            </div>

            {/* 테이블 데이터 */}
            {adminAccounts.map((account) => (
              <div
                key={account.id}
                className="group flex h-[50px] w-full items-center justify-between bg-white px-4 hover:bg-[#EBE1DF]"
              >
                <div className="flex w-[60px] items-center justify-center py-4">
                  <span className="w-10 text-center text-xs text-[#686868] group-hover:text-[#911A00]">
                    {account.no}
                  </span>
                </div>
                <div className="flex w-[120px] items-center justify-center py-4">
                  <span className="w-[100px] text-center text-xs text-[#686868] group-hover:text-[#911A00]">
                    {account.name}
                  </span>
                </div>
                <div className="flex w-[338px] items-center justify-center py-4">
                  <span className="w-[318px] text-center text-xs text-[#686868] group-hover:text-[#911A00]">
                    {account.email}
                  </span>
                </div>
                <div className="flex w-[100px] items-center justify-center py-4">
                  <span className="w-20 text-center text-xs text-[#686868] group-hover:text-[#911A00]">
                    {account.status}
                  </span>
                </div>
                <div className="flex w-[144px] items-center justify-center py-4">
                  <span className="w-[124px] text-center text-xs text-[#686868] group-hover:text-[#911A00]">
                    {account.type}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* 페이지네이션 */}
          <div className="flex w-full items-center justify-between">
            <FilterDropdown
              value={itemsPerPage}
              options={itemsPerPageOptions}
              onChange={setItemsPerPage}
              width="w-[104px] h-[38px]"
            />

            <Pagination currentPage={currentPage} totalPages={10} onPageChange={setCurrentPage} />
          </div>
        </div>
      </div>

      {/* 계정등록 모달 */}
      <AccountRegistrationModal
        isOpen={isAccountRegistrationModalOpen}
        onClose={() => setIsAccountRegistrationModalOpen(false)}
      />
    </div>
  );
}
