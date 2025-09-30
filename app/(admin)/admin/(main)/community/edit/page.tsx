'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ChevronDownIcon } from 'lucide-react';

export default function CommunityEditPage() {
  const [selectedBoard, setSelectedBoard] = useState('게시판을 선택해주세요');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [visibility, setVisibility] = useState('show');

  const handleSave = () => {
    // 저장 로직 구현
    console.log({ selectedBoard, title, content, visibility });
  };

  const handleCancel = () => {
    // 취소 로직 구현
    window.history.back();
  };

  return (
    <div className="flex w-full justify-center p-8">
      <div className="flex w-full max-w-[1180px] flex-col items-center gap-20 rounded-[5px] bg-white p-11">
        {/* 헤더 */}
        <div className="flex w-full flex-col gap-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-1">커뮤니티 등록 및 수정</h1>
          </div>

          {/* 게시판 선택 드롭다운 */}
          <div className="flex w-full">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex w-full cursor-pointer items-center justify-between rounded-[4px] border border-red-3 bg-orange-4 px-5 py-4">
                  <span 
                    className={`text-base leading-6 ${
                      selectedBoard === '게시판을 선택해주세요' 
                        ? 'text-orange-3' 
                        : 'text-gray-1'
                    }`}
                  >
                    {selectedBoard}
                  </span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.1719 17.0336C11.5685 17.6198 12.4318 17.6198 12.8284 17.0336L19.9905 6.44734C20.4398 5.78326 19.964 4.88699 19.1622 4.88699H4.83802C4.03624 4.88699 3.56048 5.78326 4.00976 6.44734L11.1719 17.0336Z"
                      fill="#911A00"
                    />
                  </svg>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full min-w-[1072px]">
                <DropdownMenuItem onClick={() => setSelectedBoard('동료찾기')}>
                  동료찾기
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedBoard('거래')}>
                  거래
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedBoard('무엇이든 물어보세요')}>
                  무엇이든 물어보세요
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedBoard('인스크립트 소식')}>
                  인스크립트 소식
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedBoard('작가커뮤니티')}>
                  작가커뮤니티
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* 제목 입력 */}
          <div className="flex h-14 w-full">
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목을 입력해주세요"
              className="h-14 rounded-[4px] border border-red-3 bg-orange-4 px-5 py-4 text-base placeholder:text-orange-3"
            />
          </div>

          {/* 리치 텍스트 에디터 */}
          <div className="flex h-[263px] w-full flex-col gap-5 rounded-[4px] border border-red-3 bg-orange-4 p-5">
            {/* 에디터 툴바 */}
            <div className="flex items-center gap-4">
              {/* 헤딩 드롭다운 */}
              <div className="flex items-center gap-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div className="flex cursor-pointer items-center gap-4">
                      <span className="text-base leading-6 text-primary">Heading</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.6673 6L8.00065 10.6667L3.33398 6"
                          stroke="#911A00"
                          strokeWidth="1.6"
                          strokeLinecap="square"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Heading 1</DropdownMenuItem>
                    <DropdownMenuItem>Heading 2</DropdownMenuItem>
                    <DropdownMenuItem>Heading 3</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* 구분선 */}
              <div className="h-8 w-px bg-[#E0E2E7]"></div>

              {/* 포맷 옵션 */}
              <div className="flex items-center gap-6">
                <button className="text-base font-bold leading-6 text-primary">B</button>
                <button className="text-base italic leading-6 text-primary">I</button>
                <button className="text-base leading-6 text-primary underline">U</button>
                <button className="text-base leading-6 text-primary line-through">S</button>
                
                {/* 리스트 아이콘 */}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.62375 5.2H5.82375V6.8H6.62375V6V5.2ZM17 6.8H17.8V5.2H17V6V6.8ZM6.62375 13.2H5.82375V14.8H6.62375V14V13.2ZM17 14.8H17.8V13.2H17V14V14.8ZM3.02242 5.2C2.58059 5.2 2.22242 5.55817 2.22242 6C2.22242 6.44183 2.58059 6.8 3.02242 6.8V6V5.2ZM3.03442 6.8C3.47625 6.8 3.83442 6.44183 3.83442 6C3.83442 5.55817 3.47625 5.2 3.03442 5.2V6V6.8ZM6.62375 8.96471H5.82375V10.5647H6.62375V9.76471V8.96471ZM17 10.5647H17.8V8.96471H17V9.76471V10.5647ZM3.0224 8.96471C2.58058 8.96471 2.22241 9.32289 2.22242 9.76472C2.22243 10.2065 2.58061 10.5647 3.02244 10.5647L3.02242 9.76471L3.0224 8.96471ZM3.03444 10.5647C3.47627 10.5647 3.83443 10.2065 3.83442 9.76469C3.83442 9.32286 3.47624 8.9647 3.03441 8.96471L3.03442 9.76471L3.03444 10.5647ZM3 13.2C2.55817 13.2 2.2 13.5582 2.2 14C2.2 14.4418 2.55817 14.8 3 14.8V14V13.2ZM3.02242 14.8C3.46425 14.8 3.82242 14.4418 3.82242 14C3.82242 13.5582 3.46425 13.2 3.02242 13.2V14V14.8ZM6.62375 6V6.8H17V6V5.2H6.62375V6ZM6.62375 14V14.8H17V14V13.2H6.62375V14ZM3.02242 6V6.8H3.03442V6V5.2H3.02242V6ZM6.62375 9.76471V10.5647H17V9.76471V8.96471H6.62375V9.76471ZM3.02242 9.76471L3.02244 10.5647L3.03444 10.5647L3.03442 9.76471L3.03441 8.96471L3.0224 8.96471L3.02242 9.76471ZM3 14V14.8H3.02242V14V13.2H3V14Z"
                    fill="#911A00"
                  />
                </svg>

                {/* 넘버 리스트 아이콘 */}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.01758 5.00977H16.0781"
                    stroke="#911A00"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M4.01758 10H16.0781"
                    stroke="#911A00"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M4.01758 15.0879H10.0479"
                    stroke="#911A00"
                    strokeWidth="1.6"
                  />
                </svg>
              </div>

              {/* 구분선 */}
              <div className="h-8 w-px bg-[#E0E2E7]"></div>

              {/* 첨부 옵션 */}
              <div className="flex items-center gap-6">
                {/* 링크 아이콘 */}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5233 8.47672C10.8982 7.85182 10.0505 7.50077 9.16661 7.50077C8.28273 7.50077 7.43504 7.85182 6.80994 8.47672L3.47661 11.8101C3.15824 12.1175 2.9043 12.4854 2.72961 12.892C2.55491 13.2987 2.46296 13.7361 2.45911 14.1787C2.45526 14.6213 2.5396 15.0602 2.70721 15.4699C2.87481 15.8796 3.12232 16.2517 3.43529 16.5647C3.74827 16.8777 4.12044 17.1252 4.5301 17.2928C4.93975 17.4604 5.37868 17.5447 5.82128 17.5409C6.26388 17.537 6.70128 17.4451 7.10796 17.2704C7.51464 17.0957 7.88246 16.8418 8.18995 16.5234L9.10828 15.6059M8.47661 11.5234C9.1017 12.1483 9.9494 12.4993 10.8333 12.4993C11.7172 12.4993 12.5649 12.1483 13.1899 11.5234L16.5233 8.19006C17.1305 7.56138 17.4665 6.71937 17.4589 5.84538C17.4513 4.9714 17.1007 4.13535 16.4827 3.51733C15.8646 2.8993 15.0286 2.54874 14.1546 2.54114C13.2806 2.53355 12.4386 2.86953 11.8099 3.47672L10.8933 4.39339"
                    stroke="#911A00"
                    strokeWidth="1.6"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                </svg>

                {/* 이미지 아이콘 */}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.82227 13.0029L7.15584 9.51244C7.46838 9.19999 7.89223 9.02447 8.33417 9.02447C8.77611 9.02447 9.19996 9.19999 9.5125 9.51244L13.3342 13.3341M11.6675 11.6674L12.9892 10.3458C13.3017 10.0333 13.7256 9.8578 14.1675 9.8578C14.6094 9.8578 15.0333 10.0333 15.3458 10.3458L16.1795 11.6674M11.6675 6.66744H11.6758M16.1793 16.1793V3.82227H3.82233V16.1793H16.1793Z"
                    stroke="#911A00"
                    strokeWidth="1.6"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                </svg>

                {/* 비디오 아이콘 */}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.83333 3.33398V16.6673M14.1667 3.33398V16.6673M2.5 6.66732H5.83333M14.1667 6.66732H17.5M2.5 10.0007H17.5M2.5 13.334H5.83333M14.1667 13.334H17.5M3.33333 16.6673H16.6667C16.8877 16.6673 17.0996 16.5795 17.2559 16.4232C17.4122 16.267 17.5 16.055 17.5 15.834V4.16732C17.5 3.9463 17.4122 3.73434 17.2559 3.57806C17.0996 3.42178 16.8877 3.33398 16.6667 3.33398H3.33333C3.11232 3.33398 2.90036 3.42178 2.74408 3.57806C2.5878 3.73434 2.5 3.9463 2.5 4.16732V15.834C2.5 16.055 2.5878 16.267 2.74408 16.4232C2.90036 16.5795 3.11232 16.6673 3.33333 16.6673Z"
                    stroke="#911A00"
                    strokeWidth="1.6"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                </svg>

                {/* 파일 첨부 아이콘 */}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.6425 5.83339L7.15412 11.3217C6.99494 11.4755 6.86797 11.6594 6.78062 11.8627C6.69327 12.0661 6.64729 12.2848 6.64537 12.5061C6.64345 12.7274 6.68562 12.9468 6.76942 13.1516C6.85322 13.3565 6.97697 13.5426 7.13346 13.699C7.28995 13.8555 7.47604 13.9793 7.68086 14.0631C7.88569 14.1469 8.10516 14.1891 8.32646 14.1871C8.54776 14.1852 8.76645 14.1392 8.96979 14.0519C9.17313 13.9645 9.35704 13.8376 9.51079 13.6784L14.8558 8.19006C15.463 7.56138 15.799 6.71937 15.7914 5.84538C15.7838 4.9714 15.4332 4.13535 14.8152 3.51733C14.1972 2.8993 13.3611 2.54874 12.4871 2.54114C11.6131 2.53355 10.7711 2.86953 10.1425 3.47672L4.79662 8.96422C3.85886 9.90198 3.33203 11.1739 3.33203 12.5001C3.33203 13.8263 3.85886 15.0981 4.79662 16.0359C5.73438 16.9737 7.00626 17.5005 8.33245 17.5005C9.65865 17.5005 10.9305 16.9737 11.8683 16.0359L17.0825 10.8334"
                    stroke="#911A00"
                    strokeWidth="1.6"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* 에디터 텍스트 에어리어 */}
            <div className="flex flex-1 items-start">
              <span className="text-base leading-6 text-orange-3">내용을 입력해주세요</span>
            </div>
          </div>

          {/* 노출여부 */}
          <div className="flex w-[590px] items-center">
            <div className="flex w-40 items-center gap-1">
              <span className="text-xl font-bold text-gray-3">노출여부</span>
              <span className="text-xl font-bold text-red">*</span>
            </div>
            <RadioGroup value={visibility} onValueChange={setVisibility} className="flex items-center">
              <div className="flex items-center gap-2.5 px-2 py-2">
                <RadioGroupItem value="show" className="text-primary">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.8"
                      y="0.8"
                      width="22.4"
                      height="22.4"
                      rx="11.2"
                      stroke="#911A00"
                      strokeWidth="1.6"
                    />
                    <circle cx="12" cy="12" r="6" fill="#911A00" />
                  </svg>
                </RadioGroupItem>
                <span className="text-base font-bold leading-6 text-primary">노출</span>
              </div>
              <div className="flex items-center gap-2.5 px-2 py-2">
                <RadioGroupItem value="hide" className="text-gray-3">
                  <div className="h-6 w-6 rounded-full border-[1.6px] border-gray-3"></div>
                </RadioGroupItem>
                <span className="text-base leading-6 text-gray-3">미노출</span>
              </div>
            </RadioGroup>
          </div>
        </div>

        {/* 버튼 */}
        <div className="flex w-full justify-end gap-2.5">
          <Button
            variant="outline"
            size="sm"
            onClick={handleCancel}
            className="h-9 rounded-[4px] border border-primary bg-white px-3 py-2.5 text-sm font-bold text-primary hover:bg-white"
          >
            취소
          </Button>
          <Button
            size="sm"
            onClick={handleSave}
            className="h-9 rounded-[4px] bg-primary px-3 py-2.5 text-sm font-bold text-white hover:bg-primary/90"
          >
            저장
          </Button>
        </div>
      </div>
    </div>
  );
}
