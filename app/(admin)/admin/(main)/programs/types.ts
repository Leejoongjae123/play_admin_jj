export interface Program {
  id: string;
  programId: string;
  programName: string;
  eventDateTime: string;
  eventLocation: string;
  applicationPeriod: string;
  status: 'progress' | 'ended';
  registrationDate: string;
  worksCount: number | string;
  memoCount: number | string;
  scrapCount: number | string;
  isHighlighted?: boolean;
}

export interface ProgramFilter {
  visibility: 'all' | 'visible' | 'hidden';
  status: 'all' | 'progress' | 'ended';
  programName: string;
  startDate?: string;
  endDate?: string;
}

export interface ProgramStatistics {
  progressCount: number;
  endedCount: number;
  totalCount: number;
}

export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  totalItems: number;
}
