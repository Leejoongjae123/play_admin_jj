export interface Writer {
  id: string;
  email: string;
  createdAt: string;
  viewCount: number;
  isBookmark: boolean;
  name: string;
  nameEn: string;
  genre?: string;
  keyword: string[];
  description: string;
  isVisible: boolean;
}

export const DummyWriters: Writer[] = [
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
