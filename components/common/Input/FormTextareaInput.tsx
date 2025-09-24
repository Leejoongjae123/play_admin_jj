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
            'relative w-20 items-start gap-1 py-3 text-gray-3 lg:w-40 lg:py-4 lg:text-xl',
          )}
        >
          {label}
          {required && <span className="text-red">*</span>}
        </FormLabel>

        <div className="flex w-full max-w-[430px] flex-col gap-1">
          <Textarea
            className={cn(
              'bg-orange-4 placeholder:text-orange-3',
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
