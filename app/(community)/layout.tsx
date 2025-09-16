import { ReactNode } from 'react';

interface CommunityLayoutProps {
  children: ReactNode;
}

export default function CommunityLayout({ children }: CommunityLayoutProps) {
  return <main className="min-h-screen flex flex-col items-center">{children}</main>;
}
