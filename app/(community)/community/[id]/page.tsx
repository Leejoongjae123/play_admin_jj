import { Suspense } from 'react';
import { Bookmark, Comment, Like, Share } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { CommunityPost, Comment as CommentType } from './types';

interface CommunityDetailPageProps {
  params: Promise<{ id: string }>;
}

// 임시 데이터 (실제로는 Supabase에서 가져올 데이터)
const mockPost: CommunityPost = {
  id: '1',
  title: '연극 <마타하리> 제작 크루를 찾습니다!',
  content: `모집 분야
무대 세트 제작
조명/음향 운영
의상 및 분장
소품 제작 및 관리
홍보 및 진행 보조

필수 요건
책임감 있고 팀워크를 중시하는 분
최소 3개월 이상 연습 및 공연 준비에 참여 가능한 분
연습 및 공연 일정에 성실히 참석할 수 있는 분

지원 방법
간단한 자기소개 + 지원 분야 + 가능 일정 기재
예시 이메일: matahari.theater@gmail.com
연락처: 010-1234-5678 (담당자: 김예린 PD)

함께 성장하며 특별한 무대를 만들어 갈 분들의 많은 지원 바랍니다!`,
  author: {
    id: '1',
    name: '홍길동',
  },
  createdAt: '1분 전',
  likeCount: 1,
  commentCount: 3,
  isLiked: false,
  isBookmarked: false,
};

const mockComments: CommentType[] = [
  {
    id: '1',
    content: '이 텍스트는 메모 자세히 보기 화면에서의 댓글입니다. 다른 유저가 메모에 댓글을 남길 수 있습니다.',
    author: {
      id: '1',
      name: 'userName',
    },
    createdAt: '7일 전',
    isPrivate: false,
    canDelete: true,
  },
  {
    id: '2',
    content: '이 텍스트는 메모 자세히 보기 화면에서의 댓글입니다. 다른 유저가 메모에 댓��을 남길 수 있습니다.',
    author: {
      id: '2',
      name: 'userName',
    },
    createdAt: '7일 전',
    isPrivate: false,
    canDelete: true,
  },
];

export default async function CommunityDetailPage({ params }: CommunityDetailPageProps) {
  const { id } = await params;

  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <div className="flex min-h-screen w-full justify-center p-8" style={{ background: '#FAF8F6' }}>
        <div className="flex w-full max-w-[1180px] flex-col items-center gap-20 rounded-[5px] bg-white px-8 py-11">
          {/* 헤더 섹션 */}
          <div className="flex w-full flex-col rounded-[4px]" style={{ background: '#FAF8F6' }}>
            <div className="flex h-64 flex-col justify-between px-20 pb-8 pt-11" style={{ borderBottom: '1px solid #911A00' }}>
              <div className="h-6" />

              <div className="flex flex-col">
                <div className="mb-6">
                  <h1 className="text-[28px] font-bold leading-8" style={{ color: '#0E0E0E' }}>
                    {mockPost.title}
                  </h1>
                </div>

                <div className="flex items-end justify-between">
                  <div className="flex items-center gap-5">
                    <div className="flex items-center gap-2">
                      <div className="h-[30px] w-[30px] rounded-full" style={{ background: '#E0E0E0' }} />
                      <span className="text-base" style={{ color: '#555' }}>{mockPost.author.name}</span>
                    </div>
                    <span className="text-base" style={{ color: '#555' }}>{mockPost.createdAt}</span>
                    <div className="flex items-center gap-1">
                      <span className="text-base" style={{ color: '#555' }}>댓글</span>
                      <span className="text-base" style={{ color: '#911A00' }}>{mockPost.commentCount}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button className="rounded-[3px] p-2" style={{ background: '#F4EFEA' }}>
                      <Bookmark size={32} style={{ color: '#911A00' }} />
                    </button>
                    <button className="rounded-[3px] p-2" style={{ background: '#F4EFEA' }}>
                      <Share size={32} style={{ color: '#911A00' }} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 본문 내용 */}
            <div className="px-20 py-8">
              <p className="whitespace-pre-line text-base leading-6 tracking-[-0.32px]" style={{ color: '#555' }}>
                {mockPost.content}
              </p>
            </div>

            {/* 상호작용 버튼 */}
            <div className="px-20 pb-0">
              <div className="flex items-start justify-between py-3" style={{ borderBottom: '1px solid #EBE1DF' }}>
                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-2">
                    <Like size={24} style={{ color: '#6D6D6D' }} />
                    <span className="text-sm font-bold leading-4 tracking-[-0.28px]" style={{ color: '#6D6D6D' }}>
                      {mockPost.likeCount}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Comment size={24} style={{ color: '#6D6D6D' }} />
                    <span className="text-sm font-bold leading-4 tracking-[-0.28px]" style={{ color: '#6D6D6D' }}>
                      0
                    </span>
                  </div>
                  <Bookmark size={24} style={{ color: '#6D6D6D' }} />
                </div>
                <span className="text-sm" style={{ color: '#6D6D6D' }}>신고</span>
              </div>
              
              {/* 댓글 입력 폼 */}
              <div className="mb-6 mt-6 rounded-[4px] px-6 py-5" style={{ border: '1px solid #EBE1DF', background: '#F4EFEA' }}>
                <div className="mb-8 flex flex-col gap-[5px]">
                  <div className="flex items-center gap-5">
                    <div className="flex items-center gap-3">
                      <span className="text-sm" style={{ color: '#555' }}>username</span>
                    </div>
                  </div>
                  <p className="text-base leading-6 tracking-[-0.32px]" style={{ color: '#CCBCAB' }}>
                    남기고 싶은 내용을 입력해주세요.최대 300자까지 입력할 수 있습니다.
                  </p>
                </div>
                <Button
                  className="w-[184px] h-[52px] rounded-[4px] text-lg font-bold leading-[130%]"
                  style={{ background: '#911A00', color: '#FFF' }}
                >
                  메모 남기기
                </Button>
              </div>

              {/* 댓글 목록 */}
              <div className="flex flex-col gap-6 py-11">
                {mockComments.map((comment) => (
                  <div key={comment.id} className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-5">
                        <div className="h-[47px] w-[47px] rounded-full" style={{ background: '#E0E0E0' }} />
                        <span className="text-sm leading-[150%] tracking-[-0.28px]" style={{ color: '#555' }}>
                          {comment.author.name}
                        </span>
                        <span className="text-sm leading-[150%] tracking-[-0.28px]" style={{ color: '#A0A0A0' }}>
                          {comment.createdAt}
                        </span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="text-sm leading-4" style={{ color: '#6D6D6D' }}>비공개</span>
                        <span className="text-sm leading-4" style={{ color: '#6D6D6D' }}>|</span>
                        <span className="text-sm leading-4" style={{ color: '#6D6D6D' }}>삭제</span>
                      </div>
                    </div>
                    <p className="text-base leading-[150%] tracking-[-0.32px]" style={{ color: '#555' }}>
                      {comment.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* 하단 액션 버튼 */}
          <div className="flex w-full justify-between">
            <button
              className="flex items-center gap-1.5 rounded-[4px] px-3 py-2.5"
              style={{ border: '1px solid #A0A0A0', background: '#FFF' }}
            >
              <svg width="16" height="16" viewBox="0 0 17 16" fill="none">
                <path d="M2.6875 4H14.6875V5.33333H2.6875V4ZM2.6875 7.33333H14.6875V8.66667H2.6875V7.33333ZM2.6875 10.6667H14.6875V12H2.6875V10.6667Z" fill="#555555"/>
              </svg>
              <span className="text-sm font-bold leading-4 tracking-[-0.28px]" style={{ color: '#555' }}>목록으로</span>
            </button>

            <div className="flex items-center gap-2.5">
              <button
                className="rounded-[4px] px-3 py-2.5"
                style={{ border: '1px solid #911A00', background: '#FFF' }}
              >
                <span className="text-sm font-bold leading-4 tracking-[-0.28px]" style={{ color: '#911A00' }}>삭제</span>
              </button>
              <button
                className="rounded-[4px] px-3 py-2.5"
                style={{ background: '#911A00' }}
              >
                <span className="text-sm font-bold leading-4 tracking-[-0.28px]" style={{ color: '#FFF' }}>수정</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
