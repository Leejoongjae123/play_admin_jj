export type MemoType = 'play' | 'writer' | 'program';

export const DummyMemos: Memo[] = [
  {
    type: 'play',
    id: '1',
    playId: '1', // '시골에서의 한 달' (이반 투르게네프)
    userId: '1',
    username: 'tester1',
    content:
      '희곡 『메데이아』는 고대 비극의 원형이자 인간 내면의 격렬한 감정을 극단적으로 드러내는 작품입니다. 짧은 순간에도 관객에게 강렬한 울림을 남기며 고대와 현재를 잇는 힘을 보여주었습니다.\n희곡 『메데이아』는 고대 비극의 원형이자 인간 내면의 격렬한 감정을 극단적으로 드러내는 작품입니다. 짧은 순간에도 관객에게 강렬한 울림을 남기며 고대와 현재를 잇는 힘을 보여주었습니다.\n희곡 『메데이아』는 고대 비극의 원형이자 인간 내면의 격렬한 감정을 극단적으로 드러내는 작품입니다. 짧은 순간에도 관객에게 강렬한 울림을 남기며 고대와 현재를 잇는 힘을 보여주었습니다.희곡 『메데이아』는 고대 비극의 원형이자 인간 내면의 격렬한 감정을 극단적으로 드러내는 작품입니다. 짧은 순간에도 관객에게 강렬한 울림을 남기며 고대와 현재를 잇는 힘을 보여주었습니다.희곡 『메데이아』는 고대 비극의 원형이자 인간 내면의 격렬한 감정을 극단적으로 드러내는 작품입니다. 짧은 순간에도 관객에게 강렬한 울림을 남기며 고대와 현재를 잇는 힘을 보여주었습니다.희곡 『메데이아』는 고대 비극의 원형이자 인간 내면의 격렬한 감정을 극단적으로 드러내는 작품입니다. 짧은 순간에도 관객에게 강렬한 울림을 남기며 고대와 현재를 잇는 힘을 보여주었습니다.',
    authorName: '에우리피데스',
    playTitle: '메데이아',
    likeCount: 0,
    commentCount: 0,
    isLiked: false,
    createdAt: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
  },
  {
    type: 'writer',
    id: '2',
    writerId: '2', // 윌리엄 셰익스피어
    userId: '2',
    username: 'tester2',
    title: '벚꽃 동산',
    content:
      '체호프의 단편에서 느껴지는 일상의 쓸쓸함은 한 시간 전에도 여전히 마음에 남아 있습니다. 인간의 사소한 순간들이 어떻게 예술로 승화되는지를 다시금 느끼게 되었습니다.',
    authorName: '안톤 체호프',
    playTitle: '벚꽃 동산',
    likeCount: 2,
    commentCount: 1,
    isLiked: true,
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
  },
  {
    type: 'program',
    id: '3',
    programId: '3', // '고전 희곡 낭독회: 햄릿'
    userId: '3',
    username: 'tester3',
    title: '넘버',
    content:
      '지난 며칠 간 이어진 낭독 프로그램은 단순한 공연을 넘어 관객과 배우가 함께 호흡하며 사유하는 장이 되었습니다. 특히 3일 전 무대는 조용히 퍼져 나가는 울림이 깊었습니다.',
    authorName: '캐럴 처칠',
    playTitle: '넘버',
    likeCount: 1,
    commentCount: 0,
    isLiked: false,
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    type: 'play',
    id: '4',
    playId: '4', // 'Waiting for Godot' (사무엘 베케트)
    userId: '4',
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
    type: 'writer',
    id: '5',
    writerId: 'w4', // 사무엘 베케트
    userId: '5',
    username: 'tester5',
    content:
      '2달 전 다시 읽은 아서 밀러의 작품은 여전히 묵직했습니다. 개인의 꿈과 사회의 기대가 충돌하는 지점에서 인간이 얼마나 흔들릴 수 있는지를 통렬히 보여줍니다.',
    authorName: '아서 밀러',
    playTitle: '세일즈맨의 죽음',
    likeCount: 4,
    commentCount: 2,
    isLiked: true,
    createdAt: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    type: 'program',
    id: '6',
    programId: '3', // '청소년 문화예술 캠프'
    userId: '6',
    username: 'tester6',
    title: '갈라테아',
    content:
      '작년 같은 시기에 참여했던 프로그램은 단순한 공연이 아니라 하나의 사건이었습니다. 연극과 토론, 그리고 관객들의 목소리가 어우러져 한 해가 지나도 여전히 생생하게 남아 있습니다.',
    authorName: '게리 오언',
    playTitle: '갈라테아',
    likeCount: 5,
    commentCount: 3,
    isLiked: false,
    createdAt: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    type: 'play',
    id: '7',
    playId: '2', // '시골에서의 한 달' (이반 투르게네프)
    userId: '3',
    username: 'tester1',
    content:
      '희곡 『메데이아』는 고대 비극의 원형이자 인간 내면의 격렬한 감정을 극단적으로 드러내는 작품입니다. 짧은 순간에도 관객에게 강렬한 울림을 남기며 고대와 현재를 잇는 힘을 보여주었습니다.\n희곡 『메데이아』는 고대 비극의 원형이자 인간 내면의 격렬한 감정을 극단적으로 드러내는 작품입니다. 짧은 순간에도 관객에게 강렬한 울림을 남기며 고대와 현재를 잇는 힘을 보여주었습니다.\n희곡 『메데이아』는 고대 비극의 원형이자 인간 내면의 격렬한 감정을 극단적으로 드러내는 작품입니다. 짧은 순간에도 관객에게 강렬한 울림을 남기며 고대와 현재를 잇는 힘을 보여주었습니다.희곡 『메데이아』는 고대 비극의 원형이자 인간 내면의 격렬한 감정을 극단적으로 드러내는 작품입니다. 짧은 순간에도 관객에게 강렬한 울림을 남기며 고대와 현재를 잇는 힘을 보여주었습니다.희곡 『메데이아』는 고대 비극의 원형이자 인간 내면의 격렬한 감정을 극단적으로 드러내는 작품입니다. 짧은 순간에도 관객에게 강렬한 울림을 남기며 고대와 현재를 잇는 힘을 보여주었습니다.희곡 『메데이아』는 고대 비극의 원형이자 인간 내면의 격렬한 감정을 극단적으로 드러내는 작품입니다. 짧은 순간에도 관객에게 강렬한 울림을 남기며 고대와 현재를 잇는 힘을 보여주었습니다.희곡 『메데이아』는 고대 비극의 원형이자 인간 내면의 격렬한 감정을 극단적으로 드러내는 작품입니다. 짧은 순간에도 관객에게 강렬한 울림을 남기며 고대와 현재를 잇는 힘을 보여주었습니다.',
    authorName: '에우리피데스에우리피데스에우리피데스',
    playTitle: '메데이아메데이아메데이아메데이아',
    likeCount: 0,
    commentCount: 0,
    isLiked: false,
    createdAt: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
  },
  {
    type: 'play',
    id: '8',
    playId: '2', // '시골에서의 한 달' (이반 투르게네프)
    userId: '3',
    username: 'tester1',
    content:
      '희곡 『메데이아』는 고대 비극의 원형이자 인간 내면의 격렬한 감정을 극단적으로 드러내는 작품입니다. 짧은 순간에도 관객에게 강렬한 울림을 남기며 고대와 현재를 잇는 힘을 보여주었습니다.\n희곡 『메데이아』는 고대 비극의 원형이자 인간 내면의 격렬한 감정을 극단적으로 드러내는 작품입니다. 짧은 순간에도 관객에게 강렬한 울림을 남기며 고대와 현재를 잇는 힘을 보여주었습니다.\n희곡 『메데이아』는 고대 비극의 원형이자 인간 내면의 격렬한 감정을 극단적으로 드러내는 작품입니다. 짧은 순간에도 관객에게 강렬한 울림을 남기며 고대와 현재를 잇는 힘을 보여주었습니다.희곡 『메데이아』는 고대 비극의 원형이자 인간 내면의 격렬한 감정을 극단적으로 드러내는 작품입니다. 짧은 순간에도 관객에게 강렬한 울림을 남기며 고대와 현재를 잇는 힘을 보여주었습니다.희곡 『메데이아』는 고대 비극의 원형이자 인간 내면의 격렬한 감정을 극단적으로 드러내는 작품입니다. 짧은 순간에도 관객에게 강렬한 울림을 남기며 고대와 현재를 잇는 힘을 보여주었습니다.희곡 『메데이아』는 고대 비극의 원형이자 인간 내면의 격렬한 감정을 극단적으로 드러내는 작품입니다. 짧은 순간에도 관객에게 강렬한 울림을 남기며 고대와 현재를 잇는 힘을 보여주었습니다.희곡 『메데이아』는 고대 비극의 원형이자 인간 내면의 격렬한 감정을 극단적으로 드러내는 작품입니다. 짧은 순간에도 관객에게 강렬한 울림을 남기며 고대와 현재를 잇는 힘을 보여주었습니다.',
    authorName: '에우리피데스에우리피데스에우리피데스',
    playTitle: '메데이아메데이아메데이아메데이아',
    likeCount: 0,
    commentCount: 0,
    isLiked: false,
    createdAt: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
  },
];

interface BaseMemo {
  id: string;
  type: MemoType;
  userId: string;
  username: string;
  title?: string;
  content: string;
  authorName?: string;
  playTitle?: string;
  likeCount: number;
  commentCount: number;
  isLiked: boolean;
  createdAt: string;
}

interface PlayMemo extends BaseMemo {
  type: 'play';
  playId: string;
  // writerId?: never;
  // programId?: never;
}

interface WriterMemo extends BaseMemo {
  type: 'writer';
  writerId: string;
  // playId?: never;
  // programId?: never;
}

interface ProgramMemo extends BaseMemo {
  type: 'program';
  programId: string;
  // playId?: never;
  // writerId?: never;
}

export type Memo = PlayMemo | WriterMemo | ProgramMemo;
