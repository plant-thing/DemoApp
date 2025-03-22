import { useGameState } from '@hooks/useGameState';
import { Button, Card, Popup } from 'pixel-retroui';
import { useMemo, useState } from 'react';
import { ShopItem, ShopItemType } from 'src/types';

interface ShopItemCardProps {
  item: ShopItem;
}

export const ShopItemCard = (props: ShopItemCardProps) => {
  const { currentLevel, gameState, saveGameState } = useGameState();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const isFree = !props.item.coinCost && !props.item.gemsCost;
  const coinCost = props.item.coinCost ?? 0;
  const gemCost = props.item.gemsCost ?? 0;
  const hasRequiredLevel = currentLevel >= props.item.requiredLevel;
  const hasRequiredCoins = gameState.coins >= coinCost;
  const hasRequiredGems = gameState.gems >= gemCost;
  const hasRequiredCurrency = hasRequiredCoins && hasRequiredGems;
  const currencyImage = props.item.coinCost ? 'coin.png' : 'gem.png';
  const price = props.item.coinCost ? coinCost : gemCost;

  const isPurchased = gameState.purchasedItemsCode.includes(props.item.code);

  const isEquipe = useMemo(() => {
    switch (props.item.type) {
      case ShopItemType.eyes:
        return gameState.currentEyes === props.item.code;
      case ShopItemType.pots:
        return gameState.currentPot === props.item.code;
      case ShopItemType.rooms:
        return gameState.currentRoom === props.item.code;
      default:
        return false;
    }
  }, [
    gameState.currentEyes,
    gameState.currentPot,
    gameState.currentRoom,
    props.item.code,
    props.item.type,
  ]);

  const handlePurchase = () => {
    saveGameState({
      ...gameState,
      coins: gameState.coins - coinCost,
      gems: gameState.gems - gemCost,
      purchasedItemsCode: [...gameState.purchasedItemsCode, props.item.code],
    });
    setIsPopupOpen(true);
  };

  const handleEquip = () => {
    switch (props.item.type) {
      case ShopItemType.eyes:
        saveGameState({
          ...gameState,
          currentEyes: props.item.code,
        });
        break;
      case ShopItemType.pots:
        saveGameState({
          ...gameState,
          currentPot: props.item.code,
        });
        break;
      case ShopItemType.rooms:
        saveGameState({
          ...gameState,
          currentRoom: props.item.code,
        });
        break;
    }
  };

  const onPopupClosed = () => {
    setIsPopupOpen(false);
  };

  const handleEquipNow = () => {
    handleEquip();
    setIsPopupOpen(false);
  };

  return (
    <Card>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <img src={props.item.shopImageUrl} width={64} />
          <div className="flex flex-col">
            <h3>{props.item.name}</h3>

            {isFree ? (
              <span className="text-green-500">
                <i>Free</i>
              </span>
            ) : (
              <div className="flex gap-2 items-center">
                <div style={{ width: 16 }}>
                  <img src={`/assets/${currencyImage}`} />
                </div>
                <span>{price}</span>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center">
          {isEquipe && (
            <div className="flex items-center px-2 py-1 mr-2 border-4 border-blue-500 text-blue-500">
              Equipped
            </div>
          )}
          {!isEquipe && isPurchased && (
            <Button onClick={handleEquip} className="bg-green-500">
              Equipe
            </Button>
          )}
          {!isEquipe && !hasRequiredLevel && (
            <div className="flex items-center px-2 mb-1 mr-2 text-red-500">
              <strong>Require lvl {props.item.requiredLevel}</strong>
            </div>
          )}
          {!isEquipe &&
            !isPurchased &&
            hasRequiredLevel &&
            !hasRequiredCurrency && (
              <Button disabled className="bg-gray-500">
                Purchase
              </Button>
            )}
          {!isEquipe &&
            !isPurchased &&
            hasRequiredLevel &&
            hasRequiredCurrency && (
              <Button
                onClick={handlePurchase}
                className="bg-red-500 text-white"
              >
                Purchase
              </Button>
            )}
        </div>
      </div>
      <Popup isOpen={isPopupOpen} onClose={onPopupClosed}>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl text-center">{props.item.name}</h1>
          <h2 className="text-xl text-center text-green-500">Purchased</h2>
          <img className="m-4" src={props.item.shopImageUrl} width={128} />
          <div className="flex">
            <Button onClick={handleEquipNow} className="bg-green-500">
              Equip Now
            </Button>
            <Button onClick={onPopupClosed}>Later</Button>
          </div>
        </div>
      </Popup>
    </Card>
  );
};
