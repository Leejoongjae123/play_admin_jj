'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Mail from '@/components/icons/Mail';
import Hamburger from '@/components/icons/Hamburger';
import Pagination from '@/components/ui/pagination';
import SuspensionModal from './components/SuspensionModal';
import BlacklistModal from './components/BlacklistModal';
import RejectWriterModal from './components/RejectWriterModal';
import { Divide } from 'lucide-react';

interface MemberDetailData {
  memberId: string;
  memberType: string;
  nickname: string;
  email: string;
  signupMethod: string;
  joinDate: string;
  status: 'normal' | 'suspended' | 'blacklist';
  lastLogin: string;
}

interface ActivityLog {
  type: string;
  date: string;
  content: string;
}

interface SanctionHistory {
  no: number;
  description: string;
  date: string;
}

interface WriterApplication {
  writerName: string;
  majorWork: string;
  document: string;
  applicationDate: string;
  status: 'pending' | 'approved' | 'rejected';
}

// Mock 데이터
const mockMemberData: MemberDetailData = {
  memberId: 'userA123',
  memberType: '일반',
  nickname: '홍길동',
  email: 'hong***@gmail.com',
  signupMethod: '구글',
  joinDate: '2025-08-25 11:20',
  status: 'normal',
  lastLogin: '2025-08-30 14:22',
};

const mockActivityLogs: ActivityLog[] = [
  { type: '메모', date: '2025-01-01-00:00:00', content: '{내용}' },
  { type: '댓글', date: '2025-01-01-00:00:00', content: '{내용}' },
  { type: '댓글', date: '2025-01-01-00:00:00', content: '{내용}' },
  { type: '댓글', date: '2025-01-01-00:00:00', content: '{내용}' },
  { type: '댓글', date: '2025-01-01-00:00:00', content: '{내용}' },
];

const mockSanctionHistory: SanctionHistory[] = [
  { no: 1, description: '7일 정지 (비속어 사용)', date: '2025-06-10' },
];

const mockWriterApplication: WriterApplication = {
  writerName: '게리 오웬 / Gary Owen',
  majorWork: '갈라테아',
  document: '인증자료.doc',
  applicationDate: '2025-08-25 11:20',
  status: 'pending',
};

const MemberStatusBadge = ({ status }: { status: string }) => {
  const statusConfig = {
    normal: {
      label: '정상',
      className: 'border border-[#B0D5F2] bg-[#F6FBFF] text-[#2581F9]',
    },
    pending: {
      label: '승인대기',
      className: 'border border-[#D7825E] bg-[#FBEEE8] text-[#D44F34]',
    },
    suspended: {
      label: '활동 정지',
      className: 'border border-[#EBB9A3] bg-[#FBEEE8] text-[#D44F34]',
    },
  };

  const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.normal;

  return (
    <div
      className={`flex items-center justify-center rounded-full px-3 py-1.5 text-sm font-medium ${config.className}`}
    >
      {config.label}
    </div>
  );
};

export default function MemberDetailPage() {
  const [memo, setMemo] = useState('');
  const [isSuspensionModalOpen, setIsSuspensionModalOpen] = useState(false);
  const [isBlacklistModalOpen, setIsBlacklistModalOpen] = useState(false);
  const [isRejectWriterModalOpen, setIsRejectWriterModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // 페이지네이션 설정
  const itemsPerPage = 5;
  const totalPages = Math.ceil(mockActivityLogs.length / itemsPerPage);

  return (
    <div className='bg-transparent p-8'>
    <div className="flex w-full flex-col gap-10 rounded bg-white p-11">
      {/* 헤더 */}
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h1 className="font-pretendard text-2xl font-bold leading-8 text-gray-1">회원 관리</h1>
            <Button className="flex h-9 w-24 items-center justify-center gap-1.5 rounded border border-primary bg-white hover:bg-gray-6">
              <Mail size={16} color="#911A00" />
              <span className="font-pretendard text-sm font-bold text-primary">쪽지 보내기</span>
            </Button>
          </div>

          {/* 회원 정보 테이블 */}
          <div className="border border-gray-7">
            {/* 첫 번째 행 */}
            <div className="flex">
              <div className="flex w-40 items-center bg-gray-7 px-6 py-2.5">
                <span className="font-pretendard text-base font-normal text-gray-2">회원ID</span>
              </div>
              <div className="flex flex-1 items-center border-b border-gray-7 px-6 py-2.5">
                <span className="font-pretendard text-base font-normal text-gray-1">
                  {mockMemberData.memberId}
                </span>
              </div>
              <div className="flex w-40 items-center bg-gray-7 px-6 py-2.5">
                <span className="font-pretendard text-base font-normal text-gray-2">회원 유형</span>
              </div>
              <div className="flex flex-1 items-center border-b border-gray-7 px-6 py-2.5">
                <span className="font-pretendard text-base font-normal text-gray-1">
                  {mockMemberData.memberType}
                </span>
              </div>
            </div>

            {/* 두 번째 행 */}
            <div className="flex">
              <div className="flex w-40 items-center bg-gray-7 px-6 py-2.5">
                <span className="font-pretendard text-base font-normal text-gray-2">닉네임</span>
              </div>
              <div className="flex flex-1 items-center border-b border-gray-7 px-6 py-2.5">
                <span className="font-pretendard text-base font-normal text-gray-1">
                  {mockMemberData.nickname}
                </span>
              </div>
              <div className="flex w-40 items-center bg-gray-7 px-6 py-2.5">
                <span className="font-pretendard text-base font-normal text-gray-2">ID</span>
              </div>
              <div className="flex flex-1 items-center border-b border-gray-7 px-6 py-2.5">
                <span className="font-pretendard text-base font-normal text-gray-1">
                  {mockMemberData.email}
                </span>
              </div>
            </div>

            {/* 세 ��째 행 */}
            <div className="flex">
              <div className="flex w-40 items-center bg-gray-7 px-6 py-2.5">
                <span className="font-pretendard text-base font-normal text-gray-2">가입방식</span>
              </div>
              <div className="flex flex-1 items-center border-b border-gray-7 px-6 py-2.5">
                <span className="font-pretendard text-base font-normal text-gray-1">
                  {mockMemberData.signupMethod}
                </span>
              </div>
              <div className="flex w-40 items-center bg-gray-7 px-6 py-2.5">
                <span className="font-pretendard text-base font-normal text-gray-2">가입일</span>
              </div>
              <div className="flex flex-1 items-center border-b border-gray-7 px-6 py-2.5">
                <span className="font-pretendard text-base font-normal text-gray-1">
                  {mockMemberData.joinDate}
                </span>
              </div>
            </div>

            {/* 네 번째 행 */}
            <div className="flex">
              <div className="flex w-40 items-center bg-gray-7 px-6 py-2.5">
                <span className="font-pretendard text-base font-normal text-gray-2">상태</span>
              </div>
              <div className="flex flex-1 items-center px-6 py-2.5">
                <MemberStatusBadge status={mockMemberData.status} />
              </div>
              <div className="flex w-40 items-center bg-gray-7 px-6 py-2.5">
                <span className="font-pretendard text-base font-normal text-gray-2">
                  최근 로그인
                </span>
              </div>
              <div className="flex flex-1 items-center px-6 py-2.5">
                <span className="font-pretendard text-base font-normal text-gray-1">
                  {mockMemberData.lastLogin}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 활동 정보 */}
        <div className="flex flex-col gap-4">
          <h2 className="font-pretendard text-xl font-bold text-gray-1">활동 정보</h2>
          <div className="flex flex-col">
            {/* 테이블 헤더 */}
            <div className="flex items-center bg-gray-7">
              <div className="flex w-52 items-center justify-center py-4">
                <span className="font-pretendard text-base font-normal text-gray-2">종류</span>
              </div>
              <div className="flex w-52 items-center justify-center py-4">
                <span className="font-pretendard text-base font-normal text-gray-2">날짜</span>
              </div>
              <div className="flex flex-1 items-center justify-center py-4">
                <span className="font-pretendard text-base font-normal text-gray-2">내용</span>
              </div>
            </div>

            {/* 테이블 본문 */}
            <div className="flex flex-col">
              {mockActivityLogs.map((log, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex w-52 items-center justify-center py-2.5">
                    <span className="font-pretendard text-base font-normal text-gray-1">
                      {log.type}
                    </span>
                  </div>
                  <div className="flex w-52 items-center justify-center py-2.5">
                    <span className="font-pretendard text-base font-normal text-gray-1">
                      {log.date}
                    </span>
                  </div>
                  <div className="flex flex-1 items-center justify-center py-2.5">
                    <span className="font-pretendard text-base font-normal text-gray-1">
                      {log.content}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 페이지네이션 */}
          <div className="flex items-center justify-center">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>

        {/* 제재 이력 관리 */}
        <div className="flex flex-col gap-4">
          <h2 className="font-pretendard text-xl font-bold text-gray-1">제재 이력 관리</h2>
          <div className="flex">
            <div className="flex w-[100px] flex-col border-b border-gray-7">
              <div className="flex items-center justify-center bg-gray-7 px-6 py-2.5">
                <span className="font-pretendard text-base font-normal text-gray-2">NO</span>
              </div>
              <div className="flex items-center justify-center px-6 py-2.5">
                <span className="font-pretendard text-base font-normal text-gray-1">
                  {mockSanctionHistory[0].no}
                </span>
              </div>
            </div>
            <div className="flex flex-1 flex-col border-b border-gray-7">
              <div className="flex items-center justify-center bg-gray-7 px-6 py-2.5">
                <span className="font-pretendard text-base font-normal text-gray-2">제재 이력</span>
              </div>
              <div className="flex items-center justify-center px-6 py-2.5">
                <span className="font-pretendard text-base font-normal text-gray-1">
                  {mockSanctionHistory[0].description}
                </span>
              </div>
            </div>
            <div className="flex flex-1 flex-col border-b border-gray-7">
              <div className="flex items-center justify-center bg-gray-7 px-6 py-2.5">
                <span className="font-pretendard text-base font-normal text-gray-2">제재 일자</span>
              </div>
              <div className="flex items-center justify-center px-6 py-2.5">
                <span className="font-pretendard text-base font-normal text-gray-1">
                  {mockSanctionHistory[0].date}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 운영자 메모 */}
        <div className="flex flex-col gap-4">
          <h2 className="font-pretendard text-xl font-bold text-gray-1">운영자 메모</h2>
          <div className="relative rounded-lg border border-gray-6 bg-[#FAF8F6] p-5">
            <textarea
              value={memo}
              onChange={(e) => setMemo(e.target.value)}
              placeholder="해당 회원을 정지하려는 사유를 입력해주세요. 해당 회원을 정지하려는 사유를 입력해주세요."
              className="h-24 w-full resize-none bg-transparent font-pretendard text-base font-normal text-orange-3 placeholder-orange-3 focus:outline-none"
            />
            <svg
              className="absolute bottom-2 right-2 rotate-[135deg] fill-[#E0E2E7]"
              width="12"
              height="8"
              viewBox="0 0 7 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.67466 5.74813C6.71829 6.3557 6.21319 6.86079 5.60562 6.81717L1.02376 6.48821C0.169203 6.42686 -0.217554 5.38949 0.388262 4.78367L4.64116 0.53078C5.24698 -0.0750349 6.28435 0.311721 6.3457 1.16627L6.67466 5.74813Z" />
            </svg>
          </div>
        </div>

        {/* 작가 신청 정보 */}
        <div className="flex flex-col gap-4">
          <h2 className="font-pretendard text-xl font-bold text-gray-1">작가 신청 정보</h2>
          <div className="border border-gray-7">
            {/* 첫 번째 행 */}
            <div className="flex">
              <div className="flex w-40 items-center bg-gray-7 px-6 py-2.5">
                <span className="font-pretendard text-base font-normal text-gray-2">작가명</span>
              </div>
              <div className="flex flex-1 items-center border-b border-gray-7 px-6 py-2.5">
                <span className="font-pretendard text-base font-normal text-gray-1">
                  {mockWriterApplication.writerName}
                </span>
              </div>
              <div className="flex w-40 items-center bg-gray-7 px-6 py-2.5">
                <span className="font-pretendard text-base font-normal text-gray-2">대표작</span>
              </div>
              <div className="flex flex-1 items-center border-b border-gray-7 px-6 py-2.5">
                <span className="font-pretendard text-base font-normal text-gray-1">
                  {mockWriterApplication.majorWork}
                </span>
              </div>
            </div>

            {/* 두 번째 행 */}
            <div className="flex">
              <div className="flex w-40 items-center bg-gray-7 px-6 py-2.5">
                <span className="font-pretendard text-base font-normal text-gray-2">인증자료</span>
              </div>
              <div className="flex flex-1 items-center border-b border-gray-7 px-6 py-2.5">
                <span className="font-pretendard text-base font-normal text-gray-1">
                  {mockWriterApplication.document}
                </span>
              </div>
              <div className="flex w-40 items-center bg-gray-7 px-6 py-2.5">
                <span className="font-pretendard text-base font-normal text-gray-2">신청일자</span>
              </div>
              <div className="flex flex-1 items-center border-b border-gray-7 px-6 py-2.5">
                <span className="font-pretendard text-base font-normal text-gray-1">
                  {mockWriterApplication.applicationDate}
                </span>
              </div>
            </div>

            {/* 세 번째 행 */}
            <div className="flex">
              <div className="flex w-40 items-center bg-gray-7 px-6 py-2.5">
                <span className="font-pretendard text-base font-normal text-gray-2">상태</span>
              </div>
              <div className="flex flex-1 items-center px-6 py-2.5">
                <MemberStatusBadge status={mockWriterApplication.status} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 하단 버튼들 */}
      <div className="flex items-center justify-between">
        <Button className="flex h-9 w-[84px] items-center justify-center gap-1.5 rounded border border-gray-4 bg-white hover:bg-gray-6">
          <Hamburger size={16} color="#555555" />
          <span className="font-pretendard text-sm font-bold text-gray-2">목록으로</span>
        </Button>
        <div className="flex items-center gap-2.5">
          <Button
            onClick={() => setIsRejectWriterModalOpen(true)}
            className="h-9 w-[84px] justify-center rounded bg-gray-4 hover:bg-gray-3"
          >
            <span className="font-pretendard text-sm font-bold text-white">작가 반려</span>
          </Button>
          <Button className="h-9 w-[84px] justify-center rounded bg-primary hover:bg-primary/90">
            <span className="font-pretendard text-sm font-bold text-white">작가 승인</span>
          </Button>
          <Button
            onClick={() => setIsSuspensionModalOpen(true)}
            className="h-9 w-[84px] justify-center rounded border border-primary bg-white hover:bg-gray-6"
          >
            <span className="font-pretendard text-sm font-bold text-primary">활동정지</span>
          </Button>
          <Button
            onClick={() => setIsBlacklistModalOpen(true)}
            className="h-9 w-[84px] justify-center rounded bg-gray-1 hover:bg-gray-2"
          >
            <span className="font-pretendard text-sm font-bold text-white">블랙리스트</span>
          </Button>
          
        </div>
      </div>

      {/* 활동 정지 모달 */}
      <SuspensionModal
        isOpen={isSuspensionModalOpen}
        onClose={() => setIsSuspensionModalOpen(false)}
        memberId={mockMemberData.memberId}
      />

      {/* 블랙리스트 모달 */}
      <BlacklistModal
        isOpen={isBlacklistModalOpen}
        onClose={() => setIsBlacklistModalOpen(false)}
        memberId={mockMemberData.memberId}
      />

      {/* 작가 반려 모달 */}
      <RejectWriterModal
        isOpen={isRejectWriterModalOpen}
        onClose={() => setIsRejectWriterModalOpen(false)}
        memberId={mockMemberData.memberId}
      />
    </div>
    </div>
  );
}
