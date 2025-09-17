'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HamburgerMenu, Alert, Mail, Profile } from '../Icons';
import MobileNavigation from './navigation';
import { cn } from '@/lib/utils';

export function Header() {
  const [programDropdownOpen, setProgramDropdownOpen] = useState(false);
  const [communityDropdownOpen, setCommunityDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuOpen = () => {
    setMobileMenuOpen(true);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky left-0 top-0 z-50 flex w-full items-center justify-between px-5 py-3 lg:px-[60px] lg:py-6">
      {/* Logo */}
      <div className="h-[22px] w-[97px] flex-shrink-0 lg:h-[36px] lg:w-[160px]">
        <Image
          src="/images/header-logo.webp"
          alt="header-logo"
          width={97}
          height={22}
          className="h-full w-full object-contain"
          priority
        />
      </div>

      {/* Navigation */}
      <nav className="relative hidden h-6 max-w-[627px] flex-shrink-0 lg:flex lg:flex-1">
        {/* 희곡 DB */}
        <Link
          href="/play"
          className="absolute left-0 top-0 flex h-6 w-[52px] items-center justify-center gap-2.5"
        >
          <span className="text-base font-bold leading-[150%] tracking-[-0.32px] text-[#6D6D6D]">
            희곡 DB
          </span>
        </Link>

        {/* 작가 DB */}
        <Link
          href="/writer"
          className="absolute left-[92px] top-0 flex h-6 w-[52px] items-center justify-center gap-2.5"
        >
          <span className="text-base font-bold leading-[150%] tracking-[-0.32px] text-[#6D6D6D]">
            작가 DB
          </span>
        </Link>

        {/* 멤버십 */}
        <Link
          href="/membership"
          className="absolute left-[184px] top-0 flex h-6 w-[41px] items-center justify-center gap-2.5"
        >
          <span className="text-base font-bold leading-[150%] tracking-[-0.32px] text-[#6D6D6D]">
            멤버십
          </span>
        </Link>

        {/* 프로그램 */}
        <div className="absolute left-[265px] top-[1px] flex h-6 w-[83px] items-center gap-1">
          <Link
            href="/program"
            className="flex items-center justify-center gap-2.5"
            onMouseEnter={() => setProgramDropdownOpen(true)}
            onMouseLeave={() => setProgramDropdownOpen(false)}
          >
            <span className="text-base font-bold leading-[150%] tracking-[-0.32px] text-[#6D6D6D]">
              프로그램
            </span>
          </Link>
          <svg
            width="24"
            height="24"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
          >
            <path d="M18 9.46951L12 15.4695L6 9.46951" stroke="#6D6D6D" strokeWidth="1.6" />
          </svg>
        </div>

        {/* 커뮤니티 */}
        <div className="absolute left-[378px] top-[1px] flex h-6 w-[83px] items-center gap-1">
          <Link
            href="/community"
            className="flex items-center justify-center gap-2.5"
            onMouseEnter={() => setCommunityDropdownOpen(true)}
            onMouseLeave={() => setCommunityDropdownOpen(false)}
          >
            <span className="text-base font-bold leading-[150%] tracking-[-0.32px] text-[#6D6D6D]">
              커뮤니티
            </span>
          </Link>
          <svg
            width="24"
            height="24"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
          >
            <path d="M18 9.46951L12 15.4695L6 9.46951" stroke="#6D6D6D" strokeWidth="1.6" />
          </svg>
        </div>

        {/* 인스크립트 */}
        <Link
          href="/about"
          className="absolute left-[491px] top-0 flex h-6 w-[68px] items-center justify-center gap-2.5"
        >
          <span className="text-base font-bold leading-[150%] tracking-[-0.32px] text-[#6D6D6D]">
            인스크립트
          </span>
        </Link>

        {/* 문의 */}
        <Link
          href="/contact"
          className="absolute left-[599px] top-0 flex h-6 w-[28px] items-center justify-center gap-2.5"
        >
          <span className="text-base font-bold leading-[150%] tracking-[-0.32px] text-[#6D6D6D]">
            문의
          </span>
        </Link>
      </nav>

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

      <button type="button" className="lg:hidden" onClick={handleMobileMenuOpen}>
        <HamburgerMenu />
      </button>

      {/* Mobile Navigation */}
      <MobileNavigation isOpen={mobileMenuOpen} onClose={handleMobileMenuClose} />
    </header>
  );
}
