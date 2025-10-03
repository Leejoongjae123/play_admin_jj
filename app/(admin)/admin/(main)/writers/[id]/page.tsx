'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Hamburger from '@/components/icons/Hamburger';
import { WriterDetailData, PlayData, MemoData } from './types';

interface WriterDetailPageProps {
  params: Promise<{ id: string }>;
}

// Mock 데이터
const mockWriterData: WriterDetailData = {
  writerId: 'P0123',
  id: 'qwe12@gmail.com',
  email: 'qwe12@gmail.com',
  userId: 'userA123',
  registrationDate: '2025-08-28',
  viewCount: 1245,
  scrapCount: 32,
  name: '이반 투르게네프',
  nameEn: 'Ivan Turgenev',
  genre: '현대극',
  keywords: ['질투', '삼각관계', '사실주의'],
  description: '현대적 시선으로 고전을 재해석하며, 서정적인 언어로 희곡을 집필하는 젊은 ��가.',
  isVisible: true,
};

const mockPlayData: PlayData[] = [
  {
    playId: 'P210',
    title: '갈라테아',
    registrationDate: '2025-08-10',
    likeCount: 3,
    commentCount: 2,
    reportCount: 0,
  },
  {
    playId: 'P210',
    title: '문은 열려있거나 닫혀 있어야 하오',
    registrationDate: '2025-08-10',
    likeCount: 3,
    commentCount: 2,
    reportCount: 0,
  },
];

const mockMemoData: MemoData[] = [
  {
    memoId: 'M210',
    author: 'user_001',
    content: '이번 작품 감동적이었어요!',
    likeCount: 2,
    commentCount: 2,
    reportCount: 0,
  },
  {
    memoId: 'M210',
    author: 'user_001',
    content: '번역 톤이 전반적으로 매끄럽습니다.',
    likeCount: 2,
    commentCount: 2,
    reportCount: 0,
  },
];

export default function WriterDetailPage({ params }: WriterDetailPageProps) {
  return (
    <div className='bg-transparent p-8'>
    <div className="flex w-full flex-col gap-20 rounded bg-white p-11">
      {/* 작가 관리 섹션 */}
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h1 className="font-pretendard text-2xl font-bold leading-8 text-gray-1">작가 관리</h1>
          </div>

          {/* 작가 기본 정보 테이블 */}
          <div className="border border-gray-7">
            {/* 첫 번째 행 */}
            <div className="flex">
              <div className="flex h-12 w-40 items-center bg-gray-7 px-6">
                <span className="font-pretendard text-base font-normal text-gray-2">작가ID</span>
              </div>
              <div className="flex h-12 flex-1 items-center border-b border-gray-7 px-6">
                <span className="font-pretendard text-base font-normal text-gray-1">
                  {mockWriterData.writerId}
                </span>
              </div>
            </div>

            {/* 두 번째 행 */}
            <div className="flex">
              <div className="flex h-12 w-40 items-center bg-gray-7 px-6">
                <span className="font-pretendard text-base font-normal text-gray-2">ID</span>
              </div>
              <div className="flex h-12 flex-1 items-center border-b border-gray-7 px-6">
                <span className="font-pretendard text-base font-normal text-gray-1">
                  {mockWriterData.email} (회원ID {mockWriterData.userId})
                </span>
              </div>
              <div className="flex h-12 w-40 items-center bg-gray-7 px-6">
                <span className="font-pretendard text-base font-normal text-gray-2">등록일</span>
              </div>
              <div className="flex h-12 flex-1 items-center border-b border-gray-7 px-6">
                <span className="font-pretendard text-base font-normal text-gray-1">
                  {mockWriterData.registrationDate}
                </span>
              </div>
            </div>

            {/* 세 번째 행 */}
            <div className="flex">
              <div className="flex h-12 w-40 items-center bg-gray-7 px-6">
                <span className="font-pretendard text-base font-normal text-gray-2">조회수</span>
              </div>
              <div className="flex h-12 flex-1 items-center px-6">
                <span className="font-pretendard text-base font-normal text-gray-1">
                  {mockWriterData.viewCount.toLocaleString()}
                </span>
              </div>
              <div className="flex h-12 w-40 items-center bg-gray-7 px-6">
                <span className="font-pretendard text-base font-normal text-gray-2">스크랩수</span>
              </div>
              <div className="flex h-12 flex-1 items-center px-6">
                <span className="font-pretendard text-base font-normal text-gray-1">
                  {mockWriterData.scrapCount}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 작��� 정보 섹션 */}
        <div className="flex flex-col gap-4">
          <h2 className="font-pretendard text-xl font-bold text-gray-1">작가 정보</h2>
          <div className="border border-gray-7">
            {/* 작가명 행 */}
            <div className="flex">
              <div className="flex h-12 w-40 items-center bg-gray-7 px-6">
                <span className="font-pretendard text-base font-normal text-gray-2">작가명</span>
              </div>
              <div className="flex h-12 flex-1 items-center border-b border-gray-7 px-6">
                <span className="font-pretendard text-base font-normal text-gray-1">
                  {mockWriterData.name}
                </span>
              </div>
              <div className="flex h-12 w-40 items-center bg-gray-7 px-6">
                <span className="font-pretendard text-base font-normal text-gray-2">작가명(영문)</span>
              </div>
              <div className="flex h-12 flex-1 items-center border-b border-gray-7 px-6">
                <span className="font-pretendard text-base font-normal text-gray-1">
                  {mockWriterData.nameEn}
                </span>
              </div>
            </div>

            {/* 장르 행 */}
            <div className="flex">
              <div className="flex h-12 w-40 items-center bg-gray-7 px-6">
                <span className="font-pretendard text-base font-normal text-gray-2">장르</span>
              </div>
              <div className="flex h-12 flex-1 items-center border-b border-gray-7 px-6">
                <span className="font-pretendard text-base font-normal text-gray-1">
                  {mockWriterData.genre}
                </span>
              </div>
            </div>

            {/* 키워드 행 */}
            <div className="flex">
              <div className="flex h-12 w-40 items-center bg-gray-7 px-6">
                <span className="font-pretendard text-base font-normal text-gray-2">키워드</span>
              </div>
              <div className="flex h-12 flex-1 items-center border-b border-gray-7 px-6">
                <div className="flex gap-1.5">
                  {mockWriterData.keywords.map((keyword, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="rounded border border-primary px-2.5 py-2 text-sm font-medium text-primary"
                    >
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* 작가 소개 행 */}
            <div className="flex">
              <div className="flex w-40 items-center bg-gray-7 px-6 py-2.5">
                <span className="font-pretendard text-base font-normal text-gray-2">작가 소개</span>
              </div>
              <div className="flex flex-1 items-center border-b border-gray-7 px-6 py-2.5">
                <span className="font-pretendard text-base font-normal text-gray-1">
                  {mockWriterData.description}
                </span>
              </div>
            </div>

            {/* 노출 여부 행 */}
            <div className="flex">
              <div className="flex h-12 w-40 items-center bg-gray-7 px-6">
                <span className="font-pretendard text-base font-normal text-gray-2">노출 여부</span>
              </div>
              <div className="flex h-12 flex-1 items-center px-6">
                <span className="font-pretendard text-base font-normal text-gray-1">
                  {mockWriterData.isVisible ? '노출중' : '미노출'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 작품 현황 섹션 */}
        <div className="flex flex-col gap-4">
          <h2 className="font-pretendard text-xl font-bold text-gray-1">작품 현황</h2>
          <div className="flex flex-col bg-white">
            {/* 테이블 헤더 */}
            <div className="flex items-center justify-between bg-gray-7 px-6 py-2.5">
              <div className="w-[54px] text-center">
                <span className="font-pretendard text-sm font-medium text-gray-4">작품ID</span>
              </div>
              <div className="flex w-[214px] justify-center">
                <span className="font-pretendard text-base font-normal text-gray-2">작품명</span>
              </div>
              <div className="w-[116px] text-center">
                <span className="font-pretendard text-sm font-medium text-gray-4">등록일</span>
              </div>
              <div className="w-[44px] text-center">
                <span className="font-pretendard text-sm font-medium text-gray-4">좋아요</span>
              </div>
              <div className="w-[44px] text-center">
                <span className="font-pretendard text-base font-normal text-gray-2">댓글</span>
              </div>
              <div className="w-[44px] text-center">
                <span className="font-pretendard text-base font-normal text-gray-2">신고</span>
              </div>
              <div className="w-[72px] text-center">
                <span className="font-pretendard text-base font-normal text-gray-2 opacity-75">상세</span>
              </div>
            </div>

            {/* 테이블 본문 */}
            {mockPlayData.map((play, index) => (
              <div key={index} className="flex items-center justify-between border-b border-gray-7 px-6 py-2.5">
                <div className="w-[54px] text-center">
                  <span className="font-pretendard text-base font-normal text-gray-1">{play.playId}</span>
                </div>
                <div className="flex w-[214px] justify-center">
                  <div className="max-w-[200px] truncate">
                    <span className="font-pretendard text-base font-normal text-gray-1">{play.title}</span>
                  </div>
                </div>
                <div className="w-[116px] text-center">
                  <span className="font-pretendard text-sm font-medium text-gray-4">{play.registrationDate}</span>
                </div>
                <div className="w-[44px] text-center">
                  <span className="font-pretendard text-sm font-medium text-gray-4">{play.likeCount}</span>
                </div>
                <div className="w-[44px] text-center">
                  <span className="font-pretendard text-sm font-medium text-gray-4">{play.commentCount}</span>
                </div>
                <div className="w-[44px] text-center">
                  <span className="font-pretendard text-sm font-medium text-gray-4">{play.reportCount}</span>
                </div>
                <div className="w-[72px] text-center">
                  <Button
                    variant="outline"
                    className="h-9 rounded border border-primary bg-white px-3 py-2.5 hover:bg-gray-6"
                  >
                    <span className="font-pretendard text-sm font-bold text-primary">상세보기</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 메모 관리 섹션 */}
        <div className="flex flex-col gap-4">
          <h2 className="font-pretendard text-xl font-bold text-gray-1">메모 관리</h2>
          <div className="flex flex-col bg-white">
            {/* 테이블 헤더 */}
            <div className="flex items-center justify-between bg-gray-7 px-6 py-2.5">
              <div className="w-[54px] text-center">
                <span className="font-pretendard text-sm font-medium text-gray-4">메모ID</span>
              </div>
              <div className="w-[116px] text-center">
                <span className="font-pretendard text-sm font-medium text-gray-4">작성자</span>
              </div>
              <div className="flex w-[316px] justify-center">
                <span className="font-pretendard text-base font-normal text-gray-2">내용 (앞 50자)</span>
              </div>
              <div className="w-[44px] text-center">
                <span className="font-pretendard text-sm font-medium text-gray-4">좋아요</span>
              </div>
              <div className="w-[44px] text-center">
                <span className="font-pretendard text-base font-normal text-gray-2">댓글</span>
              </div>
              <div className="w-[44px] text-center">
                <span className="font-pretendard text-base font-normal text-gray-2">신고</span>
              </div>
              <div className="w-[72px] text-center">
                <span className="font-pretendard text-base font-normal text-gray-2 opacity-75">상세</span>
              </div>
            </div>

            {/* 테이블 본문 */}
            {mockMemoData.map((memo, index) => (
              <div key={index} className="flex items-center justify-between border-b border-gray-7 px-6 py-2.5">
                <div className="w-[54px] text-center">
                  <span className="font-pretendard text-base font-normal text-gray-1">{memo.memoId}</span>
                </div>
                <div className="w-[116px] text-center">
                  <span className="font-pretendard text-sm font-medium text-gray-4">{memo.author}</span>
                </div>
                <div className="flex w-[316px] justify-center">
                  <div className="max-w-[316px] truncate">
                    <span className="font-pretendard text-base font-normal text-gray-1">{memo.content}</span>
                  </div>
                </div>
                <div className="w-[44px] text-center">
                  <span className="font-pretendard text-sm font-medium text-gray-4">{memo.likeCount}</span>
                </div>
                <div className="w-[44px] text-center">
                  <span className="font-pretendard text-sm font-medium text-gray-4">{memo.commentCount}</span>
                </div>
                <div className="w-[44px] text-center">
                  <span className="font-pretendard text-sm font-medium text-gray-4">{memo.reportCount}</span>
                </div>
                <div className="w-[72px] text-center">
                  <Button
                    variant="outline"
                    className="h-9 rounded border border-primary bg-white px-3 py-2.5 hover:bg-gray-6"
                  >
                    <span className="font-pretendard text-sm font-bold text-primary">상세보기</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 하단 버튼들 */}
      <div className="flex items-center justify-between">
        <button
          
          className="flex items-center gap-1.5 rounded border border-gray-4 bg-white hover:bg-gray-6 w-[94px] h-9 justify-center"
        >
          <Hamburger size={16} color="#555555" />
          <span className="font-pretendard text-sm font-bold text-gray-2">목록으로</span>
        </button>
        <div className="flex items-center gap-2.5">
          <button
            className="rounded border border-primary bg-white hover:bg-gray-6 w-12 h-9"
          >
            <span className="font-pretendard text-sm font-bold text-primary">삭제</span>
          </button>
          <button className="rounded bg-primary hover:bg-primary/90 w-12 h-9">
            <span className="font-pretendard text-sm font-bold text-white">수정</span>
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}
