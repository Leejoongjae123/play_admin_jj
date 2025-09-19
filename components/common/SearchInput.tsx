import { Search } from '../icons';
import { Input } from '../ui/input';
import { cn } from '@/lib/utils';

interface SearchInput extends React.ComponentProps<'input'> {
  value: string;
  placeholder: string;
  ariaLabel: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onSearch?: () => void;
}

export default function SearchInput({
  value,
  placeholder,
  ariaLabel,
  className,
  onChange,
  onKeyDown,
  onSearch,
  ...props
}: SearchInput) {
  return (
    <div className="flex h-14 w-full items-center justify-between gap-2.5 border-b-[1.4px] border-red px-6 lg:h-16">
      <Input
        type="text"
        name="search"
        value={value}
        placeholder={placeholder}
        className={cn(
          'h-5 w-full border-none bg-transparent p-0 text-lg font-bold text-primary ring-0 placeholder:text-orange-2 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 lg:text-xl',
          className,
        )}
        aria-label={ariaLabel}
        onChange={onChange}
        onKeyDown={onKeyDown}
        {...props}
      />

      <button type="button" onClick={onSearch} className="flex-shrink-0" aria-label="검색">
        <Search size={24} />
      </button>
    </div>
  );
}
