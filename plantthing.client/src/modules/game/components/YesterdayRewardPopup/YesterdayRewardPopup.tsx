import { useGameState } from '@hooks/useGameState';
import { Button, Popup } from 'pixel-retroui';
import { StatsResult, StatsType } from 'src/types';
import { StatSummary } from './StatSummary';

export const YesterdayRewardPopup = () => {
  const { gameState, saveGameState } = useGameState();

  const handleClaimRewardClick = () => {
    saveGameState({
      ...gameState,
      coins: gameState.coins + 13,
      hasClaimedYesterdayReward: true,
    });
  };

  return (
    <Popup
      isOpen={!gameState.hasClaimedYesterdayReward}
      onClose={() => {}}
      closeButtonText=""
    >
      <div className="flex flex-col justify-center gap-4">
        <div className="flex flex-col justify-center gap-2">
          <h1 className="text-2xl font-minecraft text-center font-semibold">
            Yesterday reward
          </h1>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex flex-col gap-6">
            <StatSummary
              statType={StatsType.water}
              result={StatsResult.good}
              tip="Don't water your plant too much"
            />
            <StatSummary
              statType={StatsType.light}
              result={StatsResult.great}
            />
            <StatSummary
              statType={StatsType.temperature}
              result={StatsResult.perfect}
            />
            <StatSummary statType={StatsType.soil} result={StatsResult.great} />
          </div>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <div className="flex justify-center items-center gap-1">
            <h2 className="text-xl">+13</h2>
            <img src="/assets/coin.png" width={24} />
          </div>
          <Button bg="lime" onClick={handleClaimRewardClick}>
            Claim
          </Button>
        </div>
      </div>
    </Popup>
  );
};
