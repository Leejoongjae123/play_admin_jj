'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Calendar from '@/components/icons/Calendar';
import Plus from '@/components/icons/Plus';
import Search from '@/components/icons/Search';
import { cn } from '@/lib/utils';

interface ProgramFormData {
  programName: string;
  eventDate: string;
  applicationPeriod: string;
  location: string;
  capacity: string;
  guidelines: string;
  keywords: string;
  description: string;
  image: File | null;
  visibility: 'visible' | 'hidden';
}

export default function ProgramEditPage() {
  const [formData, setFormData] = useState<ProgramFormData>({
    programName: '',
    eventDate: '',
    applicationPeriod: '',
    location: '',
    capacity: '',
    guidelines: '',
    keywords: '',
    description: '',
    image: null,
    visibility: 'visible',
  });

  const handleInputChange = (field: keyof ProgramFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, image: file }));
  };

  const handlePreview = () => {
    console.log('미리보기');
  };

  const handleCancel = () => {
    console.log('취소');
  };

  const handleSave = () => {
    console.log('저장', formData);
  };

  return (
    <div className="flex w-full max-w-[1180px] justify-center p-8">
      <div className="flex w-full flex-col gap-20 rounded-md bg-white p-11">
        {/* 제목 */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-1">프로그램 등록 및 수정</h1>
          </div>

          {/* 프로그램명 */}
          <div className="flex items-center">
            <div className="flex w-40 items-center gap-1 py-4">
              <Label className="text-xl font-bold text-gray-3">프로그램명</Label>
              <span className="text-xl font-bold text-red">*</span>
            </div>
            <div className="flex flex-1 items-center rounded border border-red-3 bg-orange-4 px-5 py-4">
              <Input
                placeholder="프로그램명을 입력해주세요"
                value={formData.programName}
                onChange={(e) => handleInputChange('programName', e.target.value)}
                className="border-0 bg-transparent p-0 placeholder:text-orange-3 focus-visible:ring-0"
              />
            </div>
          </div>

          {/* 행사일시와 신청기간 */}
          <div className="flex gap-4">
            {/* 행사일시 */}
            <div className="flex flex-1 items-center">
              <div className="flex w-40 items-center gap-1 py-4">
                <Label className="text-xl font-bold text-gray-3">행사일시</Label>
                <span className="text-xl font-bold text-red">*</span>
              </div>
              <div className="flex flex-1 items-center justify-between rounded border border-red-3 bg-orange-4 px-5 py-4">
                <Input
                  placeholder="프로그램 날짜를 선택해주세요"
                  value={formData.eventDate}
                  onChange={(e) => handleInputChange('eventDate', e.target.value)}
                  className="border-0 bg-transparent p-0 placeholder:text-orange-3 focus-visible:ring-0"
                />
                <Calendar size={24} color="#911A00" />
              </div>
            </div>

            {/* 신청기간 */}
            <div className="flex flex-1 items-center">
              <div className="flex w-40 items-center gap-1 py-4">
                <Label className="text-xl font-bold text-gray-3">신청기간</Label>
                <span className="text-xl font-bold text-red">*</span>
              </div>
              <div className="flex flex-1 items-center justify-between rounded border border-red-3 bg-orange-4 px-5 py-4">
                <Input
                  placeholder="신청 가능한 날짜를 선택해주세요"
                  value={formData.applicationPeriod}
                  onChange={(e) => handleInputChange('applicationPeriod', e.target.value)}
                  className="border-0 bg-transparent p-0 placeholder:text-orange-3 focus-visible:ring-0"
                />
                <Calendar size={24} color="#911A00" />
              </div>
            </div>
          </div>

          {/* 장소와 인원 */}
          <div className="flex gap-4">
            {/* 장소 */}
            <div className="flex flex-1 items-center">
              <div className="flex w-40 items-center gap-1 py-4">
                <Label className="text-xl font-bold text-gray-3">장소</Label>
                <span className="text-xl font-bold text-red">*</span>
              </div>
              <div className="flex flex-1 items-center rounded border border-red-3 bg-orange-4 px-5 py-4">
                <Input
                  placeholder="프로그램 진행 장소를 입력해주세요"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  className="border-0 bg-transparent p-0 placeholder:text-orange-3 focus-visible:ring-0"
                />
              </div>
            </div>

            {/* 인원 */}
            <div className="flex flex-1 items-center">
              <div className="flex w-40 items-center py-4">
                <Label className="text-xl font-bold text-gray-3">인원</Label>
              </div>
              <div className="flex flex-1 items-center rounded border border-red-3 bg-orange-4 px-5 py-4">
                <Input
                  placeholder="신청 가능한 인원수를 입력해주세요"
                  value={formData.capacity}
                  onChange={(e) => handleInputChange('capacity', e.target.value)}
                  className="border-0 bg-transparent p-0 placeholder:text-orange-3 focus-visible:ring-0"
                />
              </div>
            </div>
          </div>

          {/* 안내사항 */}
          <div className="flex h-[181px] items-start">
            <div className="flex w-40 items-start gap-1 py-4">
              <Label className="text-xl font-bold text-gray-3">안내사항</Label>
              <span className="text-xl font-bold text-red">*</span>
            </div>
            <div className="flex flex-1 items-start rounded border border-red-3 bg-orange-4 px-5 py-4">
              <Textarea
                placeholder="기타 안내사항을 입력해주세요"
                value={formData.guidelines}
                onChange={(e) => handleInputChange('guidelines', e.target.value)}
                className="min-h-[125px] border-0 bg-transparent p-0 placeholder:text-orange-3 focus-visible:ring-0"
              />
            </div>
          </div>

          {/* 키워드 */}
          <div className="flex items-center">
            <div className="flex w-40 items-center gap-1 py-4">
              <Label className="text-xl font-bold text-gray-3">키워드</Label>
              <span className="text-xl font-bold text-red">*</span>
            </div>
            <div className="flex flex-1 items-center rounded border border-red-3 bg-orange-4 px-5 py-4">
              <Input
                placeholder="키워드를 입력해주세요, 쉼표 (,)로 구분합니다."
                value={formData.keywords}
                onChange={(e) => handleInputChange('keywords', e.target.value)}
                className="border-0 bg-transparent p-0 placeholder:text-orange-3 focus-visible:ring-0"
              />
            </div>
          </div>

          {/* 프로그램 소개 */}
          <div className="flex h-[181px] items-start">
            <div className="flex w-40 items-start gap-1 py-4">
              <Label className="text-xl font-bold text-gray-3">
                프로그램
                <br />
                ��개
              </Label>
              <span className="text-xl font-bold text-red">*</span>
            </div>
            <div className="flex flex-1 items-start rounded border border-red-3 bg-orange-4 px-5 py-4">
              <Textarea
                placeholder="프로그램에 대한 설명을 입력해주세요"
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                className="min-h-[125px] border-0 bg-transparent p-0 placeholder:text-orange-3 focus-visible:ring-0"
              />
            </div>
          </div>

          {/* 대표 이미지 */}
          <div className="flex items-center">
            <div className="flex w-40 items-center gap-1 py-4">
              <Label className="text-xl font-bold text-gray-3">대표 이미지</Label>
              <span className="text-xl font-bold text-red">*</span>
            </div>
            <div className="flex items-center gap-4">
              <label className="flex cursor-pointer items-center gap-2 rounded bg-red-2 px-[18px] py-[10px]">
                <Plus size={24} color="#911A00" />
                <span className="text-base font-medium text-[#911A00]">파일 첨부하기</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
              <span className="text-sm font-medium text-[#911A00]">
                15MB 이하의 파일만 첨부 가능합니다.
              </span>
            </div>
          </div>

          {/* 노출여부 */}
          <div className="flex w-[590px] items-center">
            <div className="flex w-40 items-center gap-1">
              <Label className="text-xl font-bold text-gray-3">노출여부</Label>
              <span className="text-xl font-bold text-red">*</span>
            </div>
            <RadioGroup
              value={formData.visibility}
              onValueChange={(value) => handleInputChange('visibility', value)}
              className="flex items-center"
            >
              <div className="flex items-center gap-2 p-2">
                <RadioGroupItem value="visible" id="visible" />
                <Label 
                  htmlFor="visible" 
                  className={cn(
                    "text-base font-bold",
                    formData.visibility === 'visible' ? "text-[#911A00]" : "text-gray-3"
                  )}
                >
                  노출
                </Label>
              </div>
              <div className="flex items-center gap-2 p-2">
                <RadioGroupItem value="hidden" id="hidden" />
                <Label 
                  htmlFor="hidden" 
                  className={cn(
                    "text-base",
                    formData.visibility === 'hidden' ? "text-[#911A00] font-bold" : "text-gray-3 font-normal"
                  )}
                >
                  미노출
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        {/* 하단 버튼 */}
        <div className="flex w-full justify-between">
          <Button
            variant="outline"
            size="sm"
            onClick={handlePreview}
            className="flex items-center gap-1.5 border-gray-4 text-gray-2"
          >
            <Search size={16} color="#555555" />
            <span className="text-sm font-bold">미리보기</span>
          </Button>

          <div className="flex gap-2.5">
            <Button
              variant="outline"
              size="sm"
              onClick={handleCancel}
              className="border-[#911A00] text-[#911A00]"
            >
              <span className="text-sm font-bold">취소</span>
            </Button>
            <Button
              size="sm"
              onClick={handleSave}
              className="bg-[#911A00] text-white hover:bg-[#911A00]/90"
            >
              <span className="text-sm font-bold">저장</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
