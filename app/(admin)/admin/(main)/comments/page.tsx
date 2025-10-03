'use client';

import { useState, useRef, useEffect } from 'react';
import DateEdit from '@/components/ui/date-edit';
import FilterDropdown from '@/components/ui/filter-dropdown';
import SearchInputWithFilter from '@/components/ui/search-input-with-filter';
import Pagination from '@/components/ui/pagination';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Calendar from '@/components/icons/Calendar';
import Search from '@/components/icons/Search';
import Refresh from '@/components/icons/Refresh';
import Excel from '@/components/icons/Excel';
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
  const [startDate, setStartDate] = useState<Date | null>(new Date(2025, 7, 8));
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [category, setCategory] = useState('전체');
  const [status, setStatus] = useState('전체');
  const [searchType, setSearchType] = useState('작성자');
  const [searchTerm, setSearchTerm] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState('10개씩 보기');
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedComment, setSelectedComment] = useState<any>(null);
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);

  const startDateRef = useRef<HTMLDivElement>(null);
  const endDateRef = useRef<HTMLDivElement>(null);

  const totalCount = 12345;
  const totalPages = 10;

  const formatDate = (date: Date | null) => {
    if (!date) return '';
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

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
    // 로컬 상태 업데이트 (선택사항)
    if (selectedComment) {
      setSelectedComment({ ...selectedComment, status: newStatus });
    }
  };

  const handleReset = () => {
    setStartDate(new Date(2025, 7, 8));
    setEndDate(null);
    setCategory('전체');
    setStatus('전체');
    setSearchType('작성자');
    setSearchTerm('');
    setItemsPerPage('10개씩 보기');
    setCurrentPage(1);
  };

  // 외부 클릭 시 날짜 피커 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (startDateRef.current && !startDateRef.current.contains(event.target as Node)) {
        setShowStartDatePicker(false);
      }
      if (endDateRef.current && !endDateRef.current.contains(event.target as Node)) {
        setShowEndDatePicker(false);
      }
    };

    if (showStartDatePicker || showEndDatePicker) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showStartDatePicker, showEndDatePicker]);

  return (
    <div className="flex w-full flex-col items-center gap-[34px] p-11">
      {/* 제목 */}
      <div className="self-stretch">
        <h1 className="font-pretendard text-2xl font-semibold leading-8 text-gray-1">댓글 관리</h1>
      </div>

      {/* 필터 섹션 */}
      <div className="flex flex-col gap-4 self-stretch rounded-lg bg-[#FAF8F6] p-8">
        {/* 첫 번째 행: 가입일, 구분, 상태 */}
        <div className="flex items-start gap-6">
          {/* 가입일 */}
          <div className="flex items-center gap-2">
            <span className="text-base font-bold text-gray-2">가입일</span>
            <div className="flex items-center gap-2.5">
              {/* 시작일 */}
              <div className="relative" ref={startDateRef}>
                <button
                  onClick={() => setShowStartDatePicker(!showStartDatePicker)}
                  className="flex w-[140px] items-center justify-between rounded-md border border-[#EBEBEB] bg-white px-3 py-3 hover:bg-[#FFF5F2]"
                >
                  <span className="text-xs font-bold text-primary">{formatDate(startDate)}</span>
                  <Calendar size={12} color="#727272" />
                </button>
                {showStartDatePicker && (
                  <div className="absolute left-0 top-full z-50 mt-2">
                    <DateEdit
                      value={startDate || new Date()}
                      onChange={setStartDate}
                      onConfirm={(date) => {
                        setStartDate(date);
                        setShowStartDatePicker(false);
                      }}
                      onCancel={() => setShowStartDatePicker(false)}
                    />
                  </div>
                )}
              </div>
              <span className="text-xs font-bold text-[#727272]">-</span>
              {/* 종료일 */}
              <div className="relative" ref={endDateRef}>
                <button
                  onClick={() => setShowEndDatePicker(!showEndDatePicker)}
                  className="flex w-[140px] items-center justify-between rounded-md border border-[#EBEBEB] bg-white px-3 py-3 hover:bg-[#FFF5F2]"
                >
                  <span
                    className={
                      endDate
                        ? 'text-xs font-bold text-primary'
                        : 'text-xs font-medium text-[#727272]'
                    }
                  >
                    {formatDate(endDate) || '날짜 입력'}
                  </span>
                  <Calendar size={12} color="#727272" />
                </button>
                {showEndDatePicker && (
                  <div className="absolute left-0 top-full z-50 mt-2">
                    <DateEdit
                      value={endDate || new Date()}
                      onChange={setEndDate}
                      onConfirm={(date) => {
                        setEndDate(date);
                        setShowEndDatePicker(false);
                      }}
                      onCancel={() => setShowEndDatePicker(false)}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 구분 */}
          <div className="flex flex-1 items-center gap-2">
            <span className="text-base font-bold text-gray-2">구분</span>
            <FilterDropdown
              value={category}
              options={['전체', '동료찾기', '커뮤니티', '작가', '희곡']}
              onChange={setCategory}
            />
          </div>

          {/* 상태 */}
          <div className="flex flex-1 items-center gap-2">
            <span className="text-base font-bold text-gray-2">상태</span>
            <FilterDropdown
              value={status}
              options={['전체', '노출중', '비공개']}
              onChange={setStatus}
            />
          </div>
        </div>

        {/* 두 번째 행: 검색 */}
        <div className="flex items-center gap-6">
          {/* 검색 입력 */}
          <SearchInputWithFilter
            filterValue={searchType}
            filterOptions={['작성자', '제목']}
            onFilterChange={setSearchType}
            searchValue={searchTerm}
            onSearchChange={setSearchTerm}
            placeholder="검색조건을 입력해주세요"
          />

          {/* 검색/초기화 버튼 */}
          <div className="flex items-center gap-2">
            <button className="flex h-[43px] w-[120px] items-center justify-center gap-2.5 rounded bg-primary text-white hover:bg-primary/90">
              <Search size={16} color="white" />
              <span className="text-base font-bold">검색</span>
            </button>
            <button
              onClick={handleReset}
              className="flex h-[43px] w-[120px] items-center justify-center gap-2.5 rounded border-[1.3px] border-primary bg-white text-primary hover:bg-[#FFF5F2]"
            >
              <Refresh size={16} color="#911A00" />
              <span className="text-base font-bold text-primary">초기화</span>
            </button>
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
              <button className="flex h-9 w-[127px] items-center justify-center gap-3 rounded border-[1.6px] border-[#4CA452] bg-white hover:bg-white/90">
                <Excel size={16} color="#4CA452" />
                <div className="font-pretendard text-sm font-semibold leading-4 tracking-[-0.28px] text-[#4CA452]">
                  엑셀 다운로드
                </div>
              </button>
              <button className="flex h-9 w-[120px] items-center justify-center rounded-[4px] bg-primary">
                <div className="font-pretendard text-sm font-semibold leading-4 tracking-[-0.28px] text-white">
                  커뮤니티 등록
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* 테이블 */}
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            {/* 테이블 헤더 */}
            <thead>
              <tr className="h-[50px] bg-[#EEE]">
                <th className="px-2.5 text-xs font-bold text-[#515151]">NO</th>
                <th className="px-2.5 text-xs font-bold text-[#515151]">댓글ID</th>
                <th className="px-2.5 text-xs font-bold text-[#515151]">구분</th>
                <th className="px-2.5 text-xs font-bold text-[#515151]">원문</th>
                <th className="px-2.5 text-xs font-bold text-[#515151]">내용 미리보기</th>
                <th className="px-2.5 text-xs font-bold text-[#515151]">작성자</th>
                <th className="px-2.5 text-xs font-bold text-[#515151]">상태</th>
                <th className="px-2.5 text-xs font-bold text-[#515151]">좋아요</th>
                <th className="px-2.5 text-xs font-bold text-[#515151]">신고</th>
                <th className="px-2.5 text-xs font-bold text-[#515151]">작성일시</th>
              </tr>
            </thead>

            {/* 테이블 바디 */}
            <tbody>
              {commentData.map((comment, index) => (
                <tr
                  key={index}
                  onClick={() => handleRowClick(comment)}
                  className="group h-[50px] cursor-pointer bg-white transition-colors hover:bg-[#EBE1DF]"
                >
                  <td className="px-2.5 text-center text-xs font-medium text-[#686868] group-hover:text-[#911A00]">
                    {comment.id}
                  </td>
                  <td className="px-2.5 text-center text-xs font-medium text-[#686868] group-hover:text-[#911A00]">
                    {comment.commentId}
                  </td>
                  <td className="px-2.5 text-center text-xs font-medium text-[#686868] group-hover:text-[#911A00]">
                    {comment.category}
                  </td>
                  <td className="max-w-[160px] truncate px-2.5 text-center text-xs font-medium text-[#686868] group-hover:text-[#911A00]">
                    {comment.originalText}
                  </td>
                  <td className="max-w-[160px] truncate px-2.5 text-center text-xs font-medium text-[#686868] group-hover:text-[#911A00]">
                    {comment.content}
                  </td>
                  <td className="max-w-[88px] truncate px-2.5 text-center text-xs font-medium text-[#686868] group-hover:text-[#911A00]">
                    {comment.author}
                  </td>
                  <td className="px-2.5 text-center">
                    <div className="flex justify-center">
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
                  </td>
                  <td className="px-2.5 text-center text-xs font-medium text-[#686868] group-hover:text-[#911A00]">
                    {comment.likes}
                  </td>
                  <td className="px-2.5 text-center text-xs font-medium text-[#686868] group-hover:text-[#911A00]">
                    {comment.reports}
                  </td>
                  <td className="px-2.5 text-center text-xs font-medium text-[#686868] group-hover:text-[#911A00]">
                    {comment.createdAt}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 페이지네이션 */}
        <div className="flex items-center justify-between self-stretch">
          <FilterDropdown
            value={itemsPerPage}
            options={['10개씩 보기', '20개씩 보기', '50개씩 보기']}
            onChange={setItemsPerPage}
            width="w-[140px]"
          />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
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
