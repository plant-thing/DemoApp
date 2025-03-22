import { useGameState } from '@hooks/useGameState';
import { Button, Card } from 'pixel-retroui';
import { DailyQuest } from 'src/types';

interface DailyQuestCardProps {
  quest: DailyQuest;
}

export const DailyQuestCard = (props: DailyQuestCardProps) => {
  const { gameState, saveGameState } = useGameState();

  const isCompleted = gameState.completedDailyQuestsCode.includes(
    props.quest.code,
  );
  const isClaimed = gameState.claimedDailyQuestsCode.includes(props.quest.code);

  const coinReward = props.quest.reward.coins ?? 0;
  const gemReward = props.quest.reward.gems ?? 0;
  const xpReward = props.quest.reward.exp ?? 0;

  const handleClaim = () => {
    saveGameState({
      ...gameState,
      coins: gameState.coins + coinReward,
      gems: gameState.gems + gemReward,
      currentXp: gameState.currentXp + xpReward,
      claimedDailyQuestsCode: [
        ...gameState.claimedDailyQuestsCode,
        props.quest.code,
      ],
    });
  };

  return (
    <Card>
      <div className="flex">
        <div className="flex gap-4 justify-between">
          <div className="flex items-center">
            <img src={props.quest.imageUrl} width={96} height={64} />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              <h3 className="text-xl">{props.quest.title}</h3>
              <p>{props.quest.description}</p>
            </div>
            <div className="flex flex-grow gap-4 items-center">
              <div className="text-sm">Reward:</div>
              {props.quest.reward.gems && (
                <div className="flex gap-1 items-center">
                  <div style={{ width: 16 }}>
                    <img src={`/assets/gem.png`} />
                  </div>
                  <span>{props.quest.reward.gems}</span>
                </div>
              )}
              {props.quest.reward.coins && (
                <div className="flex gap-1 items-center">
                  <div style={{ width: 16 }}>
                    <img src={`/assets/coin.png`} />
                  </div>
                  <span>{props.quest.reward.coins}</span>
                </div>
              )}
              {props.quest.reward.exp && (
                <div className="flex items-center">
                  <span>{props.quest.reward.exp}xp</span>
                </div>
              )}
            </div>
            {!isCompleted && !isClaimed && (
              <div className="text-lg text-blue-500">Not completed</div>
            )}
            {!isClaimed && isCompleted && (
              <Button onClick={handleClaim} className="bg-green-500">
                Claim
              </Button>
            )}
            {isClaimed && <div className="text-lg text-green-500">Claimed</div>}
          </div>
        </div>
      </div>
    </Card>
  );
};
