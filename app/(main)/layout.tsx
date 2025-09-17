import { ReactNode } from 'react';
import { Header } from '@/components/Header';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      {children}
    </main>
  );
}
