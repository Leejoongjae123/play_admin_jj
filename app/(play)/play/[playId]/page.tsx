import { PlayDetailSection } from '@/components/features/play/sections';
import { DummyPlays } from '@/models/play';

export default async function PlayDetailPage() {
  // TODO: API 연동
  // const play = await getPlay(playId);

  return (
    <section className="flex w-full flex-1 flex-col pb-[60px] pt-11 lg:pt-[80px]">
      <PlayDetailSection play={DummyPlays[0]} />
    </section>
  );
}
