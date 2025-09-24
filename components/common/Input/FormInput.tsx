import { Input } from '@/components/ui/input';
import { FormLabel, FormMessage } from '@/components/ui/form';
import { cn } from '@/lib/utils';

interface FormInputProps extends React.ComponentProps<'input'> {
  label?: string;
  required?: boolean;
  error?: string;
  numericOnly?: boolean;
  maxLength?: number;
  labelClassName?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FormInput({
  label,
  required,
  error,
  className,
  numericOnly,
  maxLength,
  labelClassName,
  onChange,
  ...props
}: FormInputProps) {
  return (
    <div className="flex w-full flex-col">
      <div className="flex items-center justify-between">
        <FormLabel
          className={cn(
            'relative w-[65px] gap-1 leading-6 text-gray-3 lg:w-40 lg:text-xl',
            error && '-top-2.5',
            labelClassName,
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
            onChange={(e) => {
              let newValue = e.target.value;

              if (numericOnly) {
                newValue = newValue.replace(/[^0-9]/g, '');
              }

              // maxLength 체크 - 한글 입력에서도 정확히 동작하도록
              if (maxLength && newValue.length > maxLength) {
                newValue = newValue.slice(0, maxLength);
              }

              e.target.value = newValue;

              onChange && onChange(e);
            }}
            {...props}
          />
          {error && <FormMessage>{error}</FormMessage>}
        </div>
      </div>
    </div>
  );
}
