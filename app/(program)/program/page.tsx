import { ProgramPageSearchParams } from './types';

interface ProgramPageProps {
  searchParams: Promise<ProgramPageSearchParams>;
}

export default async function ProgramPage({ searchParams }: ProgramPageProps) {
  const { view } = await searchParams;

  return (
    <section>
      <h1>프로그램페이지</h1>
      <p>view: {view === 'calendar' ? '달력' : '기본'}</p>
    </section>
  );
}
