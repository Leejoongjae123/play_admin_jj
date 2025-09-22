import {
  MainBannerCarousel,
  MainStringBannerCarousel,
  MainSearchSection,
  MainMemoSection,
} from '@/components/features/main';

export default function MainPage() {
  return (
    <section className="w-full flex-1">
      <MainBannerCarousel />
      <MainStringBannerCarousel />
      <MainSearchSection />
      <MainMemoSection />
    </section>
  );
}
