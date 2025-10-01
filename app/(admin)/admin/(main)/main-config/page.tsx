'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import CustomRadio from '@/components/ui/CustomRadio';
import BannerCard from './components/BannerCard';

interface BannerData {
  id: string;
  title: string;
  imageUrl?: string;
  linkUrl: string;
  startDate: string;
  endDate: string;
  isPublished: boolean;
}

export default function AdminMainConfigPage() {
  const [searchKeyword, setSearchKeyword] = useState(
    '이곳에 검색 키워드를 입력하세요. 아래와 같이 사용자가 보는 검색창에 반영됩니다.',
  );
  const [memoSortType, setMemoSortType] = useState('likes');

  // 배너 관리
  const [banners, setBanners] = useState<BannerData[]>([
    {
      id: '1',
      title: '배너 1',
      imageUrl:
        'https://api.builder.io/api/v1/image/assets/TEMP/92b8c9265ac14487067f1042c73ea9f8c698e77c?width=536',
      linkUrl: 'https://www.instagram.com/inscriptbooks/',
      startDate: '2025-08-08',
      endDate: '2025-09-08',
      isPublished: false,
    },
    {
      id: '2',
      title: '배너 2',
      imageUrl:
        'https://api.builder.io/api/v1/image/assets/TEMP/92b8c9265ac14487067f1042c73ea9f8c698e77c?width=536',
      linkUrl: 'https://www.instagram.com/inscriptbooks/',
      startDate: '2025-08-08',
      endDate: '2025-10-08',
      isPublished: true,
    },
    {
      id: '3',
      title: '배너 3',
      linkUrl: 'https://',
      startDate: '',
      endDate: '',
      isPublished: false,
    },
  ]);

  // 광고 배너
  const [adBanners, setAdBanners] = useState<BannerData[]>([
    {
      id: 'ad1',
      title: '배너 1',
      imageUrl:
        'https://api.builder.io/api/v1/image/assets/TEMP/f6ae281be3c12b7d4c19afd1b858fedc107016e0?width=884',
      linkUrl: 'https://www.instagram.com/inscriptbooks/',
      startDate: '2025-08-08',
      endDate: '2025-09-08',
      isPublished: false,
    },
    {
      id: 'ad2',
      title: '배너 2',
      imageUrl:
        'https://api.builder.io/api/v1/image/assets/TEMP/f6ae281be3c12b7d4c19afd1b858fedc107016e0?width=884',
      linkUrl: 'https://www.instagram.com/inscriptbooks/',
      startDate: '2025-08-08',
      endDate: '2025-10-08',
      isPublished: true,
    },
    {
      id: 'ad3',
      title: '배너 3',
      imageUrl:
        'https://api.builder.io/api/v1/image/assets/TEMP/f6ae281be3c12b7d4c19afd1b858fedc107016e0?width=884',
      linkUrl: 'https://www.instagram.com/inscriptbooks/',
      startDate: '2025-08-08',
      endDate: '2025-09-08',
      isPublished: false,
    },
    {
      id: 'ad4',
      title: '배너 4',
      linkUrl: 'https://www.instagram.com/inscriptbooks/',
      startDate: '2025-08-08',
      endDate: '2025-10-08',
      isPublished: true,
    },
  ]);

  // 푸터 관리
  const [footerData, setFooterData] = useState({
    companyName: '인스크립트',
    businessNumber: '874-52-00865',
    address: '서울 용산구 ○○로 225 3층',
    email: 'inscript2023@gmail.com',
    phone: '02-5862-1203',
  });

  const handleAddBanner = () => {
    const newBanner: BannerData = {
      id: Date.now().toString(),
      title: `배너 ${banners.length + 1}`,
      linkUrl: 'https://',
      startDate: '',
      endDate: '',
      isPublished: false,
    };
    setBanners([...banners, newBanner]);
  };

  const handleAddAdBanner = () => {
    const newBanner: BannerData = {
      id: Date.now().toString(),
      title: `배너 ${adBanners.length + 1}`,
      linkUrl: 'https://www.instagram.com/inscriptbooks/',
      startDate: '2025-08-08',
      endDate: '2025-10-08',
      isPublished: true,
    };
    setAdBanners([...adBanners, newBanner]);
  };

  const handleDeleteBanner = (id: string) => {
    setBanners(banners.filter((banner) => banner.id !== id));
  };

  const handleDeleteAdBanner = (id: string) => {
    setAdBanners(adBanners.filter((banner) => banner.id !== id));
  };

  const updateBanner = (id: string, updates: Partial<BannerData>) => {
    setBanners(banners.map((banner) => (banner.id === id ? { ...banner, ...updates } : banner)));
  };

  const updateAdBanner = (id: string, updates: Partial<BannerData>) => {
    setAdBanners(
      adBanners.map((banner) => (banner.id === id ? { ...banner, ...updates } : banner)),
    );
  };

  const SectionCard = ({ children }: { children: React.ReactNode }) => (
    <div className="flex flex-col items-center justify-center gap-10 self-stretch rounded-md bg-white p-11">
      {children}
    </div>
  );

  const SectionActions = () => (
    <div className="flex items-center justify-between self-stretch">
      <Button variant="outline" size="sm" className="gap-1.5 bg-white w-[94px] h-[36px] hover:bg-white/90 rounded-[4px]">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="7.66732" cy="7.66732" r="6.33333" stroke="#555555" strokeWidth="1.6" />
          <path
            d="M12.334 12.334L14.6673 14.6673"
            stroke="#555555"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
        미리보기
      </Button>
      <Button size="sm" className="bg-primary w-12 h-9 ">
        저장
      </Button>
    </div>
  );

  return (
    <div className="flex w-full flex-col items-start gap-8 p-8">
      <h1 className="font-pretendard text-2xl font-bold leading-8 text-gray-1">메인 구성 관리</h1>

      {/* 배너 관리 */}
      <SectionCard>
        <div className="flex flex-col items-start gap-8 self-stretch">
          <div className="flex items-center justify-between self-stretch">
            <h2 className="font-pretendard text-xl font-bold text-gray-1">배너 관리</h2>
          </div>

          <div className="flex items-center gap-4">
            <Button
              onClick={handleAddBanner}
              className="flex h-[44px] w-[128px] items-center gap-2 rounded bg-red-2 hover:bg-red-2/90"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M11.9113 5.11523V18.6895M5.09375 12.0522H18.8485"
                  stroke="#911A00"
                  strokeWidth="1.6"
                />
              </svg>
              <span className="font-pretendard text-base font-normal text-primary">배너 추가</span>
            </Button>
            <span className="font-pretendard text-sm font-normal text-primary">
              15MB 이하의 파일만 첨부 가능합니다.
            </span>
          </div>

          <div className="grid grid-cols-3 gap-4 self-stretch">
            {banners.map((banner) => (
              <BannerCard
                key={banner.id}
                title={banner.title}
                imageUrl={banner.imageUrl}
                linkUrl={banner.linkUrl}
                startDate={banner.startDate}
                endDate={banner.endDate}
                isPublished={banner.isPublished}
                onDelete={() => handleDeleteBanner(banner.id)}
                onLinkUrlChange={(url) => updateBanner(banner.id, { linkUrl: url })}
                onStartDateChange={(date) => updateBanner(banner.id, { startDate: date })}
                onEndDateChange={(date) => updateBanner(banner.id, { endDate: date })}
                onPublishToggle={(published) => updateBanner(banner.id, { isPublished: published })}
              />
            ))}
          </div>
        </div>
        <SectionActions />
      </SectionCard>

      {/* 검색 키워드 관리 */}
      <SectionCard>
        <div className="gap-15 flex flex-col items-start self-stretch ">
          <div className="flex flex-col items-start gap-4 self-stretch">
            <div className="flex flex-col items-start gap-2 self-stretch">
              <h2 className="font-pretendard text-xl font-bold text-gray-1">검색 키워드 관리</h2>
              <p className="font-pretendard text-base font-normal text-gray-2">
                메인화면에서 검색창에 보이는 검색 키워드를 설정할 수 있습니다.
              </p>
            </div>

            <div className="flex flex-col items-start gap-4 self-stretch">
              <div className="flex items-start self-stretch">
                <Input
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  className="flex-1 border border-[#EBEBEB] bg-white px-3 py-3 text-lg"
                />
              </div>

              <div className="flex items-center gap-2.5 self-stretch border-b-[1.4px] border-[#D02D01] bg-[#F8F1EA] px-6 py-5">
                <div className="flex flex-1 items-center justify-between">
                  <span className="font-pretendard text-xl font-bold text-[#B28B7A]">
                    #로맨스 #고전주의 #신화 #비극
                  </span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="11.5" cy="11.5" r="9.5" stroke="#D65856" strokeWidth="2" />
                    <path
                      d="M18.5 18.5L22 22"
                      stroke="#D65856"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end gap-4 self-stretch mt-[60px]">
            <div className="flex items-center justify-between self-stretch">
              <h3 className="font-pretendard text-xl font-bold text-gray-1">지금 뜨는 메모</h3>
            </div>

            <div className="flex items-center self-stretch">
              <div className="flex h-14 w-40 items-center gap-1">
                <span className="font-pretendard text-xl font-bold text-gray-3">노출 방식</span>
              </div>
              <div className="flex items-center gap-3">
                <CustomRadio
                  value="likes"
                  checked={memoSortType === 'likes'}
                  onChange={setMemoSortType}
                  label="좋아요순"
                />
                <CustomRadio
                  value="comments"
                  checked={memoSortType === 'comments'}
                  onChange={setMemoSortType}
                  label="댓글순"
                />
              </div>
            </div>
          </div>
        </div>
        <SectionActions />
      </SectionCard>

      {/* 광고 배너 */}
      <SectionCard>
        <div className="flex flex-col items-start gap-4 self-stretch">
          <div className="flex items-center justify-between self-stretch">
            <h2 className="font-pretendard text-xl font-bold text-gray-1">광고 배너</h2>
          </div>

          <div className="flex items-center gap-4">
            <Button
              onClick={handleAddAdBanner}
              className="flex h-[44px] w-[128px] items-center gap-2 rounded bg-red-2 hover:bg-red-2/90"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M11.9113 5.11523V18.6895M5.09375 12.0522H18.8485"
                  stroke="#911A00"
                  strokeWidth="1.6"
                />
              </svg>
              <span className="font-pretendard text-base font-normal text-primary">배너 추가</span>
            </Button>
            <span className="font-pretendard text-sm font-normal text-primary">
              15MB 이하의 파일만 첨부 가능합니다.
            </span>
          </div>

          <div className="flex flex-col items-start gap-4 self-stretch">
            <div className="grid w-full grid-cols-2 gap-4">
              {adBanners.map((banner) => (
                <BannerCard
                  key={banner.id}
                  title={banner.title}
                  imageUrl={banner.imageUrl}
                  linkUrl={banner.linkUrl}
                  startDate={banner.startDate}
                  endDate={banner.endDate}
                  isPublished={banner.isPublished}
                  onDelete={() => handleDeleteAdBanner(banner.id)}
                  onLinkUrlChange={(url) => updateAdBanner(banner.id, { linkUrl: url })}
                  onStartDateChange={(date) => updateAdBanner(banner.id, { startDate: date })}
                  onEndDateChange={(date) => updateAdBanner(banner.id, { endDate: date })}
                  onPublishToggle={(published) =>
                    updateAdBanner(banner.id, { isPublished: published })
                  }
                  className="flex-1"
                />
              ))}
            </div>
          </div>
        </div>
        <SectionActions />
      </SectionCard>

      {/* 푸터 관리 */}
      <SectionCard>
        <div className="flex flex-col items-start gap-4 self-stretch">
          <div className="flex items-center justify-between self-stretch">
            <h2 className="font-pretendard text-xl font-bold text-gray-1">푸터 관리</h2>
          </div>

          <div className="flex flex-col items-start gap-4 self-stretch">
            <div className="flex items-start self-stretch">
              <div className="flex h-14 w-40 items-start gap-1 py-4">
                <span className="font-pretendard text-xl font-bold text-gray-3">회사명</span>
              </div>
              <div className="flex flex-1 items-start self-stretch rounded border border-[#EBE1DF] bg-[#F4EFEA] px-5 py-4">
                <span className="flex-1 font-pretendard text-base font-normal text-gray-2">
                  {footerData.companyName}
                </span>
              </div>
            </div>

            <div className="flex items-start self-stretch">
              <div className="flex h-14 w-40 items-start gap-1 py-4">
                <span className="font-pretendard text-xl font-bold text-gray-3">
                  사업자등록번호
                </span>
              </div>
              <div className="flex flex-1 items-start self-stretch rounded border border-[#EBE1DF] bg-[#F4EFEA] px-5 py-4">
                <span className="flex-1 font-pretendard text-base font-normal text-gray-2">
                  {footerData.businessNumber}
                </span>
              </div>
            </div>

            <div className="flex items-start self-stretch">
              <div className="flex h-14 w-40 items-start gap-1 py-4">
                <span className="font-pretendard text-xl font-bold text-gray-3">주소</span>
              </div>
              <div className="flex flex-1 items-start self-stretch rounded border border-[#EBE1DF] bg-[#F4EFEA] px-5 py-4">
                <span className="flex-1 font-pretendard text-base font-normal text-gray-2">
                  {footerData.address}
                </span>
              </div>
            </div>

            <div className="flex items-start self-stretch">
              <div className="flex h-14 w-40 items-start gap-1 py-4">
                <span className="font-pretendard text-xl font-bold text-gray-3">이메일</span>
              </div>
              <div className="flex flex-1 items-start self-stretch rounded border border-[#EBE1DF] bg-[#F4EFEA] px-5 py-4">
                <span className="flex-1 font-pretendard text-base font-normal text-gray-2">
                  {footerData.email}
                </span>
              </div>
            </div>

            <div className="flex items-start self-stretch">
              <div className="flex h-14 w-40 items-start gap-1 py-4">
                <span className="font-pretendard text-xl font-bold text-gray-3">연락처</span>
              </div>
              <div className="flex flex-1 items-start self-stretch rounded border border-[#EBE1DF] bg-[#F4EFEA] px-5 py-4">
                <span className="flex-1 font-pretendard text-base font-normal text-gray-2">
                  {footerData.phone}
                </span>
              </div>
            </div>
          </div>
        </div>
        <SectionActions />
      </SectionCard>
    </div>
  );
}
