'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import CustomRadio from '@/components/ui/CustomRadio';
import Search from '@/components/icons/Search';
import Close from '@/components/icons/Close';
import PlayFormInput from './components/PlayFormInput';
import WriterSelectionModal from './components/WriterSelectionModal';

interface PlayFormData {
  title: string;
  writer: string;
  dialogue1: string;
  dialogue2: string;
  dialogue3: string;
  year: string;
  country: string;
  keyword: string;
  plot: string;
  femaleCount: string;
  maleCount: string;
  characterName: string;
  publishHistory: string;
}

export default function PlayEditPage() {
  const [visibility, setVisibility] = useState('노출');
  const [publishStatus, setPublishStatus] = useState('출간');
  const [keywords, setKeywords] = useState(['키워드1', '키워드2']);
  const [characters, setCharacters] = useState([
    '등장인물1',
    '등장인물2',
    '등장인물3',
    '등장인물4',
  ]);
  const [newKeyword, setNewKeyword] = useState('키워드3');
  const [isWriterModalOpen, setIsWriterModalOpen] = useState(false);
  const [selectedWriter, setSelectedWriter] = useState('');

  const form = useForm<PlayFormData>({
    defaultValues: {
      title: '',
      writer: '',
      dialogue1: '',
      dialogue2: '',
      dialogue3: '',
      year: '',
      country: '',
      keyword: '',
      plot: '',
      femaleCount: '1',
      maleCount: '2',
      characterName: '',
      publishHistory: '',
    },
  });

  const removeKeyword = (index: number) => {
    setKeywords(keywords.filter((_, i) => i !== index));
  };

  const removeCharacter = (index: number) => {
    setCharacters(characters.filter((_, i) => i !== index));
  };

  const onSubmit = (data: PlayFormData) => {
    // TODO: API 호출하여 데이터 저장
  };

  return (
    <div className="flex w-full p-8">
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-1 flex-col items-center justify-center rounded-[5px] bg-white p-11"
      >
        {/* Header */}
        <div className="flex w-full flex-col items-start gap-4">
          <div className="flex w-full items-center justify-between">
            <h1 className="font-pretendard text-2xl font-semibold leading-8 text-gray-1">
              희곡 등록 및 수정
            </h1>
          </div>

          {/* 노출여부 */}
          <div className="flex w-full items-center">
            <div className="flex h-14 w-40 items-center gap-1">
              <span className="font-pretendard text-xl font-semibold leading-6 text-gray-3">
                노출여부
              </span>
              <span className="font-pretendard text-xl font-semibold leading-6 text-red">*</span>
            </div>
            <div className="flex flex-1 items-center">
              <CustomRadio
                value="노출"
                checked={visibility === '노출'}
                onChange={setVisibility}
                label="노출"
                className="p-2"
              />
              <CustomRadio
                value="미노출"
                checked={visibility === '미노출'}
                onChange={setVisibility}
                label="미노출"
                className="p-2"
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex w-full items-start justify-between gap-11">
          {/* Left Column */}
          <div className="flex flex-1 flex-col items-start gap-4">
            {/* 제목 */}
            <PlayFormInput
              label="제목"
              required
              placeholder="제목을 입력해주세요"
              className="border-red-3"
              {...form.register('title')}
            />

            {/* 작가 */}
            <div className="flex w-full items-start">
              <div className="flex h-14 w-40 items-start gap-1 py-4">
                <span className="font-pretendard text-xl font-semibold leading-6 text-gray-3">
                  작가
                </span>
                <span className="font-pretendard text-xl font-semibold leading-6 text-red">*</span>
              </div>
              <div className="flex flex-1 flex-col gap-1">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    value={selectedWriter}
                    onClick={() => setIsWriterModalOpen(true)}
                    readOnly
                    placeholder="작가 이름을 입력해주세요"
                    className="h-14 w-full cursor-pointer rounded border border-red-3 bg-orange-4 px-5 py-4 font-pretendard text-base leading-6 text-gray-1 placeholder:text-orange-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Search
                    size={24}
                    color="#911A00"
                    className="pointer-events-none absolute right-5"
                  />
                </div>
              </div>
            </div>

            {/* 대사1 */}
            <PlayFormInput
              label="대사1"
              placeholder="이 작품을 대표하는 대사를 찾아 입력해주세요"
              className="border-red-3"
              {...form.register('dialogue1')}
            />

            {/* 대사2 */}
            <PlayFormInput
              label="대사2"
              placeholder="이 작품을 대표하는 대사를 찾아 입력해주세요"
              className="border-red-3"
              {...form.register('dialogue2')}
            />

            {/* 대사3 */}
            <PlayFormInput
              label="대사3"
              placeholder="이 작품을 대표하는 대사를 찾아 입력해주세요"
              className="border-red-3"
              {...form.register('dialogue3')}
            />

            {/* 연도 */}
            <PlayFormInput
              label="연도"
              placeholder="작품이 발표된 연도를 입력해주세요"
              className="border-red-3"
              {...form.register('year')}
            />

            {/* 나라 */}
            <PlayFormInput
              label="나라"
              placeholder="작품이 발표된 나라를 입력해주세요"
              className="border-red-3"
              {...form.register('country')}
            />

            {/* 키워드 */}
            <div className="flex w-full flex-col items-end gap-4">
              <div className="flex w-full items-start">
                <div className="flex h-14 w-40 items-start gap-1 py-4">
                  <span className="font-pretendard text-xl font-semibold leading-6 text-gray-3">
                    키워드
                  </span>
                  <span className="font-pretendard text-xl font-semibold leading-6 text-red">
                    *
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-1">
                  <input
                    type="text"
                    value={newKeyword}
                    onChange={(e) => setNewKeyword(e.target.value)}
                    className="h-14 w-full rounded border border-red-3 bg-orange-4 px-5 py-4 font-pretendard text-base leading-6 text-gray-1 placeholder:text-orange-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <div className="flex w-full flex-wrap items-center justify-end gap-4">
                {keywords.map((keyword, index) => (
                  <Badge
                    key={index}
                    className="flex h-8 items-center gap-1.5 rounded-2xl bg-red-3 px-3 py-2"
                  >
                    <span className="font-pretendard text-sm leading-4 text-primary">
                      {keyword}
                    </span>
                    <button onClick={() => removeKeyword(index)}>
                      <Close size={16} color="#911A00" />
                    </button>
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-1 flex-col items-start gap-4">
            {/* 줄거리 */}
            <div className="flex h-[230px] w-full items-start">
              <div className="flex h-14 w-40 items-start gap-1 py-4">
                <span className="font-pretendard text-xl font-semibold leading-6 text-gray-3">
                  줄거리
                </span>
                <span className="font-pretendard text-xl font-semibold leading-6 text-red">*</span>
              </div>
              <div className="flex flex-1 flex-col gap-1">
                <textarea
                  placeholder="작품의 요약 줄거리를 입력해주세요"
                  className="h-full w-full rounded border border-red-3 bg-orange-4 px-5 py-4 font-pretendard text-base leading-6 text-gray-1 placeholder:text-orange-3 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            {/* 등장인물 수 */}
            <div className="flex w-full items-center">
              <div className="flex h-14 w-40 items-center gap-1">
                <span className="font-pretendard text-xl font-semibold leading-6 text-gray-3">
                  등장인물 수
                </span>
              </div>
              <div className="flex flex-1 items-center gap-6 pl-2">
                <div className="flex flex-1 items-center gap-3">
                  <span className="font-pretendard text-sm leading-4 text-gray-3">여</span>
                  <input
                    type="text"
                    {...form.register('femaleCount')}
                    className="h-14 flex-1 rounded border border-red-3 bg-orange-4 px-5 py-4 font-pretendard text-base leading-6 text-gray-1 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="flex flex-1 items-center gap-3">
                  <span className="font-pretendard text-sm leading-4 text-gray-3">남</span>
                  <input
                    type="text"
                    {...form.register('maleCount')}
                    className="h-14 flex-1 rounded border border-red-3 bg-orange-4 px-5 py-4 font-pretendard text-base leading-6 text-gray-1 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
            </div>

            {/* 등장인물 목록 */}
            <div className="flex w-full flex-col items-end gap-4">
              <div className="flex w-full items-start">
                <div className="flex h-14 w-40 items-start gap-1 py-4">
                  <span className="font-pretendard text-xl font-semibold leading-6 text-gray-3">
                    등장인물 목록
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-1">
                  <input
                    type="text"
                    placeholder="작품에 등장하는 등장인물 이름을 입력해주세요"
                    className="h-14 w-full rounded border border-red-3 bg-orange-4 px-5 py-4 font-pretendard text-base leading-6 text-gray-1 placeholder:text-orange-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <div className="flex w-full flex-wrap items-center justify-end gap-4">
                {characters.map((character, index) => (
                  <Badge
                    key={index}
                    className="flex h-8 items-center gap-1.5 rounded-2xl bg-red-3 px-3 py-2"
                  >
                    <span className="font-pretendard text-sm leading-4 text-primary">
                      {character}
                    </span>
                    <button onClick={() => removeCharacter(index)}>
                      <Close size={16} color="#911A00" />
                    </button>
                  </Badge>
                ))}
              </div>
            </div>

            {/* 출간여부 */}
            <div className="flex w-full items-center">
              <div className="flex h-14 w-40 items-center gap-1">
                <span className="font-pretendard text-xl font-semibold leading-6 text-gray-3">
                  출간여부
                </span>
              </div>
              <div className="flex flex-1 items-center">
                <CustomRadio
                  value="출간"
                  checked={publishStatus === '출간'}
                  onChange={setPublishStatus}
                  label="출간"
                  className="p-2"
                />
                <CustomRadio
                  value="미출간"
                  checked={publishStatus === '미출간'}
                  onChange={setPublishStatus}
                  label="미출간"
                  className="p-2"
                />
                <CustomRadio
                  value="절판"
                  checked={publishStatus === '절판'}
                  onChange={setPublishStatus}
                  label="절판"
                  className="p-2"
                />
              </div>
            </div>

            {/* 출간 내역 */}
            <div className="flex w-full items-start">
              <div className="flex h-14 w-40 items-start gap-1 py-4">
                <span className="font-pretendard text-xl font-semibold leading-6 text-gray-3">
                  출간 내역
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-1">
                <input
                  type="text"
                  placeholder="출간 내역이 있는 경우 입력해주세요"
                  className="h-14 w-full rounded border border-red-3 bg-orange-4 px-5 py-4 font-pretendard text-base leading-6 text-gray-1 placeholder:text-orange-3 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="flex w-full items-center justify-between">
          <button className="flex h-9 w-[94px] items-center justify-center gap-1.5 rounded border border-gray-4 bg-white">
            <Search size={16} color="#555555" />
            <span className="font-pretendard text-sm font-semibold leading-4 text-gray-2">
              미리보기
            </span>
          </button>

          <div className="flex items-center gap-2.5">
            <button className="flex h-9 w-12 items-center justify-center gap-1.5 rounded border border-primary bg-white">
              <span className="font-pretendard text-sm font-semibold leading-4 text-primary">
                취소
              </span>
            </button>
            <button className="flex h-9 w-12 items-center justify-center gap-1.5 rounded bg-primary">
              <span className="font-pretendard text-sm font-semibold leading-4 text-white">
                저장
              </span>
            </button>
          </div>
        </div>
      </form>

      {/* 작가 선택 모달 */}
      <WriterSelectionModal
        isOpen={isWriterModalOpen}
        onClose={() => setIsWriterModalOpen(false)}
        onSelect={(writer) => {
          setSelectedWriter(writer.name);
          form.setValue('writer', writer.name);
        }}
      />
    </div>
  );
}
