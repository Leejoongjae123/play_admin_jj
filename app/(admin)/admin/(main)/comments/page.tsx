'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Calendar,
  ChevronDown,
  Search,
  Refresh,
  Excel,
  Arrow,
} from '@/components/icons';
import CommentDetailModal from './components/CommentDetailModal';

// 샘플 데이터
const commentData = [
  {
    id: '12345',
    commentId: 'C9832',
    category: '커뮤니티',
    originalText: '연극 <마타하리> 제작 크루 모집',
    content: '낭독코너 너무 좋았습니다!',
    author: '북토커(user2)',
    status: '노출중',
    likes: 123,
    reports: 2,
    createdAt: '2025-09-04 18:40',
    isSelected: false,
  },
  {
    id: '12346',
    commentId: 'CM00123',
    category: '커뮤니티',
    originalText: '연극 <마타하리> 제작 크루 모집',
    content: '연극 <마타하리> 제작 크루 모집',
    author: '홍길동(user1)',
    status: '노출중',
    likes: 123,
    reports: 2,
    createdAt: '2025-09-05 11:22',
    isSelected: true,
  },
  {
    id: '12347',
    commentId: 'CM00124',
    category: '동료찾기',
    originalText: '연극 <마타하리> 제작 크루 모집',
    content: '일정 공유 가능하신가요?',
    author: '홍길동(user1)',
    status: '노출중',
    likes: 123,
    reports: 2,
    createdAt: '2025-09-05 11:22',
    isSelected: false,
  },
  {
    id: '12348',
    commentId: 'CM00125',
    category: '작가',
    originalText: '연극 <마타하리> 제작 크루 모집',
    content: '일정 공유 가능하신가요?',
    author: '홍길동(user1)',
    status: '노출중',
    likes: 123,
    reports: 2,
    createdAt: '2025-09-05 11:22',
    isSelected: false,
  },
  {
    id: '12349',
    commentId: 'CM00126',
    category: '희곡',
    originalText: '연극 <마타하리> 제작 크루 모집',
    content: '일정 공유 가능하신가요?',
    author: '홍길동(user1)',
    status: '비공개',
    likes: 123,
    reports: 2,
    createdAt: '2025-09-05 11:22',
    isSelected: false,
  },
  {
    id: '12350',
    commentId: 'CM00127',
    category: '커뮤니티',
    originalText: '연극 <마타하리> 제작 크루 모집',
    content: '일정 공유 가능하신가요?',
    author: '홍길동(user1)',
    status: '노출중',
    likes: 123,
    reports: 2,
    createdAt: '2025-09-05 11:22',
    isSelected: false,
  },
  {
    id: '12350',
    commentId: 'CM00127',
    category: '커뮤니티',
    originalText: '연극 <마타하리> 제작 크루 모집',
    content: '장면 전환이 매끄럽고 몰입되는 느낌이었습니다',
    author: '홍길동(user1)',
    status: '비공개',
    likes: 123,
    reports: 2,
    createdAt: '2025-09-05 11:22',
    isSelected: false,
  },
  {
    id: '12350',
    commentId: 'CM00127',
    category: '커���니티',
    originalText: '연극 <마타하리> 제작 크루 모집',
    content: '장면 전환이 매끄럽고 몰입되는 느낌이었습니다',
    author: '홍길동(user1)',
    status: '노출중',
    likes: 123,
    reports: 2,
    createdAt: '2025-09-05 11:22',
    isSelected: false,
  },
  {
    id: '12350',
    commentId: 'CM00127',
    category: '커뮤니티',
    originalText: '연극 <마타하리> 제작 크루 모집',
    content: '장면 전환이 매끄럽고 몰입되는 느낌이었습니다',
    author: '홍길동(user1)',
    status: '노출중',
    likes: 123,
    reports: 2,
    createdAt: '2025-09-05 11:22',
    isSelected: false,
  },
  {
    id: '12350',
    commentId: 'CM00127',
    category: '커뮤니티',
    originalText: '연극 <마타하리> 제작 크루 모집',
    content: '장면 전환이 매끄럽고 몰입되는 느낌이었습니다',
    author: '홍길동(user1)',
    status: '비공개',
    likes: 123,
    reports: 2,
    createdAt: '2025-09-05 11:22',
    isSelected: false,
  },
];

export default function AdminCommentsPage() {
  const [startDate, setStartDate] = useState('2025-08-08');
  const [endDate, setEndDate] = useState('');
  const [category, setCategory] = useState('전체');
  const [status, setStatus] = useState('전체');
  const [searchType, setSearchType] = useState('작성자');
  const [searchTerm, setSearchTerm] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState('10개씩 보기');
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedComment, setSelectedComment] = useState<any>(null);

  const totalCount = 12345;

  const handleRowClick = (comment: any) => {
    setSelectedComment(comment);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedComment(null);
  };

  const handleStatusChange = (commentId: string, newStatus: string) => {
    // 실제 구현에서는 API 호출을 통해 상태를 변경
    console.log('댓글 상태 변경:', commentId, newStatus);
    // 로컬 상태 업데이트 (선택사항)
    if (selectedComment) {
      setSelectedComment({ ...selectedComment, status: newStatus });
    }
  };

  return (
    <div className="flex w-full flex-col items-center gap-[34px] p-11">
      {/* 제목 */}
      <div className="self-stretch">
        <h1 className="font-pretendard text-2xl font-semibold leading-8 text-gray-1">
          댓글 관리
        </h1>
      </div>

      {/* 필터 섹션 */}
      <div className="flex flex-col items-start gap-[18px] self-stretch rounded-lg bg-[#FAF8F6] p-8">
        {/* 첫 번째 행: 가입일, 구분, 상태 */}
        <div className="flex items-start gap-6 self-stretch">
          {/* 가입일 */}
          <div className="flex items-center gap-2">
            <div className="font-pretendard text-base font-semibold leading-6 text-gray-2">
              가입일
            </div>
            <div className="flex w-[306px] items-center gap-[10px]">
              <div className="flex h-12 w-[140px] items-center justify-between rounded-md border border-[#EBEBEB] bg-white px-3">
                <div className="font-pretendard text-xs font-semibold text-primary">
                  {startDate || '날짜 입력'}
                </div>
                <Calendar size={12} color="#727272" />
              </div>
              <div className="font-pretendard text-xs font-semibold text-[#727272]">-</div>
              <div className="flex h-12 w-[140px] items-center justify-between rounded-md border border-[#EBEBEB] bg-white px-3">
                <div className="font-pretendard text-xs font-medium text-[#727272]">
                  {endDate || '날짜 입력'}
                </div>
                <Calendar size={12} color="#727272" />
              </div>
            </div>
          </div>

          {/* 구분 */}
          <div className="flex flex-1 items-center gap-2">
            <div className="font-pretendard text-base font-semibold leading-6 text-gray-2">
              구분
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex flex-1 items-center justify-between rounded-md border border-[#EBEBEB] bg-white px-3 py-3">
                  <div className="font-pretendard text-xs font-bold text-primary">
                    {category}
                  </div>
                  <ChevronDown size={10} className="text-primary" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onSelect={() => setCategory('전체')}>전체</DropdownMenuItem>
                <DropdownMenuItem onSelect={() => setCategory('동료찾기')}>동료찾기</DropdownMenuItem>
                <DropdownMenuItem onSelect={() => setCategory('커뮤니티')}>커뮤니티</DropdownMenuItem>
                <DropdownMenuItem onSelect={() => setCategory('작가')}>작가</DropdownMenuItem>
                <DropdownMenuItem onSelect={() => setCategory('희곡')}>희곡</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* 상태 */}
          <div className="flex flex-1 items-center gap-2">
            <div className="font-pretendard text-base font-semibold leading-6 text-gray-2">
              상태
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex flex-1 items-center justify-between rounded-md border border-[#EBEBEB] bg-white px-3 py-3">
                  <div className="font-pretendard text-xs font-bold text-primary">
                    {status}
                  </div>
                  <ChevronDown size={10} className="text-primary" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onSelect={() => setStatus('전체')}>전체</DropdownMenuItem>
                <DropdownMenuItem onSelect={() => setStatus('노출중')}>노출중</DropdownMenuItem>
                <DropdownMenuItem onSelect={() => setStatus('비공개')}>비공개</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* 두 번째 행: 검색 */}
        <div className="flex items-center gap-6 self-stretch">
          <div className="flex flex-1 items-center gap-3 rounded-md border border-[#EBEBEB] bg-white px-3 py-3">
            <div className="flex items-center gap-2">
              <div className="font-pretendard text-xs font-bold text-primary">
                {searchType}
              </div>
              <ChevronDown size={10} className="text-primary" />
            </div>
            <Input
              placeholder="검색조건을 입력해주세요"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-auto border-0 bg-transparent p-0 font-pretendard text-xs font-medium text-[#727272] placeholder:text-[#727272] focus-visible:ring-0"
            />
          </div>
          <div className="flex items-center gap-2">
            <Button className="flex h-12 w-[120px] items-center justify-center gap-[10px] rounded bg-primary px-0 py-3">
              <Search size={16} color="white" />
              <div className="font-pretendard text-base font-semibold text-white">검색</div>
            </Button>
            <Button
              variant="outline"
              className="flex h-12 w-[120px] items-center justify-center gap-[10px] rounded border-[1.3px] border-primary bg-white px-0 py-3"
            >
              <Refresh size={16} color="#911A00" />
              <div className="font-pretendard text-base font-semibold text-primary">초기화</div>
            </Button>
          </div>
        </div>
      </div>

      {/* 결과 정보 섹션 */}
      <div className="flex flex-col items-center gap-6 self-stretch">
        <div className="flex flex-col items-end gap-4 self-stretch">
          <div className="flex items-center justify-between self-stretch">
            <div className="font-pretendard text-xl font-medium leading-6 tracking-[-0.4px]">
              <span className="text-[#6D6D6D]">총 </span>
              <span className="text-primary">{totalCount.toLocaleString()}</span>
              <span className="text-[#6D6D6D]">건</span>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                className="flex items-center gap-3 rounded border-[1.6px] border-[#4CA452] bg-white px-3 py-[10px]"
              >
                <Excel size={16} color="#4CA452" />
                <div className="font-pretendard text-sm font-semibold leading-4 tracking-[-0.28px] text-[#4CA452]">
                  엑셀 다운로드
                </div>
              </Button>
              <Button className="flex h-12 w-[120px] items-center justify-center bg-primary px-0 py-[10px]">
                <div className="font-pretendard text-sm font-semibold leading-4 tracking-[-0.28px] text-white">
                  커뮤니티 등록
                </div>
              </Button>
            </div>
          </div>
        </div>

        {/* 테이블 */}
        <div className="flex flex-col items-start gap-6 self-stretch">
          <div className="flex flex-col items-start self-stretch">
            {/* 테이블 헤더 */}
            <div className="flex h-[50px] items-center justify-between self-stretch rounded-sm bg-[#EEE] px-4">
              <div className="flex w-10 items-center justify-center">
                <div className="font-pretendard text-xs font-bold text-[#515151]">NO</div>
              </div>
              <div className="flex w-[60px] items-center justify-center">
                <div className="font-pretendard text-xs font-bold text-[#515151]">댓글ID</div>
              </div>
              <div className="flex w-[60px] items-center justify-center">
                <div className="font-pretendard text-xs font-bold text-[#515151]">구분</div>
              </div>
              <div className="flex w-[160px] items-center justify-center">
                <div className="font-pretendard text-xs font-bold text-[#515151]">원문</div>
              </div>
              <div className="flex w-[160px] items-center justify-center">
                <div className="font-pretendard text-xs font-bold text-[#515151]">내용 미리보기</div>
              </div>
              <div className="flex w-[88px] items-center justify-center">
                <div className="font-pretendard text-xs font-bold text-[#515151]">작성자</div>
              </div>
              <div className="flex w-[100px] items-center justify-center">
                <div className="font-pretendard text-xs font-bold text-[#515151]">상태</div>
              </div>
              <div className="flex w-11 items-center justify-center">
                <div className="font-pretendard text-xs font-bold text-[#515151]">좋아요</div>
              </div>
              <div className="flex w-11 items-center justify-center">
                <div className="font-pretendard text-xs font-bold text-[#515151]">신고</div>
              </div>
              <div className="flex w-[114px] items-center justify-center">
                <div className="font-pretendard text-xs font-bold text-[#515151]">작성일시</div>
              </div>
            </div>

            {/* 테이블 데이터 */}
            {commentData.map((comment, index) => (
              <div
                key={index}
                onClick={() => handleRowClick(comment)}
                className={`flex h-[50px] items-center justify-between self-stretch px-4 cursor-pointer hover:bg-gray-50 ${
                  comment.isSelected ? 'rounded-sm bg-red-3' : ''
                }`}
              >
                <div className="flex w-10 items-center justify-center">
                  <div className={`font-pretendard text-xs font-medium ${
                    comment.isSelected ? 'text-primary' : 'text-[#686868]'
                  }`}>
                    {comment.id}
                  </div>
                </div>
                <div className="flex w-[60px] items-center justify-center">
                  <div className={`font-pretendard text-xs font-medium ${
                    comment.isSelected ? 'text-primary' : 'text-[#686868]'
                  }`}>
                    {comment.commentId}
                  </div>
                </div>
                <div className="flex w-[60px] items-center justify-center">
                  <div className={`font-pretendard text-xs font-medium ${
                    comment.isSelected ? 'text-primary' : 'text-[#686868]'
                  }`}>
                    {comment.category}
                  </div>
                </div>
                <div className="flex w-[160px] items-center justify-center">
                  <div className={`w-full truncate text-center font-pretendard text-xs font-medium ${
                    comment.isSelected ? 'text-primary' : 'text-[#686868]'
                  }`}>
                    {comment.originalText}
                  </div>
                </div>
                <div className="flex w-[160px] items-center justify-center">
                  <div className={`w-full truncate text-center font-pretendard text-xs font-medium ${
                    comment.isSelected ? 'text-primary' : 'text-[#686868]'
                  }`}>
                    {comment.content}
                  </div>
                </div>
                <div className="flex w-[88px] items-center justify-center">
                  <div className={`w-full truncate text-center font-pretendard text-xs font-medium ${
                    comment.isSelected ? 'text-primary' : 'text-[#686868]'
                  }`}>
                    {comment.author}
                  </div>
                </div>
                <div className="flex w-[100px] items-center justify-center">
                  {comment.status === '노출중' ? (
                    <Badge
                      variant="outline"
                      size="md"
                      className="rounded-full border-[#B0D5F2] bg-[#F6FBFF] text-[#2581F9]"
                    >
                      노출중
                    </Badge>
                  ) : (
                    <Badge
                      variant="lightMd"
                      size="md"
                      className="rounded-full bg-gray-5 text-gray-1"
                    >
                      비공개
                    </Badge>
                  )}
                </div>
                <div className="flex w-11 items-center justify-center">
                  <div className={`font-pretendard text-xs font-medium ${
                    comment.isSelected ? 'text-primary' : 'text-[#686868]'
                  }`}>
                    {comment.likes}
                  </div>
                </div>
                <div className="flex w-11 items-center justify-center">
                  <div className={`font-pretendard text-xs font-medium ${
                    comment.isSelected ? 'text-primary' : 'text-[#686868]'
                  }`}>
                    {comment.reports}
                  </div>
                </div>
                <div className="flex w-[114px] items-center justify-center">
                  <div className={`font-pretendard text-xs font-medium ${
                    comment.isSelected ? 'text-primary' : 'text-[#686868]'
                  }`}>
                    {comment.createdAt}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 페이지네이션 */}
        <div className="flex items-center justify-between self-stretch">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-3 rounded-md border border-[#EBEBEB] bg-white px-3 py-3">
                <div className="font-pretendard text-xs font-bold text-primary">
                  {itemsPerPage}
                </div>
                <ChevronDown size={10} className="text-primary" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onSelect={() => setItemsPerPage('10개씩 보기')}>
                10개씩 보기
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setItemsPerPage('20개씩 보기')}>
                20개씩 보기
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setItemsPerPage('50개씩 보기')}>
                50개씩 보기
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="flex items-center gap-4">
            <Arrow direction="left" size={24} color="#A0A0A0" />
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-sm bg-primary">
                <div className="font-pretendard text-sm font-medium text-white">1</div>
              </div>
              <div className="flex h-6 w-6 items-center justify-center">
                <div className="font-pretendard text-sm font-medium text-orange-3">2</div>
              </div>
              <div className="flex h-6 w-6 items-center justify-center">
                <div className="font-pretendard text-sm font-medium text-orange-3">...</div>
              </div>
              <div className="flex h-6 w-6 items-center justify-center">
                <div className="font-pretendard text-sm font-medium text-orange-3">9</div>
              </div>
              <div className="flex h-6 w-6 items-center justify-center">
                <div className="font-pretendard text-sm font-medium text-orange-3">10</div>
              </div>
            </div>
            <Arrow direction="right" size={24} color="#911A00" />
          </div>
        </div>
      </div>

      {/* 댓글 상세 모달 */}
      {selectedComment && (
        <CommentDetailModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          comment={selectedComment}
          onStatusChange={handleStatusChange}
        />
      )}
    </div>
  );
}
