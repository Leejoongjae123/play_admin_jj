'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Alert, ChevronDown, Close, Mail, Profile } from '@/components/icons';
import { cn } from '@/lib/utils';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';

interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ClientSideNavigationBar({ isOpen, onClose }: NavigationProps) {
  const [isProgramExpanded, setIsProgramExpanded] = useState(false);
  const [isCommunityExpanded, setIsCommunityExpanded] = useState(false);

  const handleMobileMenuClose = () => {
    setIsProgramExpanded(false);
    setIsCommunityExpanded(false);
    onClose();
  };

  return (
    <div
      className={cn(
        'z-999 fixed inset-0 bg-primary transition-transform duration-300 ease-in-out',
        isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0',
      )}
    >
      <div className="flex h-full w-full flex-col p-8">
        {/* Header */}
        <div className="mb-6 flex w-full items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Alert Icon */}
            <Link href="/messages/notifications" className="relative h-6 w-6 flex-shrink-0">
              <Alert hasNotification color="white" circleColor="var(--gray-01)" />
            </Link>

            {/* Mail Icon */}
            <Link href="/messages" className="relative h-6 w-6 flex-shrink-0">
              <Mail color="white" circleColor="var(--gray-01)" hasNotification />
            </Link>

            {/* Profile Icon */}
            <Link href="/mypage" className="h-6 w-6 flex-shrink-0">
              <Profile color="white" />
            </Link>
          </div>

          <button
            onClick={handleMobileMenuClose}
            className="flex h-8 w-8 items-center justify-center"
          >
            <Close color="white" size={32} />
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="flex flex-1 flex-col gap-0.5">
          {/* 희곡 DB */}
          <Link href="/play" className="w-fit py-2.5" onClick={onClose}>
            <span className="text-2xl font-semibold leading-8 text-white">희곡 DB</span>
          </Link>

          {/* 작가 DB */}
          <Link href="/writer" className="w-fit py-2.5" onClick={onClose}>
            <span className="text-2xl font-semibold leading-8 text-white">작가 DB</span>
          </Link>

          {/* 멤버십 */}
          <Link href="/membership" className="w-fit py-2.5" onClick={onClose}>
            <span className="text-2xl font-semibold leading-8 text-white">멤버십</span>
          </Link>

          {/* 프로그램 */}
          <Collapsible
            className="flex flex-col"
            open={isProgramExpanded}
            onOpenChange={setIsProgramExpanded}
          >
            <CollapsibleTrigger asChild>
              <div className="flex w-fit cursor-pointer items-center gap-2.5 py-2.5">
                <span className="text-2xl font-semibold leading-8 text-white">프로그램</span>
                <ChevronDown
                  color="white"
                  className={cn('rotate-180 transition-transform', isProgramExpanded && 'rotate-0')}
                />
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="flex flex-col">
                <Link
                  href="/program"
                  className="flex w-fit items-center py-2 pl-[14px]"
                  onClick={onClose}
                >
                  <span className="text-lg font-medium leading-5 text-white">이달의 프로그램</span>
                </Link>
                <Link
                  href="/program?view=calendar"
                  className="flex w-fit items-center py-2 pl-[14px]"
                  onClick={onClose}
                >
                  <span className="text-lg font-medium leading-5 text-white">
                    지난 프로그램 - 달력
                  </span>
                </Link>
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* 커뮤니티 */}
          {/* FIXME: 커뮤니티 하위 네비게이션 구체화 필요 */}
          <Collapsible
            className="flex flex-col"
            open={isCommunityExpanded}
            onOpenChange={setIsCommunityExpanded}
          >
            <CollapsibleTrigger asChild>
              <div className="flex w-fit cursor-pointer items-center gap-2.5 py-2.5">
                <span className="text-2xl font-semibold leading-8 text-white">커뮤니티</span>
                <ChevronDown
                  color="white"
                  className={cn(
                    'rotate-180 transition-transform',
                    isCommunityExpanded && 'rotate-0',
                  )}
                />
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="flex flex-col">
                <Link
                  href="/community/colleagues"
                  className="flex w-fit items-center py-2 pl-[14px]"
                  onClick={onClose}
                >
                  <span className="text-lg font-medium leading-5 text-white">동료찾기</span>
                </Link>
                <Link
                  href="/community/trade"
                  className="flex w-fit items-center py-2 pl-[14px]"
                  onClick={onClose}
                >
                  <span className="text-lg font-medium leading-5 text-white">장터</span>
                </Link>
                <Link
                  href="/community/questions"
                  className="flex w-fit items-center py-2 pl-[14px]"
                  onClick={onClose}
                >
                  <span className="text-lg font-medium leading-5 text-white">
                    무엇이든 물어보세요
                  </span>
                </Link>
                <Link
                  href="/community/promotion"
                  className="flex w-fit items-center py-2 pl-[14px]"
                  onClick={onClose}
                >
                  <span className="text-lg font-medium leading-5 text-white">공연 홍보</span>
                </Link>
                <Link
                  href="/community/writers"
                  className="flex w-fit items-center py-2 pl-[14px]"
                  onClick={onClose}
                >
                  <span className="text-lg font-medium leading-5 text-white">작가 커뮤니티</span>
                </Link>
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* 공지사항 */}
          <Link href="/announcements" className="w-fit py-2.5" onClick={onClose}>
            <span className="text-2xl font-semibold leading-8 text-white">공지사항</span>
          </Link>

          {/* 인스크립트 */}
          <Link href="/about" className="w-fit py-2.5" onClick={onClose}>
            <span className="text-2xl font-semibold leading-8 text-white">인스크립트</span>
          </Link>

          {/* 문의 */}
          <Link href="/contact" className="w-fit py-2.5" onClick={onClose}>
            <span className="text-2xl font-semibold leading-8 text-white">문의</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}
