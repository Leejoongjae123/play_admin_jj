import { ReactNode } from 'react';
import { Header, Footer } from '@/components/layout';

interface PlayLayoutProps {
  children: ReactNode;
}

export default function PlayLayout({ children }: PlayLayoutProps) {
  return (
    <main className="flex min-h-screen w-full flex-col items-center">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
