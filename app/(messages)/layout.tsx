import { ReactNode } from 'react';

interface MessagesLayoutProps {
  children: ReactNode;
}

export default function MessagesLayout({ children }: MessagesLayoutProps) {
  return <main className="min-h-screen flex flex-col items-center">{children}</main>;
}
