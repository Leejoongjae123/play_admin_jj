'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import Calendar from '@/components/icons/Calendar';
import Search from '@/components/icons/Search';
import Refresh from '@/components/icons/Refresh';
import Excel from '@/components/icons/Excel';
import UpArrow from '@/components/icons/UpArrow';
import Arrow from '@/components/icons/Arrow';

interface CommunityPost {
  id: number;
  postId: string;
  category: string;
  title: string;
  author: string;
  status: 'exposed' | 'hidden';
  likes: number;
  comments: number;
  reports: number;
  createdAt: string;
  isHighlighted?: boolean;
}

const mockData: CommunityPost[] = [
  {
    id: 12345,
    postId: 'CM00123',
    category: '동료찾기',
    title: '연극 <마타하리> 제작 크루 모집',
    author: '홍길동(user1)',
    status: 'exposed',
    likes: 123,
    comments: 3,
    reports: 2,
    createdAt: '2025-09-05 11:22',
  },
  {
    id: 12345,
    postId: 'CM00123',
    category: '무엇이든 물어보세요',
    title: '연극 <마타하리> 제작 크루 모집',
    author: '홍길동(user1)',
    status: 'exposed',
    likes: 12,
    comments: 23,
    reports: 64,
    createdAt: '2025-09-05 11:22',
    isHighlighted: true,
  },
  // 추가 데이터들...
  ...Array.from({ length: 8 }, (_, index) => ({
    id: 12345,
    postId: 'CM00123',
    category: index % 2 === 0 ? '동료찾기' : index % 3 === 0 ? '거래' : index % 4 === 0 ? '인스크립트 소식' : '작가커뮤니티',
    title: '연극 <마타하리> 제작 크루 모집',
    author: '홍길동(user1)',
    status: index >= 5 ? 'hidden' : 'exposed',
    likes: 123,
    comments: 3,
    reports: 2,
    createdAt: '2025-09-05 11:22',
  }))
] as CommunityPost[];

export default function AdminCommunityPage() {
  const [startDate, setStartDate] = useState('2025-08-08');
  const [endDate, setEndDate] = useState('');
  const [category, setCategory] = useState('전체');
  const [status, setStatus] = useState('전체');
  const [searchType, setSearchType] = useState('제목');
  const [searchQuery, setSearchQuery] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState('10개씩 보기');

  const StatusBadge = ({ status }: { status: string }) => {
    if (status === 'exposed') {
      return (
        <div className="flex justify-center items-center px-3 py-1.5 rounded-full border border-[#B0D5F2] bg-[#F6FBFF]">
          <span className="text-[#2581F9] text-sm font-normal">노출중</span>
        </div>
      );
    }
    return (
      <div className="flex justify-center items-center px-3 py-1.5 rounded-full bg-gray-5">
        <span className="text-gray-1 text-sm font-normal">비공개</span>
      </div>
    );
  };

  return (
    <div className="flex w-full flex-col gap-8 p-11">
      {/* 제목 */}
      <h1 className="text-2xl font-bold text-gray-1">커뮤니티 관리</h1>

      {/* 필터 섹션 */}
      <div className="flex flex-col gap-4 p-8 rounded-lg bg-[#FAF8F6]">
        {/* 첫 번째 행: 가입일, 카테고리, 상태 */}
        <div className="flex items-start gap-6">
          {/* 가입일 */}
          <div className="flex items-center gap-2">
            <span className="text-gray-2 text-base font-bold">가입일</span>
            <div className="flex items-center gap-2.5">
              {/* 시작일 */}
              <div className="flex items-center justify-between w-[140px] px-3 py-3 border border-[#EBEBEB] bg-white rounded-md">
                <span className="text-primary text-xs font-bold">{startDate}</span>
                <Calendar size={12} color="#727272" />
              </div>
              <span className="text-[#727272] text-xs font-bold">-</span>
              {/* 종료일 */}
              <div className="flex items-center justify-between w-[140px] px-3 py-3 border border-[#EBEBEB] bg-white rounded-md">
                <span className="text-[#727272] text-xs font-medium">{endDate || '날짜 입력'}</span>
                <Calendar size={12} color="#727272" />
              </div>
            </div>
          </div>

          {/* 카테고리 */}
          <div className="flex items-center gap-2 flex-1">
            <span className="text-gray-2 text-base font-bold">카테고리</span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center justify-between flex-1 px-3 py-3 border border-[#EBEBEB] bg-white rounded-md">
                  <span className="text-primary text-xs font-bold">{category}</span>
                  <UpArrow size={10} color="#911A00" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setCategory('전체')}>전체</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setCategory('동료찾기')}>동료찾기</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setCategory('거래')}>거래</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setCategory('무엇이든 물어보세요')}>무엇이든 물어보세요</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setCategory('인스크립트 소식')}>인스크립트 소식</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setCategory('작가커뮤니티')}>작가커뮤니티</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* 상태 */}
          <div className="flex items-center gap-2 flex-1">
            <span className="text-gray-2 text-base font-bold">상태</span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center justify-between flex-1 px-3 py-3 border border-[#EBEBEB] bg-white rounded-md">
                  <span className="text-primary text-xs font-bold">{status}</span>
                  <UpArrow size={10} color="#911A00" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setStatus('전체')}>전체</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatus('노출중')}>노출중</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatus('비공개')}>비공개</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* 두 번째 행: 검색 */}
        <div className="flex items-center gap-6">
          {/* 검색 입력 */}
          <div className="flex items-center gap-3 flex-1 px-3 py-3 border border-[#EBEBEB] bg-white rounded-md">
            <div className="flex items-center gap-2">
              <span className="text-primary text-xs font-bold">{searchType}</span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button>
                    <UpArrow size={10} color="#911A00" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setSearchType('제목')}>제목</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSearchType('작성자')}>작성자</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <input
              type="text"
              placeholder="검색조건을 입력해주세요"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 text-xs text-[#727272] placeholder:text-[#727272] outline-none bg-transparent"
            />
          </div>

          {/* 검색/초기화 버튼 */}
          <div className="flex items-center gap-2">
            <button className="flex items-center justify-center gap-2.5 w-[120px] py-3 bg-primary rounded text-white">
              <Search size={16} color="white" />
              <span className="text-base font-bold">검색</span>
            </button>
            <button className="flex items-center justify-center gap-2.5 w-[120px] py-3 border-[1.3px] border-primary bg-white rounded text-primary">
              <Refresh size={16} color="#911A00" />
              <span className="text-base font-bold text-primary">초기화</span>
            </button>
          </div>
        </div>
      </div>

      {/* 결과 정보 및 액션 버튼 */}
      <div className="flex flex-col gap-6">
        <div className="flex items-end justify-between">
          <div className="flex items-center gap-4">
            <p className="text-xl text-gray-3">
              총 <span className="text-primary">12,345</span>건
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-3 px-3 py-2.5 border-[1.6px] border-[#4CA452] bg-white rounded">
              <Excel size={16} color="#4CA452" />
              <span className="text-sm font-bold text-[#4CA452]">엑셀 다운로드</span>
            </button>
            <button className="flex items-center justify-center w-[120px] py-2.5 bg-primary text-white rounded">
              <span className="text-sm font-bold">게시글 등록</span>
            </button>
          </div>
        </div>

        {/* 테이블 */}
        <div className="flex flex-col">
          {/* 테이블 헤더 */}
          <div className="flex items-center h-[50px] px-4 bg-[#EEE] rounded-t">
            <div className="flex items-center justify-center w-[40px] px-2.5">
              <span className="text-xs font-bold text-[#515151]">NO</span>
            </div>
            <div className="flex items-center justify-center w-[60px] px-2.5">
              <span className="text-xs font-bold text-[#515151]">글ID</span>
            </div>
            <div className="flex items-center justify-center w-[100px] px-2.5">
              <span className="text-xs font-bold text-[#515151]">카테고리</span>
            </div>
            <div className="flex items-center justify-center w-[240px] px-2.5">
              <span className="text-xs font-bold text-[#515151]">제목</span>
            </div>
            <div className="flex items-center justify-center w-[88px] px-2.5">
              <span className="text-xs font-bold text-[#515151]">작성자</span>
            </div>
            <div className="flex items-center justify-center w-[100px] px-2.5">
              <span className="text-xs font-bold text-[#515151]">상태</span>
            </div>
            <div className="flex items-center justify-center w-[44px] px-2.5">
              <span className="text-xs font-bold text-[#515151]">좋아요</span>
            </div>
            <div className="flex items-center justify-center w-[44px] px-2.5">
              <span className="text-xs font-bold text-[#515151]">댓글</span>
            </div>
            <div className="flex items-center justify-center w-[44px] px-2.5">
              <span className="text-xs font-bold text-[#515151]">신고</span>
            </div>
            <div className="flex items-center justify-center w-[114px] px-2.5">
              <span className="text-xs font-bold text-[#515151]">작성일시</span>
            </div>
          </div>

          {/* 테이블 바디 */}
          {mockData.map((post, index) => (
            <div
              key={index}
              className={`flex items-center h-[50px] px-4 ${
                post.isHighlighted ? 'bg-[#EBE1DF]' : 'bg-white'
              }`}
            >
              <div className="flex items-center justify-center w-[40px] px-2.5">
                <span className={`text-xs font-medium ${post.isHighlighted ? 'text-primary' : 'text-[#686868]'}`}>
                  {post.id}
                </span>
              </div>
              <div className="flex items-center justify-center w-[60px] px-2.5">
                <span className={`text-xs font-medium ${post.isHighlighted ? 'text-primary' : 'text-[#686868]'}`}>
                  {post.postId}
                </span>
              </div>
              <div className="flex items-center justify-center w-[100px] px-2.5">
                <span className={`text-xs font-medium ${post.isHighlighted ? 'text-primary' : 'text-[#686868]'}`}>
                  {post.category}
                </span>
              </div>
              <div className="flex items-center justify-center w-[240px] px-2.5">
                <span className={`text-xs font-medium ${post.isHighlighted ? 'text-primary' : 'text-[#686868]'}`}>
                  {post.title}
                </span>
              </div>
              <div className="flex items-center justify-center w-[88px] px-2.5">
                <span className={`text-xs font-medium ${post.isHighlighted ? 'text-primary' : 'text-[#686868]'} truncate`}>
                  {post.author}
                </span>
              </div>
              <div className="flex items-center justify-center w-[100px] px-2.5">
                <StatusBadge status={post.status} />
              </div>
              <div className="flex items-center justify-center w-[44px] px-2.5">
                <span className={`text-xs font-medium ${post.isHighlighted ? 'text-primary' : 'text-[#686868]'}`}>
                  {post.likes}
                </span>
              </div>
              <div className="flex items-center justify-center w-[44px] px-2.5">
                <span className={`text-xs font-medium ${post.isHighlighted ? 'text-primary' : 'text-[#686868]'}`}>
                  {post.comments}
                </span>
              </div>
              <div className="flex items-center justify-center w-[44px] px-2.5">
                <span className={`text-xs font-medium ${post.isHighlighted ? 'text-primary' : 'text-[#686868]'}`}>
                  {post.reports}
                </span>
              </div>
              <div className="flex items-center justify-center w-[114px] px-2.5">
                <span className={`text-xs font-medium ${post.isHighlighted ? 'text-primary' : 'text-[#686868]'}`}>
                  {post.createdAt}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 페이지네이션 */}
        <div className="flex items-center justify-between">
          {/* 페이지당 항목 수 */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-3 px-3 py-3 border border-[#EBEBEB] bg-white rounded-md">
                <span className="text-xs font-bold text-primary">{itemsPerPage}</span>
                <UpArrow size={10} color="#911A00" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setItemsPerPage('10개씩 보��')}>10개씩 보기</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setItemsPerPage('20개씩 보기')}>20개씩 보기</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setItemsPerPage('50개씩 보기')}>50개씩 보기</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* 페이지 번호 */}
          <div className="flex items-center gap-4">
            <button>
              <Arrow direction="left" size={24} color="#A0A0A0" />
            </button>
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-6 h-6 bg-primary rounded-sm">
                <span className="text-sm font-medium text-white">1</span>
              </div>
              <div className="flex items-center justify-center w-6 h-6">
                <span className="text-sm font-medium text-[#CCBCAB]">2</span>
              </div>
              <div className="flex items-center justify-center w-6 h-6">
                <span className="text-sm font-medium text-[#CCBCAB]">...</span>
              </div>
              <div className="flex items-center justify-center w-6 h-6">
                <span className="text-sm font-medium text-[#CCBCAB]">9</span>
              </div>
              <div className="flex items-center justify-center w-6 h-6">
                <span className="text-sm font-medium text-[#CCBCAB]">10</span>
              </div>
            </div>
            <button>
              <Arrow direction="right" size={24} color="#911A00" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
