import {
  MainSearchResultSection,
  MainSearchResultPlaySection,
  MainSearchResultWriterSection,
  MainSearchResultProgramSection,
} from '@/components/features/main/sections';
import { ProgramStatus } from '@/models/program';
import { DummyPlays } from '@/models/play';
import { MainSearchPageSearchParams } from './types';

interface MainSearchPageProps {
  searchParams: Promise<MainSearchPageSearchParams>;
}

export default async function MainSearchPage({ searchParams }: MainSearchPageProps) {
  const { keyword } = await searchParams;

  const writers = [
    {
      id: 'w1',
      email: 'william.shakespeare@example.com',
      createdAt: '2025-01-01T12:00:00Z',
      viewCount: 1200,
      isBookmark: false,
      name: ' 윌리엄 셰익스피어',
      nameEn: 'William Shakespeare',
      genre: '비극',
      keyword: ['비극', '복수', '광기', '실존주의'],
      description:
        '영국의 극작가이자 시인으로, 인간 심리와 내적 갈등을 섬세하게 묘사한 희곡을 다수 집필하였다. 대표작으로는 「햄릿」이 있다. 영국의 극작가이자 시인으로, 인간 심리와 내적 갈등을 섬세하게 묘사한 희곡을 다수 집필하였다. 대표작으로는 「햄릿」이 있다. 영국의 극작가이자 시인으로, 인간 심리와 내적 갈등을 섬세하게 묘사한 희곡을 다수 집필하였다. 대표작으로는 「햄릿」이 있다. 영국의 극작가이자 시인으로, 인간 심리와 내적 갈등을 섬세하게 묘사한 희곡을 다수 집필하였다. 대표작으로는 「햄릿」이 있다.',
      isVisible: true,
    },
    {
      id: 'w2',
      email: 'sophocles@example.com',
      createdAt: '2025-01-05T12:00:00Z',
      viewCount: 980,
      isBookmark: false,
      name: '소포클레스',
      nameEn: 'Sophocles',
      genre: '비극',
      keyword: ['운명', '비극', '그리스', '숙명'],
      description:
        '고대 그리스의 비극 작가로, 인간의 운명과 숙명을 탐구하는 작품을 남겼다. 대표작으로 「오이디푸스 왕」이 있다.',
      isVisible: true,
    },
    {
      id: 'w3',
      email: 'henrik.ibsen@example.com',
      createdAt: '2025-01-10T12:00:00Z',
      viewCount: 750,
      isBookmark: false,
      name: '헨리크 입센',
      nameEn: 'Henrik Ibsen',
      genre: '현대극',
      keyword: ['여성주의', '사실주의', '가부장제', '자아'],
      description:
        '노르웨이의 극작가로, 현대극의 아버지라 불린다. 사회적 제약 속에서 인간의 자아와 독립을 탐구한 작품이 많다. 대표작 「인형의 집」.',
      isVisible: true,
    },
    {
      id: 'w4',
      email: 'samuel.beckett@example.com',
      createdAt: '2025-01-15T12:00:00Z',
      viewCount: 680,
      isBookmark: false,
      name: '사무엘 베케트',
      nameEn: 'Samuel Beckett',
      genre: '부조리극',
      keyword: ['부조리주의', '실존주의', '기다림', '무의미'],
      description:
        '아일랜드 출신의 극작가로, 부조리극의 대표적 인물이다. 인간 존재의 무의미와 기다림을 주제로 한 작품을 많이 썼다. 대표작 「고도를 기다리며」.',
      isVisible: true,
    },
  ];

  const programs = [
    {
      id: '1',
      title: '청년 창작 연극 워크숍',
      eventDateTime: '2025-11-10T18:00:00Z',
      applicationPeriod: {
        startAt: '2025-10-01T00:00:00Z',
        endAt: '2025-11-05T23:59:59Z',
      },
      location: '서울예술센터 소극장',
      capacity: 50,
      notes: '연극 경험이 없어도 누구나 참여할 수 있습니다. 참가비 무료.',
      keywords: ['연극', '창작', '청년'],
      description:
        '청년 예술가들을 위한 창작 연극 워크숍입니다. 연기, 대본 작성, 무대 연출 등 다양한 실습을 통해 작품을 직접 만들어보는 시간을 갖습니다.',
      thumbnailUrl: '/images/programs/workshop.jpg',
      isVisible: true,
      createdAt: '2025-09-20T12:00:00Z',
      applicationCount: 32,
      viewCount: 240,
      bookmarkCount: 15,
      status: 'ongoing' as ProgramStatus,
    },
    {
      id: '2',
      title: '고전 희곡 낭독회: 햄릿',
      eventDateTime: '2025-12-02T19:30:00Z',
      applicationPeriod: {
        startAt: '2025-11-01T00:00:00Z',
        endAt: '2025-11-30T23:59:59Z',
      },
      location: '부산 문화회관 대강당',
      capacity: 200,
      notes: '선착순 마감. 당일 현장 등록 불가.',
      keywords: ['희곡', '셰익스피어', '낭독'],
      description:
        '윌리엄 셰익스피어의 대표작 <햄릿>을 전문 배우들이 낭독 형식으로 선보입니다. 무대 연출 대신 대사의 힘으로만 감동을 전하는 특별한 무대.',
      thumbnailUrl: '/images/programs/hamlet.jpg',
      isVisible: true,
      createdAt: '2025-09-22T12:00:00Z',
      applicationCount: 120,
      viewCount: 560,
      bookmarkCount: 45,
      status: 'ongoing' as ProgramStatus,
    },
    {
      id: '3',
      title: '청소년 문화예술 캠프',
      eventDateTime: '2025-07-15T09:00:00Z',
      applicationPeriod: {
        startAt: '2025-05-01T00:00:00Z',
        endAt: '2025-07-01T23:59:59Z',
      },
      location: '강원도 평창 문화체험관',
      capacity: 80,
      notes: '중·고등학생 대상. 숙식 제공.',
      keywords: ['청소년', '문화', '캠프'],
      description:
        '미래의 문화예술인을 꿈꾸는 청소년들을 위한 여름 캠프입니다. 연극, 무용, 음악, 미술 등 다양한 예술 활동을 함께 경험할 수 있습니다.',
      thumbnailUrl: '/images/programs/camp.jpg',
      isVisible: true,
      createdAt: '2025-04-01T10:00:00Z',
      applicationCount: 80,
      viewCount: 890,
      bookmarkCount: 62,
      status: 'closed' as ProgramStatus,
    },
  ];

  return (
    <section className="flex w-full flex-col bg-background px-[8vw]">
      <MainSearchResultSection keyword={keyword} />

      <div className="flex flex-col gap-[60px] lg:gap-20">
        <MainSearchResultPlaySection plays={DummyPlays} />
        <MainSearchResultWriterSection writers={writers} />
        <MainSearchResultProgramSection programs={programs} />
      </div>
    </section>
  );
}
