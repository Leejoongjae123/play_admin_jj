export type ProgramStatus = 'ongoing' | 'closed';

export interface Program {
  id: string;
  title: string;
  eventDateTime: string;
  applicationPeriod: {
    startAt: string;
    endAt: string;
  };
  location: string;
  capacity?: number;
  notes: string;
  keywords: string[];
  description: string;
  thumbnailUrl: string;
  isVisible: boolean;
  isBookmarked?: boolean;
  createdAt: string;
  applicationCount: number;
  viewCount: number;
  bookmarkCount: number;
  status: ProgramStatus;
}

export const DummyPrograms: Program[] = [
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
    status: 'ongoing',
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
    status: 'ongoing',
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
    status: 'closed',
  },
];
