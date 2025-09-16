import { ReactNode } from 'react';

interface ProgramLayoutProps {
  children: ReactNode;
}

export default function ProgramLayout({ children }: ProgramLayoutProps) {
  return <main className="min-h-screen flex flex-col items-center">{children}</main>;
}
