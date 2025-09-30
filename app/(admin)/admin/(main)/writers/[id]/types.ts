export interface WriterDetailData {
  writerId: string;
  id: string;
  email: string;
  userId: string;
  registrationDate: string;
  viewCount: number;
  scrapCount: number;
  name: string;
  nameEn: string;
  genre: string;
  keywords: string[];
  description: string;
  isVisible: boolean;
}

export interface PlayData {
  playId: string;
  title: string;
  registrationDate: string;
  likeCount: number;
  commentCount: number;
  reportCount: number;
}

export interface MemoData {
  memoId: string;
  author: string;
  content: string;
  likeCount: number;
  commentCount: number;
  reportCount: number;
}
