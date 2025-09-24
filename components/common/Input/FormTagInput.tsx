'use client';

import { useState, KeyboardEvent } from 'react';
import { Input } from '@/components/ui/input';
import { FormLabel, FormMessage } from '@/components/ui/form';
import { Badge } from '@/components/ui/badge';
import { Close } from '@/components/icons';
import { cn } from '@/lib/utils';

interface FormTagInputProps {
  label?: string;
  required?: boolean;
  error?: string;
  placeholder?: string;
  className?: string;
  value?: string[];
  maxTags?: number;
  maxLength?: number;
  onChange?: (tags: string[]) => void;
}

export default function FormTagInput({
  label,
  required,
  error,
  placeholder,
  className,
  value = [],
  maxTags = 5,
  maxLength = 10,
  onChange,
}: FormTagInputProps) {
  const [inputValue, setInputValue] = useState('');

  const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTag();
    }
  };

  const addTag = () => {
    const trimmedValue = inputValue.trim();

    if (!trimmedValue) return;

    if (maxLength && trimmedValue.length > maxLength) {
      setInputValue('');
      return;
    }

    if (value.includes(trimmedValue)) {
      setInputValue('');
      return;
    }

    if (maxTags && value.length >= maxTags) {
      setInputValue('');
      return;
    }

    const newTags = [...value, trimmedValue];
    onChange?.(newTags);
    setInputValue('');
  };

  const removeTag = (indexToRemove: number) => {
    const newTags = value.filter((_, index) => index !== indexToRemove);
    onChange?.(newTags);
  };

  return (
    <div className="flex w-full flex-col">
      <div className="flex items-center justify-between">
        <FormLabel
          className={cn(
            'relative w-[65px] gap-1 leading-6 text-gray-3 lg:w-40 lg:text-xl',
            error && '-top-2.5',
          )}
        >
          {label}
          {required && <span className="text-red">*</span>}
        </FormLabel>

        <div className="flex w-full max-w-[250px] flex-col gap-1 sm:max-w-[430px]">
          <Input
            className={cn(
              'h-12 bg-orange-4 text-sm placeholder:text-orange-3 lg:h-14 lg:text-base',
              error && 'border-destructive',
              className,
            )}
            placeholder={placeholder}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleInputKeyDown}
            onBlur={addTag}
            maxLength={maxLength}
          />

          {error && <FormMessage>{error}</FormMessage>}
        </div>
      </div>

      {value.length > 0 && (
        <div className="mt-3 flex w-full justify-end">
          <div className="flex max-w-[250px] flex-wrap justify-end gap-2 lg:max-w-[430px]">
            {value.map((tag, index) => (
              <Badge
                key={index}
                variant="secondary"
                size="md"
                className="flex cursor-pointer items-center gap-1.5 rounded-full"
                onClick={() => removeTag(index)}
              >
                <span className="text-sm font-medium">{tag}</span>
                <Close className="text-primary" />
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
