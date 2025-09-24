interface PlayItem {
  title: string;
  id?: string;
}

interface ConsonantSection {
  consonant: string;
  plays: PlayItem[];
}

interface InitialLetterListProps {
  sections: ConsonantSection[];
}

export default function InitialLetterList({ sections }: InitialLetterListProps) {
  return (
    <div className="flex w-full flex-wrap items-start gap-10">
      {sections.map((section, index) => (
        <div
          key={`${section.consonant}-${index}`}
          className="flex min-w-[400px] flex-1 flex-col gap-2.5"
        >
          {/* Header */}
          <div className="flex flex-col items-start gap-2.5 border-b border-primary px-5 py-2">
            <div className="w-full font-serif text-xl font-bold leading-6 text-primary">
              {section.consonant}
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col items-start gap-2.5 px-5">
            {section.plays.map((play, playIndex) => (
              <div
                key={`${play.title}-${playIndex}`}
                className="w-full font-serif text-lg font-semibold leading-6 text-gray-2"
              >
                {play.title}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
