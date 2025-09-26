import { User, DummyUsers } from './user';

export type WriterRequestStatus = 'pending' | 'approved' | 'rejected';

export interface Writer extends User {
  writerName: string;
  writerNameEn?: string;
  genre?: string;
  keyword: string[];
  description: string;
  viewCount: number;
  bookmarkCount: number;
  isVisible: boolean;
  requestStatus: WriterRequestStatus;
}

// Writer 전용 필드 데이터 매핑
const writerSpecificData: Record<
  string,
  {
    writerName: string;
    writerNameEn?: string;
    genre?: string;
    keyword: string[];
    description: string;
    viewCount: number;
    bookmarkCount: number;
    isVisible: boolean;
    requestStatus: WriterRequestStatus;
  }
> = {
  '2': {
    writerName: '김민하',
    writerNameEn: 'Kim Minha',
    genre: '과학소설',
    keyword: ['SF', '미래', '기술', '인공지능'],
    description:
      '미래 사회와 기술의 발전이 인간에게 미치는 영향을 탐구하는 SF 작가. 현실적이면서도 상상력 넘치는 미래 세계를 그려낸다. 대표작 「디지털 휴먼」.',
    viewCount: 1450,
    bookmarkCount: 102,
    isVisible: true,
    requestStatus: 'approved',
  },
  '3': {
    writerName: '이은지',
    writerNameEn: 'Lee Eunji',
    genre: '로맨스',
    keyword: ['로맨스', '일상', '감성', '현대소설'],
    description:
      '현대 한국 문학을 대표하는 작가로, 일상 속 소소한 감동과 인간 관계의 미묘한 감정을 섬세하게 그려낸다. 대표작 「봄날의 편지」.',
    viewCount: 1250,
    bookmarkCount: 89,
    isVisible: true,
    requestStatus: 'approved',
  },
  '6': {
    writerName: '정현우',
    writerNameEn: 'Hyunwoo Jung',
    genre: '스릴러',
    keyword: ['추리', '심리스릴러', '범죄', '서스펜스'],
    description:
      '긴장감 넘치는 스릴러 소설의 대가. 복잡한 인간 심리와 예측 불가능한 플롯으로 독자들을 사로잡는다. 대표작 「밤의 목격자」.',
    viewCount: 980,
    bookmarkCount: 67,
    isVisible: true,
    requestStatus: 'approved',
  },
  '7': {
    writerName: '한예원',
    writerNameEn: 'Yewon Han',
    genre: '청춘소설',
    keyword: ['청춘', '성장', '꿈', '우정'],
    description:
      '젊은이들의 꿈과 좌절, 성장을 따뜻한 시선으로 그려내는 청춘소설 작가. 독자들의 마음에 깊은 울림을 준다. 대표작 「열아홉의 여름」.',
    viewCount: 720,
    bookmarkCount: 45,
    isVisible: true,
    requestStatus: 'pending',
  },
  '8': {
    writerName: '동현',
    writerNameEn: 'D.H. Im',
    genre: '역사소설',
    keyword: ['역사', '조선', '전쟁', '영웅'],
    description:
      '한국사의 굵직한 사건들을 소설로 재구성하는 역사소설 작가. 철저한 고증을 바탕으로 생생한 역사의 현장을 재현한다. 대표작 「임진왜란 대기록」.',
    viewCount: 890,
    bookmarkCount: 58,
    isVisible: true,
    requestStatus: 'approved',
  },
  '9': {
    writerName: '하린',
    writerNameEn: 'Harin',
    genre: '판타지',
    keyword: ['판타지', '마법', '모험', '이세계'],
    description:
      '상상력이 풍부한 판타지 세계관을 구축하는 작가. 독창적인 마법 시스템과 흥미진진한 모험 이야기로 주목받았다. 대표작 「마법사의 귀환」.',
    viewCount: 450,
    bookmarkCount: 23,
    isVisible: false,
    requestStatus: 'rejected',
  },
  '10': {
    writerName: '태영',
    writerNameEn: 'T.Y. Yoon',
    genre: '공포소설',
    keyword: ['공포', '미스터리', '초자연', '서스펜스'],
    description:
      '한국적 정서가 담긴 독특한 공포 소설을 쓰는 작가. 일상 속 숨어있는 공포와 미스터리를 탁월하게 표현한다. 대표작 「밤이 깊어갈 때」.',
    viewCount: 650,
    bookmarkCount: 34,
    isVisible: true,
    requestStatus: 'approved',
  },
};

// DummyUsers에서 writer 역할 필터링 후 Writer 데이터 생성
export const DummyWriters: Writer[] = DummyUsers.filter((user) => user.role === 'writer').map(
  (user) => ({
    ...user,
    ...writerSpecificData[user.id],
  }),
);
