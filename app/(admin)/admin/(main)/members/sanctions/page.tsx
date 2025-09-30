'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Calendar from '@/components/icons/Calendar';
import Search from '@/components/icons/Search';
import Refresh from '@/components/icons/Refresh';
import Excel from '@/components/icons/Excel';
import UpArrow from '@/components/icons/UpArrow';
import SanctionStatusBadge from './components/SanctionStatusBadge';
import SanctionDetailModal from './components/SanctionDetailModal';

interface SanctionRecord {
  id: number;
  memberId: string;
  nickname: string;
  email: string;
  sanctionType: string;
  reason: string;
  period: string;
  status: 'active' | 'released';
  sanctionDate: string;
  releaseDate: string;
  admin: string;
  isHighlighted?: boolean;
}

const mockData: SanctionRecord[] = [
  {
    id: 12345,
    memberId: 'userA123',
    nickname: '수현짱',
    email: 'soo***@naver.com',
    sanctionType: '활동정지',
    reason: '욕설 및 비방 게시',
    period: '7일',
    status: 'released',
    sanctionDate: '2025-01-01-00:00:00',
    releaseDate: '2025-01-01-00:00:00',
    admin: 'admin01',
  },
  {
    id: 12346,
    memberId: 'asdfghjkl001',
    nickname: '닉네임닉네임닉네...',
    email: 'user***@gmail.com',
    sanctionType: '활동정지',
    reason: '타 회원 신고 다수',
    period: '7일',
    status: 'released',
    sanctionDate: '2025-01-01-00:00:00',
    releaseDate: '2025-01-01-00:00:00',
    admin: 'admin01',
    isHighlighted: true,
  },
  {
    id: 12347,
    memberId: 'testuser01',
    nickname: '김이수',
    email: 'kim***@hanmail.net',
    sanctionType: '블랙리스트',
    reason: '반복적인 광고성 글',
    period: '영구',
    status: 'active',
    sanctionDate: '2025-07-15-00:00:00',
    releaseDate: '',
    admin: 'admin02',
  },
  {
    id: 12348,
    memberId: 'member123',
    nickname: '박민수',
    email: 'park***@naver.com',
    sanctionType: '활동정지',
    reason: '타 회원 신고 다수',
    period: '7일',
    status: 'released',
    sanctionDate: '2025-01-01-00:00:00',
    releaseDate: '2025-01-08-00:00:00',
    admin: 'admin01',
  },
  {
    id: 12349,
    memberId: 'user456',
    nickname: '최영희',
    email: 'choi***@yahoo.com',
    sanctionType: '블랙리스트',
    reason: '불법 콘텐츠 업로드',
    period: '영구',
    status: 'active',
    sanctionDate: '2025-01-01-00:00:00',
    releaseDate: '',
    admin: 'admin03',
  },
  {
    id: 12350,
    memberId: 'member789',
    nickname: '이철수',
    email: 'lee***@gmail.com',
    sanctionType: '활동정지',
    reason: '반복적인 광고성 글',
    period: '30일',
    status: 'released',
    sanctionDate: '2025-01-01-00:00:00',
    releaseDate: '2025-01-31-00:00:00',
    admin: 'admin01',
  },
  {
    id: 12351,
    memberId: 'testuser02',
    nickname: '한지민',
    email: 'han***@daum.net',
    sanctionType: '활동정지',
    reason: '타 회원 신고 다수',
    period: '7일',
    status: 'released',
    sanctionDate: '2025-01-01-00:00:00',
    releaseDate: '2025-01-08-00:00:00',
    admin: 'admin02',
  },
  {
    id: 12352,
    memberId: 'user987',
    nickname: '정민수',
    email: 'jung***@naver.com',
    sanctionType: '활동정지',
    reason: '불법 콘텐츠 업로드',
    period: '7일',
    status: 'active',
    sanctionDate: '2025-01-15-00:00:00',
    releaseDate: '',
    admin: 'admin01',
  },
  {
    id: 12353,
    memberId: 'member456',
    nickname: '윤서현',
    email: 'yoon***@gmail.com',
    sanctionType: '블랙리스트',
    reason: '욕설 및 비방 게시',
    period: '영구',
    status: 'active',
    sanctionDate: '2025-01-01-00:00:00',
    releaseDate: '',
    admin: 'admin03',
  },
  {
    id: 12354,
    memberId: 'testuser03',
    nickname: '강민지',
    email: 'kang***@hotmail.com',
    sanctionType: '블랙리스트',
    reason: '욕설 및 비방 게시',
    period: '영구',
    status: 'released',
    sanctionDate: '2025-01-01-00:00:00',
    releaseDate: '2025-01-15-00:00:00',
    admin: 'admin02',
  },
];

export default function AdminMemberSanctionsPage() {
  const [startDate, setStartDate] = useState('2025-08-08');
  const [endDate, setEndDate] = useState('');
  const [sanctionType, setSanctionType] = useState('전체');
  const [status, setStatus] = useState('전체');
  const [searchType, setSearchType] = useState('회원 ID');
  const [searchValue, setSearchValue] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState('10개씩 보기');
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSanction, setSelectedSanction] = useState<SanctionRecord | null>(null);

  const totalCount = 12345;

  const handleRowClick = (record: SanctionRecord) => {
    setSelectedSanction(record);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSanction(null);
  };

  const handleReleaseSanction = (sanctionId: number) => {
    // TODO: API 호출로 제재 해제 처리
    console.log('제재 해제:', sanctionId);
  };

  return (
    <div className="flex w-full flex-col items-start gap-[34px] p-11">
      {/* 제목 */}
      <h1 className="text-2xl font-bold leading-8 text-gray-1">회원 제재 이력</h1>

      {/* 검색 필터 섹션 */}
      <div className="flex w-full flex-col items-start gap-[18px] rounded-lg bg-white p-8">
        {/* 첫 번째 행: 제재일자, 제재유형, 상태 */}
        <div className="flex w-full items-start gap-6">
          {/* 제재일자 */}
          <div className="flex items-center gap-2">
            <span className="text-base font-bold text-gray-2">제재일자</span>
            <div className="flex w-[306px] items-center gap-2.5">
              <div className="flex w-[140px] cursor-pointer items-center justify-between rounded-md border border-[#EBEBEB] bg-white px-3 py-3">
                <span className="text-xs font-bold text-primary">{startDate}</span>
                <Calendar size={12} color="#727272" />
              </div>
              <span className="text-xs font-bold text-[#727272]">-</span>
              <div className="flex w-[140px] cursor-pointer items-center justify-between rounded-md border border-[#EBEBEB] bg-white px-3 py-3">
                <span className="text-xs font-medium text-[#727272]">
                  {endDate || '날짜 입력'}
                </span>
                <Calendar size={12} color="#727272" />
              </div>
            </div>
          </div>

          {/* 제재유형 */}
          <div className="flex flex-1 items-center gap-2">
            <span className="text-base font-bold text-gray-2">제재유형</span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex flex-1 cursor-pointer items-center justify-between rounded-md border border-[#EBEBEB] bg-white px-3 py-3">
                  <span className="text-xs font-bold text-primary">{sanctionType}</span>
                  <UpArrow size={10} color="#911A00" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setSanctionType('전체')}>전체</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSanctionType('활동정지')}>
                  활동정지
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSanctionType('블랙리스트')}>
                  블랙리스트
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* 상태 */}
          <div className="flex flex-1 items-center gap-2">
            <span className="text-base font-bold text-gray-2">상태</span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex flex-1 cursor-pointer items-center justify-between rounded-md border border-[#EBEBEB] bg-white px-3 py-3">
                  <span className="text-xs font-bold text-primary">{status}</span>
                  <UpArrow size={10} color="#911A00" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setStatus('전체')}>전체</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatus('제재중')}>제재중</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatus('해제됨')}>해제됨</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* 두 번째 행: 검색 */}
        <div className="flex w-full items-center gap-6">
          <div className="flex flex-1 items-center gap-3 rounded-md border border-[#EBEBEB] bg-white px-3 py-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-primary">{searchType}</span>
              <UpArrow size={10} color="#911A00" />
            </div>
            <Input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="검색조건을 입력해주세요"
              className="h-auto border-0 bg-transparent p-0 text-xs font-medium text-[#727272] placeholder:text-[#727272] focus-visible:ring-0"
            />
          </div>
          <div className="flex items-center gap-2">
            <Button className="flex h-12 w-[120px] items-center justify-center gap-2.5 rounded bg-primary px-0 py-3">
              <Search size={16} color="white" />
              <span className="text-base font-bold text-white">검색</span>
            </Button>
            <Button
              variant="outline"
              className="flex h-12 w-[120px] items-center justify-center gap-2.5 rounded border-[1.3px] border-primary bg-white px-0 py-3"
            >
              <Refresh size={16} />
              <span className="text-base font-bold text-primary">초기화</span>
            </Button>
          </div>
        </div>
      </div>

      {/* 결과 및 엑셀 다운로드 */}
      <div className="flex w-full flex-col items-end gap-4">
        <div className="flex w-full items-center justify-between">
          <div className="text-xl font-medium leading-6 tracking-[-0.4px]">
            <span className="text-[#6D6D6D]">총 </span>
            <span className="text-primary">{totalCount.toLocaleString()}</span>
            <span className="text-[#6D6D6D]">건</span>
          </div>
          <Button
            variant="outline"
            className="flex items-center gap-3 rounded border-[1.6px] border-[#4CA452] bg-white px-3 py-2.5"
          >
            <Excel size={16} color="#4CA452" />
            <span className="text-sm font-bold leading-4 tracking-[-0.28px] text-[#4CA452]">
              엑셀 다운로드
            </span>
          </Button>
        </div>

        {/* 테이블 */}
        <div className="flex w-full flex-col items-start gap-6">
          <div className="flex w-full flex-col">
            {/* 테이블 헤더 */}
            <div className="flex h-[50px] items-center justify-between bg-[#EEE] px-4">
              <div className="flex w-[40px] items-center justify-center">
                <span className="text-xs font-bold text-[#515151]">NO</span>
              </div>
              <div className="flex w-[100px] items-center justify-center">
                <span className="text-xs font-bold text-[#515151]">회원 ID</span>
              </div>
              <div className="flex w-[100px] items-center justify-center">
                <span className="text-xs font-bold text-[#515151]">닉네임</span>
              </div>
              <div className="flex w-[52px] items-center justify-center">
                <span className="text-xs font-bold text-[#515151]">제재유형</span>
              </div>
              <div className="flex w-[120px] items-center justify-center">
                <span className="text-xs font-bold text-[#515151]">제재 사유</span>
              </div>
              <div className="flex w-[44px] items-center justify-center">
                <span className="text-xs font-bold text-[#515151]">제재기간</span>
              </div>
              <div className="flex w-[100px] items-center justify-center">
                <span className="text-xs font-bold text-[#515151]">상태</span>
              </div>
              <div className="flex w-[124px] items-center justify-center">
                <span className="text-xs font-bold text-[#515151]">제재일자</span>
              </div>
              <div className="flex w-[124px] items-center justify-center">
                <span className="text-xs font-bold text-[#515151]">해제일자</span>
              </div>
              <div className="flex w-[60px] items-center justify-center">
                <span className="text-xs font-bold text-[#515151]">운영자</span>
              </div>
            </div>

            {/* 테이블 바디 */}
            {mockData.map((record, index) => (
              <div
                key={index}
                onClick={() => handleRowClick(record)}
                className={`flex h-[50px] cursor-pointer items-center justify-between px-4 hover:bg-gray-50 ${
                  record.isHighlighted ? 'bg-red-3' : ''
                }`}
              >
                <div className="flex w-[40px] items-center justify-center">
                  <span
                    className={`text-xs font-medium ${
                      record.isHighlighted ? 'text-primary' : 'text-[#686868]'
                    }`}
                  >
                    {record.id}
                  </span>
                </div>
                <div className="flex w-[100px] items-center justify-center">
                  <span
                    className={`text-xs font-medium ${
                      record.isHighlighted ? 'text-primary' : 'text-[#686868]'
                    }`}
                  >
                    {record.memberId}
                  </span>
                </div>
                <div className="flex w-[100px] items-center justify-center">
                  <span
                    className={`text-xs font-medium ${
                      record.isHighlighted ? 'text-primary' : 'text-[#686868]'
                    }`}
                  >
                    {record.nickname}
                  </span>
                </div>
                <div className="flex w-[52px] items-center justify-center">
                  <span
                    className={`text-xs font-medium ${
                      record.isHighlighted ? 'text-primary' : 'text-[#686868]'
                    }`}
                  >
                    {record.sanctionType}
                  </span>
                </div>
                <div className="flex w-[120px] items-center justify-center">
                  <span
                    className={`text-xs font-medium ${
                      record.isHighlighted ? 'text-primary' : 'text-[#686868]'
                    }`}
                  >
                    {record.reason}
                  </span>
                </div>
                <div className="flex w-[44px] items-center justify-center">
                  <span
                    className={`text-xs font-medium ${
                      record.isHighlighted ? 'text-primary' : 'text-[#686868]'
                    }`}
                  >
                    {record.period}
                  </span>
                </div>
                <div className="flex w-[100px] items-center justify-center">
                  <SanctionStatusBadge status={record.status} />
                </div>
                <div className="flex w-[124px] items-center justify-center">
                  <span
                    className={`text-xs font-medium ${
                      record.isHighlighted ? 'text-primary' : 'text-[#686868]'
                    }`}
                  >
                    {record.sanctionDate}
                  </span>
                </div>
                <div className="flex w-[124px] items-center justify-center">
                  <span
                    className={`text-xs font-medium ${
                      record.isHighlighted ? 'text-primary' : 'text-[#686868]'
                    }`}
                  >
                    {record.releaseDate}
                  </span>
                </div>
                <div className="flex w-[60px] items-center justify-center">
                  <span
                    className={`text-xs font-medium ${
                      record.isHighlighted ? 'text-primary' : 'text-[#686868]'
                    }`}
                  >
                    {record.admin}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* 페이지네이션 */}
          <div className="flex w-full items-center justify-between">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex cursor-pointer items-center gap-3 rounded-md border border-[#EBEBEB] bg-white px-3 py-3">
                  <span className="text-xs font-bold text-primary">{itemsPerPage}</span>
                  <UpArrow size={10} color="#911A00" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setItemsPerPage('10개씩 보기')}>
                  10개씩 보기
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setItemsPerPage('20개씩 보기')}>
                  20개씩 보기
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setItemsPerPage('50개씩 보기')}>
                  50개씩 보기
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="flex items-center gap-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.8252 17.9999L9.17487 11.9903L14.8252 6"
                  stroke="#A0A0A0"
                  strokeWidth="1.2"
                />
              </svg>
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-sm bg-primary">
                  <span className="text-sm font-medium text-white">1</span>
                </div>
                <div className="flex h-6 w-6 items-center justify-center">
                  <span className="text-sm font-medium text-orange-3">2</span>
                </div>
                <div className="flex h-6 w-6 items-center justify-center">
                  <span className="text-sm font-medium text-orange-3">...</span>
                </div>
                <div className="flex h-6 w-6 items-center justify-center">
                  <span className="text-sm font-medium text-orange-3">9</span>
                </div>
                <div className="flex h-6 w-6 items-center justify-center">
                  <span className="text-sm font-medium text-orange-3">10</span>
                </div>
              </div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.1748 17.9999L14.8251 11.9903L9.1748 6"
                  stroke="#911A00"
                  strokeWidth="1.2"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* 제재 상세 보기 모달 */}
      {selectedSanction && (
        <SanctionDetailModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          sanctionData={selectedSanction}
          onRelease={handleReleaseSanction}
        />
      )}
    </div>
  );
}
