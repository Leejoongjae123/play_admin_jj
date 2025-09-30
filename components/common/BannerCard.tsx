'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import Toggle from '@/components/ui/toggle';
import DatePicker from '@/components/ui/date-picker';

interface BannerCardProps {
  title: string;
  imageUrl?: string;
  linkUrl?: string;
  startDate?: string;
  endDate?: string;
  isPublished?: boolean;
  onDelete?: () => void;
  onImageEdit?: () => void;
  onImageUpload?: () => void;
  onLinkUrlChange?: (url: string) => void;
  onStartDateChange?: (date: string) => void;
  onEndDateChange?: (date: string) => void;
  onPublishToggle?: (published: boolean) => void;
  className?: string;
}

export default function BannerCard({
  title,
  imageUrl,
  linkUrl = '',
  startDate = '',
  endDate = '',
  isPublished = false,
  onDelete,
  onImageEdit,
  onImageUpload,
  onLinkUrlChange,
  onStartDateChange,
  onEndDateChange,
  onPublishToggle,
  className,
}: BannerCardProps) {
  const [localLinkUrl, setLocalLinkUrl] = useState(linkUrl);

  const handleLinkUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocalLinkUrl(value);
    onLinkUrlChange?.(value);
  };

  const handleClearLinkUrl = () => {
    setLocalLinkUrl('');
    onLinkUrlChange?.('');
  };

  return (
    <div className={cn('flex w-[332px] flex-col gap-4 rounded bg-[#FAF8F6] p-8', className)}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="font-pretendard text-xl font-bold text-gray-1">{title}</h3>
        <button
          type="button"
          onClick={onDelete}
          className="flex items-center gap-2"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M7 21C6.45 21 5.97933 20.8043 5.588 20.413C5.19667 20.0217 5.00067 19.5507 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.8043 20.021 18.413 20.413C18.0217 20.805 17.5507 21.0007 17 21H7ZM17 6H7V19H17V6ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z"
              fill="#D65856"
            />
          </svg>
          <span className="font-pretendard text-sm font-bold text-[#D65856]">삭제</span>
        </button>
      </div>

      {/* Image Area */}
      <div className="relative">
        {imageUrl ? (
          <div
            className="h-[200px] rounded bg-cover bg-center"
            style={{ backgroundImage: `url(${imageUrl})` }}
          >
            <button
              type="button"
              onClick={onImageEdit}
              className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-sm bg-[#F4EFEA]"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M11.9283 4.91352L13.9511 2.89066C14.1464 2.6954 14.463 2.6954 14.6582 2.89066L16.7236 4.95603C16.9189 5.15129 16.9189 5.46788 16.7236 5.66314L14.7008 7.68599M11.9283 4.91352L4.17385 12.6679C4.06407 12.7777 3.98136 12.9115 3.93227 13.0588L2.93691 16.0449C2.80662 16.4358 3.17849 16.8077 3.56937 16.6774L6.55544 15.682C6.70272 15.6329 6.83655 15.5502 6.94632 15.4404L14.7008 7.68599M11.9283 4.91352L14.7008 7.68599"
                  stroke="#911A00"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={onImageUpload}
            className="flex h-[200px] w-full flex-col items-center justify-center rounded border border-dashed border-gray-4 bg-gray-6"
          >
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <path
                d="M12.5008 38.5L21.4654 28.5354C22.403 27.598 23.6746 27.0714 25.0004 27.0714C26.3262 27.0714 27.5977 27.598 28.5354 28.5354L40.0004 40.0004M35.0004 35.0004L38.9654 31.0354C39.903 30.098 41.1746 29.5714 42.5004 29.5714C43.8262 29.5714 45.0977 30.098 46.0354 31.0354L48.001 34.5M35.0004 20.0004H35.0254M48.5359 48.5359V11.4648H11.4648V48.5359H48.5359Z"
                stroke="#A0A0A0"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="mt-2 font-pretendard text-lg font-bold text-gray-4">업로드하기</span>
          </button>
        )}
      </div>

      {/* Link URL */}
      <div className="flex flex-col gap-1">
        <label className="font-pretendard text-sm font-bold text-gray-2">링크 URL</label>
        <div className="relative flex h-12 items-center gap-3 rounded-md border border-[#EBEBEB] bg-white px-3">
          <Input
            value={localLinkUrl}
            onChange={handleLinkUrlChange}
            placeholder="https://"
            className="border-none bg-transparent p-0 text-xs font-normal text-gray-3 focus-visible:ring-0"
          />
          {localLinkUrl && (
            <button
              type="button"
              onClick={handleClearLinkUrl}
              className="flex h-4 w-4 items-center justify-center rounded-full bg-gray-4 shadow-sm"
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path
                  d="M2.08398 7.91732L5.00065 5.00065M5.00065 5.00065L7.91732 2.08398M5.00065 5.00065L2.08398 2.08398M5.00065 5.00065L7.91732 7.91732"
                  stroke="white"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Date Range */}
      <div className="flex flex-col gap-1">
        <label className="font-pretendard text-sm font-bold text-gray-2">광고기간</label>
        <div className="flex items-center gap-[10px]">
          <DatePicker
            value={startDate}
            onChange={onStartDateChange}
            className="flex-1"
          />
          <span className="font-pretendard text-xs font-bold text-gray-3">-</span>
          <DatePicker
            value={endDate}
            onChange={onEndDateChange}
            className="flex-1"
          />
        </div>
      </div>

      {/* Toggle */}
      <Toggle
        checked={isPublished}
        onChange={onPublishToggle}
        label={isPublished ? '게시' : '미게시'}
      />
    </div>
  );
}
