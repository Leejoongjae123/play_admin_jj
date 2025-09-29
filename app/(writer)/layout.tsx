import { Footer, Header } from '@/components/layout';
import { ReactNode } from 'react';

interface WriterLayoutProps {
  children: ReactNode;
}

export default function WriterLayout({ children }: WriterLayoutProps) {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
