'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Hamburger, Alert, Mail, Profile } from '@/components/icons';
import { ClientGlobalNavigationBar, ClientSideNavigationBar } from '@/components/layout';

export default function Header() {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  const handleSideMenuOpen = () => {
    setSideMenuOpen(true);
  };

  const handleSideMenuClose = () => {
    setSideMenuOpen(false);
  };

  return (
    <header className="sticky left-0 top-0 z-50 flex h-[68px] w-full items-center justify-between bg-background px-[8%] lg:h-[84px]">
      {/* Logo */}
      <Link href="/" className="h-[22px] w-[97px] flex-shrink-0 lg:h-[36px] lg:w-[160px]">
        <Image
          src="/images/header-logo.webp"
          alt="header-logo"
          width={97}
          height={22}
          className="h-full w-full object-contain"
        />
      </Link>

      {/* PC Navigation */}
      <ClientGlobalNavigationBar />

      {/* Right Side Icons */}
      <div className="hidden flex-shrink-0 items-center justify-end gap-3 lg:flex">
        <Link href="/messages/notifications" className="relative h-6 w-6 flex-shrink-0">
          <Alert hasNotification />
        </Link>

        <Link href="/messages" className="relative h-6 w-6 flex-shrink-0">
          <Mail />
        </Link>

        <Link href="/mypage" className="h-6 w-6 flex-shrink-0">
          <Profile />
        </Link>
      </div>

      <button type="button" className="lg:hidden" onClick={handleSideMenuOpen}>
        <Hamburger />
      </button>

      {/* Mobile Navigation */}
      <ClientSideNavigationBar isOpen={sideMenuOpen} onClose={handleSideMenuClose} />
    </header>
  );
}
