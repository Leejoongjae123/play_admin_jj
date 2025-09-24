import { Input } from '@/components/ui/input';
import { FormLabel, FormMessage } from '@/components/ui/form';
import { cn } from '@/lib/utils';

interface FormInputProps extends React.ComponentProps<'input'> {
  label?: string;
  required?: boolean;
  error?: string;
}

export default function FormInput({ label, required, error, className, ...props }: FormInputProps) {
  return (
    <div className="flex w-full flex-col">
      <div className="flex items-center justify-between">
        <FormLabel
          className={cn('relative w-20 gap-1 text-gray-3 lg:w-40 lg:text-xl', error && '-top-2.5')}
        >
          {label}
          {required && <span className="text-red">*</span>}
        </FormLabel>

        <div className="flex w-full max-w-[430px] flex-col gap-1">
          <Input
            className={cn(
              'h-12 bg-orange-4 placeholder:text-orange-3 lg:h-14',
              error && 'border-destructive',
              className,
            )}
            {...props}
          />
          {error && <FormMessage>{error}</FormMessage>}
        </div>
      </div>
    </div>
  );
}
