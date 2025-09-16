import { ReactNode } from 'react';

interface WriterLayoutProps {
  children: ReactNode;
}

export default function WriterLayout({ children }: WriterLayoutProps) {
  return <main className="min-h-screen flex flex-col items-center">{children}</main>;
}
