export enum PublicStatus {
  PUBLISHED = 'published',
  UNPUBLISHED = 'unpublished',
  OUT_OF_PRINT = 'outOfPrint',
}

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
  line1: string;
  line2?: string;
  line3?: string;
  year?: string;
  country?: string;
  femaleCharacterCount?: string;
  maleCharacterCount?: string;
  characterList?: string[];
  publicHistory?: string;
  publicStatus?: PublicStatus;
}
