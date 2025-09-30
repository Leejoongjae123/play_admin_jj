'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import Calendar from '@/components/icons/Calendar';
import Search from '@/components/icons/Search';
import Refresh from '@/components/icons/Refresh';
import Excel from '@/components/icons/Excel';
import UpArrow from '@/components/icons/UpArrow';
import Arrow from '@/components/icons/Arrow';

interface Program {
  id: string;
  programId: string;
  programName: string;
  eventDateTime: string;
  eventLocation: string;
  applicationPeriod: string;
  status: 'progress' | 'ended';
  registrationDate: string;
  worksCount: number | string;
  memoCount: number | string;
  scrapCount: number | string;
  isHighlighted?: boolean;
}

const mockPrograms: Program[] = [
  {
    id: '12345',
    programId: 'P00123',
    programName: '<바이 하트> 북토크',
    eventDateTime: '2025-09-20 18:00',
    eventLocation: '인스크립트홀',
    applicationPeriod: '2025-09-01~09-18',
    status: 'progress',
    registrationDate: '2025-01-01',
    worksCount: '-',
    memoCount: '-',
    scrapCount: '-',
  },
  {
    id: '12345',
    programId: 'P00123',
    programName: '신진 작가 쇼케이스',
    eventDateTime: '2025-09-20 18:00',
    eventLocation: '인스크립트홀',
    applicationPeriod: '2025-09-01~09-18',
    status: 'progress',
    registrationDate: '2025-01-01',
    worksCount: 23,
    memoCount: 45,
    scrapCount: 67,
  },
  {
    id: '12345',
    programId: 'P00123',
    programName: '번역 워크숍',
    eventDateTime: '2025-09-20 18:00',
    eventLocation: '문은 열려 있거나 닫혀 있어야 하오',
    applicationPeriod: '2025-09-01~09-18',
    status: 'progress',
    registrationDate: '2025-01-01',
    worksCount: 12,
    memoCount: 23,
    scrapCount: 64,
    isHighlighted: true,
  },
  {
    id: '12345',
    programId: 'P00123',
    programName: '희곡 낭독회',
    eventDateTime: '2025-09-20 18:00',
    eventLocation: '인스크립트홀',
    applicationPeriod: '2025-09-01~09-18',
    status: 'ended',
    registrationDate: '2025-01-01',
    worksCount: 23,
    memoCount: 45,
    scrapCount: 67,
  },
  {
    id: '12345',
    programId: 'P00123',
    programName: '프로그램명프로그램명',
    eventDateTime: '2025-09-20 18:00',
    eventLocation: '인스크립트홀',
    applicationPeriod: '2025-09-01~09-18',
    status: 'progress',
    registrationDate: '2025-01-01',
    worksCount: 23,
    memoCount: 45,
    scrapCount: 67,
  },
  {
    id: '12345',
    programId: 'P00123',
    programName: '프로그램명프로그램명',
    eventDateTime: '2025-09-20 18:00',
    eventLocation: '인스크립트홀',
    applicationPeriod: '2025-09-01~09-18',
    status: 'ended',
    registrationDate: '2025-01-01',
    worksCount: 23,
    memoCount: 45,
    scrapCount: 67,
  },
  {
    id: '12345',
    programId: 'P00123',
    programName: '프로그램명프로그램명',
    eventDateTime: '2025-09-20 18:00',
    eventLocation: '인스크립트홀',
    applicationPeriod: '2025-09-01~09-18',
    status: 'progress',
    registrationDate: '2025-01-01',
    worksCount: 23,
    memoCount: 45,
    scrapCount: 67,
  },
  {
    id: '12345',
    programId: 'P00123',
    programName: '프로그램명프로그램명',
    eventDateTime: '2025-09-20 18:00',
    eventLocation: '인스크립트홀',
    applicationPeriod: '2025-09-01~09-18',
    status: 'progress',
    registrationDate: '2025-01-01',
    worksCount: 23,
    memoCount: 45,
    scrapCount: 67,
  },
  {
    id: '12345',
    programId: 'P00123',
    programName: '프로그램명프로그램명',
    eventDateTime: '2025-09-20 18:00',
    eventLocation: '인스크립트홀',
    applicationPeriod: '2025-09-01~09-18',
    status: 'progress',
    registrationDate: '2025-01-01',
    worksCount: 23,
    memoCount: 45,
    scrapCount: 67,
  },
  {
    id: '12345',
    programId: 'P00123',
    programName: '프로그램명프로그램명',
    eventDateTime: '2025-09-20 18:00',
    eventLocation: '인스크립트홀',
    applicationPeriod: '2025-09-01~09-18',
    status: 'progress',
    registrationDate: '2025-01-01',
    worksCount: 23,
    memoCount: 45,
    scrapCount: 67,
  },
];

function StatusBadge({ status }: { status: 'progress' | 'ended' }) {
  if (status === 'progress') {
    return (
      <div className="inline-flex items-center justify-center gap-2 rounded-full border border-[#B0D5F2] bg-[#F6FBFF] px-3 py-1.5 text-sm font-medium text-[#2581F9]">
        진행중
      </div>
    );
  }
  return (
    <div className="inline-flex items-center justify-center gap-2 rounded-full bg-gray-5 px-3 py-1.5 text-sm font-medium text-gray-1">
      종료
    </div>
  );
}

function FilterDropdown({ label, value, options }: { label: string; value: string; options: string[] }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex cursor-pointer items-center justify-between rounded-md border border-[#EBEBEB] bg-white px-3 py-3 text-sm">
          <span className="text-xs font-bold text-primary">{value}</span>
          <UpArrow size={10} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {options.map((option) => (
          <DropdownMenuItem key={option}>{option}</DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function DateInput({ placeholder, value }: { placeholder: string; value?: string }) {
  return (
    <div className="flex w-[140px] items-center justify-between rounded-md border border-[#EBEBEB] bg-white px-3 py-3">
      <span className={`text-xs ${value ? 'font-bold text-primary' : 'font-medium text-[#727272]'}`}>
        {value || placeholder}
      </span>
      <Calendar size={12} color="#727272" />
    </div>
  );
}

function StatisticCard({ title, count }: { title: string; count: string }) {
  return (
    <div className="flex flex-col items-center justify-center rounded border border-orange-3 bg-background px-10 py-6">
      <div className="flex items-center justify-center px-4 py-2">
        <span className="text-lg font-semibold leading-6 text-primary">{title}</span>
      </div>
      <div className="w-[180px] overflow-hidden text-center text-2xl font-semibold leading-8 text-black">
        {count}
      </div>
    </div>
  );
}

export default function AdminProgramsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState('10개씩 보기');

  return (
    <div className="flex w-full max-w-[1180px] flex-col items-center gap-[34px] p-11">
      {/* 제목 */}
      <h1 className="self-stretch text-2xl font-semibold leading-8 text-gray-1">프로그램 목록</h1>

      {/* 필터 섹션 */}
      <div className="flex w-full flex-col items-start gap-[18px] rounded-lg bg-background p-8">
        {/* 첫 번째 줄: 날짜, 노출여부, 상태 */}
        <div className="flex w-full items-start gap-6">
          {/* 가입일 */}
          <div className="flex items-center gap-2">
            <span className="text-base font-semibold text-gray-2">가입일</span>
            <div className="flex items-center gap-[10px]">
              <DateInput placeholder="날짜 입력" value="2025-08-08" />
              <span className="text-xs font-semibold text-[#727272]">-</span>
              <DateInput placeholder="날짜 입력" />
            </div>
          </div>

          {/* 노출여부 */}
          <div className="flex flex-1 items-center gap-2">
            <span className="text-base font-semibold text-gray-2">노출여부</span>
            <div className="flex-1">
              <FilterDropdown label="노출여부" value="전체" options={['전체', '노출', '비노출']} />
            </div>
          </div>

          {/* 상태 */}
          <div className="flex flex-1 items-center gap-2">
            <span className="text-base font-semibold text-gray-2">상태</span>
            <div className="flex-1">
              <FilterDropdown label="상태" value="전체" options={['전체', '진행중', '종료']} />
            </div>
          </div>
        </div>

        {/* 두 번째 줄: 검색 */}
        <div className="flex w-full items-center gap-6">
          {/* 검색 입력 */}
          <div className="flex flex-1 items-center gap-3 rounded-md border border-[#EBEBEB] bg-white px-3 py-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-primary">프로그램명</span>
              <UpArrow size={10} />
            </div>
            <span className="text-xs font-medium text-[#727272]">검색조건을 입력해주세요</span>
          </div>

          {/* 버튼들 */}
          <div className="flex items-center gap-2">
            <button className="flex w-[120px] items-center justify-center gap-[10px] rounded bg-primary py-3 text-base font-semibold text-white">
              <Search size={16} color="white" />
              검색
            </button>
            <button className="flex w-[120px] items-center justify-center gap-[10px] rounded border-[1.3px] border-primary py-3 text-base font-semibold text-primary">
              <Refresh size={16} />
              초기화
            </button>
          </div>
        </div>
      </div>

      {/* 통계 섹션 */}
      <div className="flex w-full flex-col items-center gap-6">
        <div className="flex items-start gap-[34px]">
          <StatisticCard title="진행중" count="3건" />
          <StatisticCard title="종료" count="123건" />
        </div>

        <div className="flex w-full flex-col items-end gap-4">
          <div className="flex w-full items-center justify-between">
            <span className="text-xl font-medium leading-6 tracking-tight">
              <span className="text-[#6D6D6D]">총 </span>
              <span className="text-primary">12,345</span>
              <span className="text-[#6D6D6D]">명</span>
            </span>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-3 rounded border-[1.6px] border-[#4CA452] bg-white px-3 py-2.5">
                <Excel size={16} />
                <span className="text-sm font-semibold leading-4 tracking-tight text-[#4CA452]">엑셀 다운로드</span>
              </button>
              <button className="flex w-[120px] items-center justify-center py-2.5 rounded bg-primary text-sm font-semibold leading-4 tracking-tight text-white">
                프로그램 등록
              </button>
            </div>
          </div>

          {/* 테이블 */}
          <div className="flex w-full flex-col items-start gap-6">
            <div className="flex w-full flex-col">
              {/* 테이블 헤더 */}
              <div className="flex h-[50px] items-center justify-between bg-[#EEE] px-4 rounded-t">
                <div className="flex w-10 items-center justify-center">
                  <span className="text-xs font-bold text-[#515151]">NO</span>
                </div>
                <div className="flex w-[60px] items-center justify-center">
                  <span className="text-xs font-bold text-[#515151]">프로그램ID</span>
                </div>
                <div className="flex w-[100px] items-center justify-center">
                  <span className="text-xs font-bold text-[#515151]">프로그램명</span>
                </div>
                <div className="flex w-[124px] items-center justify-center">
                  <span className="text-xs font-bold text-[#515151]">행사일시</span>
                </div>
                <div className="flex w-[88px] items-center justify-center">
                  <span className="text-xs font-bold text-[#515151]">행사장소</span>
                </div>
                <div className="flex w-[114px] items-center justify-center">
                  <span className="text-xs font-bold text-[#515151]">신청기간</span>
                </div>
                <div className="flex w-[100px] items-center justify-center">
                  <span className="text-xs font-bold text-[#515151]">상태</span>
                </div>
                <div className="flex w-[72px] items-center justify-center">
                  <span className="text-xs font-bold text-[#515151]">등록/신청일</span>
                </div>
                <div className="flex w-11 items-center justify-center">
                  <span className="text-xs font-bold text-[#515151]">작품수</span>
                </div>
                <div className="flex w-11 items-center justify-center">
                  <span className="text-xs font-bold text-[#515151]">메모수</span>
                </div>
                <div className="flex w-11 items-center justify-center">
                  <span className="text-xs font-bold text-[#515151]">스크랩수</span>
                </div>
              </div>

              {/* 테이블 본문 */}
              {mockPrograms.map((program, index) => (
                <div
                  key={index}
                  className={`flex h-[50px] items-center justify-between px-4 ${
                    program.isHighlighted ? 'bg-red-3' : 'bg-white'
                  }`}
                >
                  <div className="flex w-10 items-center justify-center">
                    <span className={`text-xs font-medium ${program.isHighlighted ? 'text-primary' : 'text-[#686868]'}`}>
                      {program.id}
                    </span>
                  </div>
                  <div className="flex w-[60px] items-center justify-center">
                    <span className={`text-xs font-medium ${program.isHighlighted ? 'text-primary' : 'text-[#686868]'}`}>
                      {program.programId}
                    </span>
                  </div>
                  <div className="flex w-[100px] items-center justify-center">
                    <span className={`text-xs font-medium ${program.isHighlighted ? 'text-primary' : 'text-[#686868]'}`}>
                      {program.programName}
                    </span>
                  </div>
                  <div className="flex w-[124px] items-center justify-center">
                    <span className={`text-xs font-medium ${program.isHighlighted ? 'text-primary' : 'text-[#686868]'}`}>
                      {program.eventDateTime}
                    </span>
                  </div>
                  <div className="flex w-[88px] items-center justify-center">
                    <span
                      className={`truncate text-xs font-medium ${program.isHighlighted ? 'text-primary' : 'text-[#686868]'}`}
                    >
                      {program.eventLocation}
                    </span>
                  </div>
                  <div className="flex w-[114px] items-center justify-center">
                    <span className={`text-xs font-medium ${program.isHighlighted ? 'text-primary' : 'text-[#686868]'}`}>
                      {program.applicationPeriod}
                    </span>
                  </div>
                  <div className="flex w-[100px] items-center justify-center">
                    <StatusBadge status={program.status} />
                  </div>
                  <div className="flex w-[72px] items-center justify-center">
                    <span className={`text-xs font-medium ${program.isHighlighted ? 'text-primary' : 'text-[#686868]'}`}>
                      {program.registrationDate}
                    </span>
                  </div>
                  <div className="flex w-11 items-center justify-center">
                    <span className={`text-xs font-medium ${program.isHighlighted ? 'text-primary' : 'text-[#686868]'}`}>
                      {program.worksCount}
                    </span>
                  </div>
                  <div className="flex w-11 items-center justify-center">
                    <span className={`text-xs font-medium ${program.isHighlighted ? 'text-primary' : 'text-[#686868]'}`}>
                      {program.memoCount}
                    </span>
                  </div>
                  <div className="flex w-11 items-center justify-center">
                    <span className={`text-xs font-medium ${program.isHighlighted ? 'text-primary' : 'text-[#686868]'}`}>
                      {program.scrapCount}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* 하단 컨트롤 */}
            <div className="flex w-full items-center justify-between">
              {/* 개수 선택 */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex cursor-pointer items-center gap-3 rounded-md border border-[#EBEBEB] bg-white px-3 py-3">
                    <span className="text-xs font-bold text-primary">{itemsPerPage}</span>
                    <UpArrow size={10} />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setItemsPerPage('10개씩 보기')}>10개씩 보기</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setItemsPerPage('20개씩 보기')}>20개씩 보기</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setItemsPerPage('50개씩 보기')}>50개씩 보기</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* 페이지네이션 */}
              <div className="flex items-center gap-4">
                <button disabled className="cursor-not-allowed">
                  <Arrow direction="left" size={24} color="#A0A0A0" />
                </button>
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded bg-primary">
                    <span className="text-sm font-medium text-white">1</span>
                  </div>
                  <div className="flex h-6 w-6 items-center justify-center">
                    <span className="text-sm font-medium text-orange-3">2</span>
                  </div>
                  <div className="flex h-6 w-6 items-center justify-center">
                    <span className="text-sm font-medium text-orange-3">...</span>
                  </div>
                  <div className="flex h-6 w-6 items-center justify-center">
                    <span className="text-sm font-medium text-orange-3">9</span>
                  </div>
                  <div className="flex h-6 w-6 items-center justify-center">
                    <span className="text-sm font-medium text-orange-3">10</span>
                  </div>
                </div>
                <button>
                  <Arrow direction="right" size={24} color="#911A00" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
