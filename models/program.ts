export type ProgramStatus = 'ongoing' | 'closed';

export interface Program {
  id: string;
  title: string;
  eventDateTime: string;
  applicationPeriod: {
    startAt: string;
    endAt: string;
  };
  location: string;
  capacity?: number;
  notes: string;
  keywords: string[];
  description: string;
  thumbnailUrl: string;
  isVisible: boolean;
  isBookmarked?: boolean;
  createdAt: string;
  applicationCount: number;
  viewCount: number;
  bookmarkCount: number;
  status: ProgramStatus;
}
