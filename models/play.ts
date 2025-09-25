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

export const DummyPlays: Play[] = [
  {
    id: '1',
    creatorId: '1',
    creator: 'admin',
    createdAt: '2025-01-01T12:00:00Z',
    viewCount: 1200,
    bookmarkCount: 340,
    title: '시골에서의 한 달',
    authorId: '1',
    author: '이반 투르게네프',
    publisher: '',
    ganre: '비극',
    summary:
      '대사 또는 출판사의 책 소개나, 인스크립트만의 책 소개 줄글이 들어가는 것 또한 괜찮을 것 같습니다. DB 카테고리를 어떻게 정하느냐에 따라 레이아웃이 달라질 수 있습니다.\n대사 또는 출판사의 책 소개나, 인스크립트만의 책 소개 줄글이 들어가는 것 또한 괜찮을 것 같습니다. DB 카테고리를 어떻게 정하느냐에 따라 레이아웃이 달라질 수 있습니다.',
    keywords: ['질투', '삼각관계', '사실주의'],
    isVisible: true,
    line1:
      '그래, 대체 이게 뭐지? 내가 베라를 질투하는 건가? 내가… 내가 그를 사랑하는 건가? (...)\n넌 사랑에 빠진 거라고, 불행한 것! 대체 어떻게 된 영문인지… 모르겠어.',
    line2: '난 여기가 답답해요. 밖으로 나가고 싶어요.',
    line3: '난 여기가 답답해요. 밖으로 나가고 싶어요.',
    year: '1951',
    country: '러시아',
    femaleCharacterCount: '1',
    maleCharacterCount: '2',
    characterList: ['헤르메스', '이온', '크레우사', '크수토스'],
    publicHistory:
      '『갈매기』 , 장한(옮김), 더클래식, 2021\n『갈매기/세 자매/바냐 아저씨/벚꽃 동산』 수록, 동완(옮김), 동서문화사, 2012',
    publicStatus: PublicStatus.PUBLISHED,
  },
  {
    id: '2',
    creatorId: '2',
    creator: 'system',
    createdAt: '2025-01-05T12:00:00Z',
    viewCount: 980,
    bookmarkCount: 280,
    title: 'Oedipus Rex',
    authorId: '2',
    author: '소포클레스',
    publisher: 'Classical Athens',
    ganre: '비극',
    summary:
      '자신의 운명을 피하려다 결국 예언대로 아버지를 죽이고 어머니와 결혼하는 오이디푸스의 비극.',
    keywords: ['운명', '비극', '그리스', '숙명'],
    isVisible: true,
    line1: 'The truth must be made known, though it brings me ruin.',
    line2: '오! 신들이여, 나는 이미 내 운명의 길을 걷고 있었구나.',
    line3: '진실이 밝혀져야 한다, 비록 그것이 나를 파멸로 이끌지라도.',
    year: '기원전 429년경',
    country: '고대 그리스',
    femaleCharacterCount: '2',
    maleCharacterCount: '3',
    characterList: ['오이디푸스', '이오카스테', '크레온', '테이레시아스', '목자'],
    publicHistory:
      '『오이디푸스 왕』, 김재홍(옮김), 지식을만드는지식, 2010\n『소포클레스 비극 전집』 수록, 천병희(옮김), 숲, 2009',
    publicStatus: PublicStatus.PUBLISHED,
  },
  {
    id: '3',
    creatorId: '3',
    creator: 'system',
    createdAt: '2025-01-10T12:00:00Z',
    viewCount: 750,
    bookmarkCount: 190,
    title: "A Doll's House",
    authorId: '3',
    author: '헨리크 입센',
    publisher: 'Gyldendal',
    ganre: '현대극',
    summary: '가부장제와 여성의 자아를 다룬 현대극의 고전으로, 노라의 독립 선언이 유명하다.',
    keywords: ['여성주의', '사실주의', '가부장제', '자아실현'],
    isVisible: true,
    line1: 'I must stand quite alone, if I am to understand myself and everything about me.',
    line2: '나는 완전히 홀로 서야 해요. 나 자신과 내 주변의 모든 것을 이해하려면.',
    line3: '당신은 무엇보다 먼저 아내이자 어머니라고 하겠지만, 나는 그렇게 생각하지 않아요.',
    year: '1879',
    country: '노르웨이',
    femaleCharacterCount: '3',
    maleCharacterCount: '4',
    characterList: ['노라', '토르발드', '크리스틴', '크로그스타드', '랑크 박사'],
    publicHistory:
      '『인형의 집』, 박종덕(옮김), 펭귄클래식코리아, 2009\n『입센 희곡집』 수록, 이원기(옮김), 을유문화사, 2005',
    publicStatus: PublicStatus.PUBLISHED,
  },
  {
    id: '4',
    creatorId: '4',
    creator: 'system',
    createdAt: '2025-01-15T12:00:00Z',
    viewCount: 680,
    bookmarkCount: 150,
    title: 'Waiting for Godot',
    authorId: '4',
    author: '사무엘 베케트',
    publisher: 'Grove Press',
    ganre: '부조리극',
    summary: '두 인물이 고도를 기다리며 삶의 부조리와 무의미를 탐구하는 부조리극.',
    keywords: ['부조리주의', '실존주의', '기다림', '무의미'],
    isVisible: true,
    line1: 'Nothing to be done.',
    line2: '아무것도 할 일이 없다.',
    line3: '우리는 고도를 기다리고 있다.',
    year: '1953',
    country: '프랑스',
    femaleCharacterCount: '0',
    maleCharacterCount: '4',
    characterList: ['블라디미르', '에스트라공', '포조', '럭키'],
    publicHistory:
      '『고도를 기다리며』, 오증자(옮김), 민음사, 2000\n『베케트 희곡선』 수록, 김현균(옮김), 문학동네, 2010',
    publicStatus: PublicStatus.PUBLISHED,
  },
  {
    id: '5',
    creatorId: '5',
    creator: 'system',
    createdAt: '2025-01-20T12:00:00Z',
    viewCount: 820,
    bookmarkCount: 220,
    title: 'The Seagull',
    authorId: '5',
    author: '안톤 체호프',
    publisher: "Suvorin's Press",
    ganre: '극',
    summary: '예술, 사랑, 인간관계의 복잡한 얽힘을 담은 체호프의 대표적인 심리극.',
    keywords: ['사랑', '예술', '비극', '심리'],
    isVisible: true,
    line1: 'I am in mourning for my life.',
    line2: '나는 내 인생을 위해 애도하고 있다.',
    line3: '예술이란 무엇인가? 삶이란 무엇인가?',
    year: '1896',
    country: '러시아',
    femaleCharacterCount: '4',
    maleCharacterCount: '5',
    characterList: ['니나', '아르카지나', '트레플료프', '트리고린', '소린', '마샤'],
    publicHistory:
      '『갈매기』, 장한(옮김), 더클래식, 2021\n『체호프 희곡전집』 수록, 신정옥(옮김), 열린책들, 2006',
    publicStatus: PublicStatus.PUBLISHED,
  },
  {
    id: '6',
    creatorId: '6',
    creator: 'system',
    createdAt: '2025-01-25T12:00:00Z',
    viewCount: 560,
    bookmarkCount: 130,
    title: 'Death of a Salesman',
    authorId: '6',
    author: '아서 밀러',
    publisher: 'Viking Press',
    ganre: '현대 비극',
    summary:
      '아메리칸 드림과 현실의 괴리 속에서 몰락해가는 세일즈맨 윌리 로먼의 삶을 다룬 현대 비극.',
    keywords: ['아메리칸 드림', '가족', '비극', '자본주의'],
    isVisible: true,
    line1: 'Attention, attention must finally be paid to such a person.',
    line2: '주목하라, 이런 사람에게는 마침내 주목해야 한다.',
    line3: '나는 세일즈맨이야. 내가 아는 건 그것뿐이야.',
    year: '1949',
    country: '미국',
    femaleCharacterCount: '2',
    maleCharacterCount: '4',
    characterList: ['윌리 로먼', '린다', '비프', '해피', '벤 삼촌', '찰리'],
    publicHistory:
      '『세일즈맨의 죽음』, 김석만(옮김), 민음사, 2005\n『아서 밀러 희곡선』 수록, 오화섭(옮김), 동인, 2000',
    publicStatus: PublicStatus.PUBLISHED,
  },
];

export interface Play {
  id: string;
  creatorId: string;
  creator: string;
  createdAt: string;
  viewCount: number;
  bookmarkCount: number;
  title: string;
  authorId: string;
  author: string;
  publisher?: string;
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
