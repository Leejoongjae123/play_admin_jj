import {
  MainSearchResultSection,
  MainSearchResultPlaySection,
  MainSearchResultWriterSection,
} from '@/components/features/main/sections';

interface MainSearchPageProps {
  searchParams: {
    keyword: string;
  };
}

export default async function MainSearchPage({ searchParams }: MainSearchPageProps) {
  const { keyword } = await searchParams;

  const plays = [
    {
      id: '1',
      creator: 'system',
      createdAt: '2025-01-01T12:00:00Z',
      viewCount: 1200,
      bookmarkCount: 340,
      title: 'Hamlet',
      author: '윌리엄 셰익스피어',
      publisher: 'First Folio',
      ganre: '비극',
      quote: 'To be, or not to be, that is the question.',
      summary: '덴마크 왕자의 복수와 내적 갈등을 그린 비극으로, 인간 존재의 의미를 탐구한다.',
      keyword: ['비극', '복수', '광기', '실존주의'],
      isVisible: true,
    },
    {
      id: '2',
      creator: 'system',
      createdAt: '2025-01-05T12:00:00Z',
      viewCount: 980,
      bookmarkCount: 280,
      title: 'Oedipus Rex',
      author: '소포클레스',
      publisher: 'Classical Athens',
      ganre: '비극',
      quote: 'The truth must be made known, though it brings me ruin.',
      summary:
        '자신의 운명을 피하려다 결국 예언대로 아버지를 죽이고 어머니와 결혼하는 오이디푸스의 비극.',
      keyword: ['운명', '비극', '그리스', '숙명'],
      isVisible: true,
    },
    {
      id: '3',
      creator: 'system',
      createdAt: '2025-01-10T12:00:00Z',
      viewCount: 750,
      bookmarkCount: 190,
      title: "A Doll's House",
      author: '헨리크 입센',
      publisher: 'Gyldendal',
      ganre: '현대극',
      quote:
        'I must stand quite alone, if I am to understand myself and everything about me. I must stand quite alone, if I am to understand myself and everything about me.I must stand quite alone, if I am to understand myself and everything about me. I must stand quite alone, if I am to understand myself and everything about me.I must stand quite alone, if I am to understand myself and everything about me. I must stand quite alone, if I am to understand myself and everything about me.I must stand quite alone, if I am to understand myself and everything about me. I must stand quite alone, if I am to understand myself and everything about me.',
      summary: '가부장제와 여성의 자아를 다룬 현대극의 고전으로, 노라의 독립 선언이 유명하다.',
      keyword: ['여성주의', '사실주의'],
      isVisible: true,
    },
    {
      id: '4',
      creator: 'system',
      createdAt: '2025-01-15T12:00:00Z',
      viewCount: 680,
      bookmarkCount: 150,
      title: 'Waiting for Godot',
      author: '사무엘 베케트',
      publisher: 'Grove Press',
      ganre: '부조리극',
      quote: 'Nothing to be done.',
      summary: '두 인물이 고도를 기다리며 삶의 부조리와 무의미를 탐구하는 부조리극.',
      keyword: ['부조리주의', '실존주의', '기다림', '무의미'],
      isVisible: true,
    },
    {
      id: '5',
      creator: 'system',
      createdAt: '2025-01-20T12:00:00Z',
      viewCount: 820,
      bookmarkCount: 220,
      title: 'The Seagull',
      author: '안톤 체호프',
      publisher: "Suvorin's Press",
      ganre: '극',
      quote: 'I am in mourning for my life.',
      summary: '예술, 사랑, 인간관계의 복잡한 얽힘을 담은 체호프의 대표적인 심리극.',
      keyword: ['사랑', '예술', '비극', '심리'],
      isVisible: true,
    },
    {
      id: '6',
      creator: 'system',
      createdAt: '2025-01-25T12:00:00Z',
      viewCount: 560,
      bookmarkCount: 130,
      title: 'Death of a Salesman',
      author: '아서 밀러',
      publisher: 'Viking Press',
      ganre: '현대 비극',
      quote: 'Attention, attention must finally be paid to such a person.',
      summary:
        '아메리칸 드림과 현실의 괴리 속에서 몰락해가는 세일즈맨 윌리 로먼의 삶을 다룬 현대 비극.',
      keyword: ['아메리칸 드림', '가족', '비극', '자본주의'],
      isVisible: true,
    },
  ];

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

  return (
    <section className="flex w-full flex-col bg-background px-5 lg:px-[110px]">
      <MainSearchResultSection keyword={keyword} />

      <div className="flex flex-col gap-[60px] lg:gap-20">
        <MainSearchResultPlaySection plays={plays} />
        <MainSearchResultWriterSection writers={writers} />
      </div>
    </section>
  );
}
