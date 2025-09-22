export type MemoType = 'play' | 'writer' | 'program';

export interface Memo {
  id: string;
  type: MemoType;
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
