import { ReportDetail } from './types';
import ReportDetailClient from './components/ReportDetailClient';

// 더미 데이터
const mockReportDetail: ReportDetail = {
  id: 'MO9982',
  reportId: 'MO9982',
  status: 'pending',
  target: {
    id: 'C9804',
    type: '댓글',
    author: '북토커(user2)',
    content: '이 장면 정말 인상깊어요. 무대에서 배우들의 감정이 그대로 전해졌습니다.',
    createdAt: '2025-09-03 14:22',
    originalLink: '/community/posts/1234#comment-9804',
  },
  reportInfo: {
    reporter: 'reader9(user9)',
    reportType: '스팸',
    reason: '광고성 멘트 반복',
    reportedAt: '2025-09-03 14:22',
  },
  comments: [
    {
      id: 'c1',
      author: 'userName',
      content:
        '이 텍스트는 메모 자세히 보기 화면에서의 댓글입니다. 다른 유저가 메모에 댓글을 남길 수 있습니다.',
      createdAt: '7일 전',
      isPrivate: true,
    },
    {
      id: 'c2',
      author: 'userName',
      content:
        '이 텍스트는 메모 자세히 보기 화면에서의 댓글입니다. 다른 유저가 메모에 댓글을 남길 수 있습니다.',
      createdAt: '7일 전',
      isPrivate: true,
    },
  ],
};

interface ReportsDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ReportsDetailPage({ params }: ReportsDetailPageProps) {
  const { id } = await params;

  // TODO: id를 사용하여 실제 데이터를 가져오는 로직 추가
  // const reportDetail = await fetchReportDetail(id);

  return <ReportDetailClient reportDetail={mockReportDetail} />;
}
