import { Button } from '@/components/ui/button';
import Hamburger from '@/components/icons/Hamburger';

interface MemoDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function MemoDetailPage({ params }: MemoDetailPageProps) {
  const { id } = await params;

  // TODO: 실제 데이터 페칭 로직 구현
  const memoData = {
    id: 'MO9982',
    category: '희곡',
    target: '시골에서의 한 달 (H9804)',
    author: '북토커(user2)',
    createdAt: '2025-09-03 14:22',
    status: '진행중',
    likes: 32,
    content: '이 장면 정말 인상깊어요. 무대에서 배우들의 감정이 그대로 전해졌습니다.',
  };

  const comments = [
    {
      id: 1,
      username: 'userName',
      createdAt: '7일 전',
      content: '이 텍스트는 메모 자세히 보기 화면에서의 댓글입니다. 다른 유저가 메모에 댓글을 남길 수 있습니다.',
    },
    {
      id: 2,
      username: 'userName',
      createdAt: '7일 전',
      content: '이 텍스트는 메모 자세히 보기 화면에서의 댓글입니다. 다른 유저가 메모에 댓글을 남길 수 있습니다.',
    },
  ];

  return (
    <div className="flex min-h-screen w-full items-start justify-center p-8">
      <div className="flex w-full max-w-[1180px] flex-col items-center justify-center gap-20 rounded-[5px] bg-white p-11">
        <div className="flex w-full flex-col items-start gap-10">
          {/* 메모 정보 섹션 */}
          <div className="flex w-full flex-col items-end gap-4">
            <div className="flex w-full items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-1">메모 관리</h1>
            </div>

            {/* 메모 정보 테이블 */}
            <div className="flex w-full flex-col border border-gray-7">
              {/* 메모ID와 구분 */}
              <div className="flex">
                <div className="flex h-12 flex-1 items-center border-b border-gray-7">
                  <div className="flex h-full w-40 items-center gap-2.5 bg-gray-7 px-6 py-2.5">
                    <span className="text-base text-gray-2">메모ID</span>
                  </div>
                  <div className="flex flex-1 items-center gap-2.5 px-6 py-2.5">
                    <span className="text-base text-gray-1">{memoData.id}</span>
                  </div>
                </div>
                <div className="flex h-12 flex-1 items-center border-b border-gray-7">
                  <div className="flex h-full w-40 items-center gap-2.5 bg-gray-7 px-6 py-2.5">
                    <span className="text-base text-gray-2">구분</span>
                  </div>
                  <div className="flex flex-1 items-center gap-2.5 px-6 py-2.5">
                    <span className="text-base text-gray-1">{memoData.category}</span>
                  </div>
                </div>
              </div>

              {/* 대상 */}
              <div className="flex h-12 w-full items-center border-b border-gray-7">
                <div className="flex h-full w-40 flex-shrink-0 items-center gap-2.5 bg-gray-7 px-6 py-2.5">
                  <span className="text-base text-gray-2">대상</span>
                </div>
                <div className="flex flex-1 items-center gap-2.5 px-6 py-2.5">
                  <span className="text-base text-gray-1">{memoData.target}</span>
                  <button className="text-base text-[#2581F9] underline hover:no-underline">
                    원문 바로가기
                  </button>
                </div>
              </div>

              {/* 작성자와 등록일 */}
              <div className="flex">
                <div className="flex h-12 flex-1 items-center border-b border-gray-7">
                  <div className="flex h-full w-40 items-center gap-2.5 bg-gray-7 px-6 py-2.5">
                    <span className="text-base text-gray-2">작성자</span>
                  </div>
                  <div className="flex flex-1 items-center gap-2.5 px-6 py-2.5">
                    <span className="text-base text-gray-1">{memoData.author}</span>
                  </div>
                </div>
                <div className="flex h-12 flex-1 items-center border-b border-gray-7">
                  <div className="flex h-full w-40 items-center gap-2.5 bg-gray-7 px-6 py-2.5">
                    <span className="text-base text-gray-2">등록일</span>
                  </div>
                  <div className="flex flex-1 items-center gap-2.5 px-6 py-2.5">
                    <span className="text-base text-gray-1">{memoData.createdAt}</span>
                  </div>
                </div>
              </div>

              {/* 상태와 좋아요 */}
              <div className="flex">
                <div className="flex h-12 flex-1 items-center border-b border-gray-7">
                  <div className="flex h-full w-40 items-center gap-2.5 bg-gray-7 px-6 py-2.5">
                    <span className="text-base text-gray-2">상태</span>
                  </div>
                  <div className="flex flex-1 items-center gap-2.5 px-6 py-2.5">
                    <div className="flex items-center justify-center gap-2.5 rounded-full border border-[#B0D5F2] bg-[#F6FBFF] px-3 py-1.5">
                      <span className="text-sm font-medium text-[#2581F9]">{memoData.status}</span>
                    </div>
                  </div>
                </div>
                <div className="flex h-12 flex-1 items-center border-b border-gray-7">
                  <div className="flex h-full w-40 items-center gap-2.5 bg-gray-7 px-6 py-2.5">
                    <span className="text-base text-gray-2">좋아요</span>
                  </div>
                  <div className="flex flex-1 items-center gap-2.5 px-6 py-2.5">
                    <span className="text-base text-gray-1">{memoData.likes}</span>
                  </div>
                </div>
              </div>

              {/* 메모 */}
              <div className="flex items-center border-b border-gray-7">
                <div className="flex w-40 items-center gap-2.5 bg-gray-7 px-6 py-2.5">
                  <span className="text-base text-gray-2">메모</span>
                </div>
                <div className="flex flex-1 items-center gap-2.5 px-6 py-2.5">
                  <span className="text-base text-gray-1">{memoData.content}</span>
                </div>
              </div>
            </div>
          </div>

          {/* 댓글 섹션 */}
          <div className="flex w-full flex-col items-end gap-4">
            <div className="flex w-full items-center justify-between">
              <h2 className="text-xl font-bold text-gray-1">댓글</h2>
            </div>

            <div className="flex w-full flex-col items-start gap-6 py-11">
              {comments.map((comment) => (
                <div key={comment.id} className="flex w-full flex-col items-start gap-3">
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-center gap-5">
                      <div className="size-[47px] rounded-full bg-gray-5"></div>
                      <span className="text-sm font-medium text-gray-2">{comment.username}</span>
                      <span className="text-sm font-medium text-gray-4">{comment.createdAt}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <button className="text-sm font-medium text-gray-3 hover:text-gray-1">
                        비공개
                      </button>
                      <span className="text-sm font-medium text-gray-3">|</span>
                      <button className="text-sm font-medium text-gray-3 hover:text-gray-1">
                        삭제
                      </button>
                    </div>
                  </div>
                  <p className="w-full text-base font-medium leading-6 text-gray-2">
                    {comment.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 하단 액션 버튼들 */}
        <div className="flex w-full items-center justify-between">
          <Button
            variant="outline"
            className="flex h-auto items-center gap-1.5 rounded border border-gray-4 bg-white px-3 py-2.5 text-sm font-semibold text-gray-2 hover:bg-gray-6"
          >
            <Hamburger size={16} color="#555555" />
            목록으로
          </Button>

          <div className="flex items-center gap-2.5">
            <Button
              variant="outline"
              className="h-auto rounded border border-primary bg-white px-3 py-2.5 text-sm font-semibold text-primary hover:bg-red-3"
            >
              삭제
            </Button>
            <Button className="h-auto rounded bg-primary px-3 py-2.5 text-sm font-semibold text-white hover:bg-primary/90">
              비공개
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
