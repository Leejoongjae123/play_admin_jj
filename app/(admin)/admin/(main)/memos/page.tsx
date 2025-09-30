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
import MemoStatusBadge from '@/components/ui/MemoStatusBadge';
import Calendar from '@/components/icons/Calendar';
import Search from '@/components/icons/Search';
import Refresh from '@/components/icons/Refresh';
import Excel from '@/components/icons/Excel';
import UpArrow from '@/components/icons/UpArrow';
import Arrow from '@/components/icons/Arrow';

interface MemoData {
  id: number;
  memoId: string;
  category: string;
  target: string;
  authorId: string;
  content: string;
  likes: number | string;
  comments: number | string;
  reports: number | string;
  status: 'visible' | 'hidden';
  createdAt: string;
  isHighlighted?: boolean;
}

// 샘플 데이터
const sampleData: MemoData[] = [
  {
    id: 12345,
    memoId: 'M00123',
    category: '희곡',
    target: '시골에서의 한 달',
    authorId: '홍길동(user1)',
    content: '이 장면 정말 인상깊어요, 혹시 어떤 내용인지 아시는 분?',
    likes: '-',
    comments: '-',
    reports: '-',
    status: 'visible',
    createdAt: '2025-09-05 11:22',
  },
  {
    id: 12345,
    memoId: 'M00123',
    category: '희곡',
    target: '시골에서의 한 달',
    authorId: '홍길동(user1)',
    content: '이 장면 정말 인상깊어요, 혹시 어떤 내용인지 아시는 분?',
    likes: '-',
    comments: '-',
    reports: '-',
    status: 'visible',
    createdAt: '2025-09-05 11:22',
  },
  {
    id: 12345,
    memoId: 'M00123',
    category: '희곡',
    target: '시골에서의 한 달',
    authorId: '홍길동(user1)',
    content: '이 장면 정말 인상깊어요, 혹시 어떤 내용인지 아시는 분?',
    likes: '-',
    comments: '-',
    reports: '-',
    status: 'visible',
    createdAt: '2025-09-05 11:22',
  },
  {
    id: 12345,
    memoId: 'M00123',
    category: '희곡',
    target: '시골에서의 한 달',
    authorId: '홍길동(user1)',
    content: '이 장면 정말 인상깊어요, 혹시 어떤 내용인지 아시는 분?',
    likes: '-',
    comments: '-',
    reports: '-',
    status: 'visible',
    createdAt: '2025-09-05 11:22',
  },
  {
    id: 12345,
    memoId: 'M00123',
    category: '희곡',
    target: '시골에서의 한 달',
    authorId: '홍길동(user1)',
    content: '이 장면 정말 인상깊어요, 혹시 어떤 내용인지 아시는 분?',
    likes: 12,
    comments: 23,
    reports: 64,
    status: 'hidden',
    createdAt: ']2025-09-05 11:22',
    isHighlighted: true,
  },
  {
    id: 12345,
    memoId: 'M00123',
    category: '작가',
    target: '홍길동',
    authorId: '홍길동(user1)',
    content: '이 장면 정말 인상깊어요, 혹시 어떤 내용인지 아시는 분?',
    likes: 123,
    comments: 123,
    reports: 12,
    status: 'hidden',
    createdAt: '2025-09-05 11:22',
  },
  {
    id: 12345,
    memoId: 'M00123',
    category: '희곡',
    target: '시골에서의 한 달',
    authorId: '홍길동(user1)',
    content: '이 장면 정말 인상깊어요, 혹시 어떤 내용인지 아시는 분?',
    likes: '-',
    comments: '-',
    reports: '-',
    status: 'visible',
    createdAt: '2025-09-05 11:22',
  },
  {
    id: 12345,
    memoId: 'M00123',
    category: '희곡',
    target: '시골에서의 한 달',
    authorId: '홍길동(user1)',
    content: '이 장면 정말 인상깊어요, 혹시 어떤 내용인지 아시는 분?',
    likes: '-',
    comments: '-',
    reports: '-',
    status: 'visible',
    createdAt: '2025-09-05 11:22',
  },
  {
    id: 12345,
    memoId: 'M00123',
    category: '희곡',
    target: '시골에서의 한 달',
    authorId: '홍길동(user1)',
    content: '이 장면 정말 인상깊어요, 혹시 어떤 내용인지 아시는 분?',
    likes: '-',
    comments: '-',
    reports: '-',
    status: 'visible',
    createdAt: '2025-09-05 11:22',
  },
  {
    id: 12345,
    memoId: 'M00123',
    category: '희곡',
    target: '시골에서의 한 달',
    authorId: '홍길동(user1)',
    content: '이 장면 정말 인상깊어요, 혹시 어떤 내용인지 아시는 분?',
    likes: '-',
    comments: '-',
    reports: '-',
    status: 'visible',
    createdAt: '2025-09-05 11:22',
  },
];

export default function AdminMemosPage() {
  const [startDate, setStartDate] = useState('2025-08-08');
  const [endDate, setEndDate] = useState('');
  const [exposureFilter, setExposureFilter] = useState('전체');
  const [statusFilter, setStatusFilter] = useState('전체');
  const [authorFilter, setAuthorFilter] = useState('작성자');
  const [searchTerm, setSearchTerm] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState('10개씩 보기');
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = () => {
    // 검색 로직 구현
    console.log('검색 실행');
  };

  const handleReset = () => {
    setStartDate('');
    setEndDate('');
    setExposureFilter('전체');
    setStatusFilter('전체');
    setAuthorFilter('작성자');
    setSearchTerm('');
  };

  const handleExcelDownload = () => {
    // 엑셀 다운로드 로직 구현
    console.log('엑셀 다운로드');
  };

  const handlePlayRegister = () => {
    // 희곡 등록 로직 구현
    console.log('희곡 등록');
  };

  return (
    <div className="flex w-full flex-col items-center gap-[34px] p-11">
      {/* 페이지 제목 */}
      <div className="w-full">
        <h1 className="font-pretendard text-2xl font-bold leading-8 text-gray-1">메모 관리</h1>
      </div>

      {/* 필터 섹션 */}
      <div className="flex w-full flex-col items-start gap-[18px] rounded-lg bg-[#FAF8F6] p-8">
        {/* 첫 번째 행: 가입일, 노출���부, 상태 */}
        <div className="flex w-full items-start gap-6">
          {/* 가입일 */}
          <div className="flex items-center gap-2">
            <span className="font-pretendard text-base font-bold text-gray-2">가입일</span>
            <div className="flex w-[306px] items-center gap-[10px]">
              <div className="flex h-12 w-[140px] items-center justify-between rounded-md border border-[#EBEBEB] bg-white px-3">
                <span className="font-pretendard text-xs font-bold text-primary">
                  {startDate || '날짜 입력'}
                </span>
                <Calendar size={12} color="#727272" />
              </div>
              <span className="font-pretendard text-xs font-bold text-[#727272]">-</span>
              <div className="flex h-12 w-[140px] items-center justify-between rounded-md border border-[#EBEBEB] bg-white px-3">
                <span className="font-pretendard text-xs font-medium text-[#727272]">
                  {endDate || '날짜 입력'}
                </span>
                <Calendar size={12} color="#727272" />
              </div>
            </div>
          </div>

          {/* 노출여부 */}
          <div className="flex flex-1 items-center gap-2">
            <span className="font-pretendard text-base font-bold text-gray-2">노출여부</span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex flex-1 cursor-pointer items-center justify-between rounded-md border border-[#EBEBEB] bg-white px-3 py-3">
                  <span className="font-pretendard text-xs font-bold text-primary">
                    {exposureFilter}
                  </span>
                  <UpArrow size={10} color="#911A00" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setExposureFilter('전체')}>전체</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setExposureFilter('노출중')}>
                  노출중
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setExposureFilter('비공개')}>
                  비공개
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* 상태 */}
          <div className="flex flex-1 items-center gap-2">
            <span className="font-pretendard text-base font-bold text-gray-2">상태</span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex flex-1 cursor-pointer items-center justify-between rounded-md border border-[#EBEBEB] bg-white px-3 py-3">
                  <span className="font-pretendard text-xs font-bold text-primary">
                    {statusFilter}
                  </span>
                  <UpArrow size={10} color="#911A00" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setStatusFilter('전체')}>전체</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatusFilter('정상')}>정상</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatusFilter('신고됨')}>신고됨</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* 두 번째 행: 검색 */}
        <div className="flex w-full items-center gap-6">
          <div className="flex flex-1 items-center gap-3 rounded-md border border-[#EBEBEB] bg-white px-3 py-3">
            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex cursor-pointer items-center gap-2">
                    <span className="font-pretendard text-xs font-bold text-primary">
                      {authorFilter}
                    </span>
                    <UpArrow size={10} color="#911A00" />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setAuthorFilter('작성자')}>작성자</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setAuthorFilter('제목')}>제목</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setAuthorFilter('내용')}>내용</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <input
              type="text"
              placeholder="검색조건을 입력해주세요"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 bg-transparent font-pretendard text-xs font-medium text-[#727272] outline-none placeholder:text-[#727272]"
            />
          </div>

          <div className="flex items-center gap-2">
            <Button
              onClick={handleSearch}
              className="flex h-12 w-[120px] items-center justify-center gap-[10px] rounded bg-primary px-0 py-3"
            >
              <Search size={16} color="white" />
              <span className="font-pretendard text-base font-bold text-white">검색</span>
            </Button>
            <Button
              onClick={handleReset}
              variant="outline"
              className="flex h-12 w-[120px] items-center justify-center gap-[10px] rounded border-[1.3px] border-primary bg-white px-0 py-3"
            >
              <Refresh size={16} color="#911A00" />
              <span className="font-pretendard text-base font-bold text-primary">초기화</span>
            </Button>
          </div>
        </div>
      </div>

      {/* 결과 및 액션 버튼 */}
      <div className="flex w-full flex-col items-center gap-6">
        <div className="flex w-full flex-col items-end gap-4">
          <div className="flex w-full items-center justify-between">
            <div className="font-pretendard text-xl leading-6 tracking-[-0.4px]">
              <span className="text-[#6D6D6D]">총 </span>
              <span className="text-primary">12,345</span>
              <span className="text-[#6D6D6D]">명</span>
            </div>
            <div className="flex items-center gap-3">
              <Button
                onClick={handleExcelDownload}
                variant="outline"
                className="flex items-center gap-3 rounded border-[1.6px] border-[#4CA452] bg-white px-3 py-2.5"
              >
                <Excel size={16} color="#4CA452" />
                <span className="font-pretendard text-sm font-bold leading-4 tracking-[-0.28px] text-[#4CA452]">
                  엑셀 다운로드
                </span>
              </Button>
              <Button
                onClick={handlePlayRegister}
                className="flex h-12 w-[120px] items-center justify-center gap-[10px] rounded bg-primary px-0 py-2.5"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_861_7463)">
                    <path
                      d="M3.67709 12.9727H15V0.972656H3.64584C3.14353 0.974271 2.66225 1.17453 2.30706 1.52972C1.95187 1.88491 1.75162 2.36619 1.75 2.8685V13.918H1.75034C1.75034 13.9227 1.75 13.9273 1.75 13.9321C1.75 15.0384 2.61819 15.9727 3.64584 15.9727H15V14.9727H3.64584C3.177 14.9727 2.75 14.4767 2.75 13.932C2.75 13.412 3.17453 12.9727 3.67709 12.9727ZM11.75 1.98306V7.38356L10.2375 6.05575L8.75 7.37578V1.98306H11.75ZM7.75 1.97266V8.72266H8.73878L10.2411 7.38956L11.7595 8.72266H12.75V1.97266H14V11.9727H4.7525L4.75 1.97266H7.75ZM3.64584 1.97266H3.75L3.75237 11.9727H3.67697C3.35181 11.9727 3.0323 12.0576 2.75 12.219V2.87631C2.74924 2.63777 2.84312 2.40866 3.01107 2.23925C3.17901 2.06984 3.4073 1.97396 3.64584 1.97266Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_861_7463">
                      <rect width="16" height="16" fill="white" transform="translate(0.5 0.472656)" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="font-pretendard text-sm font-bold leading-4 tracking-[-0.28px] text-white">
                  희곡 등록
                </span>
              </Button>
            </div>
          </div>

          {/* 테이블 */}
          <div className="flex w-full flex-col items-start gap-6">
            <div className="flex w-full flex-col items-start">
              {/* 테이블 헤더 */}
              <div className="flex h-[50px] w-full items-center justify-between rounded-sm bg-[#EEE] px-4">
                <div className="flex w-10 items-center justify-center px-2.5 py-4">
                  <span className="font-pretendard text-xs font-bold text-[#515151]">NO</span>
                </div>
                <div className="flex w-[60px] items-center justify-center px-2.5 py-4">
                  <span className="font-pretendard text-xs font-bold text-[#515151]">메모ID</span>
                </div>
                <div className="flex w-11 items-center justify-center px-2.5 py-4">
                  <span className="font-pretendard text-xs font-bold text-[#515151]">구분</span>
                </div>
                <div className="flex w-[100px] items-center justify-center px-2.5 py-4">
                  <span className="font-pretendard text-xs font-bold text-[#515151]">대상</span>
                </div>
                <div className="flex w-[88px] items-center justify-center px-2.5 py-4">
                  <span className="font-pretendard text-xs font-bold text-[#515151]">작성자(ID)</span>
                </div>
                <div className="flex w-[160px] items-center justify-center px-2.5 py-4">
                  <span className="font-pretendard text-xs font-bold text-[#515151]">메모내용 (요약)</span>
                </div>
                <div className="flex w-11 items-center justify-center px-2.5 py-4">
                  <span className="font-pretendard text-xs font-bold text-[#515151]">좋아요</span>
                </div>
                <div className="flex w-11 items-center justify-center px-2.5 py-4">
                  <span className="font-pretendard text-xs font-bold text-[#515151]">댓글</span>
                </div>
                <div className="flex w-11 items-center justify-center px-2.5 py-4">
                  <span className="font-pretendard text-xs font-bold text-[#515151]">신고</span>
                </div>
                <div className="flex w-[100px] items-center justify-center px-2.5 py-4">
                  <span className="font-pretendard text-xs font-bold text-[#515151]">상태</span>
                </div>
                <div className="flex w-[114px] items-center justify-center px-2.5 py-4">
                  <span className="font-pretendard text-xs font-bold text-[#515151]">등록일시</span>
                </div>
              </div>

              {/* 테이블 데이터 */}
              {sampleData.map((memo, index) => (
                <div
                  key={index}
                  className={`flex h-[50px] w-full items-center justify-between px-4 ${
                    memo.isHighlighted ? 'rounded-sm bg-[#EBE1DF]' : ''
                  }`}
                >
                  <div className="flex w-10 items-center justify-center px-2.5 py-4">
                    <span
                      className={`font-pretendard text-xs font-medium ${
                        memo.isHighlighted ? 'text-primary' : 'text-[#686868]'
                      }`}
                    >
                      {memo.id}
                    </span>
                  </div>
                  <div className="flex w-[60px] items-center justify-center px-2.5 py-4">
                    <span
                      className={`font-pretendard text-xs font-medium ${
                        memo.isHighlighted ? 'text-primary' : 'text-[#686868]'
                      }`}
                    >
                      {memo.memoId}
                    </span>
                  </div>
                  <div className="flex w-11 items-center justify-center px-2.5 py-4">
                    <span
                      className={`font-pretendard text-xs font-medium ${
                        memo.isHighlighted ? 'text-primary' : 'text-[#686868]'
                      }`}
                    >
                      {memo.category}
                    </span>
                  </div>
                  <div className="flex w-[100px] items-center justify-center px-2.5 py-4">
                    <span
                      className={`font-pretendard text-xs font-medium ${
                        memo.isHighlighted ? 'text-primary' : 'text-[#686868]'
                      }`}
                    >
                      {memo.target}
                    </span>
                  </div>
                  <div className="flex w-[88px] items-center justify-center px-2.5 py-4">
                    <span
                      className={`font-pretendard text-xs font-medium ${
                        memo.isHighlighted ? 'text-primary' : 'text-[#686868]'
                      } overflow-hidden text-ellipsis whitespace-nowrap`}
                    >
                      {memo.authorId}
                    </span>
                  </div>
                  <div className="flex w-[160px] items-center justify-center px-2.5 py-4">
                    <span
                      className={`font-pretendard text-xs font-medium ${
                        memo.isHighlighted ? 'text-primary' : 'text-[#686868]'
                      } overflow-hidden text-ellipsis whitespace-nowrap`}
                    >
                      {memo.content}
                    </span>
                  </div>
                  <div className="flex w-11 items-center justify-center px-2.5 py-4">
                    <span
                      className={`font-pretendard text-xs font-medium ${
                        memo.isHighlighted ? 'text-primary' : 'text-[#686868]'
                      }`}
                    >
                      {memo.likes}
                    </span>
                  </div>
                  <div className="flex w-11 items-center justify-center px-2.5 py-4">
                    <span
                      className={`font-pretendard text-xs font-medium ${
                        memo.isHighlighted ? 'text-primary' : 'text-[#686868]'
                      }`}
                    >
                      {memo.comments}
                    </span>
                  </div>
                  <div className="flex w-11 items-center justify-center px-2.5 py-4">
                    <span
                      className={`font-pretendard text-xs font-medium ${
                        memo.isHighlighted ? 'text-primary' : 'text-[#686868]'
                      }`}
                    >
                      {memo.reports}
                    </span>
                  </div>
                  <div className="flex w-[100px] items-center justify-center px-2.5 py-0">
                    <MemoStatusBadge status={memo.status} />
                  </div>
                  <div className="flex w-[114px] items-center justify-center px-2.5 py-4">
                    <span
                      className={`font-pretendard text-xs font-medium ${
                        memo.isHighlighted ? 'text-primary' : 'text-[#686868]'
                      }`}
                    >
                      {memo.createdAt}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* 페이지네이션 */}
            <div className="flex w-full items-center justify-between">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex cursor-pointer items-center gap-3 rounded-md border border-[#EBEBEB] bg-white px-3 py-3">
                    <span className="font-pretendard text-xs font-bold text-primary">
                      {itemsPerPage}
                    </span>
                    <UpArrow size={10} color="#911A00" />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setItemsPerPage('10개씩 보기')}>
                    10개씩 보기
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setItemsPerPage('20개씩 보기')}>
                    20개씩 보기
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setItemsPerPage('50개씩 보기')}>
                    50개씩 보기
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <div className="flex items-center gap-4">
                <button onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}>
                  <Arrow direction="left" size={24} color="#A0A0A0" />
                </button>
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-sm bg-primary">
                    <span className="font-pretendard text-sm font-medium text-white">1</span>
                  </div>
                  <div className="flex h-6 w-6 items-center justify-center">
                    <span className="font-pretendard text-sm font-medium text-[#CCBCAB]">2</span>
                  </div>
                  <div className="flex h-6 w-6 items-center justify-center">
                    <span className="font-pretendard text-sm font-medium text-[#CCBCAB]">...</span>
                  </div>
                  <div className="flex h-6 w-6 items-center justify-center">
                    <span className="font-pretendard text-sm font-medium text-[#CCBCAB]">9</span>
                  </div>
                  <div className="flex h-6 w-6 items-center justify-center">
                    <span className="font-pretendard text-sm font-medium text-[#CCBCAB]">10</span>
                  </div>
                </div>
                <button onClick={() => setCurrentPage(currentPage + 1)}>
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
