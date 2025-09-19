import { MainBannerCarousel, MainStringBannerCarousel } from '@/components/features/Banner';
import { MainSearchSection } from '@/components/features/Search';

export default function MainPage() {
  return (
    <section className="w-full flex-1">
      <MainBannerCarousel />
      <MainStringBannerCarousel />
      <MainSearchSection />
    </section>
  );
}
