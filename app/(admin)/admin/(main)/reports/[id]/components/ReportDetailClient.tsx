'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import ReportStatusBadge from '@/components/ui/ReportStatusBadge';
import CustomRadio from '@/components/ui/CustomRadio';
import Hamburger from '@/components/icons/Hamburger';
import { ReportDetail, ReportStatus, ProcessingMethod, AdminActionForm } from '../types';

interface ReportDetailClientProps {
  reportDetail: ReportDetail;
}

export default function ReportDetailClient({ reportDetail }: ReportDetailClientProps) {
  const router = useRouter();

  const [adminAction, setAdminAction] = useState<AdminActionForm>({
    status: 'pending',
    processingMethod: 'blind',
  });

  const handleStatusChange = (value: string) => {
    setAdminAction((prev) => ({
      ...prev,
      status: value as ReportStatus,
    }));
  };

  const handleProcessingMethodChange = (value: string) => {
    setAdminAction((prev) => ({
      ...prev,
      processingMethod: value as ProcessingMethod,
    }));
  };

  const handleCancel = () => {
    router.back();
  };

  const handleSave = () => {
    // 저장 로직 구현
    router.push('/admin/reports');
  };

  const handleGoToList = () => {
    router.push('/admin/reports');
  };

  return (
    <div className="flex w-full justify-center p-8">
      <div className="flex w-full flex-col items-center gap-20 rounded-[5px] bg-white p-11">
        {/* 신고 관리 섹션 */}
        <div className="flex w-full flex-col items-start gap-10">
          <div className="flex w-full flex-col items-end gap-4">
            <div className="flex w-full items-center justify-between">
              <h1 className="font-pretendard text-2xl font-semibold leading-8 text-gray-1">
                신고 관리
              </h1>
            </div>
            <div className="flex w-full flex-col border border-gray-7">
              {/* 신고ID, 상태 행 */}
              <div className="flex">
                <div className="flex h-12 flex-1 items-center border-b border-gray-7">
                  <div className="flex w-40 items-center gap-2.5 bg-gray-7 px-6 h-full">
                    <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">
                      신고ID
                    </span>
                  </div>
                  <div className="flex flex-1 items-center gap-2.5 px-6 h-full">
                    <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-1">
                      {reportDetail.reportId}
                    </span>
                  </div>
                </div>
                <div className="flex h-12 flex-1 items-center border-b border-gray-7">
                  <div className="flex w-40 items-center gap-2.5 bg-gray-7 px-6 h-full">
                    <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">
                      상태
                    </span>
                  </div>
                  <div className="flex flex-1 items-center gap-2.5 px-6 py-2.5">
                    <ReportStatusBadge status={reportDetail.status} />
                  </div>
                </div>
              </div>

              {/* 신고 대상 행 */}
              <div className="flex h-12 items-center border-b border-gray-7">
                <div className="flex w-40 items-center gap-2.5 bg-gray-7 px-6 h-full">
                  <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">
                    신고 대상
                  </span>
                </div>
                <div className="flex flex-1 items-center gap-2.5 px-6 py-2.5">
                  <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-1">
                    커뮤니티 {reportDetail.target.type} ({reportDetail.target.id})
                  </span>
                  {reportDetail.target.originalLink && (
                    <a
                      href={reportDetail.target.originalLink}
                      className="font-pretendard text-base font-medium leading-6 tracking-[-0.32px] text-[#2581F9] underline"
                    >
                      원문 바로가기
                    </a>
                  )}
                </div>
              </div>

              {/* 작성자, 작성일시 행 */}
              <div className="flex">
                <div className="flex h-12 flex-1 items-center border-b border-gray-7">
                  <div className="flex w-40 items-center gap-2.5 bg-gray-7 px-6 h-full">
                    <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">
                      작성자
                    </span>
                  </div>
                  <div className="flex flex-1 items-center gap-2.5 px-6 py-2.5">
                    <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-1">
                      {reportDetail.target.author}
                    </span>
                  </div>
                </div>
                <div className="flex h-12 flex-1 items-center border-b border-gray-7">
                  <div className="flex w-40 items-center gap-2.5 bg-gray-7 px-6 h-full">
                    <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">
                      작성일시
                    </span>
                  </div>
                  <div className="flex flex-1 items-center gap-2.5 px-6 py-2.5">
                    <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-1">
                      {reportDetail.target.createdAt}
                    </span>
                  </div>
                </div>
              </div>

              {/* 메모 행 */}
              <div className="flex">
                <div className="flex flex-1 items-center">
                  <div className="flex w-40 items-center gap-2.5 bg-gray-7 px-6 h-full">
                    <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">
                      메모
                    </span>
                  </div>
                  <div className="flex flex-1 items-center gap-2.5 px-6 py-2.5">
                    <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-1">
                      {reportDetail.target.content}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 신고정보 섹션 */}
          <div className="flex w-full flex-col items-end gap-4">
            <div className="flex w-full items-center justify-between">
              <h2 className="font-pretendard text-xl font-semibold leading-6 text-gray-1">
                신고정보
              </h2>
            </div>
            <div className="flex w-full flex-col border border-gray-7">
              {/* 신고자, 신고유형 행 */}
              <div className="flex">
                <div className="flex h-12 flex-1 items-center border-b border-gray-7">
                  <div className="flex w-40 items-center gap-2.5 bg-gray-7 px-6 h-full">
                    <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">
                      신고자
                    </span>
                  </div>
                  <div className="flex flex-1 items-center gap-2.5 px-6 py-2.5">
                    <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-1">
                      {reportDetail.reportInfo.reporter}
                    </span>
                  </div>
                </div>
                <div className="flex h-12 flex-1 items-center border-b border-gray-7">
                  <div className="flex w-40 items-center gap-2.5 bg-gray-7 px-6 h-full">
                    <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">
                      신고유형
                    </span>
                  </div>
                  <div className="flex flex-1 items-center gap-2.5 px-6 py-2.5">
                    <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-1">
                      {reportDetail.reportInfo.reportType}
                    </span>
                  </div>
                </div>
              </div>

              {/* 신고사유, 신고일시 행 */}
              <div className="flex">
                <div className="flex h-12 flex-1 items-center border-b border-gray-7">
                  <div className="flex w-40 items-center gap-2.5 bg-gray-7 px-6 h-full">
                    <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">
                      신고사유
                    </span>
                  </div>
                  <div className="flex flex-1 items-center gap-2.5 px-6 py-2.5">
                    <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-1">
                      {reportDetail.reportInfo.reason}
                    </span>
                  </div>
                </div>
                <div className="flex h-12 flex-1 items-center border-b border-gray-7">
                  <div className="flex w-40 items-center gap-2.5 bg-gray-7 px-6 h-full">
                    <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">
                      신고일시
                    </span>
                  </div>
                  <div className="flex flex-1 items-center gap-2.5 px-6 py-2.5">
                    <span className="font-pretendard text-base font-normal leading-6 tracking-[-0.32px] text-gray-1">
                      {reportDetail.reportInfo.reportedAt}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 댓글 섹션 */}
          <div className="flex w-full flex-col items-end gap-4">
            <div className="flex w-full items-center justify-between">
              <h2 className="font-pretendard text-xl font-semibold leading-6 text-gray-1">댓글</h2>
            </div>
            <div className="flex w-full flex-col gap-6 py-11">
              {reportDetail.comments.map((comment) => (
                <div key={comment.id} className="flex w-full flex-col gap-3">
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-center gap-5">
                      <div className="size-[47px] rounded-full bg-gray-5"></div>
                      <span className="font-pretendard text-sm font-medium leading-[150%] tracking-[-0.28px] text-gray-2">
                        {comment.author}
                      </span>
                      <span className="font-pretendard text-sm font-medium leading-[150%] tracking-[-0.28px] text-gray-4">
                        {comment.createdAt}
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="font-pretendard text-sm font-medium leading-4 text-gray-3">
                        비공개
                      </span>
                      <span className="font-pretendard text-sm font-medium leading-4 text-gray-3">
                        |
                      </span>
                      <span className="font-pretendard text-sm font-medium leading-4 text-gray-3">
                        삭제
                      </span>
                    </div>
                  </div>
                  <div className="w-full font-pretendard text-base font-medium leading-[150%] tracking-[-0.32px] text-gray-2">
                    {comment.content}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 운영자 조치 섹션 */}
          <div className="flex w-full flex-col items-end gap-4">
            <div className="flex w-full items-center justify-between">
              <h2 className="font-pretendard text-xl font-semibold leading-6 text-gray-1">
                운영자 조치
              </h2>
            </div>

            {/* 상태 변경 */}
            <div className="flex w-full items-center">
              <div className="flex w-40 h-14 items-center gap-1">
                <span className="font-pretendard text-xl font-semibold leading-6 text-gray-3">
                  상태 변경
                </span>
                <span className="font-pretendard text-xl font-semibold leading-6 text-red">*</span>
              </div>
              <div className="flex items-center">
                <CustomRadio
                  value="pending"
                  checked={adminAction.status === 'pending'}
                  onChange={handleStatusChange}
                  label="접수"
                />
                <CustomRadio
                  value="completed"
                  checked={adminAction.status === 'completed'}
                  onChange={handleStatusChange}
                  label="조치완료"
                />
                <CustomRadio
                  value="invalid"
                  checked={adminAction.status === 'invalid'}
                  onChange={handleStatusChange}
                  label="무효"
                />
              </div>
            </div>

            {/* 처리방식 */}
            <div className="flex w-full items-center">
              <div className="flex w-40 h-14 items-center gap-1">
                <span className="font-pretendard text-xl font-semibold leading-6 text-gray-3">
                  처리방식
                </span>
                <span className="font-pretendard text-xl font-semibold leading-6 text-red">*</span>
              </div>
              <div className="flex items-center">
                <CustomRadio
                  value="blind"
                  checked={adminAction.processingMethod === 'blind'}
                  onChange={handleProcessingMethodChange}
                  label="블라인드"
                />
                <CustomRadio
                  value="none"
                  checked={adminAction.processingMethod === 'none'}
                  onChange={handleProcessingMethodChange}
                  label="무표"
                />
              </div>
            </div>
          </div>

          {/* 버튼 섹션 */}
          <div className="flex w-full items-center justify-between">
            <Button
              variant="outline"
              size="sm"
              onClick={handleGoToList}
              className="flex w-[94px] h-9 items-center gap-1.5 rounded border border-gray-4 bg-white px-3 py-2.5"
            >
              <Hamburger size={16} color="#555555" />
              <span className="font-pretendard text-sm font-semibold leading-4 tracking-[-0.28px] text-gray-2">
                목록으로
              </span>
            </Button>
            <div className="flex items-center gap-2.5">
              <Button
                variant="outline"
                size="sm"
                onClick={handleCancel}
                className="flex h-9 items-center gap-1.5 rounded border border-primary bg-white w-12 h-9"
              >
                <span className="font-pretendard text-sm font-semibold leading-4 tracking-[-0.28px] text-primary">
                  취소
                </span>
              </Button>
              <Button
                size="sm"
                onClick={handleSave}
                className="flex h-9 items-center gap-1.5 rounded bg-primary w-12 h-9"
              >
                <span className="font-pretendard text-sm font-semibold leading-4 tracking-[-0.28px] text-white">
                  저장
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

