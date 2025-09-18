import { MainBannerCarousel, MainStringBannerCarousel } from '@/components/features/Banner';

export default function MainPage() {
  return (
    <section className="w-full flex-1">
      <MainBannerCarousel />
      <MainStringBannerCarousel />
    </section>
  );
}
