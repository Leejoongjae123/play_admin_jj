export type UserRole = 'admin' | 'user' | 'writer';
export type AuthProvider = 'google' | 'kakao' | 'local';
export type UserStatus = 'active' | 'suspended' | 'blacklist';

export interface User {
  id: string;
  role: UserRole;
  name: string;
  nameEn?: string;
  email: string;
  authProvider: AuthProvider;
  createdAt: string;
  status: UserStatus;
  lastLogin?: string;
}

export const DummyUsers: User[] = [
  // 어드민
  {
    id: '1',
    role: 'admin',
    name: '인스크립트',
    nameEn: 'Administrator',
    email: 'admin@playplatform.com',
    authProvider: 'local',
    createdAt: '2024-01-01T09:00:00Z',
    status: 'active',
    lastLogin: '2025-01-26T10:30:00Z',
  },
  // 일반 유저들
  {
    id: '2',
    role: 'writer',
    name: '김민수',
    nameEn: 'Minsu Kim',
    email: 'minsu.kim@gmail.com',
    authProvider: 'google',
    createdAt: '2024-03-15T14:30:00Z',
    status: 'active',
    lastLogin: '2025-01-25T16:45:00Z',
  },
  {
    id: '3',
    role: 'writer',
    name: '이지은',
    nameEn: 'Jieun Lee',
    email: 'jieun.lee@naver.com',
    authProvider: 'local',
    createdAt: '2024-04-22T10:45:00Z',
    status: 'active',
    lastLogin: '2025-01-24T09:20:00Z',
  },
  {
    id: '4',
    role: 'user',
    name: '박서준',
    email: 'seojun.park@kakao.com',
    authProvider: 'kakao',
    createdAt: '2024-05-08T16:20:00Z',
    status: 'active',
    lastLogin: '2025-01-26T11:15:00Z',
  },
  {
    id: '5',
    role: 'user',
    name: '최수민',
    email: 'sumin.choi@daum.net',
    authProvider: 'local',
    createdAt: '2024-06-12T11:15:00Z',
    status: 'suspended',
    lastLogin: '2025-01-20T14:30:00Z',
  },
  {
    id: '6',
    role: 'writer',
    name: '정현우',
    nameEn: 'Hyunwoo Jung',
    email: 'hyunwoo.jung@gmail.com',
    authProvider: 'google',
    createdAt: '2024-07-03T13:50:00Z',
    status: 'active',
    lastLogin: '2025-01-25T18:10:00Z',
  },
  {
    id: '7',
    role: 'writer',
    name: '한예원',
    nameEn: 'Yewon Han',
    email: 'yewon.han@naver.com',
    authProvider: 'local',
    createdAt: '2024-08-19T09:30:00Z',
    status: 'active',
  },
  {
    id: '8',
    role: 'writer',
    name: '임동현',
    nameEn: 'Donghyun Im',
    email: 'donghyun.im@gmail.com',
    authProvider: 'google',
    createdAt: '2024-09-05T15:25:00Z',
    status: 'active',
    lastLogin: '2025-01-23T12:05:00Z',
  },
  {
    id: '9',
    role: 'writer',
    name: '송하린',
    nameEn: 'Harin Song',
    email: 'harin.song@kakao.com',
    authProvider: 'kakao',
    createdAt: '2024-10-11T12:40:00Z',
    status: 'blacklist',
    lastLogin: '2025-01-15T08:30:00Z',
  },
  {
    id: '10',
    role: 'writer',
    name: '윤태영',
    nameEn: 'Taeyoung Yoon',
    email: 'taeyoung.yoon@naver.com',
    authProvider: 'local',
    createdAt: '2024-11-27T17:10:00Z',
    status: 'active',
    lastLogin: '2025-01-26T07:45:00Z',
  },
];
