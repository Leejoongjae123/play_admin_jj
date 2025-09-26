import { User, DummyUsers } from './user';

export type CommentTargetType = 'memo';

export interface Comment {
  id: string;
  user: User;
  targetType: CommentTargetType;
  targetId: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

const getUserById = (id: string): User => {
  const user = DummyUsers.find((u) => u.id === id);
  if (!user) throw new Error(`User with id ${id} not found`);
  return user;
};

export const DummyComments: Comment[] = [
  // 메모 '1' (디지털 휴먼 - Play) 댓글들
  {
    id: 'c1',
    user: getUserById('4'),
    targetType: 'memo',
    targetId: '1',
    content:
      '정말 공감합니다! 특히 인공지능과 인간 의식의 경계에 대한 철학적 접근이 인상 깊었어요. 현대 사회에서 꼭 필요한 질문이라고 생각합니다.',
    createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(), // 1시간 전
    updatedAt: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'c2',
    user: getUserById('6'),
    targetType: 'memo',
    targetId: '1',
    content:
      '김민하 작가의 SF는 항상 깊이가 있어요. 이 작품도 단순한 기술 이야기가 아니라 존재론적 질문까지 다루고 있어서 생각할 거리를 많이 주네요.',
    createdAt: new Date(Date.now() - 30 * 60 * 1000).toISOString(), // 30분 전
    updatedAt: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
  },

  // 메모 '2' (봄날의 편지 - Play) 댓글들
  {
    id: 'c3',
    user: getUserById('3'),
    targetType: 'memo',
    targetId: '2',
    content:
      '로맨스 소설에 대한 시각이 참신하시네요! 저도 이은지 작가의 감정 묘사가 다른 작가들과 차별화된다고 생각해요. 편지라는 소재 활용도 정말 좋았습니다.',
    createdAt: new Date(Date.now() - 20 * 60 * 60 * 1000).toISOString(), // 20시간 전
    updatedAt: new Date(Date.now() - 20 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'c4',
    user: getUserById('7'),
    targetType: 'memo',
    targetId: '2',
    content:
      '완전 동감이에요! 진부한 로맨스가 아니라 정말 감성적이면서도 현실적인 작품이었어요. 특히 소통의 방식을 편지로 택한 게 너무 아름다웠습니다.',
    createdAt: new Date(Date.now() - 18 * 60 * 60 * 1000).toISOString(), // 18시간 전
    updatedAt: new Date(Date.now() - 18 * 60 * 60 * 1000).toISOString(),
  },

  // 메모 '3' (밤의 목격자 - Play) 댓글들
  {
    id: 'c5',
    user: getUserById('2'),
    targetType: 'memo',
    targetId: '3',
    content:
      '스릴러 장르의 묘미를 정확히 짚어주셨네요. 정현우 작가의 심리 묘사는 정말 탁월합니다. 기억의 신뢰성 문제는 저도 많이 생각하게 되었어요.',
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2일 전
    updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'c6',
    user: getUserById('4'),
    targetType: 'memo',
    targetId: '3',
    content:
      '와 이 작품 저도 봤는데 진짜 마지막까지 손에 땀을 쥐게 하더라고요. 반전이 정말 예측불가능했어요. 추천하고 싶은 작품입니다!',
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000 + 60 * 60 * 1000).toISOString(), // 2일 전 + 1시간
    updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000 + 60 * 60 * 1000).toISOString(),
  },

  // 메모 '4' (임진왜란 대기록 - Play) 댓글들
  {
    id: 'c7',
    user: getUserById('10'),
    targetType: 'memo',
    targetId: '4',
    content:
      '역사극에 대한 깊이 있는 감상평이네요. 동현 작가의 역사 고증은 정말 철저하죠. 영웅들의 희생정신과 백성들의 삶을 균형있게 그려낸 점이 인상적이었습니다.',
    createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(), // 4일 전
    updatedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'c8',
    user: getUserById('5'),
    targetType: 'memo',
    targetId: '4',
    content:
      '임진왜란을 소재로 한 작품들을 많이 봤지만, 이 작품은 특히 서사의 웅장함이 돋보였어요. 역사의 교훈도 잘 전달된 것 같습니다.',
    createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000).toISOString(), // 4일 전 + 2시간
    updatedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000).toISOString(),
  },

  // 메모 '5' (김민하 SF 작가 - Writer) 댓글들
  {
    id: 'c9',
    user: getUserById('6'),
    targetType: 'memo',
    targetId: '5',
    content:
      '김민하 작가에 대한 평가가 정말 적절하네요. SF 장르에서 기술과 철학을 동시에 다루는 작가는 흔하지 않은데, 앞으로의 작품이 더욱 기대됩니다.',
    createdAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(), // 6일 전
    updatedAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'c10',
    user: getUserById('4'),
    targetType: 'memo',
    targetId: '5',
    content:
      '저도 김민하 작가 팬이에요! 특히 미래 기술에 대한 이해도가 정말 높으셔서 작품에 현실성과 상상력이 완벽하게 조화되어 있어요.',
    createdAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000).toISOString(), // 6일 전 + 3시간
    updatedAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000).toISOString(),
  },

  // 메모 '6' (이은지 로맨스 작가 - Writer) 댓글들
  {
    id: 'c11',
    user: getUserById('2'),
    targetType: 'memo',
    targetId: '6',
    content:
      '"감성적 서사의 힘"이라는 제목이 정말 이은지 작가를 잘 표현한 것 같아요. 일상의 소소한 순간을 포착하는 능력이 정말 탁월합니다.',
    createdAt: new Date(Date.now() - 9 * 24 * 60 * 60 * 1000).toISOString(), // 9일 전
    updatedAt: new Date(Date.now() - 9 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'c12',
    user: getUserById('7'),
    targetType: 'memo',
    targetId: '6',
    content:
      '완전 공감해요! 이은지 작가의 글을 읽으면 마음이 따뜻해져요. 로맨스 장르에 새로운 생명력을 불어넣고 있다는 표현이 정말 적절합니다.',
    createdAt: new Date(Date.now() - 9 * 24 * 60 * 60 * 1000 + 4 * 60 * 60 * 1000).toISOString(), // 9일 전 + 4시간
    updatedAt: new Date(Date.now() - 9 * 24 * 60 * 60 * 1000 + 4 * 60 * 60 * 1000).toISOString(),
  },

  // 메모 '7' (태영 공포소설 작가 - Writer) 댓글들
  {
    id: 'c13',
    user: getUserById('1'),
    targetType: 'memo',
    targetId: '7',
    content:
      '태영 작가의 공포소설에 대한 훌륭한 분석이네요. 한국적 정서를 바탕으로 한 공포 표현이 확실히 서구의 호러와는 다른 독특함이 있죠.',
    createdAt: new Date(Date.now() - 11 * 24 * 60 * 60 * 1000).toISOString(), // 11일 전
    updatedAt: new Date(Date.now() - 11 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'c14',
    user: getUserById('3'),
    targetType: 'memo',
    targetId: '7',
    content:
      '저도 태영 작가 작품 좋아해요! 단순한 놀라게 하기가 아니라 깊은 불안감을 자아내는 게 정말 인상적이에요. 심리적 공포의 달인인 것 같습니다.',
    createdAt: new Date(Date.now() - 11 * 24 * 60 * 60 * 1000 + 5 * 60 * 60 * 1000).toISOString(), // 11일 전 + 5시간
    updatedAt: new Date(Date.now() - 11 * 24 * 60 * 60 * 1000 + 5 * 60 * 60 * 1000).toISOString(),
  },

  // 메모 '8' (청년 창작 연극 워크숍 - Program) 댓글들
  {
    id: 'c15',
    user: getUserById('10'),
    targetType: 'memo',
    targetId: '8',
    content:
      '워크숍 후기가 너무 좋네요! 저도 다음에 참여해보고 싶어졌어요. 다양한 연령대의 창작자들과 교류할 수 있다는 점이 특히 매력적으로 느껴집니다.',
    createdAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(), // 14일 전
    updatedAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'c16',
    user: getUserById('4'),
    targetType: 'memo',
    targetId: '8',
    content:
      '실제 무대 연출까지 경험할 수 있다니 정말 값진 경험이셨을 것 같아요. 창작 워크숍의 진정한 의미를 느끼셨네요. 부럽습니다!',
    createdAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000 + 6 * 60 * 60 * 1000).toISOString(), // 14일 전 + 6시간
    updatedAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000 + 6 * 60 * 60 * 1000).toISOString(),
  },

  // 메모 '9' (고전 희곡 낭독회: 햄릿 - Program) 댓글들
  {
    id: 'c17',
    user: getUserById('8'),
    targetType: 'memo',
    targetId: '9',
    content:
      '햄릿 낭독회 정말 감동적이었죠! 무대장치 없이도 배우들의 연기력만으로 충분히 몰입할 수 있었어요. 고전의 힘을 다시 한번 느낄 수 있었습니다.',
    createdAt: new Date(Date.now() - 19 * 24 * 60 * 60 * 1000).toISOString(), // 19일 전
    updatedAt: new Date(Date.now() - 19 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'c18',
    user: getUserById('2'),
    targetType: 'memo',
    targetId: '9',
    content:
      '셰익스피어의 세계를 오직 목소리와 연기만으로 표현하는 것이 압권이었다는 표현에 완전 동감합니다. 낭독회의 진정한 매력을 느끼셨네요.',
    createdAt: new Date(Date.now() - 19 * 24 * 60 * 60 * 1000 + 7 * 60 * 60 * 1000).toISOString(), // 19일 전 + 7시간
    updatedAt: new Date(Date.now() - 19 * 24 * 60 * 60 * 1000 + 7 * 60 * 60 * 1000).toISOString(),
  },

  // 메모 '10' (청소년 문화예술 캠프 - Program) 댓글들
  {
    id: 'c19',
    user: getUserById('6'),
    targetType: 'memo',
    targetId: '10',
    content:
      '청소년들의 열정과 미래에 대한 희망이 느껴지는 후기네요. 하린 작가님이 멘토로 참여하신 것도 의미가 깊었을 것 같아요. 교육 프로그램의 진정한 가치를 보여주신 것 같습니다.',
    createdAt: new Date(Date.now() - 29 * 24 * 60 * 60 * 1000).toISOString(), // 29일 전
    updatedAt: new Date(Date.now() - 29 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'c20',
    user: getUserById('5'),
    targetType: 'memo',
    targetId: '10',
    content:
      '젊은 예술가들과의 만남이 얼마나 소중했을지 상상이 됩니다. 미래의 문화예술계를 이끌어갈 청소년들에게 좋은 영향을 주셨을 것 같아요. 정말 보람찬 경험이셨겠네요.',
    createdAt: new Date(Date.now() - 29 * 24 * 60 * 60 * 1000 + 8 * 60 * 60 * 1000).toISOString(), // 29일 전 + 8시간
    updatedAt: new Date(Date.now() - 29 * 24 * 60 * 60 * 1000 + 8 * 60 * 60 * 1000).toISOString(),
  },
];
