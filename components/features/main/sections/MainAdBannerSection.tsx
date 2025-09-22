import Image from 'next/image';

const banners = [
  {
    id: 1,
    src: '/images/main-ad-banner-1.webp',
  },
  {
    id: 2,
    src: '/images/main-ad-banner-1.webp',
  },
  {
    id: 3,
    src: '/images/main-ad-banner-1.webp',
  },
];

export default function MainAdBannerSection() {
  return (
    <section className="relative flex w-full flex-col items-end bg-[#F8F1EA] xl:pb-[177px]">
      <div className="relative flex w-full flex-col gap-3 bg-gradient-to-b from-[#FAF6F1] to-[#FFFFFF] px-5 pb-[120px] pt-20 lg:px-[120px] xl:flex-row xl:items-center">
        <div className="flex w-full flex-col gap-[10px]">
          <h2 className="font-serif text-2xl font-bold text-primary xl:text-[32px]">
            지금 신청할 수 있는 프로그램
          </h2>
          <p className="w-full font-pretendard font-normal text-gray-1 xl:text-[20px]">
            인스크립트 프로그램에 참여하세요
          </p>
        </div>
        <div className="font-serif text-[44px] font-bold leading-[130%] text-[#F4E4D6] xl:text-[80px]">
          Programme
        </div>
      </div>

      <div className="relative -top-[100px] flex w-full flex-col gap-6 px-5 lg:-top-[72px] lg:gap-20 lg:px-[120px]">
        {banners.map((banner) => (
          <div key={banner.id} className="relative aspect-video min-h-[179px] w-full">
            <Image src={banner.src} alt={`Main Ad Banner ${banner.id}`} fill />
          </div>
        ))}
      </div>
    </section>
  );
}
