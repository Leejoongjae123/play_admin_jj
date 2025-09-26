import { Play, DummyPlays } from './play';
import { Writer, DummyWriters } from './writer';
import { Program, DummyPrograms } from './program';
import { User, DummyUsers } from './user';

export type MemoType = 'play' | 'writer' | 'program';

interface BaseMemo {
  id: string;
  type: MemoType;
  user: User;
  title?: string;
  content: string;
  likeCount: number;
  commentCount: number;
  isLiked: boolean;
  createdAt: string;
}

interface PlayMemo extends BaseMemo {
  type: 'play';
  play: Play;
}

interface WriterMemo extends BaseMemo {
  type: 'writer';
  writer: Writer;
}

interface ProgramMemo extends BaseMemo {
  type: 'program';
  program: Program;
}

export type Memo = PlayMemo | WriterMemo | ProgramMemo;

// 헬퍼 함수들
const getUserById = (id: string): User => {
  const user = DummyUsers.find((u) => u.id === id);
  if (!user) throw new Error(`User with id ${id} not found`);
  return user;
};

const getPlayById = (id: string): Play => {
  const play = DummyPlays.find((p) => p.id === id);
  if (!play) throw new Error(`Play with id ${id} not found`);
  return play;
};

const getWriterById = (id: string): Writer => {
  const writer = DummyWriters.find((w) => w.id === id);
  if (!writer) throw new Error(`Writer with id ${id} not found`);
  return writer;
};

const getProgramById = (id: string): Program => {
  const program = DummyPrograms.find((p) => p.id === id);
  if (!program) throw new Error(`Program with id ${id} not found`);
  return program;
};

export const DummyMemos: Memo[] = [
  // Play Memos - 희곡 관련 메모
  {
    type: 'play',
    id: '1',
    user: getUserById('2'), // 김민수 (작가)
    play: getPlayById('1'), // 디지털 휴먼
    content:
      'SF 장르의 새로운 시도가 인상적입니다. 인공지능과 인간의식의 경계를 탐구하는 철학적 접근이 깊이 있어 보였어요. 특히 "나는... 정말 나인가?"라는 대사가 계속 머릿속에 맴돕니다.',
    likeCount: 8,
    commentCount: 3,
    isLiked: false,
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2시간 전
  },
  {
    type: 'play',
    id: '2',
    user: getUserById('4'), // 박서준 (일반 유저)
    play: getPlayById('2'), // 봄날의 편지
    content:
      '로맨스 장르지만 진부하지 않고 감성적이었습니다. 편지를 통한 소통이라는 소재가 현대적으로 잘 해석된 것 같아요. 이은지 작가의 섬세한 감정 묘사가 돋보였습니다.',
    likeCount: 12,
    commentCount: 5,
    isLiked: true,
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(), // 1일 전
  },
  {
    type: 'play',
    id: '3',
    user: getUserById('10'), // 윤태영 (작가)
    play: getPlayById('3'), // 밤의 목격자
    content:
      '심리 스릴러의 정수를 보여주는 작품입니다. 정현우 작가의 치밀한 구성과 예측 불가능한 반전이 마지막까지 긴장감을 놓지 않게 합니다. 특히 기억의 신뢰성에 대한 질문이 흥미롭네요.',
    likeCount: 15,
    commentCount: 7,
    isLiked: true,
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3일 전
  },
  {
    type: 'play',
    id: '4',
    user: getUserById('7'), // 한예원 (작가)
    play: getPlayById('5'), // 임진왜란 대기록
    content:
      '역사적 사실을 바탕으로 한 대서사시가 웅장하면서도 감동적입니다. 동현 작가가 그려낸 영웅들의 희생정신과 백성들의 삶이 생생하게 전해져 옵니다.',
    likeCount: 9,
    commentCount: 2,
    isLiked: false,
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(), // 5일 전
  },

  // Writer Memos - 작가 관련 메모
  {
    type: 'writer',
    id: '5',
    user: getUserById('1'), // 관리자
    writer: getWriterById('2'), // 김민수→김민하 (SF)
    title: 'SF 작가로서의 비전',
    content:
      '김민하 작가의 작품 세계관이 정말 독창적입니다. 기술 발전에 대한 깊이 있는 이해를 바탕으로 인간성에 대한 철학적 질문을 던지는 방식이 인상적이에요. 앞으로의 작품이 더욱 기대됩니다.',
    likeCount: 6,
    commentCount: 1,
    isLiked: true,
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // 7일 전
  },
  {
    type: 'writer',
    id: '6',
    user: getUserById('5'), // 최수민 (suspended)
    writer: getWriterById('3'), // 이지은→이은지 (로맨스)
    title: '감성적 서사의 힘',
    content:
      '이은지 작가의 글에는 특별한 따뜻함이 있어요. 일상의 소소한 순간들을 놓치지 않고 아름답게 포착하는 시선이 돋보입니다. 로맨스 장르에 새로운 생명력을 불어넣고 있다고 생각해요.',
    likeCount: 11,
    commentCount: 4,
    isLiked: true,
    createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(), // 10일 전
  },
  {
    type: 'writer',
    id: '7',
    user: getUserById('8'), // 임동현 (작가)
    writer: getWriterById('10'), // 윤태영→태영 (공포소설)
    content:
      '태영 작가의 공포 소설은 단순한 놀람이 아닌 깊은 불안감을 자아냅니다. 한국적 정서를 바탕으로 한 공포 표현이 서구의 호러와는 다른 독특한 매력을 만들어내네요.',
    likeCount: 7,
    commentCount: 2,
    isLiked: false,
    createdAt: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(), // 12일 전
  },

  // Program Memos - 프로그램 관련 메모
  {
    type: 'program',
    id: '8',
    user: getUserById('3'), // 이지은 (작가)
    program: getProgramById('1'), // 청년 창작 연극 워크숍
    title: '창작의 열기',
    content:
      '워크숍에 참여했는데 정말 유익했습니다. 다양한 연령대의 청년 창작자들이 모여 서로의 작품을 공유하고 피드백을 나누는 과정이 인상 깊었어요. 실제 무대 연출까지 경험할 수 있어서 소중한 시간이었습니다.',
    likeCount: 13,
    commentCount: 6,
    isLiked: true,
    createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(), // 15일 전
  },
  {
    type: 'program',
    id: '9',
    user: getUserById('6'), // 정현우 (작가)
    program: getProgramById('2'), // 고전 희곡 낭독회: 햄릿
    content:
      '햄릿 낭독회가 정말 감동적이었습니다. 무대 장치 없이 오직 배우들의 연기력만으로 셰익스피어의 세계를 구현해내는 모습이 압권이었어요. 고전의 힘을 다시 한번 느낄 수 있었습니다.',
    likeCount: 18,
    commentCount: 8,
    isLiked: true,
    createdAt: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(), // 20일 전
  },
  {
    type: 'program',
    id: '10',
    user: getUserById('9'), // 송하린 (작가, blacklist)
    program: getProgramById('3'), // 청소년 문화예술 캠프
    title: '미래 예술가들과의 만남',
    content:
      '청소년 캠프 멘토로 참여했는데, 젊은 예술가들의 열정이 정말 대단했습니다. 하린이라는 필명으로 활동하고 있지만, 이런 교육 프로그램에서는 더욱 보람을 느끼게 되네요. 미래가 기대됩니다.',
    likeCount: 22,
    commentCount: 12,
    isLiked: false,
    createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(), // 30일 전
  },
];
