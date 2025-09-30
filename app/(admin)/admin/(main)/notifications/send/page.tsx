'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import DatePicker from '@/components/ui/date-picker';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Search, Refresh, Excel, UpArrow, Arrow } from '@/components/icons';

// 알림 데이터 타입
interface NotificationData {
  no: number;
  id: string;
  type: string;
  content: string;
  sender: string;
  status: string;
  createdAt: string;
  state: string;
  successFail: string;
}

// 샘플 데이터
const mockData: NotificationData[] = Array.from({ length: 12 }, (_, index) => ({
  no: 12345,
  id: 'CM00123',
  type: index === 1 ? '무엇이든 물어보세요' : '프로그램',
  content: index === 1 ? '내 게시글에 댓글 알림' : '신규 프로그램 등록 알림',
  sender: 'system',
  status: '노출중',
  createdAt: '2025-09-05 11:22',
  state: index === 1 ? '12' : '발송중',
  successFail: index === 1 ? '20/20' : '1200/-',
}));

export default function AdminNotificationsSendPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('전체');
  const [startDate, setStartDate] = useState('2025-08-08');
  const [endDate, setEndDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const totalItems = 12345;

  const handleSearch = () => {
    console.log('검색 실행');
  };

  const handleReset = () => {
    setSearchQuery('');
    setSelectedType('전체');
    setStartDate('');
    setEndDate('');
  };

  const handleExcelDownload = () => {
    console.log('엑셀 다운로드');
  };

  const handleRegister = () => {
    console.log('커뮤니티 등록');
  };

  return (
    <div className="flex w-full flex-col items-center gap-[34px] p-11">
      {/* 페이지 제목 */}
      <h1 className="self-stretch text-2xl font-bold leading-8 text-gray-1">
        시스템 알림 발송
      </h1>

      {/* 필터 섹션 */}
      <div className="flex w-full flex-col items-start gap-[18px] rounded-lg bg-[#FAF8F6] p-8">
        <div className="flex w-full items-start gap-6">
          {/* 가입일 */}
          <div className="flex items-center gap-2">
            <span className="text-base font-bold text-gray-2">가입일</span>
            <div className="flex w-[306px] items-center gap-[10px]">
              <DatePicker
                value={startDate}
                onChange={setStartDate}
                className="w-[140px]"
              />
              <span className="text-xs font-bold text-gray-4">-</span>
              <DatePicker
                value={endDate}
                onChange={setEndDate}
                placeholder="날짜 입력"
                className="w-[140px]"
              />
            </div>
          </div>

          {/* 유형 */}
          <div className="flex flex-1 items-center gap-2">
            <span className="text-base font-bold text-gray-2">유형</span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex flex-1 items-center justify-between rounded-md border border-[#EBEBEB] bg-white px-3 py-3">
                  <span className="text-xs font-bold text-primary">{selectedType}</span>
                  <UpArrow size={10} color="#911A00" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full">
                <DropdownMenuItem onClick={() => setSelectedType('전체')}>
                  전체
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedType('프로그램')}>
                  프로그램
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedType('댓글')}>
                  댓글
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* 검색 영역 */}
        <div className="flex w-full items-center gap-6">
          <div className="flex flex-1 items-center gap-3 rounded-md border border-[#EBEBEB] bg-white px-3 py-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-primary">내용</span>
              <UpArrow size={10} color="#911A00" />
            </div>
            <input
              type="text"
              placeholder="검색조건을 입력해주세요"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 text-xs font-normal text-gray-4 outline-none placeholder:text-gray-4"
            />
          </div>
          <div className="flex items-center gap-2">
            <Button
              onClick={handleSearch}
              className="flex h-12 w-[120px] items-center justify-center gap-[10px] rounded bg-primary px-0 py-3"
            >
              <Search size={16} color="white" />
              <span className="text-base font-bold text-white">검색</span>
            </Button>
            <Button
              onClick={handleReset}
              variant="outline"
              className="flex h-12 w-[120px] items-center justify-center gap-[10px] rounded border-[1.3px] border-primary bg-white px-0 py-3"
            >
              <Refresh size={16} color="#911A00" />
              <span className="text-base font-bold text-primary">초기화</span>
            </Button>
          </div>
        </div>
      </div>

      {/* 결과 섹션 */}
      <div className="flex w-full flex-col items-center gap-6">
        <div className="flex w-full flex-col items-end gap-4">
          {/* 상단 툴바 */}
          <div className="flex w-full items-center justify-between">
            <div className="text-xl font-normal text-gray-3">
              총 <span className="text-primary">{totalItems.toLocaleString()}</span>건
            </div>
            <div className="flex items-center gap-3">
              <Button
                onClick={handleExcelDownload}
                variant="outline"
                className="flex items-center gap-3 rounded border-[1.6px] border-[#4CA452] bg-white px-3 py-[10px]"
              >
                <Excel size={16} color="#4CA452" />
                <span className="text-sm font-bold text-[#4CA452]">엑셀 다���로드</span>
              </Button>
              <Button
                onClick={handleRegister}
                className="flex h-10 w-[120px] items-center justify-center rounded bg-primary px-0 py-[10px]"
              >
                <span className="text-sm font-bold text-white">커뮤니티 등록</span>
              </Button>
            </div>
          </div>

          {/* 테이블 */}
          <div className="flex w-full flex-col">
            {/* 테이블 헤더 */}
            <div className="flex h-[50px] items-center justify-between rounded-sm bg-[#EEE] px-4">
              <div className="flex w-10 justify-center">
                <span className="text-xs font-bold text-[#515151]">NO</span>
              </div>
              <div className="flex w-[60px] justify-center">
                <span className="text-xs font-bold text-[#515151]">알림ID</span>
              </div>
              <div className="flex w-[100px] justify-center">
                <span className="text-xs font-bold text-[#515151]">유형</span>
              </div>
              <div className="flex w-[240px] justify-center">
                <span className="text-xs font-bold text-[#515151]">내용</span>
              </div>
              <div className="flex w-[88px] justify-center">
                <span className="text-xs font-bold text-[#515151]">발신자</span>
              </div>
              <div className="flex w-[100px] justify-center">
                <span className="text-xs font-bold text-[#515151]">상태</span>
              </div>
              <div className="flex w-[114px] justify-center">
                <span className="text-xs font-bold text-[#515151]">작성일시</span>
              </div>
              <div className="flex w-[60px] justify-center">
                <span className="text-xs font-bold text-[#515151]">상태</span>
              </div>
              <div className="flex w-[60px] justify-center">
                <span className="text-xs font-bold text-[#515151]">성공/실패</span>
              </div>
            </div>

            {/* 테이블 데이터 */}
            {mockData.map((item, index) => (
              <div
                key={index}
                className={`flex h-[50px] items-center justify-between px-4 ${
                  index === 1 ? 'rounded-sm bg-[#EBE1DF]' : ''
                }`}
              >
                <div className="flex w-10 justify-center">
                  <span className={`text-xs font-normal ${index === 1 ? 'text-primary' : 'text-[#686868]'}`}>
                    {item.no}
                  </span>
                </div>
                <div className="flex w-[60px] justify-center">
                  <span className={`text-xs font-normal ${index === 1 ? 'text-primary' : 'text-[#686868]'}`}>
                    {item.id}
                  </span>
                </div>
                <div className="flex w-[100px] justify-center">
                  <span className={`text-xs font-normal ${index === 1 ? 'text-primary' : 'text-[#686868]'}`}>
                    {item.type}
                  </span>
                </div>
                <div className="flex w-[240px] justify-center">
                  <span className={`text-xs font-normal ${index === 1 ? 'text-primary' : 'text-[#686868]'}`}>
                    {item.content}
                  </span>
                </div>
                <div className="flex w-[88px] justify-center">
                  <span className={`text-xs font-normal ${index === 1 ? 'text-primary' : 'text-[#686868]'}`}>
                    {item.sender}
                  </span>
                </div>
                <div className="flex w-[100px] justify-center">
                  <Badge className="rounded-full border border-[#B0D5F2] bg-[#F6FBFF] px-3 py-[6px] text-sm font-normal text-[#2581F9]">
                    {item.status}
                  </Badge>
                </div>
                <div className="flex w-[114px] justify-center">
                  <span className={`text-xs font-normal ${index === 1 ? 'text-primary' : 'text-[#686868]'}`}>
                    {item.createdAt}
                  </span>
                </div>
                <div className="flex w-[60px] justify-center">
                  <span className={`text-xs font-normal ${index === 1 ? 'text-primary' : 'text-[#686868]'}`}>
                    {item.state}
                  </span>
                </div>
                <div className="flex w-[60px] justify-center">
                  <span className={`text-xs font-normal ${index === 1 ? 'text-primary' : 'text-[#686868]'}`}>
                    {item.successFail}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* 페이지네이션 */}
          <div className="flex w-full items-center justify-between">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-3 rounded-md border border-[#EBEBEB] bg-white px-3 py-3">
                  <span className="text-xs font-bold text-primary">{itemsPerPage}개씩 보기</span>
                  <UpArrow size={10} color="#911A00" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setItemsPerPage(10)}>
                  10개씩 보기
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setItemsPerPage(20)}>
                  20개씩 보기
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setItemsPerPage(50)}>
                  50개씩 보기
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="flex items-center gap-4">
              <Arrow size={24} color="#A0A0A0" direction="left" />
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-sm bg-primary">
                  <span className="text-sm font-normal text-white">1</span>
                </div>
                <div className="flex h-6 w-6 items-center justify-center">
                  <span className="text-sm font-normal text-[#CCBCAB]">2</span>
                </div>
                <div className="flex h-6 w-6 items-center justify-center">
                  <span className="text-sm font-normal text-[#CCBCAB]">...</span>
                </div>
                <div className="flex h-6 w-6 items-center justify-center">
                  <span className="text-sm font-normal text-[#CCBCAB]">9</span>
                </div>
                <div className="flex h-6 w-6 items-center justify-center">
                  <span className="text-sm font-normal text-[#CCBCAB]">10</span>
                </div>
              </div>
              <Arrow size={24} color="#911A00" direction="right" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
