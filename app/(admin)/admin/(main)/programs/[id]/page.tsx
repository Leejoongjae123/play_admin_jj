'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Pagination from '@/components/ui/pagination';
import SendNotificationModal from './components/SendNotificationModal';
import Hamburger from '@/components/icons/Hamburger';

interface ProgramDetailPageProps {
  params: Promise<{ id: string }>;
}

interface MemoData {
  id: string;
  author: string;
  content: string;
  likes: number;
  comments: number;
  reports: number;
}

interface ApplicantData {
  no: number;
  applicationDate: string;
  nickname: string;
  name: string;
  email: string;
  phone: string;
}

export default function ProgramDetailPage({ params }: ProgramDetailPageProps) {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'notification' | 'message'>('notification');

  // 목록 데이터
  const memoData: MemoData[] = [
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

  const applicantData: ApplicantData[] = Array.from({ length: 10 }, (_, i) => ({
    no: i + 1,
    applicationDate: '2025.07.01 18:00',
    nickname: '홍길동 (ghdrlfehd)',
    name: '홍길동',
    email: 'ghdrlfehd@gmail.com',
    phone: '010-1234-5678',
  }));

  const handleOpenModal = (type: 'notification' | 'message') => {
    setModalType(type);
    if (type === 'notification') {
      setIsNotificationModalOpen(true);
    } else {
      setIsMessageModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsNotificationModalOpen(false);
    setIsMessageModalOpen(false);
  };

  return (
    <div className="flex w-full flex-col items-start gap-20 p-8">
      <div className="flex w-full flex-col items-center justify-center gap-20 rounded-md bg-white p-11">
        {/* 프로그램 관리 섹션 */}
        <div className="flex w-full flex-col items-start gap-10">
          <div className="flex w-full flex-col items-end gap-4">
            <div className="flex w-full items-center justify-between">
              <h1 className="text-2xl font-bold leading-8 text-gray-1">프로그램 관리</h1>
            </div>

            {/* 기본 정보 테이블 */}
            <div className="flex w-full flex-col items-start border border-gray-7">
              {/* 첫 번째 줄 */}
              <div className="flex w-full items-center">
                <div className="flex h-12 w-40 items-center gap-2.5 border-b border-gray-7 bg-gray-7 px-6 py-2.5">
                  <span className="text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">
                    프로그램ID
                  </span>
                </div>
                <div className="flex h-12 flex-1 items-center gap-2.5 border-b border-gray-7 px-6 py-2.5">
                  <span className="text-base font-normal leading-6 tracking-[-0.32px] text-gray-1">
                    P0123
                  </span>
                </div>
              </div>

              {/* 두 번째 줄 */}
              <div className="flex w-full items-center">
                <div className="flex h-12 w-40 items-center gap-2.5 border-b border-gray-7 bg-gray-7 px-6 py-2.5">
                  <span className="text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">
                    신청수
                  </span>
                </div>
                <div className="flex h-12 flex-1 items-center gap-2.5 border-b border-gray-7 px-6 py-2.5">
                  <span className="text-base font-normal leading-6 tracking-[-0.32px] text-gray-1">
                    32
                  </span>
                </div>
                <div className="flex h-12 w-40 items-center gap-2.5 border-b border-gray-7 bg-gray-7 px-6 py-2.5">
                  <span className="text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">
                    등록일
                  </span>
                </div>
                <div className="flex h-12 flex-1 items-center gap-2.5 border-b border-gray-7 px-6 py-2.5">
                  <span className="text-base font-normal leading-6 tracking-[-0.32px] text-gray-1">
                    2025-08-28
                  </span>
                </div>
              </div>

              {/* 세 번째 줄 */}
              <div className="flex w-full items-center">
                <div className="flex h-12 w-40 items-center gap-2.5 border-b border-gray-7 bg-gray-7 px-6 py-2.5">
                  <span className="text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">
                    조회수
                  </span>
                </div>
                <div className="flex h-12 flex-1 items-center gap-2.5 border-b border-gray-7 px-6 py-2.5">
                  <span className="text-base font-normal leading-6 tracking-[-0.32px] text-gray-1">
                    1,245
                  </span>
                </div>
                <div className="flex h-12 w-40 items-center gap-2.5 border-b border-gray-7 bg-gray-7 px-6 py-2.5">
                  <span className="text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">
                    스크랩수
                  </span>
                </div>
                <div className="flex h-12 flex-1 items-center gap-2.5 border-b border-gray-7 px-6 py-2.5">
                  <span className="text-base font-normal leading-6 tracking-[-0.32px] text-gray-1">
                    32
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 프로그램 정보 섹션 */}
          <div className="flex w-full flex-col items-start gap-4">
            <div className="flex w-full items-center justify-between">
              <h2 className="text-xl font-bold leading-6 text-gray-1">프로그램 정보</h2>
            </div>

            <div className="flex w-full flex-col items-start border border-gray-7">
              {/* 프로그램명 */}
              <div className="flex h-12 w-full items-center border-b border-gray-7">
                <div className="flex w-40 items-center gap-2.5 self-stretch bg-gray-7 px-6 py-2.5">
                  <span className="text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">
                    프로그램명
                  </span>
                </div>
                <div className="flex flex-1 items-center gap-2.5 px-6 py-2.5">
                  <span className="text-base font-normal leading-6 tracking-[-0.32px] text-gray-1">
                    &lt;바이하트&gt; 북토크
                  </span>
                </div>
              </div>

              {/* 행사일시, 신청기간 */}
              <div className="flex w-full items-center">
                <div className="flex h-12 w-40 items-center gap-2.5 border-b border-gray-7 bg-gray-7 px-6 py-2.5">
                  <span className="text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">
                    행사일시
                  </span>
                </div>
                <div className="flex h-12 flex-1 items-center gap-2.5 border-b border-gray-7 px-6 py-2.5">
                  <span className="text-base font-normal leading-6 tracking-[-0.32px] text-gray-1">
                    2025-09-20 18:00
                  </span>
                </div>
                <div className="flex h-12 w-40 items-center gap-2.5 border-b border-gray-7 bg-gray-7 px-6 py-2.5">
                  <span className="text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">
                    신청기간
                  </span>
                </div>
                <div className="flex h-12 flex-1 items-center gap-2.5 border-b border-gray-7 px-6 py-2.5">
                  <span className="text-base font-normal leading-6 tracking-[-0.32px] text-gray-1">
                    2025-09-01 ~ 2025-09-18
                  </span>
                </div>
              </div>

              {/* 장소, 인원 */}
              <div className="flex w-full items-center">
                <div className="flex h-12 w-40 items-center gap-2.5 border-b border-gray-7 bg-gray-7 px-6 py-2.5">
                  <span className="text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">
                    장소
                  </span>
                </div>
                <div className="flex h-12 flex-1 items-center gap-2.5 border-b border-gray-7 px-6 py-2.5">
                  <span className="text-base font-normal leading-6 tracking-[-0.32px] text-gray-1">
                    인스크립트홀
                  </span>
                </div>
                <div className="flex h-12 w-40 items-center gap-2.5 border-b border-gray-7 bg-gray-7 px-6 py-2.5">
                  <span className="text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">
                    인원
                  </span>
                </div>
                <div className="flex h-12 flex-1 items-center gap-2.5 border-b border-gray-7 px-6 py-2.5">
                  <span className="text-base font-normal leading-6 tracking-[-0.32px] text-gray-1">
                    20명
                  </span>
                </div>
              </div>

              {/* 안내사항 */}
              <div className="flex h-12 w-full items-center border-b border-gray-7">
                <div className="flex w-40 items-center gap-2.5 self-stretch bg-gray-7 px-6 py-2.5">
                  <span className="text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">
                    안내사항
                  </span>
                </div>
                <div className="flex flex-1 items-center gap-2.5 px-6 py-2.5">
                  <span className="text-base font-normal leading-6 tracking-[-0.32px] text-gray-1">
                    선착순 20명 입장 가능
                  </span>
                </div>
              </div>

              {/* 키워드 */}
              <div className="flex w-full items-center border-b border-gray-7">
                <div className="flex w-40 items-center gap-2.5 self-stretch bg-gray-7 px-6 py-2.5">
                  <span className="text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">
                    키워드
                  </span>
                </div>
                <div className="flex flex-1 items-center gap-2.5 px-6 py-2.5">
                  <div className="flex items-start gap-1.5">
                    <Badge
                      variant="outline"
                      size="md"
                      className="border-primary text-primary"
                    >
                      북토크
                    </Badge>
                    <Badge
                      variant="outline"
                      size="md"
                      className="border-primary text-primary"
                    >
                      현대희곡
                    </Badge>
                    <Badge
                      variant="outline"
                      size="md"
                      className="border-primary text-primary"
                    >
                      현대극
                    </Badge>
                  </div>
                </div>
              </div>

              {/* 프로그램 소개 */}
              <div className="flex w-full items-center border-b border-gray-7">
                <div className="flex w-40 items-center gap-2.5 self-stretch bg-gray-7 px-6 py-2.5">
                  <span className="text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">
                    프로그램 소개
                  </span>
                </div>
                <div className="flex flex-1 items-center gap-2.5 px-6 py-2.5">
                  <span className="text-base font-normal leading-6 tracking-[-0.32px] text-gray-1">
                    『바이 하트』는 2013년 초연 이후 꾸준히 사랑받아온 현대 희곡으로, 
                    영국 극작가 게리 오언(Gary Owen)의 작품입니다. 
                    이 작품은 소시민의 일상과 감정, 사회적 현실을 직설적이면서도 따뜻하게 풀���낸 
                    독특한 화법으로 잘 알려져 있습니다.
                  </span>
                </div>
              </div>

              {/* 대표 이미지 */}
              <div className="flex w-full items-center border-b border-gray-7">
                <div className="flex w-40 items-center gap-2.5 self-stretch bg-gray-7 px-6 py-2.5">
                  <span className="text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">
                    대표 이미지
                  </span>
                </div>
                <div className="flex flex-1 items-center gap-2.5 px-6 py-2.5">
                  <div className="flex h-[199px] w-[288px] items-center justify-center bg-[#D9D9D9]">
                    <span className="text-[28px] font-medium leading-[150%] tracking-[-0.56px] text-primary">
                      *프로그램 이미지
                    </span>
                  </div>
                </div>
              </div>

              {/* 노출 여부, 상태 */}
              <div className="flex w-full items-center">
                <div className="flex h-12 w-40 items-center gap-2.5 border-b border-gray-7 bg-gray-7 px-6 py-2.5">
                  <span className="text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">
                    노출 여부
                  </span>
                </div>
                <div className="flex h-12 flex-1 items-center gap-2.5 border-b border-gray-7 px-6 py-2.5">
                  <span className="text-base font-normal leading-6 tracking-[-0.32px] text-gray-1">
                    노출중
                  </span>
                </div>
                <div className="flex h-12 w-40 items-center gap-2.5 border-b border-gray-7 bg-gray-7 px-6 py-2.5">
                  <span className="text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">
                    상태
                  </span>
                </div>
                <div className="flex h-12 flex-1 items-center gap-2.5 border-b border-gray-7 px-6 py-2.5">
                  <div className="flex items-center justify-center gap-2.5 rounded-full border border-[#B0D5F2] bg-[#F6FBFF] px-3 py-1.5">
                    <span className="text-sm font-medium leading-4 text-[#2581F9]">진행중</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 메모 관리 섹션 */}
          <div className="flex w-full flex-col items-start gap-4">
            <div className="flex w-full items-center justify-between">
              <h2 className="text-xl font-bold leading-6 text-gray-1">메모 관리</h2>
            </div>

            <div className="flex w-full flex-col items-start bg-white">
              {/* 메모 테이블 헤더 */}
              <div className="flex w-full items-center justify-between border-b border-gray-7 bg-gray-7 px-6 py-2.5">
                <div className="w-[54px] text-center text-sm font-medium leading-4 text-[#6A6A6A]">
                  메모ID
                </div>
                <div className="w-[116px] text-center text-sm font-medium leading-4 text-[#6A6A6A]">
                  작성자
                </div>
                <div className="flex w-[316px] max-w-[316px] items-center justify-center gap-10">
                  <div className="flex flex-1 items-center justify-center gap-2.5">
                    <span className="max-w-[316px] flex-1 text-center text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">
                      내용 (앞 50자)
                    </span>
                  </div>
                </div>
                <div className="w-[44px] text-center text-sm font-medium leading-4 text-[#6A6A6A]">
                  좋아요
                </div>
                <div className="w-[44px] text-center text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">
                  댓글
                </div>
                <div className="w-[44px] text-center text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">
                  신고
                </div>
                <div className="w-[72px] text-center text-base font-normal leading-6 tracking-[-0.32px] text-gray-2 opacity-75">
                  상세
                </div>
              </div>

              {/* 메모 리스트 */}
              {memoData.map((memo, index) => (
                <div
                  key={index}
                  className="flex w-full items-center justify-between border-b border-gray-7 px-6 py-2.5"
                >
                  <div className="w-[54px] text-center text-base font-normal leading-6 tracking-[-0.32px] text-gray-1">
                    {memo.id}
                  </div>
                  <div className="w-[116px] text-center text-sm font-medium leading-4 text-[#6A6A6A]">
                    {memo.author}
                  </div>
                  <div className="flex w-[316px] max-w-[520px] items-center justify-center gap-10">
                    <div className="flex flex-1 items-center justify-center gap-2.5">
                      <span className="max-h-6 max-w-[316px] flex-1 text-base font-normal leading-6 tracking-[-0.32px] text-gray-1">
                        {memo.content}
                      </span>
                    </div>
                  </div>
                  <div className="w-[44px] text-center text-sm font-medium leading-4 text-[#6A6A6A]">
                    {memo.likes}
                  </div>
                  <div className="w-[44px] text-center text-sm font-medium leading-4 text-[#6A6A6A]">
                    {memo.comments}
                  </div>
                  <div className="w-[44px] text-center text-sm font-medium leading-4 text-[#6A6A6A]">
                    {memo.reports}
                  </div>
                  <div className="flex items-center justify-center gap-1.5 rounded border border-primary bg-white px-3 py-2.5">
                    <span className="text-sm font-bold leading-4 tracking-[-0.28px] text-primary">
                      상세보기
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 신청자 목록 섹션 */}
          <div className="flex w-full flex-col items-center gap-6">
            <div className="flex w-full items-center justify-between">
              <h2 className="flex-1 text-xl font-bold leading-6 text-gray-1">신청자 목록</h2>
            </div>

            <div className="flex items-start gap-4">
              <Button
                size="sm"
                className="w-[184px] h-[52px] bg-primary text-white"
                onClick={() => handleOpenModal('notification')}
              >
                알림 보내기
              </Button>
              <Button
                size="sm"
                className="w-[184px] h-[52px] bg-primary text-white"
                onClick={() => handleOpenModal('message')}
              >
                쪽지 보내기
              </Button>
              {/* <Button
                size="sm"
                className="w-[184px] h-[52px] bg-primary text-white"
              >
                메일 보내기
              </Button>
              <Button
                size="sm"
                className="w-[184px] h-[52px] bg-primary text-white"
              >
                문자 보내기
              </Button> */}
            </div>

            <div className="flex w-full flex-col items-center gap-6">
              <div className="flex w-full flex-col items-start bg-white">
                {/* 신청자 테이블 헤더 */}
                <div className="flex w-full items-center justify-between border-b border-gray-7 bg-gray-7 px-6 py-2.5">
                  <div className="w-[54px] text-center text-sm font-medium leading-4 text-[#6A6A6A]">
                    순번
                  </div>
                  <div className="w-[214px] text-center text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">
                    신청일시
                  </div>
                  <div className="w-[190px] text-center text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">
                    닉네임(아이디)
                  </div>
                  <div className="flex w-[116px] max-w-[116px] items-center justify-center gap-10">
                    <div className="flex items-center gap-2.5">
                      <span className="w-[116px] max-w-[116px] text-center text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">
                        이름
                      </span>
                    </div>
                  </div>
                  <div className="flex w-[180px] max-w-[180px] items-center justify-center gap-10">
                    <div className="flex items-center gap-2.5">
                      <span className="max-w-[520px] text-center text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">
                        이메일
                      </span>
                    </div>
                  </div>
                  <div className="flex w-[114px] max-w-[114px] items-center justify-center gap-10">
                    <div className="flex items-center gap-2.5">
                      <span className="max-w-[520px] text-center text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">
                        휴대전화
                      </span>
                    </div>
                  </div>
                </div>

                {/* 신청자 리스트 */}
                {applicantData.map((applicant, index) => (
                  <div
                    key={index}
                    className="flex w-full items-center justify-between border-b border-gray-7 px-6 py-2.5"
                  >
                    <div className="w-[54px] flex-shrink-0 text-center text-base font-normal leading-6 tracking-[-0.32px] text-gray-1">
                      {applicant.no}
                    </div>
                    <div className="flex w-[214px] max-w-[520px] flex-shrink-0 items-center justify-center gap-10">
                      <div className="flex items-center justify-center gap-2.5">
                        <span className="h-6 max-h-6 max-w-[200px] flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-center text-base font-normal leading-6 tracking-[-0.32px] text-gray-1">
                          {applicant.applicationDate}
                        </span>
                      </div>
                    </div>
                    <div className="flex w-[190px] flex-shrink-0 items-center gap-1">
                      <div className="h-6 w-6 flex-shrink-0 rounded-full bg-gray-5"></div>
                      <span className="text-center text-sm font-medium leading-4 text-[#6A6A6A]">
                        {applicant.nickname}
                      </span>
                    </div>
                    <div className="w-[116px] flex-shrink-0 text-center text-sm font-medium leading-4 text-[#6A6A6A]">
                      {applicant.name}
                    </div>
                    <div className="w-[180px] max-w-[180px] flex-shrink-0 text-center text-base font-normal leading-6 tracking-[-0.32px] text-gray-1">
                      {applicant.email}
                    </div>
                    <div className="w-[114px] max-w-[114px] flex-shrink-0 text-center text-base font-normal leading-6 tracking-[-0.32px] text-gray-1">
                      {applicant.phone}
                    </div>
                  </div>
                ))}
              </div>

              {/* 페이지네이션 */}
              <div className="flex w-full items-center justify-center gap-4">
                <Pagination currentPage={currentPage} totalPages={10} onPageChange={setCurrentPage} />
              </div>
            </div>
          </div>

          {/* 하단 액션 버튼 */}
          <div className="flex w-full items-center justify-between">
            <button
              onClick={() => router.push('/admin/programs')}
              className="flex items-center gap-1.5 rounded border border-gray-4 bg-white px-3 py-2.5"
            >
              <Hamburger size={16} color="#555555" />
              <span className="text-sm font-bold leading-4 tracking-[-0.28px] text-gray-2">
                목록으로
              </span>
            </button>
            <div className="flex items-center gap-2.5">
              <button className="flex items-center gap-1.5 rounded border border-primary bg-white w-12 h-9 justify-center">
                <span className="text-sm font-bold leading-4 tracking-[-0.28px] text-primary">
                  삭제
                </span>
              </button>
              <button className="flex items-center gap-1.5 rounded bg-primary w-12 h-9 justify-center">
                <span className="text-sm font-bold leading-4 tracking-[-0.28px] text-white">수정</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 모달 */}
      <SendNotificationModal
        isOpen={isNotificationModalOpen || isMessageModalOpen}
        onClose={handleCloseModal}
        type={modalType}
      />
    </div>
  );
}
