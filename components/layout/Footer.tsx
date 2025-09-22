import Image from 'next/image';

/**
 * Footer component displaying company information and contact details
 */
export default function Footer() {
  return (
    <footer
      className="flex w-full flex-col gap-8 bg-red-3 px-8 pb-11 pt-[60px] lg:flex-row lg:justify-between xl:gap-0 xl:px-[120px] xl:pb-[100px]"
      data-component-name="footer"
    >
      {/* Main Content Container */}
      <div className="flex max-w-[683px] flex-col gap-8 lg:flex-1 xl:max-w-[783px]">
        {/* Company Name */}
        <h2 className="font-serif text-[28px] font-bold text-primary">인스크립트</h2>

        {/* Company Information Container */}
        <div className="flex w-full flex-col gap-4 md:flex-row md:justify-between">
          {/* Basic Company Info Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center">
              <div className="min-w-[120px] text-primary">대표</div>
              <div className="text-primary">권주영</div>
            </div>

            <div className="flex items-center">
              <div className="w-[120px] text-primary">사업자 등록번호</div>
              <div className="text-primary">874-52-00865</div>
            </div>

            <div className="flex items-center">
              <div className="w-[120px] text-primary">주소</div>
              <div className="text-primary">서울 종로구 율곡로 225 3층</div>
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center">
              <div className="min-w-[120px] text-primary">이메일</div>
              <div className="text-primary">inscript2023@gmail.com</div>
            </div>

            <div className="flex items-center">
              <div className="min-w-[120px] text-primary">전화</div>
              <div className="text-primary">010-5862-1203</div>
            </div>

            <div className="flex items-center">
              <div className="min-w-[120px] text-primary">인스타그램</div>
              <div className="text-primary">@inscriptbooks</div>
            </div>
          </div>
        </div>
      </div>

      {/* Logo Image Container */}
      <div className="relative flex xl:justify-end">
        <Image
          src="/images/footer-logo.webp"
          alt="footer-logo"
          width={177}
          height={152}
          className="h-[152px] w-[177px] object-contain"
          priority
        />
      </div>
    </footer>
  );
}
