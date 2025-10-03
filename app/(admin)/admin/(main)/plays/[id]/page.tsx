import { Badge } from '@/components/ui/badge';
import Excel from '@/components/icons/Excel';

interface PageParams {
  params: Promise<{ id: string }>;
}

export default async function PlayDetailPage({ params }: PageParams) {
  const { id } = await params;

  // 목 데이터
  const playData = {
    id: 'P0123',
    registrar: 'userB874 (이수현)',
    registrationDate: '2025-08-28',
    views: '1,245',
    scraps: '32',
    title: '시골에서의 한 달',
    author: '이반 투르게네프/Ivan Turgenev',
    publicationStatus: '출판',
    publicationHistory:
      '[출판]『갈매기』 , 장한(옮김), 더클래식, 2021『갈매기/세 자매/바냐 아저씨/벚꽃 동산』 수록, 동완(옮김), 동서문화사, 2012',
    keywords: ['질투', '삼각관계', '사실주의'],
    representativeDialogue:
      '그래, 대체 이게 뭐지? 내가 베라를 질투하는 건가? 내 마음은 어째서 이렇게 갈피를 잡지 못하고 흔들리는 걸까?\n그래, 대체 이게 뭐지? 내가 베라를 질투하는 건가? 내 마음은 어째서 이렇게 갈피를 잡지 못하고 흔들리는 걸까?\n그래, 대체 이게 뭐지? 내가 베라를 질투하는 건가? 내 마음은 어째서 이렇게 갈피를 잡지 못하고 흔들리는 걸까?',
    summary:
      "러시아 귀족 가문의 시골 저택을 배경으로,\n지적이고 매혹적인 여성 '나탈리아'와 그녀를 둘러싼\n남편, 가정교사, 그리고 어린 베라 사이의 미묘한 감정선이 교차한다.\n\n사랑과 질투, 사회적 제약 속에서 흔들리는 인물들의 내면을\n사실적인 대화와 섬세한 심리 묘사로 풀어낸 작품이다.\n각자의 선택과 갈등이 파국으로 향하는 과정을 통해,\n'사랑은 누구에게나 축복이자 고통'임을 보여준다.",
    exposureStatus: '노출중',
  };

  const memoData = [
    {
      id: 'M210',
      author: 'user_001',
      content: '번역 톤이 전반적으로 매끄럽습니다.',
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

  const logData = [
    {
      date: '2025-08-31',
      type: 'user_001',
      event: '신청등록',
      detail: '[햄릿, 다시 읽기]',
    },
    {
      date: '2025-08-31',
      type: '시스템',
      event: '상태변경',
      detail: '[햄릿, 다시 읽기]',
    },
    {
      date: '2025-08-31',
      type: 'user_001',
      event: '승인',
      detail: '[햄릿, 다시 읽기]',
    },
    {
      date: '2025-08-31',
      type: '시스템',
      event: '알림 발송',
      detail: '[햄릿, 다시 읽기]',
    },
  ];

  return (
    <div className="flex w-full flex-col gap-20 rounded-[5px] bg-white p-11">
      {/* 희곡 관리 섹션 */}
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold leading-8 text-gray-1">희곡 관리</h1>
          </div>

          <div className="flex flex-col border border-gray-7">
            {/* 첫 번째 행 */}
            <div className="flex items-stretch">
              <div className="flex flex-1 border-b border-gray-7">
                <div className="flex w-40 items-center gap-2.5 bg-gray-7 px-6 py-2.5">
                  <span className="text-base font-normal leading-6 text-gray-2">작품ID</span>
                </div>
                <div className="flex flex-1 items-center gap-2.5 px-6 py-2.5">
                  <span className="text-base font-normal leading-6 text-gray-1">{playData.id}</span>
                </div>
              </div>
            </div>

            {/* 두 번째 행 */}
            <div className="flex items-stretch">
              <div className="flex flex-1 border-b border-gray-7">
                <div className="flex w-40 items-center gap-2.5 bg-gray-7 px-6 py-2.5">
                  <span className="text-base font-normal leading-6 text-gray-2">등록자</span>
                </div>
                <div className="flex flex-1 items-center gap-2.5 px-6 py-2.5">
                  <span className="text-base font-normal leading-6 text-gray-1">
                    {playData.registrar}
                  </span>
                </div>
              </div>
              <div className="flex flex-1 border-b border-gray-7">
                <div className="flex w-40 items-center gap-2.5 bg-gray-7 px-6 py-2.5">
                  <span className="text-base font-normal leading-6 text-gray-2">등록일</span>
                </div>
                <div className="flex flex-1 items-center gap-2.5 px-6 py-2.5">
                  <span className="text-base font-normal leading-6 text-gray-1">
                    {playData.registrationDate}
                  </span>
                </div>
              </div>
            </div>

            {/* 세 번째 행 */}
            <div className="flex items-stretch">
              <div className="flex flex-1 border-b border-gray-7">
                <div className="flex w-40 items-center gap-2.5 bg-gray-7 px-6 py-2.5">
                  <span className="text-base font-normal leading-6 text-gray-2">조회수</span>
                </div>
                <div className="flex flex-1 items-center gap-2.5 px-6 py-2.5">
                  <span className="text-base font-normal leading-6 text-gray-1">
                    {playData.views}
                  </span>
                </div>
              </div>
              <div className="flex flex-1 border-b border-gray-7">
                <div className="flex w-40 items-center gap-2.5 bg-gray-7 px-6 py-2.5">
                  <span className="text-base font-normal leading-6 text-gray-2">스크랩수</span>
                </div>
                <div className="flex flex-1 items-center gap-2.5 px-6 py-2.5">
                  <span className="text-base font-normal leading-6 text-gray-1">
                    {playData.scraps}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 작품정보 섹션 */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold leading-6 text-gray-1">작품정보</h2>
          </div>

          <div className="flex flex-col border border-gray-7">
            {/* 제목 */}
            <div className="flex items-stretch border-b border-gray-7">
              <div className="flex flex-1">
                <div className="flex w-40 items-center gap-2.5 bg-gray-7 px-6 py-2.5">
                  <span className="text-base font-normal leading-6 text-gray-2">제목</span>
                </div>
                <div className="flex flex-1 items-center gap-2.5 px-6 py-2.5">
                  <span className="text-base font-normal leading-6 text-gray-1">
                    {playData.title}
                  </span>
                </div>
              </div>
            </div>

            {/* 작가 */}
            <div className="flex items-stretch border-b border-gray-7">
              <div className="flex flex-1">
                <div className="flex w-40 items-center gap-2.5 bg-gray-7 px-6 py-2.5">
                  <span className="text-base font-normal leading-6 text-gray-2">
                    작가 (한글/영문)
                  </span>
                </div>
                <div className="flex flex-1 items-center gap-2.5 px-6 py-2.5">
                  <span className="text-base font-normal leading-6 text-gray-1">
                    {playData.author}
                  </span>
                </div>
              </div>
            </div>

            {/* 출간여부 & 출간내역 */}
            <div className="flex items-stretch border-b border-gray-7">
              <div className="flex flex-1">
                <div className="flex w-40 items-center gap-2.5 bg-gray-7 px-6 py-2.5">
                  <span className="text-base font-normal leading-6 text-gray-2">출간여부</span>
                </div>
                <div className="flex flex-1 items-center gap-2.5 px-6 py-2.5">
                  <span className="text-base font-normal leading-6 text-gray-2">
                    {playData.publicationStatus}
                  </span>
                </div>
              </div>
              <div className="flex flex-1">
                <div className="flex w-40 items-center gap-2.5 bg-gray-7 px-6 py-2.5">
                  <span className="text-base font-normal leading-6 text-gray-2">출간내역</span>
                </div>
                <div className="flex flex-1 items-center gap-2.5 px-6 py-2.5">
                  <span className="text-base font-normal leading-6 text-gray-2">
                    {playData.publicationHistory}
                  </span>
                </div>
              </div>
            </div>

            {/* 키워드 */}
            <div className="flex items-stretch border-b border-gray-7">
              <div className="flex min-h-12 flex-1">
                <div className="flex w-40 items-center gap-2.5 bg-gray-7 px-6 py-2.5">
                  <span className="text-base font-normal leading-6 text-gray-2">키워드</span>
                </div>
                <div className="flex flex-1 items-center gap-1.5 px-6 py-2.5">
                  {playData.keywords.map((keyword, index) => (
                    <Badge
                      key={index}
                      className="flex h-8 items-center justify-center gap-2.5 rounded border border-primary bg-white px-2.5 py-2 text-sm font-medium text-primary"
                    >
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* 대표대사 */}
            <div className="flex items-stretch border-b border-gray-7">
              <div className="flex flex-1">
                <div className="flex w-40 items-center gap-2.5 bg-gray-7 px-6 py-2.5">
                  <span className="text-base font-normal leading-6 text-gray-2">대표대사</span>
                </div>
                <div className="flex flex-1 items-center gap-2.5 px-6 py-2.5">
                  <span className="whitespace-pre-line text-base font-normal leading-6 text-gray-1">
                    {playData.representativeDialogue}
                  </span>
                </div>
              </div>
            </div>

            {/* 줄거리 */}
            <div className="flex items-stretch border-b border-gray-7">
              <div className="flex flex-1">
                <div className="flex w-40 items-center gap-2.5 bg-gray-7 px-6 py-2.5">
                  <span className="text-base font-normal leading-6 text-gray-2">줄거리</span>
                </div>
                <div className="flex flex-1 items-center gap-2.5 px-6 py-2.5">
                  <span className="whitespace-pre-line text-base font-normal leading-6 text-gray-1">
                    {playData.summary}
                  </span>
                </div>
              </div>
            </div>

            {/* 노출 여부 */}
            <div className="flex items-stretch border-b border-gray-7">
              <div className="flex flex-1">
                <div className="flex w-40 items-center gap-2.5 bg-gray-7 px-6 py-2.5">
                  <span className="text-base font-normal leading-6 text-gray-2">노출 여부</span>
                </div>
                <div className="flex flex-1 items-center gap-2.5 px-6 py-2.5">
                  <span className="text-base font-normal leading-6 text-gray-1">
                    {playData.exposureStatus}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 메모관리 섹션 */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold leading-6 text-gray-1">메모관리</h2>
          </div>

          <div className="flex flex-col bg-white">
            {/* 헤더 */}
            <div className="flex items-center justify-between border-b border-gray-7 bg-gray-7 px-6 py-2.5">
              <div className="w-[54px] text-center text-sm font-medium leading-4">메모ID</div>
              <div className="w-[116px] text-center text-sm font-medium leading-4">작성자</div>
              <div className="flex max-w-[316px] flex-1 items-center justify-center gap-10">
                <div className="flex items-center justify-center gap-2.5">
                  <span className="max-w-[316px] flex-1 text-center text-base font-normal leading-6 text-gray-2">
                    내용 (앞 50자)
                  </span>
                </div>
              </div>
              <div className="w-11 text-center text-sm font-medium leading-4">좋아요</div>
              <div className="w-11 text-center text-base font-normal leading-6">댓글</div>
              <div className="w-11 text-center text-base font-normal leading-6">신고</div>
              <div className="w-20 text-center text-base font-normal leading-6 opacity-75">
                상세
              </div>
            </div>

            {/* 메모 목록 */}
            {memoData.map((memo, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b border-gray-7 px-6 py-2.5"
              >
                <div className="w-[54px] text-center text-base font-normal leading-6">
                  {memo.id}
                </div>
                <div className="w-[116px] text-center text-sm font-medium leading-4">
                  {memo.author}
                </div>
                <div className="flex w-[316px] max-w-[520px] items-center justify-center gap-10">
                  <div className="flex flex-1 items-center justify-center gap-2.5">
                    <span className="max-h-6 max-w-[316px] flex-1 text-base font-normal leading-6 text-gray-1">
                      {memo.content}
                    </span>
                  </div>
                </div>
                <div className="w-11 text-center text-sm font-medium leading-4">{memo.likes}</div>
                <div className="w-11 text-center text-sm font-medium leading-4">
                  {memo.comments}
                </div>
                <div className="w-11 text-center text-sm font-medium leading-4">{memo.reports}</div>
                <div className="flex w-20 justify-center">
                  <button className="flex items-center justify-center gap-1.5 rounded border border-primary bg-white px-3 py-2.5 text-sm font-semibold leading-4 text-primary">
                    상세보기
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 운영로그 섹션 */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold leading-6 text-gray-1">운영로그</h2>
            <button className="flex items-center gap-3 rounded border-2 border-[#4CA452] bg-white px-3 py-2.5 text-sm font-semibold leading-4 text-[#4CA452]">
              <Excel size={16} />
              엑셀 다운로드
            </button>
          </div>

          <div className="flex flex-col bg-white">
            {/* 헤더 */}
            <div className="flex items-center border-b border-gray-7 bg-gray-7 px-6 py-2.5">
              <div className="flex-1 text-center text-sm font-medium leading-4">신청 일자</div>
              <div className="flex-1 text-center text-base font-normal leading-6">운영자/회원</div>
              <div className="flex-1 text-center text-base font-normal leading-6">이벤트 유형</div>
              <div className="w-[540px] text-center text-base font-normal leading-6">상세 내용</div>
            </div>

            {/* 로그 목록 */}
            {logData.map((log, index) => (
              <div key={index} className="flex items-center border-b border-gray-7 px-6 py-2.5">
                <div className="flex-1 text-center text-sm font-medium leading-4">{log.date}</div>
                <div className="flex-1 text-center text-sm font-medium leading-4">{log.type}</div>
                <div className="flex-1 text-center text-base font-normal leading-6">
                  {log.event}
                </div>
                <div className="w-[540px] text-center text-base font-normal leading-6 text-gray-1">
                  {log.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 하단 액션 버튼들 */}
      <div className="flex w-full items-center justify-between">
        <button className="flex items-center gap-1.5 rounded border border-gray-4 bg-white px-3 py-2.5 text-sm font-semibold leading-4 text-gray-2">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          목록으로
        </button>

        <div className="flex items-center gap-2.5">
          <button className="flex items-center justify-center gap-1.5 rounded border border-primary bg-white px-3 py-2.5 text-sm font-semibold leading-4 text-primary">
            삭제
          </button>
          <button className="flex items-center justify-center gap-1.5 rounded bg-primary px-3 py-2.5 text-sm font-semibold leading-4 text-white">
            수정
          </button>
        </div>
      </div>
    </div>
  );
}
