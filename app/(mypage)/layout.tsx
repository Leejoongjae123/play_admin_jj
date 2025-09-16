import { ReactNode } from 'react';

interface MyPageLayoutProps {
  children: ReactNode;
}

export default function MyPageLayout({ children }: MyPageLayoutProps) {
  return <main className="min-h-screen flex flex-col items-center">{children}</main>;
}
