'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Search from '@/components/icons/Search';
import Refresh from '@/components/icons/Refresh';
import UpArrow from '@/components/icons/UpArrow';
import Arrow from '@/components/icons/Arrow';
import AccountRegistrationModal from './components/AccountRegistrationModal';

interface AdminAccount {
  id: string;
  no: string;
  name: string;
  email: string;
  status: string;
  type: string;
  isHighlighted?: boolean;
}

// 목업 데이터
const adminAccounts: AdminAccount[] = [
  { id: '1', no: '12345', name: '김아무개', email: 'asnd123@naver.com', status: 'Y', type: '서비스 관리자' },
  { id: '2', no: '12345', name: '김아무개2', email: 'asnd123@naver.com', status: 'N', type: '운영관리자', isHighlighted: true },
  { id: '3', no: '12345', name: '김아무개', email: 'asnd123@naver.com', status: 'Y', type: '일반관리자' },
  { id: '4', no: '12345', name: '김아무개', email: 'asnd123@naver.com', status: 'Y', type: '일반관리자' },
  { id: '5', no: '12345', name: '김아무개', email: 'asnd123@naver.com', status: 'Y', type: '일반관리자' },
  { id: '6', no: '12345', name: '김아무개', email: 'asnd123@naver.com', status: 'Y', type: '일반관리자' },
  { id: '7', no: '12345', name: '김아무개', email: 'asnd123@naver.com', status: 'Y', type: '일반관리자' },
  { id: '8', no: '12345', name: '김아무개', email: 'asnd123@naver.com', status: 'Y', type: '일반관리자' },
  { id: '9', no: '12345', name: '김아무개', email: 'asnd123@naver.com', status: 'Y', type: '일반관리자' },
  { id: '10', no: '12345', name: '김아무개', email: 'asnd123@naver.com', status: 'Y', type: '일반관리자' },
];

const statusOptions = ['전체', 'Y', 'N'];
const typeOptions = ['전체', '서비스 관리자', '운영��리자', '일반관리자'];
const itemsPerPageOptions = ['10개씩 보기', '20개씩 보기', '50개씩 보기'];

export default function AdminAccountsPermissionsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('전체');
  const [typeFilter, setTypeFilter] = useState('전체');
  const [itemsPerPage, setItemsPerPage] = useState('10개씩 보기');
  const [currentPage, setCurrentPage] = useState(1);
  const [isAccountRegistrationModalOpen, setIsAccountRegistrationModalOpen] = useState(false);

  const [statusDropdownOpen, setStatusDropdownOpen] = useState(false);
  const [typeDropdownOpen, setTypeDropdownOpen] = useState(false);
  const [itemsDropdownOpen, setItemsDropdownOpen] = useState(false);

  const handleSearch = () => {
    // 검색 로직 구현
    console.log('검색:', { searchTerm, statusFilter, typeFilter });
  };

  const handleReset = () => {
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
          {/* 이름 검색 필드 */}
          <div className="flex flex-1 items-center gap-3 rounded-md border border-[#EBEBEB] bg-white px-3 py-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#911A00]">이름</span>
              <UpArrow size={10} color="#911A00" />
            </div>
            <input
              type="text"
              placeholder="검색조건을 입력해주세요"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 text-xs text-[#727272] outline-none placeholder:text-[#727272]"
            />
          </div>

          {/* 필터 섹션 */}
          <div className="flex flex-1 items-start gap-6">
            {/* 상태 필터 */}
            <div className="flex flex-1 items-center gap-2">
              <span className="text-base font-bold text-[#555]">상태</span>
              <DropdownMenu open={statusDropdownOpen} onOpenChange={setStatusDropdownOpen}>
                <DropdownMenuTrigger asChild>
                  <button className="flex flex-1 items-center justify-between rounded-md border border-[#EBEBEB] bg-white px-3 py-3">
                    <span className="text-xs font-bold text-[#911A00]">{statusFilter}</span>
                    <UpArrow size={10} color="#911A00" className={`transition-transform ${statusDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-auto min-w-[var(--radix-dropdown-menu-trigger-width)] rounded-md border border-[#EBEBEB] bg-white shadow-lg">
                  {statusOptions.map((option) => (
                    <DropdownMenuItem
                      key={option}
                      onClick={() => setStatusFilter(option)}
                      className="cursor-pointer px-4 py-2 hover:bg-[#FFF5F2] focus:bg-[#FFF5F2]"
                    >
                      <span className="text-xs text-[#686868]">{option}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* 타입 필터 */}
            <div className="flex flex-1 items-center gap-2">
              <span className="text-base font-bold text-[#555]">타입</span>
              <DropdownMenu open={typeDropdownOpen} onOpenChange={setTypeDropdownOpen}>
                <DropdownMenuTrigger asChild>
                  <button className="flex flex-1 items-center justify-between rounded-md border border-[#EBEBEB] bg-white px-3 py-3">
                    <span className="text-xs font-bold text-[#911A00]">{typeFilter}</span>
                    <UpArrow size={10} color="#911A00" className={`transition-transform ${typeDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-auto min-w-[var(--radix-dropdown-menu-trigger-width)] rounded-md border border-[#EBEBEB] bg-white shadow-lg">
                  {typeOptions.map((option) => (
                    <DropdownMenuItem
                      key={option}
                      onClick={() => setTypeFilter(option)}
                      className="cursor-pointer px-4 py-2 hover:bg-[#FFF5F2] focus:bg-[#FFF5F2]"
                    >
                      <span className="text-xs text-[#686868]">{option}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* 버튼 섹션 */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleSearch}
              className="flex w-[120px] items-center justify-center gap-2.5 rounded bg-[#911A00] px-0 py-3"
            >
              <Search size={16} color="white" />
              <span className="text-base font-bold text-white">검색</span>
            </button>
            <button
              onClick={handleReset}
              className="flex w-[120px] items-center justify-center gap-2.5 rounded border-[1.3px] border-[#911A00] px-0 py-3"
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
                className={`flex h-[50px] w-full items-center justify-between px-4 ${
                  account.isHighlighted ? 'bg-[#EBE1DF]' : 'bg-white'
                }`}
              >
                <div className="flex w-[60px] items-center justify-center py-4">
                  <span className={`w-10 text-center text-xs ${account.isHighlighted ? 'text-[#911A00]' : 'text-[#686868]'}`}>
                    {account.no}
                  </span>
                </div>
                <div className="flex w-[120px] items-center justify-center py-4">
                  <span className={`w-[100px] text-center text-xs ${account.isHighlighted ? 'text-[#911A00]' : 'text-[#686868]'}`}>
                    {account.name}
                  </span>
                </div>
                <div className="flex w-[338px] items-center justify-center py-4">
                  <span className={`w-[318px] text-center text-xs ${account.isHighlighted ? 'text-[#911A00]' : 'text-[#686868]'}`}>
                    {account.email}
                  </span>
                </div>
                <div className="flex w-[100px] items-center justify-center py-4">
                  <span className={`w-20 text-center text-xs ${account.isHighlighted ? 'text-[#911A00]' : 'text-[#686868]'}`}>
                    {account.status}
                  </span>
                </div>
                <div className="flex w-[144px] items-center justify-center py-4">
                  <span className={`w-[124px] text-center text-xs ${account.isHighlighted ? 'text-[#911A00]' : 'text-[#686868]'}`}>
                    {account.type}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* 페이지네이션 */}
          <div className="flex w-full items-center justify-between">
            <DropdownMenu open={itemsDropdownOpen} onOpenChange={setItemsDropdownOpen}>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-3 rounded-md border border-[#EBEBEB] bg-white px-3 py-3">
                  <span className="text-xs font-bold text-[#911A00]">{itemsPerPage}</span>
                  <UpArrow size={10} color="#911A00" className={`transition-transform ${itemsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-auto min-w-[var(--radix-dropdown-menu-trigger-width)] rounded-md border border-[#EBEBEB] bg-white shadow-lg">
                {itemsPerPageOptions.map((option) => (
                  <DropdownMenuItem
                    key={option}
                    onClick={() => setItemsPerPage(option)}
                    className="cursor-pointer px-4 py-2 hover:bg-[#FFF5F2] focus:bg-[#FFF5F2]"
                  >
                    <span className="text-xs text-[#686868]">{option}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="flex items-center gap-4">
              <Arrow direction="left" size={24} color="#A0A0A0" />
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-sm bg-[#911A00]">
                  <span className="text-sm text-white">1</span>
                </div>
                <div className="flex h-6 w-6 items-center justify-center">
                  <span className="text-sm text-[#CCBCAB]">2</span>
                </div>
                <div className="flex h-6 w-6 items-center justify-center">
                  <span className="text-sm text-[#CCBCAB]">...</span>
                </div>
                <div className="flex h-6 w-6 items-center justify-center">
                  <span className="text-sm text-[#CCBCAB]">9</span>
                </div>
                <div className="flex h-6 w-6 items-center justify-center">
                  <span className="text-sm text-[#CCBCAB]">10</span>
                </div>
              </div>
              <Arrow direction="right" size={24} color="#911A00" />
            </div>
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
