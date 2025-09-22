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
