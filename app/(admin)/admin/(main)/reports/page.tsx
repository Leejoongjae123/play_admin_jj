'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ReportStatusBadge from '@/components/ui/ReportStatusBadge';
import { Calendar, UpArrow, Search, Refresh, Excel, Arrow } from '@/components/icons';

interface ReportData {
  id: number;
  reportId: string;
  category: string;
  targetId: string;
  preview: string;
  reporter: string;
  reportType: string;
  status: 'completed' | 'pending' | 'invalid';
  date: string;
  isHighlighted?: boolean;
}

const mockData: ReportData[] = [
  {
    id: 12345,
    reportId: 'RP00123',
    category: '댓글',
    targetId: 'C9804',
    preview: '장면 전환이 매끄럽고 몰입되는 느낌이었습니다',
    reporter: '홍길동(user1)',
    reportType: '스팸',
    status: 'completed',
    date: '2025-09-05 11:22',
  },
  {
    id: 12345,
    reportId: 'RP00123',
    category: '댓글',
    targetId: 'C9804',
    preview: '연극 <마타하리> 제작 크루 모집',
    reporter: '홍길동(user1)',
    reportType: '홍보성',
    status: 'completed',
    date: '2025-09-05 11:22',
    isHighlighted: true,
  },
  {
    id: 12345,
    reportId: 'RP00123',
    category: '게시물',
    targetId: 'C9804',
    preview: '장면 전환이 매끄럽고 몰입되는 느낌이었습니다',
    reporter: '홍길동(user1)',
    reportType: '욕설·비방',
    status: 'pending',
    date: '2025-09-05 11:22',
  },
  {
    id: 12345,
    reportId: 'RP00123',
    category: '메모',
    targetId: 'C9804',
    preview: '장면 전환이 매끄럽고 몰입되는 느낌이었습니다',
    reporter: '홍길동(user1)',
    reportType: '기타',
    status: 'invalid',
    date: '2025-09-05 11:22',
  },
  {
    id: 12345,
    reportId: 'RP00123',
    category: '댓글',
    targetId: 'C9804',
    preview: '장면 전환이 매끄럽고 몰입되는 느낌이었습니다',
    reporter: '홍길동(user1)',
    reportType: '스팸',
    status: 'completed',
    date: '2025-09-05 11:22',
  },
  {
    id: 12345,
    reportId: 'RP00123',
    category: '댓글',
    targetId: 'C9804',
    preview: '장면 전환이 매끄럽고 몰입되는 느낌이었습니다',
    reporter: '홍길동(user1)',
    reportType: '스팸',
    status: 'completed',
    date: '2025-09-05 11:22',
  },
  {
    id: 12345,
    reportId: 'RP00123',
    category: '댓글',
    targetId: 'C9804',
    preview: '장면 전환이 매끄럽고 몰입되는 느낌이었습니다',
    reporter: '홍길동(user1)',
    reportType: '스팸',
    status: 'completed',
    date: '2025-09-05 11:22',
  },
  {
    id: 12345,
    reportId: 'RP00123',
    category: '댓글',
    targetId: 'C9804',
    preview: '장면 전환이 매끄럽고 몰입되는 느낌이었습니다',
    reporter: '홍길동(user1)',
    reportType: '스팸',
    status: 'completed',
    date: '2025-09-05 11:22',
  },
  {
    id: 12345,
    reportId: 'RP00123',
    category: '댓글',
    targetId: 'C9804',
    preview: '장면 전환이 매끄럽고 몰입되는 느낌이었습니다',
    reporter: '홍길동(user1)',
    reportType: '스팸',
    status: 'completed',
    date: '2025-09-05 11:22',
  },
  {
    id: 12345,
    reportId: 'RP00123',
    category: '댓글',
    targetId: 'C9804',
    preview: '장면 전환이 매끄럽고 몰입되는 느낌이었습니다',
    reporter: '홍길동(user1)',
    reportType: '스팸',
    status: 'completed',
    date: '2025-09-05 11:22',
  },
];

export default function AdminReportsPage() {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [selectedStatus, setSelectedStatus] = useState('전체');
  const [searchBy, setSearchBy] = useState('작성자');
  const [searchTerm, setSearchTerm] = useState('');
  const [startDate, setStartDate] = useState('2025-08-08');
  const [endDate, setEndDate] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState('10개씩 보기');

  return (
    <div className="flex w-full flex-col items-center gap-[34px] p-11">
      {/* 페이지 제목 */}
      <div className="self-stretch">
        <h1 className="color-gray-1 text-2xl font-bold leading-8">신고 관리</h1>
      </div>

      {/* 필터 섹션 */}
      <div className="flex flex-col items-start gap-[18px] self-stretch rounded-lg bg-[#FAF8F6] p-8">
        {/* 첫 번째 행 */}
        <div className="flex items-start gap-6 self-stretch">
          {/* 신고일시 */}
          <div className="flex items-center gap-2">
            <div className="text-base font-bold leading-6 text-[#555]">신고일시</div>
            <div className="flex w-[306px] items-center gap-2.5">
              <div className="flex w-[140px] items-center justify-between rounded-md border border-[#EBEBEB] bg-white p-3">
                <div className="text-xs font-bold leading-normal text-[#911A00]">
                  {startDate || '날짜 입력'}
                </div>
                <Calendar size={12} color="#727272" />
              </div>
              <div className="text-center text-xs font-bold leading-normal text-[#727272]">-</div>
              <div className="flex w-[140px] items-center justify-between rounded-md border border-[#EBEBEB] bg-white p-3">
                <div className="text-xs font-medium leading-normal text-[#727272]">
                  {endDate || '날짜 입력'}
                </div>
                <Calendar size={12} color="#727272" />
              </div>
            </div>
          </div>

          {/* 구분 */}
          <div className="flex flex-1 items-center gap-2">
            <div className="text-base font-bold leading-6 text-[#555]">구분</div>
            <div className="flex flex-1 items-center justify-between rounded-md border border-[#EBEBEB] bg-white p-3">
              <div className="text-xs font-bold leading-normal text-[#911A00]">{selectedCategory}</div>
              <UpArrow size={10} color="#911A00" />
            </div>
          </div>

          {/* 상태 */}
          <div className="flex flex-1 items-center gap-2">
            <div className="text-base font-bold leading-6 text-[#555]">상태</div>
            <div className="flex flex-1 items-center justify-between rounded-md border border-[#EBEBEB] bg-white p-3">
              <div className="text-xs font-bold leading-normal text-[#911A00]">{selectedStatus}</div>
              <UpArrow size={10} color="#911A00" />
            </div>
          </div>
        </div>

        {/* 두 번째 행 */}
        <div className="flex items-center gap-6 self-stretch">
          {/* 검색 필드 */}
          <div className="flex flex-1 items-center gap-3 self-stretch rounded-md border border-[#EBEBEB] bg-white p-3">
            <div className="flex items-center gap-2">
              <div className="text-xs font-bold leading-normal text-[#911A00]">{searchBy}</div>
              <UpArrow size={10} color="#911A00" />
            </div>
            <div className="text-xs font-medium leading-normal text-[#727272]">
              {searchTerm || '검색조건을 입력해주세요'}
            </div>
          </div>

          {/* 버튼들 */}
          <div className="flex items-center gap-2">
            <button className="flex w-[120px] items-center justify-center gap-2.5 rounded bg-[#911A00] py-3">
              <Search size={16} color="#FFF" />
              <div className="text-base font-bold leading-normal text-white">검색</div>
            </button>
            <button className="flex w-[120px] items-center justify-center gap-2.5 rounded border-[1.3px] border-[#911A00] py-3">
              <Refresh size={16} color="#911A00" />
              <div className="text-base font-bold leading-normal text-[#911A00]">초기화</div>
            </button>
          </div>
        </div>
      </div>

      {/* 결과 섹션 */}
      <div className="flex flex-col items-center gap-6 self-stretch">
        <div className="flex flex-col items-end gap-4 self-stretch">
          <div className="flex items-center justify-between self-stretch">
            <div className="text-center text-xl font-medium leading-6 tracking-[-0.4px]">
              <span className="text-[#6D6D6D]">총 </span>
              <span className="text-[#911A00]">12,345</span>
              <span className="text-[#6D6D6D]">건</span>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-3 rounded border-[1.6px] border-[#4CA452] bg-white px-3 py-2.5">
                <Excel size={16} color="#4CA452" />
                <div className="text-sm font-bold leading-4 tracking-[-0.28px] text-[#4CA452]">
                  엑셀 다운로드
                </div>
              </button>
              <button className="flex w-[120px] items-center justify-center rounded bg-[#911A00] py-2.5">
                <div className="text-sm font-bold leading-4 tracking-[-0.28px] text-white">
                  커뮤니티 등록
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* 테이블 */}
        <div className="flex flex-col items-start gap-6 self-stretch">
          <div className="flex flex-col items-start self-stretch">
            {/* 테이블 헤더 */}
            <div className="flex h-[50px] items-center justify-between self-stretch rounded-[2px] bg-[#EEE] px-4">
              <div className="flex items-center justify-center gap-2.5 px-2.5 py-4">
                <div className="w-10 text-center text-xs font-bold leading-normal text-[#515151]">NO</div>
              </div>
              <div className="flex items-center justify-center gap-2.5 px-2.5 py-4">
                <div className="w-[60px] max-w-[60px] text-center text-xs font-bold leading-normal text-[#515151]">
                  신고ID
                </div>
              </div>
              <div className="flex items-center justify-center gap-2.5 px-2.5 py-4">
                <div className="w-[60px] max-w-[60px] text-center text-xs font-bold leading-normal text-[#515151]">
                  구분
                </div>
              </div>
              <div className="flex items-center justify-center gap-2.5 px-2.5 py-4">
                <div className="w-[60px] max-w-[60px] text-center text-xs font-bold leading-normal text-[#515151]">
                  대상ID
                </div>
              </div>
              <div className="flex items-center justify-center gap-2.5 px-2.5 py-4">
                <div className="w-[260px] max-w-[260px] text-center text-xs font-bold leading-normal text-[#515151]">
                  내용 미리보기
                </div>
              </div>
              <div className="flex items-center justify-center gap-2.5 px-2.5 py-4">
                <div className="w-[88px] max-w-[88px] overflow-hidden text-ellipsis whitespace-nowrap text-center text-xs font-bold leading-normal text-[#515151]">
                  신고자
                </div>
              </div>
              <div className="flex items-center justify-center gap-2.5 px-2.5 py-4">
                <div className="w-[88px] max-w-[88px] overflow-hidden text-ellipsis whitespace-nowrap text-center text-xs font-bold leading-normal text-[#515151]">
                  신고유형
                </div>
              </div>
              <div className="flex w-[100px] items-center justify-center gap-2.5 px-2.5 py-4">
                <div className="w-20 flex-shrink-0 text-center text-xs font-bold leading-normal text-[#515151]">
                  상태
                </div>
              </div>
              <div className="flex items-center justify-center gap-2.5 px-2.5 py-4">
                <div className="w-[114px] text-center text-xs font-bold leading-normal text-[#515151]">
                  신고일시
                </div>
              </div>
            </div>

            {/* 테이블 데이터 */}
            {mockData.map((item, index) => (
              <div
                key={index}
                className={`flex h-[50px] items-center justify-between self-stretch px-4 ${
                  item.isHighlighted ? 'rounded-[2px] bg-[#EBE1DF]' : 'rounded'
                }`}
              >
                <div className="flex items-center justify-center gap-2.5 px-2.5 py-4">
                  <div
                    className={`w-10 text-center text-xs font-medium leading-normal ${
                      item.isHighlighted ? 'text-[#911A00]' : 'text-[#686868]'
                    }`}
                  >
                    {item.id}
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2.5 px-2.5 py-4">
                  <div
                    className={`w-[60px] max-w-[60px] text-center text-xs font-medium leading-normal ${
                      item.isHighlighted ? 'text-[#911A00]' : 'text-[#686868]'
                    }`}
                  >
                    {item.reportId}
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2.5 px-2.5 py-4">
                  <div
                    className={`w-[60px] max-w-[60px] text-center text-xs font-medium leading-normal ${
                      item.isHighlighted ? 'text-[#911A00]' : 'text-[#686868]'
                    }`}
                  >
                    {item.category}
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2.5 px-2.5 py-4">
                  <div
                    className={`w-[60px] max-w-[60px] overflow-hidden text-ellipsis whitespace-nowrap text-center text-xs font-medium leading-normal ${
                      item.isHighlighted ? 'text-[#911A00]' : 'text-[#686868]'
                    }`}
                  >
                    {item.targetId}
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2.5 px-2.5 py-4">
                  <div
                    className={`w-[260px] max-w-[260px] overflow-hidden text-ellipsis whitespace-nowrap text-center text-xs font-medium leading-normal ${
                      item.isHighlighted ? 'text-[#911A00]' : 'text-[#686868]'
                    }`}
                  >
                    {item.preview}
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2.5 px-2.5 py-4">
                  <div
                    className={`w-[88px] max-w-[88px] overflow-hidden text-ellipsis whitespace-nowrap text-center text-xs font-medium leading-normal ${
                      item.isHighlighted ? 'text-[#911A00]' : 'text-[#686868]'
                    }`}
                  >
                    {item.reporter}
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2.5 px-2.5 py-4">
                  <div
                    className={`w-[88px] max-w-[88px] overflow-hidden text-ellipsis whitespace-nowrap text-center text-xs font-medium leading-normal ${
                      item.isHighlighted ? 'text-[#911A00]' : 'text-[#686868]'
                    }`}
                  >
                    {item.reportType}
                  </div>
                </div>
                <div className="flex w-[100px] items-center justify-center gap-2.5 px-2.5 py-0 self-stretch">
                  <ReportStatusBadge status={item.status} />
                </div>
                <div className="flex items-center justify-center gap-2.5 px-2.5 py-4">
                  <div
                    className={`w-[114px] text-center text-xs font-medium leading-normal ${
                      item.isHighlighted ? 'text-[#911A00]' : 'text-[#686868]'
                    }`}
                  >
                    {item.date}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 페이징 */}
          <div className="flex items-center justify-between self-stretch">
            <div className="flex items-center gap-3 rounded-md border border-[#EBEBEB] bg-white p-3">
              <div className="text-xs font-bold leading-normal text-[#911A00]">{itemsPerPage}</div>
              <UpArrow size={10} color="#911A00" />
            </div>
            <div className="flex items-center gap-4">
              <Arrow direction="left" size={24} color="#A0A0A0" />
              <div className="flex items-center gap-2">
                <div className="flex size-6 flex-col items-center justify-center gap-2.5 rounded-[2px] bg-[#911A00]">
                  <div className="text-center text-sm font-medium leading-4 text-white">1</div>
                </div>
                <div className="flex size-6 flex-col items-center justify-center gap-2.5">
                  <div className="text-center text-sm font-medium leading-4 text-[#CCBCAB]">2</div>
                </div>
                <div className="flex size-6 flex-col items-center justify-center gap-2.5">
                  <div className="text-center text-sm font-medium leading-4 text-[#CCBCAB]">...</div>
                </div>
                <div className="flex size-6 flex-col items-center justify-center gap-2.5">
                  <div className="text-center text-sm font-medium leading-4 text-[#CCBCAB]">9</div>
                </div>
                <div className="flex size-6 flex-col items-center justify-center gap-2.5">
                  <div className="text-center text-sm font-medium leading-4 text-[#CCBCAB]">10</div>
                </div>
              </div>
              <Arrow direction="right" size={24} color="#911A00" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
