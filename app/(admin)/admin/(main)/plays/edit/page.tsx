'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Search from '@/components/icons/Search';
import Close from '@/components/icons/Close';

// 삭제 가능한 태그 컴포넌트
function DeletableTag({ 
  label, 
  onDelete 
}: { 
  label: string; 
  onDelete: () => void; 
}) {
  return (
    <div className="flex h-8 items-center justify-center gap-1.5 rounded-2xl bg-[#EBE1DF] px-3 py-2">
      <span className="text-sm font-normal text-[#911A00]">{label}</span>
      <button
        type="button"
        onClick={onDelete}
        className="flex h-4 w-4 items-center justify-center"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.33301 12.6663L7.99967 7.99967M7.99967 7.99967L12.6663 3.33301M7.99967 7.99967L3.33301 3.33301M7.99967 7.99967L12.6663 12.6663"
            stroke="#911A00"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

// 라벨이 있는 입력 필드 컴포넌트
function LabeledInput({
  label,
  required = false,
  children,
  className,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex items-start self-stretch ${className}`}>
      <div className="flex w-40 items-start gap-1 px-0 py-4">
        <span className="text-xl font-bold text-[#6D6D6D]">{label}</span>
        {required && <span className="text-xl font-bold text-[#D65856]">*</span>}
      </div>
      <div className="flex flex-1 flex-col gap-4">{children}</div>
    </div>
  );
}

// 라디오 버튼 컴포넌트
function RadioButton({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: () => void;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2.5 p-2">
      <button
        type="button"
        onClick={onChange}
        className="flex h-6 w-6 items-center justify-center"
      >
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
            stroke={checked ? '#911A00' : '#6D6D6D'}
            strokeWidth="1.6"
          />
          {checked && <circle cx="12" cy="12" r="6" fill="#911A00" />}
        </svg>
      </button>
      <span
        className={`text-base font-bold leading-6 tracking-[-0.32px] ${
          checked ? 'text-[#911A00]' : 'text-[#6D6D6D]'
        }`}
      >
        {label}
      </span>
    </div>
  );
}

export default function PlayEditPage() {
  // 폼 상태
  const [visibility, setVisibility] = useState<'노출' | '미노출'>('노출');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [dialogue1, setDialogue1] = useState('');
  const [dialogue2, setDialogue2] = useState('');
  const [dialogue3, setDialogue3] = useState('');
  const [year, setYear] = useState('');
  const [country, setCountry] = useState('');
  const [keyword, setKeyword] = useState('키워드3');
  const [keywords, setKeywords] = useState(['키워드1', '키워드2']);
  const [plot, setPlot] = useState('');
  const [femaleCount, setFemaleCount] = useState('1');
  const [maleCount, setMaleCount] = useState('2');
  const [characterName, setCharacterName] = useState('');
  const [characters, setCharacters] = useState(['등장인물1', '등장인물2', '등장인물3', '등장인물4']);
  const [publicationStatus, setPublicationStatus] = useState<'출간' | '미출간' | '절판'>('출간');
  const [publicationHistory, setPublicationHistory] = useState('');

  // 키워드 추가
  const handleAddKeyword = () => {
    if (keyword.trim() && !keywords.includes(keyword.trim())) {
      setKeywords([...keywords, keyword.trim()]);
      setKeyword('');
    }
  };

  // 키워드 삭제
  const handleRemoveKeyword = (index: number) => {
    setKeywords(keywords.filter((_, i) => i !== index));
  };

  // 등장인물 추가
  const handleAddCharacter = () => {
    if (characterName.trim() && !characters.includes(characterName.trim())) {
      setCharacters([...characters, characterName.trim()]);
      setCharacterName('');
    }
  };

  // 등장인물 삭제
  const handleRemoveCharacter = (index: number) => {
    setCharacters(characters.filter((_, i) => i !== index));
  };

  // 키워드 입력 핸들러
  const handleKeywordKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddKeyword();
    }
  };

  // 등장인물 입력 핸들러
  const handleCharacterKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddCharacter();
    }
  };

  return (
    <div className="flex w-full max-w-[1180px] flex-col gap-10 rounded-[5px] bg-white p-11">
      {/* 페이지 제목 */}
      <div className="flex flex-col items-start gap-4 self-stretch">
        <div className="flex items-center justify-between self-stretch">
          <h1 className="text-2xl font-bold leading-8 text-[#2A2A2A]">희곡 등록 및 수정</h1>
        </div>

        {/* 노출여부 */}
        <div className="flex w-[590px] items-center">
          <div className="flex w-40 items-center gap-1">
            <span className="text-xl font-bold text-[#6D6D6D]">노출여부</span>
            <span className="text-xl font-bold text-[#D65856]">*</span>
          </div>
          <div className="flex items-center">
            <RadioButton
              checked={visibility === '노출'}
              onChange={() => setVisibility('노출')}
              label="노출"
            />
            <RadioButton
              checked={visibility === '미노출'}
              onChange={() => setVisibility('미노출')}
              label="미노출"
            />
          </div>
        </div>
      </div>

      {/* 메인 컨텐츠 - 두 컬럼 레이아웃 */}
      <div className="flex items-start justify-center gap-11 self-stretch">
        {/* 왼쪽 컬럼 */}
        <div className="flex flex-1 flex-col items-start gap-4">
          {/* 제목 */}
          <LabeledInput label="제목" required>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목을 입력해주세요"
              className="rounded border border-[#EBE1DF] bg-[#F4EFEA] px-5 py-4 text-base leading-6 tracking-[-0.32px] placeholder:text-[#CCBCAB]"
            />
          </LabeledInput>

          {/* 작가 */}
          <LabeledInput label="작가" required>
            <div className="relative">
              <Input
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="작가 이름을 입력해주세요"
                className="rounded border border-[#EBE1DF] bg-[#F4EFEA] px-5 py-4 pr-12 text-base leading-6 tracking-[-0.32px] placeholder:text-[#CCBCAB]"
              />
              <div className="absolute right-5 top-1/2 -translate-y-1/2">
                <Search size={24} color="#911A00" />
              </div>
            </div>
          </LabeledInput>

          {/* 대사1 */}
          <LabeledInput label="대사1">
            <Input
              value={dialogue1}
              onChange={(e) => setDialogue1(e.target.value)}
              placeholder="이 작품을 대표하는 대사를 찾아 입력해주세요"
              className="rounded border border-[#EBE1DF] bg-[#F4EFEA] px-5 py-4 text-base leading-6 tracking-[-0.32px] placeholder:text-[#CCBCAB]"
            />
          </LabeledInput>

          {/* 대사2 */}
          <LabeledInput label="대사2">
            <Input
              value={dialogue2}
              onChange={(e) => setDialogue2(e.target.value)}
              placeholder="이 작품을 대표하는 대사를 찾아 입력해주세요"
              className="rounded border border-[#EBE1DF] bg-[#F4EFEA] px-5 py-4 text-base leading-6 tracking-[-0.32px] placeholder:text-[#CCBCAB]"
            />
          </LabeledInput>

          {/* 대사3 */}
          <LabeledInput label="대사3">
            <Input
              value={dialogue3}
              onChange={(e) => setDialogue3(e.target.value)}
              placeholder="이 작품을 대표하는 대사를 찾아 입력해주세요"
              className="rounded border border-[#EBE1DF] bg-[#F4EFEA] px-5 py-4 text-base leading-6 tracking-[-0.32px] placeholder:text-[#CCBCAB]"
            />
          </LabeledInput>

          {/* 연도 */}
          <LabeledInput label="연도">
            <Input
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="작품이 발표된 연도를 입력해주세요"
              className="rounded border border-[#EBE1DF] bg-[#F4EFEA] px-5 py-4 text-base leading-6 tracking-[-0.32px] placeholder:text-[#CCBCAB]"
            />
          </LabeledInput>

          {/* 나라 */}
          <LabeledInput label="나라">
            <Input
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="작품이 발표된 나라를 입력해주세요"
              className="rounded border border-[#EBE1DF] bg-[#F4EFEA] px-5 py-4 text-base leading-6 tracking-[-0.32px] placeholder:text-[#CCBCAB]"
            />
          </LabeledInput>

          {/* 키워드 */}
          <LabeledInput label="키워드" required className="flex-col items-start">
            <Input
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onKeyPress={handleKeywordKeyPress}
              onBlur={handleAddKeyword}
              className="rounded border border-[#EBE1DF] bg-[#F4EFEA] px-5 py-4 text-base leading-6 tracking-[-0.32px] text-[#2A2A2A]"
            />
            <div className="flex w-[430px] flex-wrap items-center justify-end gap-4">
              {keywords.map((kw, index) => (
                <DeletableTag
                  key={index}
                  label={kw}
                  onDelete={() => handleRemoveKeyword(index)}
                />
              ))}
            </div>
          </LabeledInput>
        </div>

        {/* 오른쪽 컬럼 */}
        <div className="flex flex-1 flex-col items-start gap-4">
          {/* 줄거리 */}
          <LabeledInput label="줄거리" required className="h-[230px] items-start">
            <Textarea
              value={plot}
              onChange={(e) => setPlot(e.target.value)}
              placeholder="작품의 요약 줄거리를 입력해주세요"
              className="h-full resize-none rounded border border-[#EBE1DF] bg-[#F4EFEA] px-5 py-4 text-base leading-6 tracking-[-0.32px] placeholder:text-[#CCBCAB]"
            />
          </LabeledInput>

          {/* 등장인물 수 */}
          <div className="flex items-start self-stretch">
            <div className="flex w-40 items-center gap-1">
              <span className="text-xl font-bold text-[#6D6D6D]">등장인물 수</span>
            </div>
            <div className="flex flex-1 items-center gap-6 pl-2">
              <div className="flex flex-1 items-center gap-3">
                <span className="text-sm font-medium text-[#6D6D6D]">여</span>
                <Input
                  value={femaleCount}
                  onChange={(e) => setFemaleCount(e.target.value)}
                  className="flex-1 rounded border border-[#EBE1DF] bg-[#F4EFEA] px-5 py-4 text-base leading-6 tracking-[-0.32px] text-[#2A2A2A]"
                />
              </div>
              <div className="flex flex-1 items-center gap-3">
                <span className="text-sm font-medium text-[#6D6D6D]">남</span>
                <Input
                  value={maleCount}
                  onChange={(e) => setMaleCount(e.target.value)}
                  className="flex-1 rounded border border-[#EBE1DF] bg-[#F4EFEA] px-5 py-4 text-base leading-6 tracking-[-0.32px] text-[#2A2A2A]"
                />
              </div>
            </div>
          </div>

          {/* 등장인물 목록 */}
          <LabeledInput label="등장인물 목록" className="flex-col items-start">
            <Input
              value={characterName}
              onChange={(e) => setCharacterName(e.target.value)}
              onKeyPress={handleCharacterKeyPress}
              onBlur={handleAddCharacter}
              placeholder="작품에 등장하는 등장인물 이름을 입력해주세요"
              className="rounded border border-[#EBE1DF] bg-[#F4EFEA] px-5 py-4 text-base leading-6 tracking-[-0.32px] placeholder:text-[#CCBCAB]"
            />
            <div className="flex w-[430px] flex-wrap items-center justify-end gap-4">
              {characters.map((character, index) => (
                <DeletableTag
                  key={index}
                  label={character}
                  onDelete={() => handleRemoveCharacter(index)}
                />
              ))}
            </div>
          </LabeledInput>

          {/* 출간여부 */}
          <div className="flex items-center self-stretch">
            <div className="flex w-40 items-center gap-1">
              <span className="text-xl font-bold text-[#6D6D6D]">출간여부</span>
            </div>
            <div className="flex items-center">
              <RadioButton
                checked={publicationStatus === '출간'}
                onChange={() => setPublicationStatus('출간')}
                label="출간"
              />
              <RadioButton
                checked={publicationStatus === '미출간'}
                onChange={() => setPublicationStatus('미출간')}
                label="미출간"
              />
              <RadioButton
                checked={publicationStatus === '절판'}
                onChange={() => setPublicationStatus('절판')}
                label="절판"
              />
            </div>
          </div>

          {/* 출간 내역 */}
          <LabeledInput label="출간 내역">
            <Input
              value={publicationHistory}
              onChange={(e) => setPublicationHistory(e.target.value)}
              placeholder="출간 내역이 있는 경우 입력해주세요"
              className="rounded border border-[#EBE1DF] bg-[#F4EFEA] px-5 py-4 text-base leading-6 tracking-[-0.32px] placeholder:text-[#CCBCAB]"
            />
          </LabeledInput>
        </div>
      </div>

      {/* 하단 버튼 */}
      <div className="flex w-full items-center justify-between">
        <Button
          variant="outline"
          className="flex items-center justify-center gap-1.5 rounded border border-[#A0A0A0] bg-white px-3 py-2.5 text-sm font-semibold text-[#555] h-auto"
        >
          <Search size={16} color="#555" />
          미리보기
        </Button>
        <div className="flex items-center gap-2.5">
          <Button
            variant="outline"
            className="flex items-center justify-center gap-1.5 rounded border border-[#911A00] bg-white px-3 py-2.5 text-sm font-semibold text-[#911A00] h-auto"
          >
            취소
          </Button>
          <Button className="flex items-center justify-center gap-1.5 rounded bg-[#911A00] px-3 py-2.5 text-sm font-semibold text-white h-auto">
            저장
          </Button>
        </div>
      </div>
    </div>
  );
}
