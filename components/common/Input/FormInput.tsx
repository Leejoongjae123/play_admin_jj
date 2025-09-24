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
        <FormLabel className={cn('relative w-20 gap-1 text-gray-3', error && '-top-2.5')}>
          {label}
          {required && <span className="text-red">*</span>}
        </FormLabel>

        <div className="flex flex-col gap-1">
          <Input
            className={cn(
              'h-12 bg-orange-4 px-4 py-3 text-base placeholder:text-orange-3',
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
