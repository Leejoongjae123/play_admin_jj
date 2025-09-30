'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import SendNotificationModal from './components/SendNotificationModal';

interface Props {
  params: Promise<{ id: string }>;
}

export default function ProgramDetailPage({ params }: Props) {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: 'notification' | 'message' | null;
  }>({
    isOpen: false,
    type: null,
  });

  const handleOpenModal = (type: 'notification' | 'message') => {
    setModalState({ isOpen: true, type });
  };

  const handleCloseModal = () => {
    setModalState({ isOpen: false, type: null });
  };

  // params는 Promise이므로 컴포넌트 내에서 처리
  // 실제 구현에서는 useEffect나 다른 방법으로 처리해야 함
  // 현재는 임시로 id를 하드코딩
  const id = 'P0123';

  // 더미 데이터 - 실제로는 API에서 가져올 데이터
  const programData = {
    programId: 'P0123',
    applicationsCount: 32,
    registrationDate: '2025-08-28',
    viewCount: '1,245',
    scrapCount: 32,
    programName: '<바이하트> 북토크',
    eventDateTime: '2025-09-20 18:00',
    applicationPeriod: '2025-09-01 ~ 2025-09-18',
    venue: '인스크립트홀',
    capacity: '20명',
    information: '선착순 20명 입장 가능',
    keywords: ['북토크', '현대희곡', '현대극'],
    description: `『바이 하트』는 2013년 초연 이후 꾸준히 사랑받아온 현대 희곡으로,
영국 극작가 게리 오언(Gary Owen)의 작품입니다.
이 작품은 소시민의 일상과 감정, 사회적 현실을 직설적이면서도 따뜻하게 풀어낸
독특한 화법으로 잘 알려져 있습니다.`,
    isVisible: '노출중',
    status: '진행중',
  };

  const memoData = [
    {
      id: 'M210',
      author: 'user_001',
      content: '이번 작품 감동적이었어요!',
      likes: 2,
      comments: 2,
      reports: 0,
    },
    {
      id: 'M210',
      author: 'user_001',
      content: '번역 톤이 전반적으로 매끄럽습니다.',
      likes: 2,
      comments: 2,
      reports: 0,
    },
  ];

  const applicantsData = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    applicationDate: '2025.07.01 18:00',
    nickname: '홍길동',
    userId: 'ghdrlfehd',
    name: '홍길동',
    email: 'ghdrlfehd@gmail.com',
    phone: '010-1234-5678',
  }));

  return (
    <div className="flex w-full max-w-[1180px] p-8 bg-white rounded-[5px]">
      <div className="flex flex-col justify-center items-center gap-20 flex-1 p-11">
        {/* ���로그램 관리 섹션 */}
        <div className="flex flex-col items-start gap-10 self-stretch">
          <div className="flex flex-col items-end gap-4 self-stretch">
            <div className="flex justify-between items-center self-stretch">
              <h1 className="text-2xl font-bold text-gray-1">프로그램 관리</h1>
            </div>
            <div className="flex flex-col items-start self-stretch border border-gray-7">
              <div className="flex items-center self-stretch">
                <div className="flex h-12 items-center flex-1 border-b border-gray-7">
                  <div className="flex w-40 p-3 px-6 items-center gap-2.5 self-stretch bg-gray-7">
                    <span className="text-base text-gray-2">프로그램ID</span>
                  </div>
                  <div className="flex p-3 px-6 items-center gap-2.5 flex-1">
                    <span className="text-base text-gray-1">{programData.programId}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center self-stretch">
                <div className="flex h-12 items-center flex-1 border-b border-gray-7">
                  <div className="flex w-40 p-3 px-6 items-center gap-2.5 self-stretch bg-gray-7">
                    <span className="text-base text-gray-2">신청수</span>
                  </div>
                  <div className="flex p-3 px-6 items-center gap-2.5 flex-1">
                    <span className="text-base text-gray-1">{programData.applicationsCount}</span>
                  </div>
                </div>
                <div className="flex h-12 items-center flex-1 border-b border-gray-7">
                  <div className="flex w-40 p-3 px-6 items-center gap-2.5 self-stretch bg-gray-7">
                    <span className="text-base text-gray-2">등록일</span>
                  </div>
                  <div className="flex p-3 px-6 items-center gap-2.5 flex-1">
                    <span className="text-base text-gray-1">{programData.registrationDate}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center self-stretch">
                <div className="flex h-12 items-center flex-1 border-b border-gray-7">
                  <div className="flex w-40 p-3 px-6 items-center gap-2.5 self-stretch bg-gray-7">
                    <span className="text-base text-gray-2">조회수</span>
                  </div>
                  <div className="flex p-3 px-6 items-center gap-2.5 flex-1">
                    <span className="text-base text-gray-1">{programData.viewCount}</span>
                  </div>
                </div>
                <div className="flex h-12 items-center flex-1 border-b border-gray-7">
                  <div className="flex w-40 p-3 px-6 items-center gap-2.5 self-stretch bg-gray-7">
                    <span className="text-base text-gray-2">스크랩수</span>
                  </div>
                  <div className="flex p-3 px-6 items-center gap-2.5 flex-1">
                    <span className="text-base text-gray-1">{programData.scrapCount}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 프로그램 정보 섹션 */}
          <div className="flex flex-col items-start gap-4 self-stretch">
            <div className="flex justify-between items-center self-stretch">
              <h2 className="text-xl font-bold text-gray-1">프로그램 정보</h2>
            </div>
            <div className="flex flex-col items-start self-stretch border border-gray-7">
              <div className="flex w-full h-12 items-center border-b border-gray-7">
                <div className="flex w-40 p-3 px-6 items-center gap-2.5 flex-shrink-0 self-stretch bg-gray-7">
                  <span className="text-base text-gray-2">프로그램명</span>
                </div>
                <div className="flex p-3 px-6 items-center gap-2.5 flex-1">
                  <span className="text-base text-gray-1">{programData.programName}</span>
                </div>
              </div>
              <div className="flex items-center self-stretch">
                <div className="flex h-12 items-center flex-1 border-b border-gray-7">
                  <div className="flex w-40 p-3 px-6 items-center gap-2.5 self-stretch bg-gray-7">
                    <span className="text-base text-gray-2">행사일시</span>
                  </div>
                  <div className="flex p-3 px-6 items-center gap-2.5 flex-1">
                    <span className="text-base text-gray-1">{programData.eventDateTime}</span>
                  </div>
                </div>
                <div className="flex h-12 items-center flex-1 border-b border-gray-7">
                  <div className="flex w-40 p-3 px-6 items-center gap-2.5 self-stretch bg-gray-7">
                    <span className="text-base text-gray-2">신청기간</span>
                  </div>
                  <div className="flex p-3 px-6 items-center gap-2.5 flex-1">
                    <span className="text-base text-gray-1">{programData.applicationPeriod}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center self-stretch">
                <div className="flex h-12 items-center flex-1 border-b border-gray-7">
                  <div className="flex w-40 p-3 px-6 items-center gap-2.5 self-stretch bg-gray-7">
                    <span className="text-base text-gray-2">장소</span>
                  </div>
                  <div className="flex p-3 px-6 items-center gap-2.5 flex-1">
                    <span className="text-base text-gray-1">{programData.venue}</span>
                  </div>
                </div>
                <div className="flex h-12 items-center flex-1 border-b border-gray-7">
                  <div className="flex w-40 p-3 px-6 items-center gap-2.5 self-stretch bg-gray-7">
                    <span className="text-base text-gray-2">인원</span>
                  </div>
                  <div className="flex p-3 px-6 items-center gap-2.5 flex-1">
                    <span className="text-base text-gray-1">{programData.capacity}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center self-stretch">
                <div className="flex h-12 items-center flex-1 border-b border-gray-7">
                  <div className="flex w-40 p-3 px-6 items-center gap-2.5 self-stretch bg-gray-7">
                    <span className="text-base text-gray-2">안내사항</span>
                  </div>
                  <div className="flex p-3 px-6 items-center gap-2.5 flex-1">
                    <span className="text-base text-gray-1">{programData.information}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center self-stretch">
                <div className="flex h-12 items-center flex-1 border-b border-gray-7">
                  <div className="flex w-40 p-3 px-6 items-center gap-2.5 self-stretch bg-gray-7">
                    <span className="text-base text-gray-2">키워드</span>
                  </div>
                  <div className="flex p-3 px-6 items-center gap-2.5 flex-1">
                    <div className="flex items-start gap-1.5">
                      {programData.keywords.map((keyword, index) => (
                        <div
                          key={index}
                          className="flex py-2 px-2.5 justify-center items-center gap-2.5 rounded border border-primary"
                        >
                          <span className="text-sm font-medium text-primary">{keyword}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center self-stretch border-b border-gray-7">
                <div className="flex w-40 p-3 px-6 items-center gap-2.5 self-stretch bg-gray-7">
                  <span className="text-base text-gray-2">프로그램 소개</span>
                </div>
                <div className="flex p-3 px-6 items-center gap-2.5 flex-1">
                  <span className="text-base text-gray-1 whitespace-pre-line">{programData.description}</span>
                </div>
              </div>
              <div className="flex items-center self-stretch border-b border-gray-7">
                <div className="flex w-40 p-3 px-6 items-center gap-2.5 self-stretch bg-gray-7">
                  <span className="text-base text-gray-2">대표 이미지</span>
                </div>
                <div className="flex p-3 px-6 items-center gap-2.5 flex-1">
                  <div className="flex w-72 h-[199px] justify-center items-center gap-2.5 bg-gray-5">
                    <span className="text-3xl font-medium text-primary">*프로그램 이미지</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center self-stretch">
                <div className="flex h-12 items-center flex-1 border-b border-gray-7">
                  <div className="flex w-40 p-3 px-6 items-center gap-2.5 self-stretch bg-gray-7">
                    <span className="text-base text-gray-2">노출 여부</span>
                  </div>
                  <div className="flex p-3 px-6 items-center gap-2.5 flex-1">
                    <span className="text-base text-gray-1">{programData.isVisible}</span>
                  </div>
                </div>
                <div className="flex h-12 items-center flex-1 border-b border-gray-7">
                  <div className="flex w-40 p-3 px-6 items-center gap-2.5 self-stretch bg-gray-7">
                    <span className="text-base text-gray-2">상태</span>
                  </div>
                  <div className="flex p-3 px-6 items-center gap-2.5 flex-1">
                    <div className="flex py-1.5 px-3 justify-center items-center gap-2.5 rounded-full border border-[#B0D5F2] bg-[#F6FBFF]">
                      <span className="text-sm font-medium text-[#2581F9]">{programData.status}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 메모 관리 섹션 */}
          <div className="flex flex-col items-start gap-4 self-stretch">
            <div className="flex justify-between items-center self-stretch">
              <h2 className="text-xl font-bold text-gray-1">메모 관리</h2>
            </div>
            <div className="flex flex-col items-start self-stretch bg-white">
              <div className="flex py-2.5 px-6 justify-between items-center self-stretch border-b border-gray-7 bg-gray-7">
                <span className="w-14 text-sm font-medium text-gray-4 text-center">메모ID</span>
                <span className="w-[116px] text-sm font-medium text-gray-4 text-center">작성자</span>
                <div className="flex w-[316px] max-w-[316px] justify-center items-center gap-10">
                  <span className="max-w-[316px] flex-1 text-base text-gray-2 text-center">내용 (앞 50자)</span>
                </div>
                <span className="w-11 text-sm font-medium text-gray-4 text-center">좋아요</span>
                <span className="w-11 text-base text-gray-2 text-center">댓글</span>
                <span className="w-11 text-base text-gray-2 text-center">신고</span>
                <span className="w-18 text-base text-gray-2 text-center opacity-75">상세</span>
              </div>
              {memoData.map((memo, index) => (
                <div key={index} className="flex py-2.5 px-6 justify-between items-center self-stretch border-b border-gray-7">
                  <span className="w-14 text-base text-gray-1 text-center">{memo.id}</span>
                  <span className="w-[116px] text-sm font-medium text-gray-4 text-center">{memo.author}</span>
                  <div className="flex w-[316px] max-w-[520px] justify-center items-center gap-10">
                    <div className="flex justify-center items-center gap-2.5 flex-1">
                      <span className="max-w-[316px] max-h-6 flex-1 text-base text-gray-1">{memo.content}</span>
                    </div>
                  </div>
                  <span className="w-11 text-sm font-medium text-gray-4 text-center">{memo.likes}</span>
                  <span className="w-11 text-sm font-medium text-gray-4 text-center">{memo.comments}</span>
                  <span className="w-11 text-sm font-medium text-gray-4 text-center">{memo.reports}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex py-2.5 px-3 justify-center items-center gap-1.5 rounded border border-primary bg-white"
                  >
                    <span className="text-sm font-bold text-primary">상세보기</span>
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* 신청자 목록 섹션 */}
          <div className="flex flex-col items-center gap-6 self-stretch">
            <div className="flex justify-between items-center self-stretch">
              <h2 className="flex-1 text-xl font-bold text-gray-1">신청자 목록</h2>
            </div>
            <div className="flex items-start gap-4">
              <Button
                variant="default"
                size="sm"
                className="flex w-[184px] h-[52px] py-2.5 px-14 justify-center items-center gap-2.5 rounded bg-primary"
                onClick={() => handleOpenModal('notification')}
              >
                <span className="text-lg font-bold text-white">알림 보내기</span>
              </Button>
              <Button
                variant="default"
                size="sm"
                className="flex w-[184px] h-[52px] py-2.5 px-14 justify-center items-center gap-2.5 rounded bg-primary"
                onClick={() => handleOpenModal('message')}
              >
                <span className="text-lg font-bold text-white">쪽지 보내기</span>
              </Button>
              <Button variant="default" size="sm" className="flex w-[184px] h-[52px] py-2.5 px-14 justify-center items-center gap-2.5 rounded bg-primary">
                <span className="text-lg font-bold text-white">메일 보내기</span>
              </Button>
              <Button variant="default" size="sm" className="flex w-[184px] h-[52px] py-2.5 px-14 justify-center items-center gap-2.5 rounded bg-primary">
                <span className="text-lg font-bold text-white">문자 보내기</span>
              </Button>
            </div>
            <div className="flex flex-col items-center gap-6 self-stretch">
              <div className="flex flex-col items-start self-stretch bg-white">
                <div className="flex py-2.5 px-6 justify-between items-center self-stretch border-b border-gray-7 bg-gray-7">
                  <span className="w-14 text-sm font-medium text-gray-4 text-center">순번</span>
                  <span className="w-[214px] text-base text-gray-2 text-center">신청일시</span>
                  <span className="w-[190px] text-base text-gray-2 text-center">닉네임(아이디)</span>
                  <div className="flex w-[116px] max-w-[116px] justify-center items-center gap-10">
                    <span className="w-[116px] max-w-[116px] text-base text-gray-2 text-center">이름</span>
                  </div>
                  <div className="flex w-[180px] max-w-[180px] justify-center items-center gap-10">
                    <span className="max-w-[520px] text-base text-gray-2 text-center">이메일</span>
                  </div>
                  <div className="flex w-[114px] max-w-[114px] justify-center items-center gap-10">
                    <span className="max-w-[520px] text-base text-gray-2 text-center">휴대전화</span>
                  </div>
                </div>
                {applicantsData.map((applicant, index) => (
                  <div key={index} className="flex w-full py-2.5 px-6 justify-between items-center border-b border-gray-7">
                    <span className="w-14 flex-shrink-0 text-base text-gray-1 text-center">{applicant.id}</span>
                    <div className="flex w-[214px] max-w-[520px] justify-center items-center gap-10 flex-shrink-0">
                      <div className="flex justify-center items-center gap-2.5">
                        <span className="h-6 max-w-[200px] max-h-6 flex-1 overflow-hidden text-base text-gray-1 text-center text-ellipsis whitespace-nowrap">
                          {applicant.applicationDate}
                        </span>
                      </div>
                    </div>
                    <div className="flex w-[190px] items-center gap-1 flex-shrink-0">
                      <div className="w-6 h-6 flex-shrink-0 aspect-square bg-gray-5 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-4 text-center">
                        {applicant.nickname} ({applicant.userId})
                      </span>
                    </div>
                    <span className="w-[116px] flex-shrink-0 text-sm font-medium text-gray-4 text-center">{applicant.name}</span>
                    <span className="w-[180px] max-w-[180px] flex-shrink-0 text-base text-gray-1 text-center">{applicant.email}</span>
                    <span className="w-[114px] max-w-[114px] flex-shrink-0 text-base text-gray-1 text-center">{applicant.phone}</span>
                  </div>
                ))}
              </div>
              {/* 페이지네이션 */}
              <div className="flex justify-center items-center gap-4 self-stretch">
                <ArrowLeft className="w-6 h-6 text-gray-4" />
                <div className="flex items-center gap-2">
                  <div className="flex w-6 h-6 flex-col justify-center items-center gap-2.5 rounded-sm bg-primary">
                    <span className="text-sm font-medium text-white">1</span>
                  </div>
                  <div className="flex w-6 h-6 flex-col justify-center items-center gap-2.5">
                    <span className="text-sm font-medium text-orange-3">2</span>
                  </div>
                  <div className="flex w-6 h-6 flex-col justify-center items-center gap-2.5">
                    <span className="text-sm font-medium text-orange-3">...</span>
                  </div>
                  <div className="flex w-6 h-6 flex-col justify-center items-center gap-2.5">
                    <span className="text-sm font-medium text-orange-3">9</span>
                  </div>
                  <div className="flex w-6 h-6 flex-col justify-center items-center gap-2.5">
                    <span className="text-sm font-medium text-orange-3">10</span>
                  </div>
                </div>
                <ArrowRight className="w-6 h-6 text-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* 하단 버튼들 */}
        <div className="flex w-full justify-between items-center">
          <Button variant="outline" className="flex py-2.5 px-3 justify-center items-center gap-1.5 rounded border border-gray-4 bg-white">
            <svg width="16" height="16" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.6875 4.89062H14.6875V6.22396H2.6875V4.89062ZM2.6875 8.22396H14.6875V9.55729H2.6875V8.22396ZM2.6875 11.5573H14.6875V12.8906H2.6875V11.5573Z" fill="#555555"/>
            </svg>
            <span className="text-sm font-bold text-gray-2">목록으로</span>
          </Button>
          <div className="flex items-center gap-2.5">
            <Button variant="outline" className="flex py-2.5 px-3 justify-center items-center gap-1.5 rounded border border-primary bg-white">
              <span className="text-sm font-bold text-primary">삭제</span>
            </Button>
            <Button variant="default" className="flex py-2.5 px-3 justify-center items-center gap-1.5 rounded bg-primary">
              <span className="text-sm font-bold text-white">수정</span>
            </Button>
          </div>
        </div>
      </div>

      {/* 모달 */}
      <SendNotificationModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        type={modalState.type || 'notification'}
      />
    </div>
  );
}
