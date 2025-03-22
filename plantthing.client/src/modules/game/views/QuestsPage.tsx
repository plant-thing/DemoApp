import { BackButton } from '@components/BackButton';
import { DailyQuests } from 'src/constants';
import { DailyQuestCard } from '../components/DailyQuestCard';

export const QuestsPage = () => {
  return (
    <div className="flex bg-[url(/assets/background3.png)] grow justify-center animate-bg">
      <BackButton to="/" />

      <div className="container mx-auto p-1 flex flex-col gap-2 pt-32 pb-8">
        <h1 className="text-3xl font-minecraft text-center font-semibold">
          Daily quests
        </h1>
        <div className="flex flex-col gap-2 py-2">
          {DailyQuests.map((quest) => {
            return <DailyQuestCard key={quest.code} quest={quest} />;
          })}
        </div>
      </div>
    </div>
  );
};
