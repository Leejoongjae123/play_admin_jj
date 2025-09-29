'use client';

import { Divider } from '@/components/ui/divider';
import { cn } from '@/lib/utils';

interface CharacterFilterProps {
  selectedCharacter?: string;
  onCharacterSelect?: (character: string) => void;
}

const koreanConsonants = [
  ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ'],
  ['ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'],
];

const englishLetters = [
  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'],
  ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
];

export default function CharacterFilter({
  selectedCharacter,
  onCharacterSelect,
}: CharacterFilterProps) {
  const handleCharacterClick = (character: string) => {
    onCharacterSelect?.(character);
  };

  return (
    <div className="flex w-full flex-col items-center justify-center gap-2 rounded-md bg-gray-7 px-5 py-6">
      {/* Korean Consonants */}
      {koreanConsonants.map((row, rowIndex) => (
        <div
          key={`korean-row-${rowIndex}`}
          className="flex w-full items-center justify-between lg:hidden"
        >
          {row.map((consonant, consonantIndex) => (
            <button
              key={`korean-${rowIndex}-${consonantIndex}`}
              onClick={() => handleCharacterClick(consonant)}
              className={cn(
                'font-serif text-sm font-bold leading-[18px] text-primary',
                // FIXME: 초성 선택 인터랙션
                // selectedCharacter === consonant ? 'opacity-100' : '',
              )}
            >
              {consonant}
            </button>
          ))}
        </div>
      ))}

      <div className="hidden w-full items-center justify-between lg:flex">
        {koreanConsonants.map((row, rowIndex) =>
          row.map((consonant, consonantIndex) => (
            <button
              key={`korean-${rowIndex}-${consonantIndex}`}
              onClick={() => handleCharacterClick(consonant)}
              className={cn(
                'font-serif text-sm font-bold leading-[18px] text-primary lg:text-xl',
                // FIXME: 초성 선택 인터랙션
                // selectedCharacter === consonant ? 'opacity-100' : '',
              )}
            >
              {consonant}
            </button>
          )),
        )}
      </div>

      {/* Divider */}
      <Divider />

      {/* English Letters */}
      {englishLetters.map((row, rowIndex) => (
        <div
          key={`english-row-${rowIndex}`}
          className="flex w-full items-center justify-between lg:hidden"
        >
          {row.map((consonant, consonantIndex) => (
            <button
              key={`english-${rowIndex}-${consonantIndex}`}
              onClick={() => handleCharacterClick(consonant)}
              className={cn(
                'font-serif text-sm font-bold leading-[18px] text-primary',
                // FIXME: 초성 선택 인터랙션
                // selectedCharacter === consonant ? 'opacity-100' : '',
              )}
            >
              {consonant}
            </button>
          ))}
        </div>
      ))}

      <div className="hidden w-full items-center justify-between lg:flex">
        {englishLetters.map((row, rowIndex) =>
          row.map((consonant, consonantIndex) => (
            <button
              key={`english-${rowIndex}-${consonantIndex}`}
              onClick={() => handleCharacterClick(consonant)}
              className={cn(
                'font-serif text-sm font-bold leading-[18px] text-primary lg:text-xl',
                // FIXME: 초성 선택 인터랙션
                // selectedCharacter === consonant ? 'opacity-100' : '',
              )}
            >
              {consonant}
            </button>
          )),
        )}
      </div>
    </div>
  );
}
