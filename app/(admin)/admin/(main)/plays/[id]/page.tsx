'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Hamburger from '@/components/icons/Hamburger';

interface PlayDetailData {
  id: string;
  registeredBy: string;
  registeredAt: string;
  viewCount: number;
  bookmarkCount: number;
  title: string;
  writer: string;
  publicStatus: string;
  publicHistory: string;
  keywords: string[];
  representativeLine: string;
  summary: string;
  isVisible: boolean;
}

interface MemoData {
  id: string;
  author: string;
  content: string;
  likeCount: number;
  commentCount: number;
  reportCount: number;
}

interface OperationLog {
  date: string;
  operator: string;
  eventType: string;
  details: string;
}

// Mock 데이터
const mockPlayData: PlayDetailData = {
  id: 'P0123',
  registeredBy: 'userB874 (이수현)',
  registeredAt: '2025-08-28',
  viewCount: 1245,
  bookmarkCount: 32,
  title: '시골에서의 한 달',
  writer: '이반 투르게네프/Ivan Turgenev',
  publicStatus: '출판',
  publicHistory: '[출판]『갈매기』 , 장한(옮김), 더클래식, 2021『갈매기/세 자매/바냐 아저씨/벚꽃 동산』 수록, 동완(옮김), 동서문화사, 2012',
  keywords: ['질투', '삼각관계', '사실주의'],
  representativeLine: '그래, 대체 이게 뭐지? 내가 베라를 질투하는 건가? 내 마음은 어째서 이렇게 갈피를 잡지 못하고 흔들리는 걸까?\n그래, 대체 이게 뭐지? 내가 베라를 질투하는 건가? 내 마음은 어째서 이렇게 갈피를 잡지 못하고 흔들리는 걸까?\n그래, 대체 이게 뭐지? 내가 베라를 질투하는 건가? 내 마음은 어째서 이렇게 갈피를 잡지 못하고 흔들리는 걸까?',
  summary: '러시아 귀족 가문의 시골 저택을 배경으로,\n지적이고 매혹적인 여성 \'나탈리아\'와 그녀를 둘러싼\n남편, 가정교사, 그리고 어린 베라 사이의 미묘한 감정선이 교차한다.\n\n사랑과 질투, 사회적 제약 속에서 흔들리는 인물들의 내면을\n사실적인 대화와 섬세한 심리 묘사로 풀어낸 작품이다.\n각자의 선택과 갈등이 파국으로 향하는 과정을 통해,\n\'사랑은 누구에게나 축복이자 고통\'임을 보여준다.',
  isVisible: true,
};

const mockMemoData: MemoData[] = [
  {
    id: 'M210',
    author: 'user_001',
    content: '��역 톤이 전반적으로 매끄럽습니다.',
    likeCount: 2,
    commentCount: 2,
    reportCount: 0,
  },
  {
    id: 'M210',
    author: 'user_001', 
    content: '번역 톤이 전반적으로 매끄럽습니다.',
    likeCount: 2,
    commentCount: 2,
    reportCount: 0,
  },
];

const mockOperationLogs: OperationLog[] = [
  {
    date: '2025-08-31',
    operator: 'user_001',
    eventType: '신청등록',
    details: '[햄릿, 다시 읽기]',
  },
  {
    date: '2025-08-31',
    operator: '시스템',
    eventType: '상태변경',
    details: '[햄릿, 다시 읽기]',
  },
  {
    date: '2025-08-31',
    operator: 'user_001',
    eventType: '승인',
    details: '[햄릿, 다시 읽기]',
  },
  {
    date: '2025-08-31',
    operator: '시스템',
    eventType: '알림 발송',
    details: '[햄릿, 다시 읽기]',
  },
];

export default function PlayDetailPage() {
  return (
    <div className="flex w-full max-w-[1180px] flex-col gap-20 rounded-md bg-white p-11">
      {/* 희곡 관리 섹션 */}
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h1 className="font-pretendard text-2xl font-bold leading-8 text-gray-1">희곡 관리</h1>
          </div>

          {/* ��곡 기본 정보 테이블 */}
          <div className="border border-gray-7">
            {/* 첫 번째 행 */}
            <div className="flex">
              <div className="flex h-12 w-40 items-center bg-gray-7 px-6 py-2.5">
                <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">작품ID</span>
              </div>
              <div className="flex h-12 flex-1 items-center border-b border-gray-7 px-6 py-2.5">
                <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-1">
                  {mockPlayData.id}
                </span>
              </div>
            </div>

            {/* 두 번째 행 */}
            <div className="flex">
              <div className="flex h-12 w-40 items-center bg-gray-7 px-6 py-2.5">
                <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">등록자</span>
              </div>
              <div className="flex h-12 flex-1 items-center border-b border-gray-7 px-6 py-2.5">
                <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-1">
                  {mockPlayData.registeredBy}
                </span>
              </div>
              <div className="flex h-12 w-40 items-center bg-gray-7 px-6 py-2.5">
                <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">등록일</span>
              </div>
              <div className="flex h-12 flex-1 items-center border-b border-gray-7 px-6 py-2.5">
                <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-1">
                  {mockPlayData.registeredAt}
                </span>
              </div>
            </div>

            {/* 세 번째 행 */}
            <div className="flex">
              <div className="flex h-12 w-40 items-center bg-gray-7 px-6 py-2.5">
                <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">조회수</span>
              </div>
              <div className="flex h-12 flex-1 items-center px-6 py-2.5">
                <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-1">
                  {mockPlayData.viewCount.toLocaleString()}
                </span>
              </div>
              <div className="flex h-12 w-40 items-center bg-gray-7 px-6 py-2.5">
                <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">스크랩수</span>
              </div>
              <div className="flex h-12 flex-1 items-center px-6 py-2.5">
                <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-1">
                  {mockPlayData.bookmarkCount}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 작품정보 섹션 */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="font-pretendard text-xl font-bold leading-6 text-gray-1">작품정보</h2>
          </div>

          <div className="border border-gray-7">
            {/* 제목 */}
            <div className="flex">
              <div className="flex h-12 w-40 items-center bg-gray-7 px-6 py-2.5">
                <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">제목</span>
              </div>
              <div className="flex h-12 flex-1 items-center border-b border-gray-7 px-6 py-2.5">
                <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-1">
                  {mockPlayData.title}
                </span>
              </div>
            </div>

            {/* 작가 */}
            <div className="flex">
              <div className="flex h-12 w-40 items-center bg-gray-7 px-6 py-2.5">
                <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">작가 (한글/영문)</span>
              </div>
              <div className="flex h-12 flex-1 items-center border-b border-gray-7 px-6 py-2.5">
                <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-1">
                  {mockPlayData.writer}
                </span>
              </div>
            </div>

            {/* 출간여부와 출간내역 */}
            <div className="flex">
              <div className="flex items-center bg-gray-7 px-6 py-2.5">
                <div className="flex h-12 w-40 items-center">
                  <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">출간여부</span>
                </div>
              </div>
              <div className="flex flex-1 items-center border-b border-gray-7 px-6 py-2.5">
                <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">
                  {mockPlayData.publicStatus}
                </span>
              </div>
              <div className="flex items-center bg-gray-7 px-6 py-2.5">
                <div className="flex h-12 w-40 items-center">
                  <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">출간내역</span>
                </div>
              </div>
              <div className="flex flex-1 items-center border-b border-gray-7 px-6 py-2.5">
                <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">
                  {mockPlayData.publicHistory}
                </span>
              </div>
            </div>

            {/* 키워드 */}
            <div className="flex">
              <div className="flex h-12 w-40 items-center bg-gray-7 px-6 py-2.5">
                <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">키워드</span>
              </div>
              <div className="flex flex-1 items-center border-b border-gray-7 px-6 py-2.5">
                <div className="flex items-start gap-1.5">
                  {mockPlayData.keywords.map((keyword, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center gap-2.5 rounded border border-primary bg-white px-2.5 py-2"
                    >
                      <span className="font-pretendard text-sm font-medium leading-4 text-primary">
                        {keyword}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 대표대사 */}
            <div className="flex">
              <div className="flex items-center bg-gray-7 px-6 py-2.5">
                <div className="flex w-40 items-center">
                  <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">대표대사</span>
                </div>
              </div>
              <div className="flex flex-1 items-center border-b border-gray-7 px-6 py-2.5">
                <div className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-1">
                  {mockPlayData.representativeLine.split('\n').map((line, index) => (
                    <div key={index}>{line}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* 줄거리 */}
            <div className="flex">
              <div className="flex items-center bg-gray-7 px-6 py-2.5">
                <div className="flex w-40 items-center">
                  <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">줄거리</span>
                </div>
              </div>
              <div className="flex flex-1 items-center border-b border-gray-7 px-6 py-2.5">
                <div className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-1">
                  {mockPlayData.summary.split('\n').map((line, index) => (
                    <div key={index}>{line}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* 노출 여부 */}
            <div className="flex">
              <div className="flex h-12 w-40 items-center bg-gray-7 px-6 py-2.5">
                <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">노출 여부</span>
              </div>
              <div className="flex h-12 flex-1 items-center px-6 py-2.5">
                <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-1">
                  {mockPlayData.isVisible ? '노출중' : '비노출'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 메모관리 섹션 */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="font-pretendard text-xl font-bold leading-6 text-gray-1">메모관리</h2>
          </div>

          <div className="flex flex-col bg-white">
            {/* 테이블 헤더 */}
            <div className="flex items-center justify-between bg-gray-7 px-6 py-2.5 border-b border-gray-7">
              <div className="w-[54px] text-center">
                <span className="font-pretendard text-sm font-medium leading-4 text-gray-6">메모ID</span>
              </div>
              <div className="w-[116px] text-center">
                <span className="font-pretendard text-sm font-medium leading-4 text-gray-6">작성자</span>
              </div>
              <div className="flex max-w-[316px] flex-1 items-center justify-center gap-10">
                <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">내용 (앞 50자)</span>
              </div>
              <div className="w-11 text-center">
                <span className="font-pretendard text-sm font-medium leading-4 text-gray-6">좋아요</span>
              </div>
              <div className="w-11 text-center">
                <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">댓글</span>
              </div>
              <div className="w-11 text-center">
                <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">신고</span>
              </div>
              <div className="w-[72px] text-center">
                <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-2 opacity-75">상세</span>
              </div>
            </div>

            {/* 테이블 본문 */}
            {mockMemoData.map((memo, index) => (
              <div key={index} className="flex items-center justify-between px-6 py-2.5 border-b border-gray-7">
                <div className="w-[54px] text-center">
                  <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-1">
                    {memo.id}
                  </span>
                </div>
                <div className="w-[116px] text-center">
                  <span className="font-pretendard text-sm font-medium leading-4 text-gray-6">
                    {memo.author}
                  </span>
                </div>
                <div className="flex w-[316px] max-w-[520px] items-center justify-center gap-10">
                  <div className="flex flex-1 items-center justify-center gap-2.5">
                    <span className="max-h-6 max-w-[316px] flex-1 font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-1">
                      {memo.content}
                    </span>
                  </div>
                </div>
                <div className="w-11 text-center">
                  <span className="font-pretendard text-sm font-medium leading-4 text-gray-6">
                    {memo.likeCount}
                  </span>
                </div>
                <div className="w-11 text-center">
                  <span className="font-pretendard text-sm font-medium leading-4 text-gray-6">
                    {memo.commentCount}
                  </span>
                </div>
                <div className="w-11 text-center">
                  <span className="font-pretendard text-sm font-medium leading-4 text-gray-6">
                    {memo.reportCount}
                  </span>
                </div>
                <div className="w-[72px] flex justify-center">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center justify-center gap-1.5 rounded border border-primary bg-white px-3 py-2.5 hover:bg-gray-6"
                  >
                    <span className="font-pretendard text-sm font-bold tracking-[-0.28px] text-primary">상세보기</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 운영로그 섹션 */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="font-pretendard text-xl font-bold leading-6 text-gray-1">운영로그</h2>
            <Button
              variant="outline"
              className="flex items-center gap-3 rounded border-[1.6px] border-[#4CA452] bg-white px-3 py-2.5 hover:bg-gray-6"
            >
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.66602 5.49967V2.49967C2.66602 2.32286 2.73625 2.15329 2.86128 2.02827C2.9863 1.90325 3.15587 1.83301 3.33268 1.83301H12.666C12.8428 1.83301 13.0124 1.90325 13.1374 2.02827C13.2624 2.15329 13.3327 2.32286 13.3327 2.49967V14.4997C13.3327 14.6765 13.2624 14.8461 13.1374 14.9711C13.0124 15.0961 12.8428 15.1663 12.666 15.1663H3.33268C3.15587 15.1663 2.9863 15.0961 2.86128 14.9711C2.73625 14.8461 2.66602 14.6765 2.66602 14.4997V11.4997"
                  stroke="#4CA452"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.333 5.5H11.333M9.33301 8.16667H11.333M9.33301 10.8333H11.333"
                  stroke="#4CA452"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
                <path
                  d="M3.33301 7.5L5.33301 9.5M5.33301 7.5L3.33301 9.5M1.33301 5.5H7.33301V11.5H1.33301V5.5Z"
                  stroke="#4CA452"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-pretendard text-sm font-bold tracking-[-0.28px] text-[#4CA452]">엑셀 다운로드</span>
            </Button>
          </div>

          <div className="flex flex-col bg-white">
            {/* 테이블 헤더 */}
            <div className="flex items-center gap-[60px] bg-gray-7 px-6 py-2.5 border-b border-gray-7">
              <div className="w-[116px] text-center">
                <span className="font-pretendard text-sm font-medium leading-4 text-gray-6">신청 일자</span>
              </div>
              <div className="w-20 text-center">
                <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">운영자/회원</span>
              </div>
              <div className="w-20 text-center">
                <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">이벤트 유형</span>
              </div>
              <div className="flex w-[520px] max-w-[520px] items-center justify-center gap-10">
                <div className="flex items-center gap-2.5">
                  <span className="max-w-[520px] font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">상세 내용</span>
                </div>
              </div>
            </div>

            {/* 테이블 본문 */}
            {mockOperationLogs.map((log, index) => (
              <div key={index} className="flex items-center gap-[60px] px-6 py-2.5 border-b border-gray-7">
                <div className="w-[116px] text-center">
                  <span className="font-pretendard text-sm font-medium leading-4 text-gray-6">
                    {log.date}
                  </span>
                </div>
                <div className="w-20 text-center">
                  <span className="font-pretendard text-sm font-medium leading-4 text-gray-6">
                    {log.operator}
                  </span>
                </div>
                <div className="w-20 text-center">
                  <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-1">
                    {log.eventType}
                  </span>
                </div>
                <div className="flex w-[520px] max-w-[520px] items-center justify-center gap-10">
                  <div className="flex items-center gap-2.5">
                    <span className="max-w-[520px] font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-1">
                      {log.details}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 하단 버튼들 */}
      <div className="flex w-full items-center justify-between">
        <Button
          variant="outline"
          className="flex items-center gap-1.5 rounded border border-gray-4 bg-white px-3 py-2.5 hover:bg-gray-6"
        >
          <Hamburger size={16} color="#555555" />
          <span className="font-pretendard text-sm font-bold tracking-[-0.28px] text-gray-2">목록으로</span>
        </Button>
        <div className="flex items-center gap-2.5">
          <Button
            variant="outline"
            className="flex items-center justify-center gap-1.5 rounded border border-primary bg-white px-3 py-2.5 hover:bg-gray-6"
          >
            <span className="font-pretendard text-sm font-bold tracking-[-0.28px] text-primary">삭제</span>
          </Button>
          <Button
            variant="default"
            className="flex items-center justify-center gap-1.5 rounded bg-primary px-3 py-2.5 hover:bg-primary/90"
          >
            <span className="font-pretendard text-sm font-bold tracking-[-0.28px] text-white">수정</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
