import { ArrowRight } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import MemberReportChart from './components/MemberReportChart';
import MemberTrendChart from './components/MemberTrendChart';
export default function AdminDashboardPage() {
  return (
    <div className="flex w-full flex-col items-start gap-11 p-8 pl-11 pr-11">
      {/* 제목 */}
      <h1 className="self-stretch text-2xl font-bold leading-8 text-gray-1">Today 리포트</h1>

      {/* 메인 콘텐츠 */}
      <div className="flex flex-1 flex-col items-start gap-6 self-stretch">
        {/* 첫 번째 행: 통계 카드들 */}
        <div className="flex h-[427px] items-center gap-6 self-stretch">
          <div className="flex flex-1 flex-col gap-6 self-stretch">
            {/* 첫 번째 행의 3개 카드 */}
            <div className="flex flex-1 items-center gap-6">
              {/* 회원 현황 카드 */}
              <Card className="flex w-1/3 flex-col items-start gap-5 bg-white p-7 px-8">
                <h3 className="self-stretch text-lg font-bold leading-6 text-primary">회원 현황</h3>
                <div className="flex flex-col items-center gap-3.5 self-stretch">
                  <div className="flex flex-col items-start gap-1 self-stretch">
                    <div className="flex items-center justify-between self-stretch">
                      <span className="text-sm font-normal leading-4 text-gray-1 opacity-70">
                        신규
                      </span>
                      <span className="text-center text-xl font-normal leading-6 tracking-[-0.4px] text-gray-1">
                        23명
                      </span>
                    </div>
                    <div className="flex items-center justify-between self-stretch">
                      <span className="text-sm font-normal leading-4 text-gray-1 opacity-70">
                        전체
                      </span>
                      <span className="text-center text-xl font-normal leading-6 tracking-[-0.4px] text-gray-3">
                        12,345명
                      </span>
                    </div>
                  </div>
                  <Button className="flex h-auto w-full items-center justify-center gap-1.5 self-stretch rounded bg-primary px-3 py-2.5 text-sm font-bold leading-4 tracking-[-0.28px] text-white">
                    회원 관리
                    <Image src="/images_jj/arrow.svg" alt="arrow_right" width={16} height={16} />
                  </Button>
                </div>
              </Card>

              {/* 희곡 데이터 카드 */}
              <Card className="flex w-1/3 flex-col items-start gap-5 bg-white p-7 px-8">
                <h3 className="self-stretch text-lg font-bold leading-6 text-primary">
                  희곡 데이터
                </h3>
                <div className="flex flex-col items-center gap-3.5 self-stretch">
                  <div className="flex flex-col items-start gap-1 self-stretch">
                    <div className="flex items-center justify-between self-stretch">
                      <span className="text-sm font-normal leading-4 text-gray-1 opacity-70">
                        신규
                      </span>
                      <span className="text-center text-xl font-normal leading-6 tracking-[-0.4px] text-gray-1">
                        32편
                      </span>
                    </div>
                    <div className="flex items-center justify-between self-stretch">
                      <span className="text-sm font-normal leading-4 text-gray-1 opacity-70">
                        전체
                      </span>
                      <span className="text-center text-xl font-normal leading-6 tracking-[-0.4px] text-gray-3">
                        4,520편
                      </span>
                    </div>
                  </div>
                  <Button className="flex h-auto w-full items-center justify-center gap-1.5 self-stretch rounded bg-primary px-3 py-2.5 text-sm font-bold leading-4 tracking-[-0.28px] text-white">
                    희곡 관리
                    <Image src="/images_jj/arrow.svg" alt="arrow_right" width={16} height={16} />
                  </Button>
                </div>
              </Card>

              {/* 작가 활동 카드 */}
              <Card className="flex w-1/3 flex-col items-start gap-5 bg-white p-7 px-8">
                <h3 className="self-stretch text-lg font-bold leading-6 text-primary">작가 활동</h3>
                <div className="flex flex-col items-center gap-3.5 self-stretch">
                  <div className="flex flex-col items-start gap-1 self-stretch">
                    <div className="flex items-center justify-between self-stretch">
                      <span className="text-sm font-normal leading-4 text-gray-1 opacity-70">
                        신규
                      </span>
                      <span className="text-center text-xl font-normal leading-6 tracking-[-0.4px] text-gray-1">
                        11명
                      </span>
                    </div>
                    <div className="flex items-center justify-between self-stretch">
                      <span className="text-sm font-normal leading-4 text-gray-1 opacity-70">
                        전체
                      </span>
                      <span className="text-center text-xl font-normal leading-6 tracking-[-0.4px] text-gray-3">
                        1,876명
                      </span>
                    </div>
                  </div>
                  <Button className="flex h-auto w-full items-center justify-center gap-1.5 self-stretch rounded bg-primary px-3 py-2.5 text-sm font-bold leading-4 tracking-[-0.28px] text-white">
                    작가 회원
                    <Image src="/images_jj/arrow.svg" alt="arrow_right" width={16} height={16} />
                  </Button>
                </div>
              </Card>
            </div>

            {/* 두 번째 행 */}
            <div className="flex flex-1 items-center gap-6">
              {/* 커뮤니티 활동 카드 */}
              <Card className="flex flex-1 flex-col items-start gap-5 bg-white p-7 px-8">
                <h3 className="self-stretch text-lg font-bold leading-6 text-primary">
                  커뮤니티 활동
                </h3>
                <div className="flex flex-col items-center gap-3.5 self-stretch">
                  <div className="flex flex-col items-start gap-1 self-stretch">
                    <div className="flex items-center justify-between self-stretch">
                      <span className="text-sm font-normal leading-4 text-gray-1 opacity-70">
                        신규 글
                      </span>
                      <span className="text-center text-xl font-normal leading-6 tracking-[-0.4px] text-gray-1">
                        18건
                      </span>
                    </div>
                    <div className="flex items-center justify-between self-stretch">
                      <span className="text-sm font-normal leading-4 text-gray-1 opacity-70">
                        신규 댓글
                      </span>
                      <span className="text-center text-xl font-normal leading-6 tracking-[-0.4px] text-gray-3">
                        74건
                      </span>
                    </div>
                  </div>
                  <Button className="flex h-auto w-full items-center justify-center gap-1.5 self-stretch rounded bg-primary px-3 py-2.5 text-sm font-bold leading-4 tracking-[-0.28px] text-white">
                    커뮤니티 관리
                    <Image src="/images_jj/arrow.svg" alt="arrow_right" width={16} height={16} />
                  </Button>
                </div>
              </Card>

              {/* 신고 접수 카드 */}
              <Card className="flex flex-1 flex-col items-start gap-5 bg-white p-7 px-8">
                <h3 className="self-stretch text-lg font-bold leading-6 text-primary">신고 접수</h3>
                <div className="flex flex-col items-center gap-3.5 self-stretch">
                  <div className="flex flex-col items-start gap-1 self-stretch">
                    <div className="flex items-center justify-between self-stretch">
                      <span className="text-sm font-normal leading-4 text-gray-1 opacity-70">
                        신규
                      </span>
                      <span className="text-center text-xl font-normal leading-6 tracking-[-0.4px] text-gray-1">
                        6건
                      </span>
                    </div>
                    <div className="flex items-center justify-between self-stretch">
                      <span className="text-sm font-normal leading-4 text-gray-1 opacity-70">
                        미처리
                      </span>
                      <span className="text-center text-xl font-normal leading-6 tracking-[-0.4px] text-gray-3">
                        2건
                      </span>
                    </div>
                  </div>
                  <Button className="flex h-auto w-full items-center justify-center gap-1.5 self-stretch rounded bg-primary px-3 py-2.5 text-sm font-bold leading-4 tracking-[-0.28px] text-white">
                    신고 관리
                    <Image src="/images_jj/arrow.svg" alt="arrow_right" width={16} height={16} />
                  </Button>
                </div>
              </Card>
            </div>
          </div>

          {/* 작품별 인기도/검색 통계 */}
          <Card className="flex w-[328px] flex-col items-center justify-center gap-2 self-stretch bg-white px-8 py-0 pl-6">
            <h3 className="self-stretch text-xl font-bold leading-6 text-black">
              작품별 인기도/검색 통계
            </h3>
            <div className="flex flex-col items-start self-stretch">
              {/* 헤더 */}
              <div className="flex items-center justify-between self-stretch px-0 py-2">
                <div className="flex flex-1 items-start gap-3 pl-1.5">
                  <span className="w-6 text-sm font-bold leading-4 tracking-[-0.28px] text-gray-4">
                    순번
                  </span>
                  <span className="flex-1 text-sm font-bold leading-4 tracking-[-0.28px] text-gray-4">
                    작품명
                  </span>
                </div>
                <span className="w-10 text-right text-sm font-bold leading-4 tracking-[-0.28px] text-gray-4">
                  검색 수
                </span>
              </div>

              {/* 데이터 행들 */}
              <div className="flex flex-col items-start self-stretch">
                {[
                  { rank: 1, title: '갈라테아', count: '5540' },
                  { rank: 2, title: '시골에서의 한 달', count: '3213' },
                  { rank: 3, title: '도시의 여름', count: '403' },
                  { rank: 4, title: '바다와 함께한 주말', count: '512' },
                  { rank: 5, title: '겨울 산행의 추억', count: '278' },
                  { rank: 6, title: '가족과의 특별한 저녁', count: '450' },
                  { rank: 7, title: '친구와의 여행 일기', count: '620' },
                  { rank: 8, title: '한 여름의 영화관', count: '234' },
                  { rank: 9, title: '아버지와 아들', count: '389' },
                  { rank: 10, title: '아버지와 아들', count: '389' },
                ].map((item) => (
                  <div
                    key={item.rank}
                    className="flex items-center justify-between self-stretch px-0 py-1.5"
                  >
                    <div className="flex flex-1 items-center justify-center gap-3">
                      <span className="w-6 text-center text-base font-normal leading-5 text-gray-3">
                        {item.rank}
                      </span>
                      <span className="flex-1 text-sm font-normal leading-4 text-gray-2">
                        {item.title}
                      </span>
                    </div>
                    <span className="w-10 text-right text-sm font-bold leading-4 tracking-[-0.28px] text-primary">
                      {item.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* 차트 섹션 */}
        <div className="flex flex-1 items-start gap-6 self-stretch">
          {/* 회원 리포트 차트 */}
          <Card className="flex flex-1 flex-col items-start gap-6 self-stretch bg-white p-11 px-11">
            <div className="flex flex-col items-start gap-6 self-stretch">
              <h3 className="text-xl font-bold leading-6 text-black">회원 리포트</h3>
            </div>
            <MemberReportChart />
          </Card>

          {/* 회원 추세 차트 */}
          <Card className="flex flex-1 flex-col items-start gap-6 self-stretch bg-white p-11 px-11">
            <div className="flex items-center justify-between self-stretch">
              <h3 className="text-xl font-bold leading-[30px] tracking-[-0.4px] text-black">
                회원 추세
              </h3>
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold leading-4 tracking-[-0.28px] text-gray-4">
                  구독자
                </span>
                <span className="text-xl font-bold leading-6 text-black">1,024명</span>
              </div>
            </div>
            <MemberTrendChart />
          </Card>
        </div>

        {/* 프로그램 신청 현황 */}
        <Card className="flex flex-1 flex-col items-start gap-3 self-stretch bg-white p-8 px-6">
          <div className="flex items-start justify-between self-stretch">
            <h3 className="text-xl font-bold leading-[30px] tracking-[-0.4px] text-black">
              프로그램 신청 현황
            </h3>
            <Button className="flex h-auto items-center justify-center gap-1.5 rounded bg-primary px-6 py-2.5 text-sm font-bold leading-4 tracking-[-0.28px] text-white">
              프로그램 예약
              <Image src="/images_jj/arrow.svg" alt="arrow_right" width={16} height={16} />
            </Button>
          </div>
          <div className="flex flex-col items-start self-stretch">
            {[
              {
                id: '12345',
                title: '[햄릿, 다시 읽기]',
                user: '홍길동',
                date: '2025-08-31 10:15',
              },
              {
                id: '12344',
                title: '[2025 여름 극작 워크숍]',
                user: '홍길동',
                date: '2025-08-31 10:15',
              },
              {
                id: '12344',
                title: '[2025 여름 극작 워크숍]',
                user: 'jiwonjiwon',
                date: '2025-08-31 10:15',
              },
              {
                id: '12344',
                title: '[고전 낭독회: 오이디푸스]',
                user: 'jiwonjiwon',
                date: '2025-08-31 10:15',
              },
              {
                id: '12344',
                title: '[신진 작가 쇼케이스]',
                user: 'jiwonjiwon',
                date: '2025-08-31 10:15',
              },
              {
                id: '12344',
                title: '[무대 뒤의 이야기: 극작가 토크]',
                user: 'jiwonjiwon',
                date: '2025-08-31 10:15',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="gap-15 flex items-center self-stretch border-b border-gray-7 px-6 py-2.5"
              >
                <div className="flex flex-1 items-center gap-11">
                  <span className="w-14 text-base font-normal leading-6 tracking-[-0.32px] text-gray-1">
                    {item.id}
                  </span>
                  <div className="flex max-w-[520px] flex-1 items-center justify-center gap-10">
                    <span className="max-w-[520px] text-base font-normal leading-6 tracking-[-0.32px] text-gray-1">
                      {item.title}
                    </span>
                  </div>
                </div>
                <div className="flex w-[120px] items-center justify-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-gray-5" />
                  <span className="max-w-[70px] text-center text-sm font-normal leading-4 text-gray-3">
                    {item.user}
                  </span>
                </div>
                <span className="w-[116px] text-center text-sm font-normal leading-4 text-gray-4">
                  {item.date}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
