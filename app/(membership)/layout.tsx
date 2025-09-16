import { ReactNode } from 'react';

interface MembershipLayoutProps {
  children: ReactNode;
}

export default function MembershipLayout({ children }: MembershipLayoutProps) {
  return <main className="min-h-screen flex flex-col items-center">{children}</main>;
}
