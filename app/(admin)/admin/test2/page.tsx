'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar, Search, RotateCcw, ChevronDown } from 'lucide-react';

export default function AdminTest2Page() {
  const [startDate, setStartDate] = useState('2025-08-08');
  const [endDate, setEndDate] = useState('');
  const [writerType, setWriterType] = useState('writer');
  const [membership, setMembership] = useState('전체');
  const [status, setStatus] = useState('전체');
  const [searchCategory, setSearchCategory] = useState('전체');
  const [searchText, setSearchText] = useState('');

  const membershipOptions = ['전체', '프리미엄', '베이직'];
  const statusOptions = ['전체', '활성', '비활성', '대기'];
  const searchCategoryOptions = ['전체', '이름', '이메일', '전화번호'];

  return (
    <div className="w-full max-w-[1092px] p-8">
      <div className="flex flex-col gap-[18px] rounded-lg bg-[#FAF8F6] p-8">
        {/* First Row */}
        <div className="flex items-center gap-6">
          {/* Join Date */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="text-[16px] font-bold text-[#555]">가입일</span>
              <div className="flex items-center gap-2.5">
                <div className="flex w-[140px] items-center justify-between rounded-md border border-[#EBEBEB] bg-white px-3 py-3">
                  <span className="text-xs font-bold text-primary">{startDate}</span>
                  <Calendar className="h-3 w-3 text-[#727272]" />
                </div>
                <span className="text-xs font-bold text-[#727272]">-</span>
                <div className="flex w-[140px] items-center justify-between rounded-md border border-[#EBEBEB] bg-white px-3 py-3">
                  <span className="text-xs font-normal text-[#727272]">날짜 입력</span>
                  <Calendar className="h-3 w-3 text-[#727272]" />
                </div>
              </div>
            </div>
          </div>

          {/* Writer Type */}
          <div className="flex flex-1 items-center gap-2">
            <span className="text-[16px] font-bold text-[#555]">작가여부</span>
            <RadioGroup
              value={writerType}
              onValueChange={setWriterType}
              className="flex items-center justify-center gap-0"
            >
              <div className="flex items-center gap-2.5 p-2">
                <RadioGroupItem
                  value="writer"
                  className="h-[18px] w-[18px] border-primary text-primary data-[state=checked]:border-primary data-[state=checked]:text-primary"
                />
                <span className="text-sm font-bold text-primary">작가</span>
              </div>
              <div className="flex items-center gap-2.5 p-2">
                <RadioGroupItem
                  value="general"
                  className="h-[18px] w-[18px] border-[#6D6D6D] text-[#6D6D6D] data-[state=checked]:border-[#6D6D6D] data-[state=checked]:text-[#6D6D6D]"
                />
                <span className="text-sm font-bold text-[#6D6D6D]">일반</span>
              </div>
            </RadioGroup>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex items-center gap-6">
          {/* Membership */}
          <div className="flex flex-1 items-center gap-2">
            <span className="text-[16px] font-bold text-[#555]">멤버십</span>
            <Popover>
              <PopoverTrigger asChild>
                <button className="flex flex-1 items-center justify-between rounded-md border border-[#EBEBEB] bg-white px-3 py-3">
                  <span className="text-xs font-bold text-primary">{membership}</span>
                  <ChevronDown className="h-2.5 w-2.5 text-primary" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-full">
                <div className="space-y-2">
                  {membershipOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => setMembership(option)}
                      className="w-full px-3 py-2 text-left text-xs hover:bg-gray-100"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          </div>

          {/* Status */}
          <div className="flex flex-1 items-center gap-2">
            <span className="text-[16px] font-bold text-[#555]">상태</span>
            <Popover>
              <PopoverTrigger asChild>
                <button className="flex flex-1 items-center justify-between rounded-md border border-[#EBEBEB] bg-white px-3 py-3">
                  <span className="text-xs font-bold text-primary">{status}</span>
                  <ChevronDown className="h-2.5 w-2.5 text-primary" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-full">
                <div className="space-y-2">
                  {statusOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => setStatus(option)}
                      className="w-full px-3 py-2 text-left text-xs hover:bg-gray-100"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* Third Row */}
        <div className="flex items-center gap-6">
          {/* Search Input */}
          <div className="flex flex-1 items-center gap-3 rounded-md border border-[#EBEBEB] bg-white px-3 py-3">
            <div className="flex items-center gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <button className="flex items-center gap-2">
                    <span className="text-xs font-bold text-primary">{searchCategory}</span>
                    <ChevronDown className="h-2.5 w-2.5 text-primary" />
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-full">
                  <div className="space-y-2">
                    {searchCategoryOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => setSearchCategory(option)}
                        className="w-full px-3 py-2 text-left text-xs hover:bg-gray-100"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
            </div>
            <input
              type="text"
              placeholder="검색조건을 입력해주세요"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="flex-1 border-none bg-transparent text-xs text-[#727272] placeholder-[#727272] outline-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <Button
              className="flex h-12 w-[120px] items-center justify-center gap-2.5 rounded bg-primary px-0 py-3 text-white hover:bg-primary/90"
              onClick={() => console.log('Search clicked')}
            >
              <Search className="h-4 w-4" />
              <span className="text-base font-bold">검색</span>
            </Button>
            <Button
              variant="outline"
              className="flex h-12 w-[120px] items-center justify-center gap-2.5 rounded border-[1.3px] border-primary bg-transparent px-0 py-3 text-primary hover:bg-primary/5"
              onClick={() => {
                setStartDate('');
                setEndDate('');
                setWriterType('writer');
                setMembership('전체');
                setStatus('전체');
                setSearchCategory('전체');
                setSearchText('');
              }}
            >
              <RotateCcw className="h-4 w-4" />
              <span className="text-base font-bold">초기화</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
