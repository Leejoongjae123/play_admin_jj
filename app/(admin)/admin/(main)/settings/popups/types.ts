export interface Popup {
  id: number;
  popupId: string;
  title: string;
  startDate: string;
  endDate: string;
  status: 'waiting' | 'active' | 'ended';
  createdAt: string;
}

export interface PopupFilter {
  startDate: string;
  endDate: string;
  status: string;
  searchCategory: string;
  searchQuery: string;
}
