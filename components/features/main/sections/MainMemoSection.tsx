import { MainMemoCarousel } from '../components';

export default function MainMemoSection() {
  return (
    <section className="flex w-full flex-col justify-center bg-[#F8F1EA]">
      <div className="flex h-[327px] w-full flex-col justify-end gap-3 bg-primary px-[8vw] pb-[120px] pt-20 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex flex-col gap-[10px]">
          <h2 className="font-serif text-2xl font-bold text-white">지금 뜨는 메모</h2>
          <p className="text-white">다른 유저가 남기고 간 메모를 발견해보세요</p>
        </div>
        <span className="font-serif text-[44px] font-bold text-orange-1">Memo</span>
      </div>

      <div className="relative flex h-[309px] w-full pb-9 lg:h-[329px]">
        <MainMemoCarousel />
      </div>
    </section>
  );
}
