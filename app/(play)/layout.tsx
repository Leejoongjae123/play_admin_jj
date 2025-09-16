import { ReactNode } from 'react';

interface PlayLayoutProps {
  children: ReactNode;
}

export default function PlayLayout({ children }: PlayLayoutProps) {
  return <main className="min-h-screen flex flex-col items-center">{children}</main>;
}
