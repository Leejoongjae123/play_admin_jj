import { SearchInput } from '@/components/common';
import { PlaySection, PlayMemoSection, PlayHeroSection } from '@/components/features/play';
import { Play } from '@/models/play';
import { Memo } from '@/models/memo';

export default function PlayPage() {
  const playList: Play[] = [
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
    // {
    //   id: '6',
    //   creator: 'system',
    //   createdAt: '2025-01-25T12:00:00Z',
    //   viewCount: 560,
    //   bookmarkCount: 130,
    //   title: 'Death of a Salesman',
    //   author: '아서 밀러',
    //   publisher: 'Viking Press',
    //   ganre: '현대 비극',
    //   quote: 'Attention, attention must finally be paid to such a person.',
    //   summary:
    //     '아메리칸 드림과 현실의 괴리 속에서 몰락해가는 세일즈맨 윌리 로먼의 삶을 다룬 현대 비극.',
    //   keyword: ['아메리칸 드림', '가족', '비극', '자본주의'],
    //   isVisible: true,
    // },
  ];

  const playMemoList: Memo[] = [
    {
      type: 'play',
      id: '1',
      username: 'tester1',
      content:
        '희곡 『메데이아』는 고대 비극의 원형이자 인간 내면의 격렬한 감정을 극단적으로 드러내는 작품입니다. 짧은 순간에도 관객에게 강렬한 울림을 남기며 고대와 현재를 잇는 힘을 보여주었습니다.',
      authorName: '에우리피데스',
      playTitle: '메데이아',
      likeCount: 0,
      commentCount: 0,
      isLiked: false,
      createdAt: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
    },
    {
      type: 'play',
      id: '2',
      username: 'tester4',
      content:
        '셰익스피어의 『리어 왕』을 2주 전 다시 보았습니다. 왕과 가족, 권력과 인간성이라는 주제는 여전히 날카롭게 현재를 비추며, 시간이 지나도 빛바래지 않는 고전의 힘을 보여주었습니다.',
      authorName: '윌리엄 셰익스피어',
      playTitle: '리어 왕',
      likeCount: 3,
      commentCount: 1,
      isLiked: false,
      createdAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      type: 'play',
      id: '3',
      username: 'tester4',
      content:
        '셰익스피어의 『리어 왕』을 2주 전 다시 보았습니다. 왕과 가족, 권력과 인간성이라는 주제는 여전히 날카롭게 현재를 비추며, 시간이 지나도 빛바래지 않는 고전의 힘을 보여주었습니다.',
      authorName: '윌리엄 셰익스피어',
      playTitle: '리어 왕',
      likeCount: 3,
      commentCount: 1,
      isLiked: false,
      createdAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
    },
  ];

  return (
    <section className="flex w-full flex-1 flex-col gap-[60px] px-[8vw] pt-10">
      <SearchInput searchPath="/play/search" />
      <PlaySection playList={playList} />
      <PlayMemoSection playMemoList={playMemoList} />
      <PlayHeroSection />
    </section>
  );
}
