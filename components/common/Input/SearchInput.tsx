'use client';

import { useState } from 'react';
import { Search } from '../../icons';
import { Input } from '../../ui/input';
import { cn } from '@/lib/utils';
import { useSearchParams, useRouter } from 'next/navigation';

interface SearchInput extends React.ComponentProps<'input'> {
  value?: string;
  placeholder?: string;
  ariaLabel?: string;
  className?: string;
  wrapperClassName?: string;
}

export default function SearchInput({
  value = '',
  placeholder = 'SEARCH',
  ariaLabel = '전체 검색',
  className,
  wrapperClassName,
  ...props
}: SearchInput) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchValue, setSearchValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSearch = () => {
    if (searchValue.trim() === '' || searchValue.trim() === searchParams.get('keyword')) return;
    router.push(`/search?keyword=${searchValue}`);
  };

  return (
    <div
      className={cn(
        'flex h-14 w-full items-center justify-between gap-2.5 border-b-[1.4px] border-red px-6 lg:h-[72px]',
        wrapperClassName,
      )}
    >
      <Input
        type="text"
        name="search"
        value={searchValue}
        placeholder={placeholder}
        className={cn(
          'h-5 w-full border-none bg-transparent p-0 text-lg font-bold text-primary ring-0 placeholder:text-orange-2 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 lg:h-6 lg:text-2xl',
          className,
        )}
        aria-label={ariaLabel}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        {...props}
      />

      <button type="button" onClick={handleSearch} className="flex-shrink-0" aria-label="검색">
        <Search size={24} className="text-primary" />
      </button>
    </div>
  );
}
