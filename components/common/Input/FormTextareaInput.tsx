import { Textarea } from '@/components/ui/textarea';
import { FormLabel, FormMessage } from '@/components/ui/form';
import { cn } from '@/lib/utils';

interface FormTextareaInputProps extends React.ComponentProps<'textarea'> {
  label?: string;
  required?: boolean;
  error?: string;
}

export default function FormTextareaInput({
  label,
  required,
  error,
  className,
  ...props
}: FormTextareaInputProps) {
  return (
    <div className="flex w-full flex-col">
      <div className="flex justify-between">
        <FormLabel
          className={cn(
            'relative w-[65px] items-start gap-1 py-3 text-gray-3 lg:w-40 lg:py-4 lg:text-xl',
          )}
        >
          {label}
          {required && <span className="text-red">*</span>}
        </FormLabel>

        <div className="flex w-full max-w-[250px] flex-col gap-1 sm:max-w-[430px]">
          <Textarea
            className={cn(
              'bg-orange-4 text-sm placeholder:text-orange-3 lg:text-base',
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
