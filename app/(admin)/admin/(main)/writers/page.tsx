'use client';

import { useState } from 'react';
import Calendar from '@/components/icons/Calendar';
import Search from '@/components/icons/Search';
import Refresh from '@/components/icons/Refresh';
import Excel from '@/components/icons/Excel';
import UpArrow from '@/components/icons/UpArrow';
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
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('전체');
  const [searchType, setSearchType] = useState('작품명');

  const exposedWriters = mockWriters.filter((writer) => writer.status === '노출중').length;
  const hiddenWriters = mockWriters.filter((writer) => writer.status === '비공개').length;
  const totalWriters = mockWriters.length;

  return (
    <div className="flex w-full flex-col items-center gap-8 p-11">
      {/* 제목 */}
      <h1 className="self-stretch text-2xl font-semibold leading-8 text-gray-1">작가 관리</h1>

      {/* 필터 영역 */}
      <div className="flex flex-col items-start gap-4 self-stretch rounded-lg bg-[#FAF8F6] p-8">
        {/* 첫 번째 행: 가입일, 상태 */}
        <div className="flex items-start gap-6 self-stretch">
          {/* 가입일 */}
          <div className="flex items-center gap-2">
            <div className="text-base font-semibold leading-6 text-gray-2">가입일</div>
            <div className="flex w-[306px] items-center gap-2.5 rounded-md">
              <div className="flex w-[140px] items-center justify-between rounded-md border border-[#EBEBEB] bg-white p-3">
                <div className="text-xs font-semibold text-primary">2025-08-08</div>
                <Calendar size={12} color="#727272" />
              </div>
              <div className="text-center text-xs font-semibold text-[#727272]">-</div>
              <div className="flex w-[140px] items-center justify-between rounded-md border border-[#EBEBEB] bg-white p-3">
                <div className="text-xs font-medium text-[#727272]">날짜 입력</div>
                <Calendar size={12} color="#727272" />
              </div>
            </div>
          </div>

          {/* 상태 */}
          <div className="flex flex-1 items-center gap-2">
            <div className="text-base font-semibold leading-6 text-gray-2">상태</div>
            <div className="flex flex-1 items-center justify-between rounded-md border border-[#EBEBEB] bg-white p-3">
              <div className="text-xs font-bold text-primary">전체</div>
              <UpArrow size={10} color="#911A00" />
            </div>
          </div>
        </div>

        {/* 두 번째 행: 검색 */}
        <div className="flex items-center gap-6 self-stretch">
          <div className="flex flex-1 items-center gap-3 rounded-md border border-[#EBEBEB] bg-white p-3">
            <div className="flex items-center gap-2">
              <div className="text-xs font-bold text-primary">작품명</div>
              <UpArrow size={10} color="#911A00" />
            </div>
            <div className="text-xs font-medium text-[#727272]">검색조건을 입력해주세요</div>
          </div>
          <div className="flex items-center gap-2">
            {/* 검색 버튼 */}
            <div className="flex w-[120px] items-center justify-center gap-2.5 rounded bg-primary px-0 py-3">
              <Search size={16} color="white" />
              <div className="text-base font-semibold text-white">검색</div>
            </div>
            {/* 초기화 버튼 */}
            <div className="flex w-[120px] items-center justify-center gap-2.5 rounded border-[1.3px] border-primary px-0 py-3">
              <Refresh size={16} color="#911A00" />
              <div className="text-base font-semibold text-primary">초기화</div>
            </div>
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
              <div className="flex items-center gap-3 rounded border-[1.6px] border-[#4CA452] bg-white px-3 py-2.5">
                <Excel size={16} color="#4CA452" />
                <div className="text-sm font-semibold leading-4 tracking-tight text-[#4CA452]">
                  엑셀 다운로드
                </div>
              </div>
              {/* 희곡 등록 */}
              <div className="flex w-[120px] items-center justify-center gap-2.5 rounded bg-primary px-0 py-2.5">
                <div className="text-sm font-semibold leading-4 tracking-tight text-white">희곡 등록</div>
              </div>
            </div>
          </div>

          {/* 테이블 */}
          <div className="flex flex-col items-start gap-6 self-stretch">
            <div className="flex flex-col items-start self-stretch">
              {/* 헤더 */}
              <div className="flex h-[50px] items-center justify-between self-stretch rounded-sm bg-[#EEE] px-4">
                <div className="flex items-center justify-center gap-2.5 px-2.5 py-4">
                  <div className="w-10 text-center text-xs font-bold text-[#515151]">NO</div>
                </div>
                <div className="flex items-center justify-center gap-2.5 px-2.5 py-4">
                  <div className="w-[100px] text-center text-xs font-bold text-[#515151]">작가ID</div>
                </div>
                <div className="flex items-center justify-center gap-2.5 px-2.5 py-4">
                  <div className="w-[100px] text-center text-xs font-bold text-[#515151]">작가명</div>
                </div>
                <div className="flex items-center justify-center gap-2.5 px-2.5 py-4">
                  <div className="w-[124px] text-center text-xs font-bold text-[#515151]">ID</div>
                </div>
                <div className="flex items-center justify-center gap-2.5 px-2.5 py-4">
                  <div className="w-[160px] text-center text-xs font-bold text-[#515151]">대표작</div>
                </div>
                <div className="flex w-[100px] items-center justify-center gap-2.5 px-2.5 py-4">
                  <div className="w-20 flex-shrink-0 text-center text-xs font-bold text-[#515151]">상태</div>
                </div>
                <div className="flex items-center justify-center gap-2.5 px-2.5 py-4">
                  <div className="w-24 text-center text-xs font-bold text-[#515151]">등록/신청일</div>
                </div>
                <div className="flex items-center justify-center gap-60 px-2.5 py-4">
                  <div className="w-11 text-center text-xs font-bold text-[#515151]">작품수</div>
                </div>
                <div className="flex items-center justify-center gap-2.5 px-2.5 py-4">
                  <div className="w-11 text-center text-xs font-bold text-[#515151]">메모수</div>
                </div>
                <div className="flex items-center justify-center gap-2.5 px-2.5 py-4">
                  <div className="w-11 text-center text-xs font-bold text-[#515151]">스크랩수</div>
                </div>
              </div>

              {/* 테이블 행들 */}
              {mockWriters.map((writer, index) => (
                <div
                  key={`${writer.id}-${index}`}
                  className={`flex h-[50px] items-center justify-between self-stretch rounded px-4 ${
                    index === 2 ? 'bg-[#EBE1DF]' : ''
                  }`}
                >
                  <div className="flex items-center justify-center gap-2.5 px-2.5 py-4">
                    <div
                      className={`w-10 text-center text-xs font-medium ${
                        index === 2 ? 'text-primary' : 'text-[#686868]'
                      }`}
                    >
                      {writer.id}
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2.5 px-2.5 py-4">
                    <div
                      className={`w-[100px] text-center text-xs font-medium ${
                        index === 2 ? 'text-primary' : 'text-[#686868]'
                      }`}
                    >
                      {writer.writerId}
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2.5 px-2.5 py-4">
                    <div
                      className={`w-[100px] max-w-[100px] max-h-[14px] text-center text-xs font-medium ${
                        index === 2 ? 'text-primary' : 'text-[#686868]'
                      }`}
                    >
                      {writer.name}
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2.5 px-2.5 py-4">
                    <div
                      className={`w-[124px] text-center text-xs font-medium ${
                        index === 2 ? 'text-primary' : 'text-[#686868]'
                      }`}
                    >
                      {writer.email}
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2.5 px-2.5 py-4">
                    <div
                      className={`w-[160px] text-center text-xs font-medium ${
                        index === 2 ? 'text-primary' : 'text-[#686868]'
                      }`}
                    >
                      {writer.representative}
                    </div>
                  </div>
                  <div className="flex w-[100px] items-center justify-center gap-2.5 self-stretch px-2.5 py-0">
                    <WriterStatusBadge status={writer.status} />
                  </div>
                  <div className="flex items-center justify-center gap-2.5 px-2.5 py-4">
                    <div
                      className={`w-24 text-center text-xs font-medium ${
                        index === 2 ? 'text-primary' : 'text-[#686868]'
                      }`}
                    >
                      {writer.registeredAt}
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-60 px-2.5 py-4">
                    <div
                      className={`w-11 text-center text-xs font-medium ${
                        index === 2 ? 'text-primary' : 'text-[#686868]'
                      }`}
                    >
                      {writer.worksCount || '-'}
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2.5 px-2.5 py-4">
                    <div
                      className={`w-11 text-center text-xs font-medium ${
                        index === 2 ? 'text-primary' : 'text-[#686868]'
                      }`}
                    >
                      {writer.memosCount || '-'}
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2.5 px-2.5 py-4">
                    <div
                      className={`w-11 text-center text-xs font-medium ${
                        index === 2 ? 'text-primary' : 'text-[#686868]'
                      }`}
                    >
                      {writer.scrapsCount || '-'}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 페이지네이션 */}
            <div className="flex items-center justify-between self-stretch">
              <div className="flex items-center gap-3 rounded-md border border-[#EBEBEB] bg-white p-3">
                <div className="text-xs font-bold text-primary">10개씩 보기</div>
                <UpArrow size={10} color="#911A00" />
              </div>
              <div className="flex items-center gap-4">
                {/* 이전 페이지 */}
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.8252 18.7226L9.17487 12.713L14.8252 6.72266"
                    stroke="#A0A0A0"
                    strokeWidth="1.2"
                  />
                </svg>
                <div className="flex items-center gap-2">
                  {/* 페이지 번호들 */}
                  <div className="flex h-6 w-6 flex-col items-center justify-center gap-2.5 rounded-sm bg-primary">
                    <div className="text-center text-sm font-medium leading-4 text-white">1</div>
                  </div>
                  <div className="flex h-6 w-6 flex-col items-center justify-center gap-2.5">
                    <div className="text-center text-sm font-medium leading-4 text-[#CCBCAB]">2</div>
                  </div>
                  <div className="flex h-6 w-6 flex-col items-center justify-center gap-2.5">
                    <div className="text-center text-sm font-medium leading-4 text-[#CCBCAB]">...</div>
                  </div>
                  <div className="flex h-6 w-6 flex-col items-center justify-center gap-2.5">
                    <div className="text-center text-sm font-medium leading-4 text-[#CCBCAB]">9</div>
                  </div>
                  <div className="flex h-6 w-6 flex-col items-center justify-center gap-2.5">
                    <div className="text-center text-sm font-medium leading-4 text-[#CCBCAB]">10</div>
                  </div>
                </div>
                {/* 다음 페이지 */}
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.1748 18.7226L14.8251 12.713L9.1748 6.72266"
                    stroke="#911A00"
                    strokeWidth="1.2"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
