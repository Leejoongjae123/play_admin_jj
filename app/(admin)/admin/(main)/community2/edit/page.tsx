'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import ModalDropdown from '@/components/ui/modal-dropdown';
import { RichTextEditor } from '@/components/common/Input';

export default function CommunityEditPage() {
  const [selectedBoard, setSelectedBoard] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [visibility, setVisibility] = useState('show');

  const boardOptions = [
    '동료찾기',
    '거래',
    '무엇이든 물어보세요',
    '인스크립트 소식',
    '작가커뮤니티',
  ];

  const handleSave = () => {
    // 저장 로직 구현
    // TODO: API 호출하여 저장
  };

  const handleCancel = () => {
    // 취소 로직 구현
    window.history.back();
  };

  return (
    <div className="flex w-full justify-center p-8">
      <div className="flex w-full flex-col items-center gap-20 rounded-[5px] bg-white p-11">
        {/* 헤더 */}
        <div className="flex w-full flex-col gap-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-1">커뮤니티 등록 및 수정</h1>
          </div>

          {/* 게시판 선택 드롭다운 */}
          <div className="flex h-[52px] w-full">
            <ModalDropdown
              value={selectedBoard}
              onChange={setSelectedBoard}
              options={boardOptions}
              placeholder="게시판을 선택해주세요"
              className="h-[56px]"
            />
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
          <RichTextEditor value={content} onChange={setContent} placeholder="내용을 입력해주세요" />

          {/* 노출여부 */}
          <div className="flex w-[590px] items-center">
            <div className="flex w-40 items-center gap-1">
              <span className="text-xl font-bold text-gray-3">노출여부</span>
              <span className="text-xl font-bold text-red">*</span>
            </div>
            <RadioGroup
              value={visibility}
              onValueChange={setVisibility}
              className="flex items-center"
            >
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
            className="h-[36px] w-[48px] rounded-[4px] border border-primary bg-white px-3 py-2.5 text-sm font-bold text-primary hover:bg-white"
          >
            취소
          </Button>
          <Button
            size="sm"
            onClick={handleSave}
            className="h-[36px] w-[48px] rounded-[4px] bg-primary px-3 py-2.5 text-sm font-bold text-white hover:bg-primary/90"
          >
            저장
          </Button>
        </div>
      </div>
    </div>
  );
}
