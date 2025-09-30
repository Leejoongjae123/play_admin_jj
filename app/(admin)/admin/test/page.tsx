"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import ChevronDown from "@/components/icons/ChevronDown";
import Search from "@/components/icons/Search";
import Close from "@/components/icons/Close";

const DateIcon = () => (
  <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 2H9V1C9 0.4 8.6 0 8 0C7.4 0 7 0.4 7 1V2H5V1C5 0.4 4.6 0 4 0C3.4 0 3 0.4 3 1V2H2C0.9 2 0 2.9 0 4V12C0 13.1 0.9 14 2 14H10C11.1 14 12 13.1 12 12V4C12 2.9 11.1 2 10 2ZM10 12H2V6H10V12Z" fill="currentColor"/>
  </svg>
);

export default function AdminTestPage() {
  const [writerStatus, setWriterStatus] = React.useState("writer");
  const [membershipOpen, setMembershipOpen] = React.useState(false);
  const [statusOpen, setStatusOpen] = React.useState(false);
  const [searchCategoryOpen, setSearchCategoryOpen] = React.useState(false);

  return (
    <div className="p-8 rounded-lg bg-gray-6 max-md:px-5">
      <div className="flex flex-wrap gap-6 items-center w-full max-md:max-w-full">
        {/* 가입일 */}
        <div className="flex gap-2 items-center self-stretch my-auto font-semibold min-w-60">
          <div className="self-stretch my-auto text-base text-gray-3">
            가입일
          </div>
          <div className="flex overflow-hidden gap-2.5 items-center self-stretch my-auto text-xs rounded-md min-w-60 text-gray-4 w-[306px]">
            <div className="flex overflow-hidden gap-8 justify-between items-center self-stretch p-3 my-auto text-primary whitespace-nowrap bg-white rounded-md border border-gray-5 border-solid w-[140px]">
              <div className="self-stretch my-auto text-primary">
                2025-08-08
              </div>
              <DateIcon />
            </div>
            <div className="self-stretch my-auto text-center">
              -
            </div>
            <div className="flex overflow-hidden gap-10 justify-between items-center self-stretch p-3 my-auto font-medium bg-white rounded-md border border-gray-5 border-solid w-[140px]">
              <div className="self-stretch my-auto">날짜 입력</div>
              <DateIcon />
            </div>
          </div>
        </div>

        {/* 작가여부 */}
        <div className="flex flex-1 shrink gap-2 items-center self-stretch my-auto basis-0">
          <div className="self-stretch my-auto text-base font-semibold text-gray-3">
            작가여부
          </div>
          <div className="flex justify-center items-center self-stretch my-auto">
            <RadioGroup
              value={writerStatus}
              onValueChange={setWriterStatus}
              className="flex gap-0"
            >
              <div className="flex gap-2.5 justify-center items-center self-stretch p-2 my-auto">
                <RadioGroupItem
                  value="writer"
                  className="w-[18px] h-[18px] border-2 border-primary data-[state=checked]:text-primary"
                />
                <label className="text-sm font-semibold tracking-tight leading-none text-primary cursor-pointer">
                  작가
                </label>
              </div>
              <div className="flex gap-2.5 justify-center items-center self-stretch p-2 my-auto text-sm font-semibold tracking-tight leading-none whitespace-nowrap text-gray-4">
                <RadioGroupItem
                  value="general"
                  className="w-[18px] h-[18px] border-[1.6px] border-gray-4 data-[state=checked]:text-gray-4"
                />
                <label className="self-stretch my-auto text-gray-4 cursor-pointer">
                  일반
                </label>
              </div>
            </RadioGroup>
          </div>
        </div>

        {/* 멤버십 */}
        <div className="flex flex-1 shrink gap-2 items-center self-stretch my-auto whitespace-nowrap basis-0">
          <div className="self-stretch my-auto text-base font-semibold text-gray-3">
            멤버십
          </div>
          <Popover open={membershipOpen} onOpenChange={setMembershipOpen}>
            <PopoverTrigger asChild>
              <div className="flex flex-1 shrink gap-10 justify-between items-center self-stretch p-3 my-auto text-xs font-bold text-primary bg-white rounded-md border border-gray-5 border-solid basis-0 cursor-pointer">
                <div className="self-stretch my-auto text-primary">전체</div>
                <ChevronDown size={10} className={`transition-transform ${membershipOpen ? 'rotate-180' : ''}`} />
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-2">
              <div className="space-y-1">
                <div className="px-3 py-2 text-xs font-bold text-primary cursor-pointer hover:bg-gray-6">전체</div>
                <div className="px-3 py-2 text-xs font-medium text-gray-3 cursor-pointer hover:bg-gray-6">프리미엄</div>
                <div className="px-3 py-2 text-xs font-medium text-gray-3 cursor-pointer hover:bg-gray-6">기본</div>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {/* 상태 */}
        <div className="flex flex-1 shrink gap-2 items-center self-stretch my-auto whitespace-nowrap basis-0">
          <div className="self-stretch my-auto text-base font-semibold text-gray-3">
            상태
          </div>
          <Popover open={statusOpen} onOpenChange={setStatusOpen}>
            <PopoverTrigger asChild>
              <div className="flex flex-1 shrink gap-10 justify-between items-center self-stretch p-3 my-auto text-xs font-bold text-primary bg-white rounded-md border border-gray-5 border-solid basis-0 cursor-pointer">
                <div className="self-stretch my-auto text-primary">전체</div>
                <ChevronDown size={10} className={`transition-transform ${statusOpen ? 'rotate-180' : ''}`} />
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-2">
              <div className="space-y-1">
                <div className="px-3 py-2 text-xs font-bold text-primary cursor-pointer hover:bg-gray-6">전체</div>
                <div className="px-3 py-2 text-xs font-medium text-gray-3 cursor-pointer hover:bg-gray-6">활성</div>
                <div className="px-3 py-2 text-xs font-medium text-gray-3 cursor-pointer hover:bg-gray-6">비활성</div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* 검색 영역 */}
      <div className="flex flex-wrap gap-6 mt-5 w-full max-md:max-w-full">
        <div className="flex flex-wrap flex-1 shrink gap-3 items-center p-3 h-full text-xs bg-white rounded-md border border-gray-5 border-solid basis-0 min-w-60 max-md:max-w-full">
          <Popover open={searchCategoryOpen} onOpenChange={setSearchCategoryOpen}>
            <PopoverTrigger asChild>
              <div className="flex gap-2 items-center self-stretch my-auto font-bold text-primary whitespace-nowrap cursor-pointer">
                <div className="self-stretch my-auto text-primary">전체</div>
                <Close size={10} className={`transition-transform ${searchCategoryOpen ? 'rotate-45' : ''}`} />
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-2">
              <div className="space-y-1">
                <div className="px-3 py-2 text-xs font-bold text-primary cursor-pointer hover:bg-gray-6">전체</div>
                <div className="px-3 py-2 text-xs font-medium text-gray-3 cursor-pointer hover:bg-gray-6">이름</div>
                <div className="px-3 py-2 text-xs font-medium text-gray-3 cursor-pointer hover:bg-gray-6">이메일</div>
              </div>
            </PopoverContent>
          </Popover>
          <input
            type="text"
            placeholder="검색조건을 입력해주세요"
            className="flex-1 font-medium text-gray-4 bg-transparent border-none outline-none placeholder:text-gray-4"
          />
        </div>

        <div className="flex gap-2 items-center my-auto text-base font-semibold whitespace-nowrap min-w-60">
          <Button
            className="flex overflow-hidden gap-2.5 justify-center items-center self-stretch py-3 my-auto text-white bg-primary rounded w-[120px] h-auto px-4 hover:bg-primary/90"
          >
            <Search size={16} color="white" />
            <span>검색</span>
          </Button>
          <Button
            variant="outline"
            className="flex overflow-hidden gap-2.5 justify-center items-center self-stretch py-3 my-auto text-primary rounded border-primary border-solid border-[1.3px] w-[120px] h-auto px-4 bg-transparent hover:bg-primary/5"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.6 2.4L10.4 2.4C10.4 1.52 9.68 0.8 8.8 0.8L7.2 0.8C6.32 0.8 5.6 1.52 5.6 2.4L2.4 2.4C1.96 2.4 1.6 2.76 1.6 3.2C1.6 3.64 1.96 4 2.4 4L3.2 4L3.2 12.8C3.2 13.68 3.92 14.4 4.8 14.4L11.2 14.4C12.08 14.4 12.8 13.68 12.8 12.8L12.8 4L13.6 4C14.04 4 14.4 3.64 14.4 3.2C14.4 2.76 14.04 2.4 13.6 2.4ZM7.2 2.4L8.8 2.4L8.8 2.4L7.2 2.4ZM11.2 12.8L4.8 12.8L4.8 4L11.2 4L11.2 12.8Z" fill="currentColor"/>
            </svg>
            <span>초기화</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
