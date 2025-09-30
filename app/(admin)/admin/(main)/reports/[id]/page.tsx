'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import CustomRadio from '@/components/ui/CustomRadio';
import ReportStatusBadge from '@/components/ui/ReportStatusBadge';
import type { ReportDetail, AdminActionForm, ReportStatus, ProcessingMethod } from './types';

// 목데이터
const mockReportData: ReportDetail = {
  id: 'MO9982',
  reportId: 'MO9982',
  status: 'pending',
  target: {
    id: 'C9804',
    type: '댓글',
    author: '북토커(user2)',
    content: '이 장면 정말 인상깊어요. 무대에서 배우들의 감정이 그대로 전해졌습니다.',
    createdAt: '2025-09-03 14:22',
    originalLink: '#',
  },
  reportInfo: {
    reporter: 'reader9(user9)',
    reportType: '스팸',
    reason: '광고성 멘트 반복',
    reportedAt: '2025-09-03 14:22',
  },
  comments: [
    {
      id: '1',
      author: 'userName',
      content: '이 텍스트는 메모 자세히 보기 화면에서의 댓글입니다. 다른 유저가 메모에 댓글을 남길 수 있습니다.',
      createdAt: '7일 전',
      isPrivate: true,
    },
    {
      id: '2',
      author: 'userName',
      content: '이 텍스트는 메모 자세히 보기 화면에서의 댓글입니다. 다른 유저가 메모에 댓글을 남길 수 있습니다.',
      createdAt: '7일 전',
      isPrivate: true,
    },
  ],
};

interface TableRowProps {
  label: string;
  value: React.ReactNode;
  isDoubleRow?: boolean;
}

function TableRow({ label, value, isDoubleRow = false }: TableRowProps) {
  return (
    <div className="flex items-center border-b border-gray-7">
      <div className="flex w-40 items-center gap-2.5 bg-gray-7 px-6 py-2.5">
        <div className="text-base font-normal leading-6 text-gray-2">{label}</div>
      </div>
      <div className={`flex flex-1 items-center gap-2.5 px-6 py-2.5 ${isDoubleRow ? 'min-h-12' : 'h-12'}`}>
        {value}
      </div>
    </div>
  );
}

interface CommentItemProps {
  comment: {
    id: string;
    author: string;
    content: string;
    createdAt: string;
    isPrivate?: boolean;
  };
}

function CommentItem({ comment }: CommentItemProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <div className="h-12 w-12 rounded-full bg-gray-5"></div>
          <div className="text-sm font-medium leading-6 tracking-[-0.28px] text-gray-2">
            {comment.author}
          </div>
          <div className="text-sm font-medium leading-6 tracking-[-0.28px] text-gray-4">
            {comment.createdAt}
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          {comment.isPrivate && (
            <span className="text-sm font-medium leading-4 text-gray-3">비공개</span>
          )}
          <span className="text-sm font-medium leading-4 text-gray-3">|</span>
          <span className="text-sm font-medium leading-4 text-gray-3">삭제</span>
        </div>
      </div>
      <div className="text-base font-medium leading-6 tracking-[-0.32px] text-gray-2">
        {comment.content}
      </div>
    </div>
  );
}

export default async function ReportDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const [formData, setFormData] = useState<AdminActionForm>({
    status: 'pending',
    processingMethod: 'blind',
  });

  const reportData = mockReportData; // 실제로는 API에서 id로 데이터를 가져옴

  const handleStatusChange = (value: string) => {
    setFormData(prev => ({ ...prev, status: value as ReportStatus }));
  };

  const handleProcessingMethodChange = (value: string) => {
    setFormData(prev => ({ ...prev, processingMethod: value as ProcessingMethod }));
  };

  const handleSave = () => {
    // 저장 로직 구현
    console.log('저장:', formData);
  };

  const handleCancel = () => {
    // 취소 로직 구현
    console.log('취소');
  };

  return (
    <div className="flex w-full justify-center p-8">
      <div className="flex w-full max-w-6xl flex-col gap-20 rounded-md bg-white p-11">
        <div className="flex flex-col gap-10">
          {/* 제목 */}
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold leading-8 text-gray-1">신고 관리</h1>
          </div>

          {/* 신고 대상 정보 */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold leading-8 text-gray-1">신고 관리</h2>
            </div>
            <div className="border border-gray-7">
              <div className="flex">
                <TableRow
                  label="신고ID"
                  value={<div className="text-base font-normal leading-6 text-gray-1">{reportData.reportId}</div>}
                />
                <TableRow
                  label="상태"
                  value={
                    <div className="flex items-center gap-2.5">
                      <div className="rounded-full border border-blue-300 bg-blue-50 px-3 py-1.5">
                        <span className="text-sm font-normal text-blue-600">진행중</span>
                      </div>
                    </div>
                  }
                />
              </div>
              <TableRow
                label="신고 대상"
                value={
                  <div className="flex items-center gap-2.5">
                    <span className="text-base font-normal leading-6 text-gray-1">
                      커뮤니티 {reportData.target.type} ({reportData.target.id})
                    </span>
                    {reportData.target.originalLink && (
                      <a
                        href={reportData.target.originalLink}
                        className="text-base font-medium leading-6 text-blue-600 underline decoration-blue-600"
                      >
                        원문 바로가기
                      </a>
                    )}
                  </div>
                }
              />
              <div className="flex">
                <TableRow
                  label="작성자"
                  value={<div className="text-base font-normal leading-6 text-gray-1">{reportData.target.author}</div>}
                />
                <TableRow
                  label="작성일시"
                  value={<div className="text-base font-normal leading-6 text-gray-1">{reportData.target.createdAt}</div>}
                />
              </div>
              <TableRow
                label="메모"
                value={<div className="text-base font-normal leading-6 text-gray-1">{reportData.target.content}</div>}
                isDoubleRow
              />
            </div>
          </div>

          {/* 신고정보 */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold leading-6 text-gray-1">신고정보</h3>
            <div className="border border-gray-7">
              <div className="flex">
                <TableRow
                  label="신고자"
                  value={<div className="text-base font-normal leading-6 text-gray-1">{reportData.reportInfo.reporter}</div>}
                />
                <TableRow
                  label="신고유형"
                  value={<div className="text-base font-normal leading-6 text-gray-1">{reportData.reportInfo.reportType}</div>}
                />
              </div>
              <div className="flex">
                <TableRow
                  label="신고사유"
                  value={<div className="text-base font-normal leading-6 text-gray-1">{reportData.reportInfo.reason}</div>}
                />
                <TableRow
                  label="신고일시"
                  value={<div className="text-base font-normal leading-6 text-gray-1">{reportData.reportInfo.reportedAt}</div>}
                />
              </div>
            </div>
          </div>

          {/* 댓글 */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold leading-6 text-gray-1">댓글</h3>
            <div className="flex flex-col gap-6 py-11">
              {reportData.comments.map((comment) => (
                <CommentItem key={comment.id} comment={comment} />
              ))}
            </div>
          </div>

          {/* 운영자 조치 */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold leading-6 text-gray-1">운영자 조치</h3>
            
            {/* 상태 변경 */}
            <div className="flex items-center">
              <div className="flex w-40 items-center gap-1">
                <span className="text-xl font-semibold leading-6 text-gray-3">상태 변경</span>
                <span className="text-xl font-semibold leading-6 text-red">*</span>
              </div>
              <div className="flex items-center">
                <CustomRadio
                  value="pending"
                  checked={formData.status === 'pending'}
                  onChange={handleStatusChange}
                  label="접수"
                />
                <CustomRadio
                  value="completed"
                  checked={formData.status === 'completed'}
                  onChange={handleStatusChange}
                  label="조치완료"
                />
                <CustomRadio
                  value="invalid"
                  checked={formData.status === 'invalid'}
                  onChange={handleStatusChange}
                  label="무효"
                />
              </div>
            </div>

            {/* 처리방식 */}
            <div className="flex items-center">
              <div className="flex w-40 items-center gap-1">
                <span className="text-xl font-semibold leading-6 text-gray-3">처리방식</span>
                <span className="text-xl font-semibold leading-6 text-red">*</span>
              </div>
              <div className="flex items-center">
                <CustomRadio
                  value="blind"
                  checked={formData.processingMethod === 'blind'}
                  onChange={handleProcessingMethodChange}
                  label="블라인드"
                />
                <CustomRadio
                  value="none"
                  checked={formData.processingMethod === 'none'}
                  onChange={handleProcessingMethodChange}
                  label="무표"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 하단 버튼들 */}
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            size="sm"
            className="gap-1.5 border-gray-4 text-gray-2"
          >
            <svg width="16" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.6875 4H14.6875V5.33333H2.6875V4ZM2.6875 7.33333H14.6875V8.66667H2.6875V7.33333ZM2.6875 10.6667H14.6875V12H2.6875V10.6667Z"
                fill="#555555"
              />
            </svg>
            목록으로
          </Button>
          <div className="flex items-center gap-2.5">
            <Button
              variant="outline"
              size="sm"
              className="border-primary text-primary"
              onClick={handleCancel}
            >
              취소
            </Button>
            <Button
              size="sm"
              className="bg-primary text-white"
              onClick={handleSave}
            >
              저장
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
