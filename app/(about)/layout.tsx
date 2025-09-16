import { ReactNode } from 'react';

interface AboutLayoutProps {
  children: ReactNode;
}

export default function AboutLayout({ children }: AboutLayoutProps) {
  return <main className="min-h-screen flex flex-col items-center">{children}</main>;
}
