'use client';

import { useState } from 'react';
import { CheckboxUI } from '@/components/common/Checkbox/CheckboxUI';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Toggle from '@/components/ui/toggle';
import Search from '@/components/icons/Search';
import Refresh from '@/components/icons/Refresh';
import Arrow from '@/components/icons/Arrow';

interface FilterState {
  프로그램: boolean;
  희곡: boolean;
  작가: boolean;
  공지: boolean;
  커뮤니티: boolean;
  기타: boolean;
}

interface TemplateData {
  id: string;
  type: string;
  content: string;
  sender: string;
  isEnabled: boolean;
  lastModified: string;
  isHighlighted?: boolean;
}

interface TemplateFormData {
  title: string;
  type: string;
  content: string;
  isActive: boolean;
}

export default function AdminNotificationTemplatesPage() {
  const [filters, setFilters] = useState<FilterState>({
    프로그램: true,
    희곡: false,
    작가: false,
    공지: false,
    커뮤니티: false,
    기타: false,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<TemplateFormData>({
    title: '',
    type: '',
    content: '',
    isActive: true,
  });

  const handleFilterChange = (key: keyof FilterState) => {
    setFilters(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleToggleChange = (id: string, checked: boolean) => {
    // 토글 상태 변경 로직
    console.log(`Template ${id} toggle changed to ${checked}`);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormData({
      title: '',
      type: '',
      content: '',
      isActive: true,
    });
  };

  const handleFormSubmit = () => {
    // 폼 제출 로직
    console.log('Form submitted:', formData);
    handleCloseModal();
  };

  const insertVariable = (variable: string) => {
    setFormData(prev => ({
      ...prev,
      content: prev.content + variable,
    }));
  };

  const templates: TemplateData[] = [
    {
      id: 'T1001',
      type: '프로그램',
      content: '신규 프로그램 등록 알림',
      sender: 'system',
      isEnabled: true,
      lastModified: '2025-09-05 11:22',
    },
    {
      id: 'T1001',
      type: '커뮤니티',
      content: '내 게시글에 댓글 알림',
      sender: 'system',
      isEnabled: false,
      lastModified: '2025-09-05 11:22',
      isHighlighted: true,
    },
    {
      id: 'T1001',
      type: '프로그램',
      content: '신규 프로그램 등록 알림',
      sender: 'system',
      isEnabled: true,
      lastModified: '2025-09-05 11:22',
    },
    {
      id: 'T1001',
      type: '프로그램',
      content: '신규 프로그램 등록 알림',
      sender: 'system',
      isEnabled: false,
      lastModified: '2025-09-05 11:22',
    },
    {
      id: 'T1001',
      type: '프로그램',
      content: '신규 프로그램 등록 알림',
      sender: 'system',
      isEnabled: true,
      lastModified: '2025-09-05 11:22',
    },
    {
      id: 'T1001',
      type: '프로그램',
      content: '신규 프로그램 등록 알림',
      sender: 'system',
      isEnabled: true,
      lastModified: '2025-09-05 11:22',
    },
    {
      id: 'T1001',
      type: '프로그램',
      content: '신규 프로그램 등록 알림',
      sender: 'system',
      isEnabled: false,
      lastModified: '2025-09-05 11:22',
    },
    {
      id: 'T1001',
      type: '프로그램',
      content: '신규 프로그램 등록 알림',
      sender: 'system',
      isEnabled: true,
      lastModified: '2025-09-05 11:22',
    },
    {
      id: 'T1001',
      type: '프로그램',
      content: '신규 프로그램 등록 알림',
      sender: 'system',
      isEnabled: false,
      lastModified: '2025-09-05 11:22',
    },
    {
      id: 'T1001',
      type: '프로그램',
      content: '신규 프로그램 등록 알림',
      sender: 'system',
      isEnabled: true,
      lastModified: '2025-09-05 11:22',
    },
  ];

  return (
    <>
      <div className="flex w-full max-w-[1180px] flex-col items-center gap-[34px] p-11">
        {/* 제목 */}
        <div className="w-full">
          <h1 className="font-pretendard text-2xl font-semibold leading-8 text-gray-1">
            알림 템플릿 관리
          </h1>
        </div>

        {/* 필터 섹션 */}
        <div className="flex w-full flex-col items-start gap-[18px] rounded-lg bg-[#FAF8F6] p-8">
          <div className="flex w-full items-center justify-between gap-6">
            {/* 체크박스 필터 */}
            <div className="flex items-start gap-[18px]">
              {Object.entries(filters).map(([key, checked]) => (
                <div key={key} className="flex items-center gap-2 px-2 py-1">
                  <CheckboxUI
                    checked={checked}
                    onChange={() => handleFilterChange(key as keyof FilterState)}
                  />
                  <span
                    className={`font-pretendard text-sm font-medium ${
                      checked ? 'text-primary' : 'text-gray-2'
                    }`}
                  >
                    {key}
                  </span>
                </div>
              ))}
            </div>

            {/* 유형 드롭다운 */}
            <div className="flex flex-1 items-center gap-2">
              <span className="font-pretendard text-base font-semibold text-gray-2">유형</span>
              <div className="flex flex-1 items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-3">
                <span className="font-pretendard text-xs font-bold text-primary">전체</span>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path
                    d="M2.30018 3H7.70033C7.75501 3.00015 7.8086 3.01358 7.85534 3.03884C7.90208 3.06409 7.9402 3.10022 7.9656 3.14334C7.991 3.18645 8.00271 3.23492 7.99947 3.28352C7.99624 3.33211 7.97818 3.37901 7.94724 3.41915L5.24716 6.89201C5.13526 7.036 4.86585 7.036 4.75365 6.89201L2.05357 3.41915C2.02232 3.37909 2.00399 3.33217 2.00058 3.28349C1.99717 3.23481 2.00881 3.18623 2.03423 3.14303C2.05965 3.09982 2.09788 3.06365 2.14477 3.03843C2.19165 3.01322 2.24541 2.99992 2.30018 3Z"
                    fill="#911A00"
                  />
                </svg>
              </div>
            </div>

            {/* 검색/초기화 버튼 */}
            <div className="flex items-center gap-2">
              <Button
                variant="default"
                className="flex h-auto w-[120px] items-center justify-center gap-2 rounded bg-primary px-0 py-3 font-pretendard text-base font-semibold text-white"
              >
                <Search size={16} color="white" />
                검색
              </Button>
              <Button
                variant="outline"
                className="flex h-auto w-[120px] items-center justify-center gap-2 rounded border border-primary bg-white px-0 py-3 font-pretendard text-base font-semibold text-primary"
              >
                <Refresh size={16} color="#911A00" />
                초기화
              </Button>
            </div>
          </div>
        </div>

        {/* 결과 및 등록 버튼 */}
        <div className="flex w-full flex-col items-center gap-6">
          <div className="flex w-full flex-col items-end gap-4">
            <div className="flex w-full items-center justify-between">
              <div className="font-pretendard text-xl font-medium leading-6 tracking-[-0.4px]">
                <span className="text-gray-3">총 </span>
                <span className="text-primary">12,345</span>
                <span className="text-gray-3">건</span>
              </div>
              <Button
                variant="default"
                onClick={handleOpenModal}
                className="h-auto w-[120px] rounded bg-primary px-0 py-2.5 font-pretendard text-sm font-semibold leading-4 tracking-[-0.28px] text-white"
              >
                템플릿 등록
              </Button>
            </div>

            {/* 테이블 */}
            <div className="flex w-full flex-col items-start gap-6">
              <div className="flex w-full flex-col items-start">
                {/* 테이블 헤더 */}
                <div className="flex h-[50px] w-full items-center justify-between rounded-sm bg-gray-200 px-4">
                  <div className="flex w-[60px] max-w-[60px] items-center justify-center px-2.5 py-4">
                    <span className="font-pretendard text-xs font-bold text-gray-600">템플릿ID</span>
                  </div>
                  <div className="flex w-[100px] items-center justify-center px-2.5 py-4">
                    <span className="font-pretendard text-xs font-bold text-gray-600">유형</span>
                  </div>
                  <div className="flex w-[240px] max-w-[240px] items-center justify-center px-2.5 py-4">
                    <span className="font-pretendard text-xs font-bold text-gray-600">내용</span>
                  </div>
                  <div className="flex w-[88px] max-w-[88px] items-center justify-center px-2.5 py-4">
                    <span className="font-pretendard text-xs font-bold text-gray-600">발신자</span>
                  </div>
                  <div className="flex w-[100px] items-center justify-center px-2.5 py-4">
                    <span className="font-pretendard text-xs font-bold text-gray-600">알림설정</span>
                  </div>
                  <div className="flex w-[88px] max-w-[88px] items-center justify-center px-2.5 py-4">
                    <span className="font-pretendard text-xs font-bold text-gray-600">메세지 수정</span>
                  </div>
                  <div className="flex w-[114px] items-center justify-center px-2.5 py-4">
                    <span className="font-pretendard text-xs font-bold text-gray-600">최근 수정 일시</span>
                  </div>
                </div>

                {/* 테이블 데이터 */}
                {templates.map((template, index) => (
                  <div
                    key={index}
                    className={`flex h-[50px] w-full items-center justify-between px-4 ${
                      template.isHighlighted ? 'bg-red-3' : 'bg-white'
                    }`}
                  >
                    <div className="flex w-[60px] max-w-[60px] items-center justify-center px-2.5 py-4">
                      <span
                        className={`font-pretendard text-xs font-medium ${
                          template.isHighlighted ? 'text-primary' : 'text-gray-500'
                        }`}
                      >
                        {template.id}
                      </span>
                    </div>
                    <div className="flex w-[100px] items-center justify-center px-2.5 py-4">
                      <span
                        className={`font-pretendard text-xs font-medium ${
                          template.isHighlighted ? 'text-primary' : 'text-gray-500'
                        }`}
                      >
                        {template.type}
                      </span>
                    </div>
                    <div className="flex w-[240px] max-w-[240px] items-center justify-center px-2.5 py-4">
                      <span
                        className={`font-pretendard text-xs font-medium ${
                          template.isHighlighted ? 'text-primary' : 'text-gray-500'
                        }`}
                      >
                        {template.content}
                      </span>
                    </div>
                    <div className="flex w-[88px] max-w-[88px] items-center justify-center px-2.5 py-4">
                      <span
                        className={`overflow-hidden text-ellipsis whitespace-nowrap font-pretendard text-xs font-medium ${
                          template.isHighlighted ? 'text-primary' : 'text-gray-500'
                        }`}
                      >
                        {template.sender}
                      </span>
                    </div>
                    <div className="flex w-[100px] items-center justify-center px-2.5">
                      <Toggle
                        checked={template.isEnabled}
                        onChange={(checked) => handleToggleChange(template.id, checked)}
                      />
                    </div>
                    <div className="flex w-[88px] items-center justify-center px-2.5">
                      <Button
                        variant="outline"
                        className="h-auto w-[88px] rounded border border-primary bg-white px-3 py-2.5 font-pretendard text-sm font-semibold leading-4 tracking-[-0.28px] text-primary"
                      >
                        메세지 수정
                      </Button>
                    </div>
                    <div className="flex w-[114px] items-center justify-center px-2.5 py-4">
                      <span
                        className={`font-pretendard text-xs font-medium ${
                          template.isHighlighted ? 'text-primary' : 'text-gray-500'
                        }`}
                      >
                        {template.lastModified}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* 하단 페이지네이션 */}
              <div className="flex w-full items-center justify-between">
                {/* 페이지당 항목 수 선택 */}
                <div className="flex items-center gap-3 rounded-md border border-gray-300 bg-white px-3 py-3">
                  <span className="font-pretendard text-xs font-bold text-primary">10개씩 보기</span>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M2.30018 3H7.70033C7.75501 3.00015 7.8086 3.01358 7.85534 3.03884C7.90208 3.06409 7.9402 3.10022 7.9656 3.14334C7.991 3.18645 8.00271 3.23492 7.99947 3.28352C7.99624 3.33211 7.97818 3.37901 7.94724 3.41915L5.24716 6.89201C5.13526 7.036 4.86585 7.036 4.75365 6.89201L2.05357 3.41915C2.02232 3.37909 2.00399 3.33217 2.00058 3.28349C1.99717 3.23481 2.00881 3.18623 2.03423 3.14303C2.05965 3.09982 2.09788 3.06365 2.14477 3.03843C2.19165 3.01322 2.24541 2.99992 2.30018 3Z"
                      fill="#911A00"
                    />
                  </svg>
                </div>

                {/* 페이지네이션 */}
                <div className="flex items-center gap-4">
                  <Arrow direction="left" color="#A0A0A0" />
                  <div className="flex items-center gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-sm bg-primary">
                      <span className="font-pretendard text-sm font-medium text-white">1</span>
                    </div>
                    <div className="flex h-6 w-6 items-center justify-center">
                      <span className="font-pretendard text-sm font-medium text-orange-3">2</span>
                    </div>
                    <div className="flex h-6 w-6 items-center justify-center">
                      <span className="font-pretendard text-sm font-medium text-orange-3">...</span>
                    </div>
                    <div className="flex h-6 w-6 items-center justify-center">
                      <span className="font-pretendard text-sm font-medium text-orange-3">9</span>
                    </div>
                    <div className="flex h-6 w-6 items-center justify-center">
                      <span className="font-pretendard text-sm font-medium text-orange-3">10</span>
                    </div>
                  </div>
                  <Arrow direction="right" color="#911A00" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 템플릿 등록 모달 */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="flex w-[520px] flex-col items-center gap-[46px] rounded-[12px] bg-white p-11 shadow-[0_0_10px_0_rgba(146,46,0,0.08)]">
            {/* 모달 헤더 */}
            <div className="flex w-full flex-col items-start gap-6">
              <div className="flex w-full items-start justify-between">
                <h2 className="font-pretendard text-xl font-bold leading-6 text-[#202224]">
                  알림 템플릿
                </h2>
                <button onClick={handleCloseModal} className="text-gray-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 19L12 12M12 12L19 5M12 12L5 5M12 12L19 19"
                      stroke="#6D6D6D"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              {/* 폼 필드들 */}
              <div className="flex w-full flex-col items-start gap-6">
                {/* 제목 */}
                <div className="flex w-full flex-col items-start">
                  <div className="mb-3 flex h-11 w-40 items-center gap-1">
                    <span className="font-pretendard text-base font-bold leading-6 text-gray-1">
                      제목
                    </span>
                  </div>
                  <div className="w-full">
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                      placeholder="제목을 입력해주세요"
                      className="flex w-full items-center justify-between rounded border border-red-3 bg-orange-4 px-5 py-4 text-base font-normal leading-6 tracking-[-0.32px] text-gray-2 placeholder:text-orange-3"
                    />
                  </div>
                </div>

                {/* 알림 유형 */}
                <div className="flex w-full flex-col items-start">
                  <div className="mb-3 flex h-11 w-40 items-center gap-1">
                    <span className="font-pretendard text-base font-bold leading-6 text-gray-1">
                      알림 유형
                    </span>
                  </div>
                  <div className="w-full">
                    <div className="flex w-full items-center justify-between rounded border border-red-3 bg-orange-4 px-5 py-4">
                      <span className="text-base font-normal leading-6 tracking-[-0.32px] text-orange-3">
                        선택
                      </span>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M11.1719 17.0336C11.5685 17.6198 12.4318 17.6198 12.8284 17.0336L19.9905 6.44734C20.4398 5.78326 19.964 4.88699 19.1622 4.88699H4.83802C4.03624 4.88699 3.56048 5.78326 4.00976 6.44734L11.1719 17.0336Z"
                          fill="#911A00"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* 알림내용 입력 */}
              <div className="flex w-full flex-col items-start gap-3">
                <span className="font-pretendard text-base font-bold leading-6 text-gray-1">
                  알림내용 입력
                </span>
                <div className="relative flex w-full flex-col items-end gap-[84px] rounded-lg border border-gray-6 bg-[#FAF8F6] p-5">
                  <textarea
                    value={formData.content}
                    onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                    className="w-full resize-none border-none bg-transparent text-base font-normal leading-6 tracking-[-0.32px] text-gray-2 outline-none placeholder:text-gray-2"
                    placeholder="새로운 프로그램 <{프로그램명}> 이 등록되었습니다.  
   신청을 원하시면 확인해 주세요."
                    rows={4}
                  />
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 7 7"
                    fill="none"
                    className="rotate-[135deg] fill-[#E0E2E7]"
                  >
                    <path d="M6.67466 5.74715C6.71829 6.35472 6.21319 6.85982 5.60562 6.8162L1.02376 6.48723C0.169203 6.42588 -0.217554 5.38851 0.388262 4.7827L4.64116 0.529803C5.24698 -0.0760114 6.28435 0.310745 6.3457 1.1653L6.67466 5.74715Z" />
                  </svg>
                </div>

                {/* 변수 버튼들 */}
                <div className="flex items-start gap-3">
                  {['{프로그램명}', '{희곡명}', '{반려사유}', '{게시글제목}'].map((variable) => (
                    <button
                      key={variable}
                      onClick={() => insertVariable(variable)}
                      className="flex items-center justify-center gap-1.5 rounded border border-primary bg-white px-3 py-2.5 font-pretendard text-sm font-bold leading-4 tracking-[-0.28px] text-primary"
                    >
                      {variable}
                    </button>
                  ))}
                  <button
                    onClick={() => insertVariable('+')}
                    className="flex w-9 items-center justify-center gap-1.5 rounded border border-primary bg-white px-3 py-2.5 font-pretendard text-sm font-bold leading-4 tracking-[-0.28px] text-primary"
                  >
                    +
                  </button>
                </div>

                {/* 안내 메시지 */}
                <div className="flex items-start gap-2">
                  <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
                    <path
                      d="M7.33203 6.14323H8.66536V4.8099H7.33203M7.9987 13.4766C5.0587 13.4766 2.66536 11.0832 2.66536 8.14323C2.66536 5.20323 5.0587 2.8099 7.9987 2.8099C10.9387 2.8099 13.332 5.20323 13.332 8.14323C13.332 11.0832 10.9387 13.4766 7.9987 13.4766ZM7.9987 1.47656C7.12322 1.47656 6.25631 1.649 5.44747 1.98403C4.63864 2.31906 3.90371 2.81013 3.28465 3.42918C2.03441 4.67943 1.33203 6.37512 1.33203 8.14323C1.33203 9.91134 2.03441 11.607 3.28465 12.8573C3.90371 13.4763 4.63864 13.9674 5.44747 14.3024C6.25631 14.6375 7.12322 14.8099 7.9987 14.8099C9.76681 14.8099 11.4625 14.1075 12.7127 12.8573C13.963 11.607 14.6654 9.91134 14.6654 8.14323C14.6654 7.26775 14.4929 6.40084 14.1579 5.59201C13.8229 4.78317 13.3318 4.04824 12.7127 3.42918C12.0937 2.81013 11.3588 2.31906 10.5499 1.98403C9.74108 1.649 8.87418 1.47656 7.9987 1.47656ZM7.33203 11.4766H8.66536V7.47656H7.33203V11.4766Z"
                      fill="#A0A0A0"
                    />
                  </svg>
                  <span className="font-pretendard text-sm font-medium leading-4 text-gray-4">
                    변수 버튼 클릭 시, 커서 위치에 삽입됩니다.
                  </span>
                </div>
              </div>

              {/* 미리보기 */}
              <div className="flex w-full flex-col items-start gap-3">
                <span className="font-pretendard text-base font-bold leading-6 text-gray-1">
                  미리보기
                </span>
                <div className="relative flex w-full flex-col items-end gap-[84px] rounded-lg border border-gray-6 bg-[#FAF8F6] p-5">
                  <div className="w-full text-base font-normal leading-6 tracking-[-0.32px] text-gray-2">
                    {formData.content || '"새로운 프로그램 <{프로그램명}> 이 등록되었습니다.  \n   신청을 원하시면 확인해 주세요."'}
                  </div>
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 7 7"
                    fill="none"
                    className="rotate-[135deg] fill-[#E0E2E7]"
                  >
                    <path d="M6.67466 5.88973C6.71829 6.4973 6.21319 7.0024 5.60562 6.95877L1.02376 6.62981C0.169203 6.56846 -0.217554 5.53109 0.388262 4.92527L4.64116 0.672382C5.24698 0.0665667 6.28435 0.453323 6.3457 1.30787L6.67466 5.88973Z" />
                  </svg>
                </div>
              </div>

              {/* 활성화 여부 */}
              <div className="flex w-full flex-col items-start gap-3">
                <span className="font-pretendard text-base font-bold leading-6 text-gray-1">
                  활성화 여부
                </span>
                <div className="flex items-center">
                  <label className="flex cursor-pointer items-center gap-2.5 p-2">
                    <div className="relative">
                      <input
                        type="radio"
                        name="isActive"
                        checked={formData.isActive === true}
                        onChange={() => setFormData(prev => ({ ...prev, isActive: true }))}
                        className="sr-only"
                      />
                      <div className={`h-6 w-6 rounded-full border-[1.6px] ${formData.isActive ? 'border-primary' : 'border-gray-3'}`}>
                        {formData.isActive && (
                          <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"></div>
                        )}
                      </div>
                    </div>
                    <span className={`font-pretendard text-base font-bold leading-6 tracking-[-0.32px] ${formData.isActive ? 'text-primary' : 'text-gray-3'}`}>
                      사용
                    </span>
                  </label>
                  <label className="flex cursor-pointer items-center gap-2.5 p-2">
                    <div className="relative">
                      <input
                        type="radio"
                        name="isActive"
                        checked={formData.isActive === false}
                        onChange={() => setFormData(prev => ({ ...prev, isActive: false }))}
                        className="sr-only"
                      />
                      <div className={`h-6 w-6 rounded-full border-[1.6px] ${!formData.isActive ? 'border-primary' : 'border-gray-3'}`}>
                        {!formData.isActive && (
                          <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"></div>
                        )}
                      </div>
                    </div>
                    <span className={`font-pretendard text-base font-normal leading-6 tracking-[-0.32px] ${!formData.isActive ? 'text-primary' : 'text-gray-3'}`}>
                      미사용
                    </span>
                  </label>
                </div>
              </div>

              {/* 저장 버튼 */}
              <Button
                onClick={handleFormSubmit}
                className="flex w-full items-center justify-center gap-2.5 rounded bg-primary px-[55px] py-5 font-pretendard text-lg font-bold leading-6 text-white"
              >
                저장
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
