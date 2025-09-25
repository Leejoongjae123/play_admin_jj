import { Suspense } from 'react';
import { SearchInput } from '@/components/common';
import { PlaySection, PlayMemoSection, PlayHeroSection } from '@/components/features/play';
import { DummyPlays } from '@/models/play';
import { Memo } from '@/models/memo';

export default async function PlayPage() {
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
      <Suspense fallback={<div />}>
        <SearchInput searchPath="/play/search" />
      </Suspense>

      <Suspense fallback={<div />}>
        <PlaySection playList={DummyPlays} />
      </Suspense>
      <PlayMemoSection playMemoList={playMemoList} />
      <PlayHeroSection />
    </section>
  );
}
