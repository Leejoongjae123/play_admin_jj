'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { BookmarkButton, ShareButton } from '@/components/common/Button';
import { Like, Comment, Bookmark, Hamburger } from '@/components/icons';

interface CommunityDetailPageProps {
  params: Promise<{ id: string }>;
}

export default function CommunityDetailPage({ params }: CommunityDetailPageProps) {
  const [likeCount, setLikeCount] = useState(1);
  const [commentCount, setCommentCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [commentText, setCommentText] = useState('');

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleCommentSubmit = () => {
    if (commentText.trim()) {
      setCommentCount(commentCount + 1);
      setCommentText('');
    }
  };

  // 더미 댓글 데이터
  const comments = [
    {
      id: 1,
      username: 'userName',
      date: '7일 전',
      content:
        '이 텍스트는 메모 자세히 보기 화면에서의 댓글입니다. 다른 유저가 메모에 댓글을 남길 수 있습니다.',
      isPrivate: true,
    },
    {
      id: 2,
      username: 'userName',
      date: '7일 전',
      content:
        '이 텍스트는 메모 자세히 보기 화면에서의 댓글입니다. 다른 유저가 메모에 댓글을 남길 수 있습니다.',
      isPrivate: true,
    },
  ];

  return (
    <div className="flex h-auto w-full items-start gap-2.5 p-8">
      <div className="flex flex-1 flex-col items-center justify-center gap-20 rounded-[5px] bg-white p-11">
        {/* 게시물 메인 컨테이너 */}
        <div className="flex flex-col items-start self-stretch rounded-[4px] bg-background">
          {/* 게시물 헤더 */}
          <div className="flex h-64 flex-col items-start justify-between self-stretch border-b border-primary px-20 py-11 pb-8">
            <div className="flex h-6 flex-shrink-0 items-center justify-between self-stretch"></div>

            <div className="flex flex-col items-start self-stretch">
              <div className="flex items-start gap-6">
                <h1 className="font-pretendard text-[28px] font-semibold leading-8 text-black">
                  연극 &lt;마타하리&gt; 제작 크루를 찾습니다!
                </h1>
              </div>

              <div className="flex items-end justify-between self-stretch">
                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-2">
                    <div className="h-[30px] w-[30px] rounded-full bg-gray-5"></div>
                    <span className="font-pretendard text-base font-medium leading-6 text-gray-2">
                      홍길동
                    </span>
                  </div>
                  <span className="font-pretendard text-base font-medium leading-6 text-gray-2">
                    1분 전
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="font-pretendard text-base font-medium leading-6 text-gray-2">
                      댓글
                    </span>
                    <span className="font-pretendard text-base font-medium leading-6 text-primary">
                      {commentCount}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <BookmarkButton onClick={handleBookmarkClick} />
                  <ShareButton onClick={() => console.log('share clicked')} />
                </div>
              </div>
            </div>
          </div>

          {/* 게시물 본문 */}
          <div className="flex flex-col items-start self-stretch">
            <div className="flex items-start gap-2.5 self-stretch px-20 py-8">
              <div className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">
                모집 분야
                <br />
                무대 세트 제작
                <br />
                조명/음향 운영
                <br />
                의상 및 분장
                <br />
                소품 제작 및 관리
                <br />
                홍보 및 진행 보조
                <br />
                필수 요건
                <br />
                책임감 있고 팀워크를 중시하는 분<br />
                최소 3개월 이상 연습 및 공연 준비에 참여 가능한 분<br />
                연습 및 공연 일정에 성실히 참석할 수 있는 분<br />
                지원 방법
                <br />
                간단한 자기소개 + 지원 분야 + 가능 일정 기재
                <br />
                예시 이메일: matahari.theater@gmail.com
                <br />
                연락처: 010-1234-5678 (담당자: 김예린 PD)
                <br />
                함께 성장하며 특별한 무대를 만들어 갈 분들의 많은 지원 바랍니다!
              </div>
            </div>

            {/* 상호작용 버튼들 */}
            <div className="flex flex-col items-center gap-6 self-stretch px-20">
              <div className="flex items-start justify-between self-stretch border-b border-red-3 py-3">
                <div className="flex items-center gap-5">
                  <div className="flex h-6 w-[47px] items-center gap-2">
                    <button onClick={handleLikeClick} className="flex items-center gap-2">
                      <Like size={24} color="#6D6D6D" />
                      <span className="font-pretendard text-sm font-semibold leading-4 tracking-[-0.28px] text-gray-3">
                        {likeCount}
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <Comment size={24} color="#6D6D6D" />
                    <span className="font-pretendard text-sm font-semibold leading-4 tracking-[-0.28px] text-gray-3">
                      {commentCount}
                    </span>
                  </div>
                  <Bookmark className="h-6 w-6 text-gray-3" />
                </div>
                <button className="font-pretendard text-sm font-medium leading-4 text-gray-3">
                  신고
                </button>
              </div>

              {/* 댓글 입력 폼 */}
              <div className="flex flex-col items-start self-stretch">
                <div className="flex flex-col items-start gap-8 self-stretch rounded-[4px] border border-red-3 bg-orange-4 p-6">
                  <div className="flex flex-col items-start gap-[5px]">
                    <div className="flex items-center gap-5">
                      <div className="flex items-center gap-3">
                        <span className="font-pretendard text-sm font-medium leading-4 text-gray-2">
                          username
                        </span>
                      </div>
                    </div>
                    <Textarea
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      placeholder="남기고 싶은 내용을 입력해주세요.최대 300자까지 입력할 수 있습니다."
                      className="min-h-6 resize-none border-none bg-transparent !px-0 !py-0 text-orange-3 placeholder:text-orange-3 focus-visible:ring-0"
                      maxLength={300}
                    />
                  </div>
                  <Button
                    onClick={handleCommentSubmit}
                    className="flex h-[52px] w-[184px] items-center justify-center gap-2.5 rounded-[4px] bg-primary px-[55px] py-2.5 font-pretendard text-lg font-semibold leading-[130%] text-white"
                  >
                    메모 남기기
                  </Button>
                </div>

                {/* 댓글 목록 */}
                <div className="flex flex-col items-start gap-6 self-stretch py-11">
                  {comments.map((comment) => (
                    <div key={comment.id} className="flex flex-col items-start gap-3 self-stretch">
                      <div className="flex items-center justify-between self-stretch">
                        <div className="flex items-center gap-5">
                          <div className="h-[47px] w-[47px] rounded-full bg-gray-5"></div>
                          <span className="font-pretendard text-sm font-medium leading-[150%] tracking-[-0.28px] text-gray-2">
                            {comment.username}
                          </span>
                          <span className="font-pretendard text-sm font-medium leading-[150%] tracking-[-0.28px] text-gray-4">
                            {comment.date}
                          </span>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <span className="font-pretendard text-sm font-medium leading-4 text-gray-3">
                            비공개
                          </span>
                          <span className="font-pretendard text-sm font-medium leading-4 text-gray-3">
                            |
                          </span>
                          <span className="font-pretendard text-sm font-medium leading-4 text-gray-3">
                            삭제
                          </span>
                        </div>
                      </div>
                      <div className="h-12 self-stretch font-pretendard text-base font-medium leading-[150%] tracking-[-0.32px] text-gray-2">
                        {comment.content}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 액션 버튼들 */}
        <div className="flex w-[996px] items-center justify-between">
          <Button className="flex h-auto items-center justify-center gap-1.5 rounded-[4px] border border-gray-4 bg-white px-3 py-2.5 font-pretendard text-sm font-semibold leading-4 tracking-[-0.28px] text-gray-2">
            <Hamburger size={16} color="#555555" />
            목록으로
          </Button>
          <div className="flex items-center gap-2.5">
            <Button className="flex h-9 h-auto w-12 items-center justify-center gap-1.5 rounded-[4px] border border-primary bg-white px-3 py-2.5 font-pretendard text-sm font-semibold leading-4 tracking-[-0.28px] text-primary">
              삭제
            </Button>
            <Button className="flex h-9 w-12 items-center justify-center gap-1.5 rounded-[4px] bg-primary px-3 py-2.5 font-pretendard text-sm font-semibold leading-4 tracking-[-0.28px] text-white">
              수정
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
