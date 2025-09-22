import Link from 'next/link';
import { ArrowRight } from '@/components/icons';

interface ViewMoreLinkButtonProps {
  href: string;
}

export default function ViewMoreLinkButton({ href }: ViewMoreLinkButtonProps) {
  return (
    <Link href={href} className="flex items-center gap-1">
      <span className="text-sm font-medium text-primary lg:text-base">더보기</span>
      <ArrowRight className="text-primary" />
    </Link>
  );
}
