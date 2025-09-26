import { User, DummyUsers } from './user';
import { Writer, DummyWriters } from './writer';

export enum PublicStatus {
  PUBLISHED = 'published',
  UNPUBLISHED = 'unpublished',
  OUT_OF_PRINT = 'outOfPrint',
}

export const PublicStatusLabel: Record<PublicStatus, string> = {
  [PublicStatus.PUBLISHED]: '출간',
  [PublicStatus.UNPUBLISHED]: '미출간',
  [PublicStatus.OUT_OF_PRINT]: '절판',
};

export interface Play {
  id: string;
  createdBy: User;
  createdAt: string;
  viewCount: number;
  bookmarkCount: number;
  title: string;
  writer: Writer;
  ganre?: string;
  summary: string;
  keywords: string[];
  isVisible: boolean;
  line1?: string;
  line2?: string;
  line3?: string;
  year?: string;
  country?: string;
  femaleCharacterCount?: string;
  maleCharacterCount?: string;
  characterList?: string[];
  publicHistory?: string;
  publicStatus?: PublicStatus;
}

// 유저와 작가 정보를 찾는 헬퍼 함수들
const getUserById = (id: string): User => {
  const user = DummyUsers.find((u) => u.id === id);
  if (!user) throw new Error(`User with id ${id} not found`);
  return user;
};

const getWriterById = (id: string): Writer => {
  const writer = DummyWriters.find((w) => w.id === id);
  if (!writer) throw new Error(`Writer with id ${id} not found`);
  return writer;
};

export const DummyPlays: Play[] = [
  {
    id: '1',
    createdBy: getUserById('1'), // 관리자
    createdAt: '2024-12-01T10:00:00Z',
    viewCount: 1450,
    bookmarkCount: 102,
    title: '디지털 휴먼',
    writer: getWriterById('2'), // 김민수 → 김민하 (SF)
    ganre: '과학소설',
    summary:
      '2045년 미래, 인공지능과 인간의 경계가 모호해진 시대. 디지털로 업로드된 인간의 의식과 실제 인간 사이의 갈등을 그린 SF 드라마.',
    keywords: ['SF', '미래', '기술', '인공지능', '의식'],
    isVisible: true,
    line1: '나는... 정말 나인가? 아니면 나의 복사본인가?',
    line2: '기억이 모든 것이라면, 우리는 모두 데이터의 집합일 뿐이야.',
    line3: '인간다움이란 무엇인가? 감정인가, 기억인가, 아니면 그 무언가인가?',
    year: '2024',
    country: '한국',
    femaleCharacterCount: '2',
    maleCharacterCount: '3',
    characterList: ['진우', '사라', '닥터 김', 'AI 진우', '네오'],
    publicHistory: '『디지털 휴먼』, 연극실험실, 2024년 초연',
    publicStatus: PublicStatus.PUBLISHED,
  },
  {
    id: '2',
    createdBy: getUserById('4'), // 박서준 (일반 유저)
    createdAt: '2024-12-05T14:20:00Z',
    viewCount: 1250,
    bookmarkCount: 89,
    title: '봄날의 편지',
    writer: getWriterById('3'), // 이지은 → 이은지 (로맨스)
    ganre: '로맨스',
    summary:
      '오래된 편지 한 통으로 시작되는 두 남녀의 운명적 만남. 시간과 공간을 초월한 사랑 이야기를 따뜻하고 감성적으로 그려낸 로맨틱 드라마.',
    keywords: ['로맨스', '일상', '감성', '현대소설', '편지'],
    isVisible: true,
    line1: '이 편지가 당신에게 닿기를... 마음이 닿기를...',
    line2: '사랑은 시간을 뛰어넘는다고 했나요? 정말일까요?',
    line3: '당신을 만나서... 삶이 이렇게 아름다운 줄 몰랐어요.',
    year: '2024',
    country: '한국',
    femaleCharacterCount: '3',
    maleCharacterCount: '2',
    characterList: ['지수', '민호', '할머니', '영희', '택배기사'],
    publicHistory: '『봄날의 편지』, 소극장 봄날, 2024년 춘계 시즌',
    publicStatus: PublicStatus.PUBLISHED,
  },
  {
    id: '3',
    createdBy: getUserById('1'), // 관리자
    createdAt: '2024-11-20T16:45:00Z',
    viewCount: 980,
    bookmarkCount: 67,
    title: '밤의 목격자',
    writer: getWriterById('6'), // 정현우 (스릴러)
    ganre: '스릴러',
    summary:
      '연쇄살인 사건의 유일한 목격자가 된 여성. 하지만 그녀가 본 것은 과연 진실일까? 복잡한 인간 심리와 예측 불가능한 반전이 가득한 심리 스릴러.',
    keywords: ['추리', '심리스릴러', '범죄', '서스펜스', '목격자'],
    isVisible: true,
    line1: '내가 본 것이... 정말 그 사람이었을까?',
    line2: '기억이라는 건 때로는 거짓말을 하죠.',
    line3: '진실은 항상 가장 어두운 곳에 숨어있다.',
    year: '2024',
    country: '한국',
    femaleCharacterCount: '2',
    maleCharacterCount: '4',
    characterList: ['수진', '형사 박', '용의자 A', '의사', '변호사', '증인 B'],
    publicHistory: '『밤의 목격자』, 블랙박스 시어터, 2024년 가을 시즌',
    publicStatus: PublicStatus.PUBLISHED,
  },
  {
    id: '4',
    createdBy: getUserById('4'), // 박서준
    createdAt: '2024-11-15T11:30:00Z',
    viewCount: 720,
    bookmarkCount: 45,
    title: '열아홉의 여름',
    writer: getWriterById('7'), // 한예원 (청춘소설, pending)
    ganre: '청춘소설',
    summary:
      '대학 입시를 앞둔 고3 학생들의 마지막 여름. 꿈과 현실 사이에서 고민하는 청춘들의 성장 이야기를 따뜻한 시선으로 그려낸 작품.',
    keywords: ['청춘', '성장', '꿈', '우정', '입시'],
    isVisible: false, // pending 상태라서 아직 비공개
    line1: '우리에겐 아직 시간이 있어. 꿈꿀 시간이.',
    line2: '어른이 된다는 건... 꿈을 포기하는 걸까?',
    line3: '이 여름이 영원했으면 좋겠어.',
    year: '2024',
    country: '한국',
    femaleCharacterCount: '3',
    maleCharacterCount: '3',
    characterList: ['예원', '지훈', '소영', '태민', '선생님', '엄마'],
    publicHistory: '미출간 (심사 중)',
    publicStatus: PublicStatus.UNPUBLISHED,
  },
  {
    id: '5',
    createdBy: getUserById('5'), // 최수민 (suspended)
    createdAt: '2024-10-30T09:15:00Z',
    viewCount: 890,
    bookmarkCount: 58,
    title: '임진왜란 대기록',
    writer: getWriterById('8'), // 임동현 → 동현 (역사소설)
    ganre: '역사소설',
    summary:
      '1592년 임진왜란 발발. 조선의 운명이 걸린 7년 전쟁 속에서 백성들의 삶과 영웅들의 희생을 그린 대하 역사극.',
    keywords: ['역사', '조선', '전쟁', '영웅', '임진왜란'],
    isVisible: true,
    line1: '이 땅을 지키는 것이... 우리의 의무입니다.',
    line2: '적이 쳐들어와도 조선의 혼은 꺾이지 않는다!',
    line3: '백성을 위한 왕이 되겠습니다.',
    year: '2024',
    country: '한국',
    femaleCharacterCount: '2',
    maleCharacterCount: '6',
    characterList: ['이순신', '선조', '정유정', '왜장', '의병장', '백성 A', '백성 B', '궁녀'],
    publicHistory: '『임진왜란 대기록』, 국립극장, 2024년 대하사극 시리즈',
    publicStatus: PublicStatus.PUBLISHED,
  },
  {
    id: '6',
    createdBy: getUserById('1'), // 관리자
    createdAt: '2024-10-10T13:50:00Z',
    viewCount: 450,
    bookmarkCount: 23,
    title: '마법사의 귀환',
    writer: getWriterById('9'), // 송하린 → 하린 (판타지, rejected)
    ganre: '판타지',
    summary:
      '천년의 봉인에서 깨어난 마법사와 현대 세계의 충돌. 고대 마법과 현대 문명이 만나면서 벌어지는 환상적인 모험 이야기.',
    keywords: ['판타지', '마법', '모험', '이세계', '현대'],
    isVisible: false, // rejected 상태라서 비공개
    line1: '천년의 잠에서 깨어나니... 세상이 모두 바뀌었구나.',
    line2: '마법이 사라진 이 세계에서... 나는 무엇을 해야 하는가?',
    line3: '진정한 마법은... 마음에서 나오는 것이다.',
    year: '2024',
    country: '한국',
    femaleCharacterCount: '2',
    maleCharacterCount: '4',
    characterList: ['아르카나', '현대인 민수', '요정 루나', '악마', '마법학자', '소녀'],
    publicHistory: '심사 탈락 (재심사 예정)',
    publicStatus: PublicStatus.UNPUBLISHED,
  },
  {
    id: '7',
    createdBy: getUserById('4'), // 박서준
    createdAt: '2024-09-25T20:10:00Z',
    viewCount: 650,
    bookmarkCount: 34,
    title: '밤이 깊어갈 때',
    writer: getWriterById('10'), // 윤태영 → 태영 (공포소설)
    ganre: '공포소설',
    summary:
      '깊은 밤, 혼자 남은 사무실에서 벌어지는 기이한 현상들. 일상 속에 숨어있는 공포와 미스터리를 한국적 정서로 표현한 공포극.',
    keywords: ['공포', '미스터리', '초자연', '서스펜스', '심리공포'],
    isVisible: true,
    line1: '밤이 깊어질수록... 그들이 나타난다.',
    line2: '이 소리... 분명 들었는데... 아무도 없어.',
    line3: '현실과 악몽의 경계가... 사라져 간다.',
    year: '2024',
    country: '한국',
    femaleCharacterCount: '1',
    maleCharacterCount: '3',
    characterList: ['회사원 진호', '청소부', '경비원', '의문의 여자'],
    publicHistory: '『밤이 깊어갈 때』, 호러 페스티벌 2024',
    publicStatus: PublicStatus.PUBLISHED,
  },
];
