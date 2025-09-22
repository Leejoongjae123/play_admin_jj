export interface Play {
  id: string;
  creator: string;
  createdAt: string;
  viewCount: number;
  bookmarkCount: number;
  title: string;
  author: string;
  publisher?: string;
  ganre?: string;
  quote: string;
  summary: string;
  keyword: string[];
  isVisible: boolean;
}
