import { useNavigate } from '@tanstack/react-router';
import { Button } from 'pixel-retroui';

export const BottomNavigation = () => {
  const navigate = useNavigate();

  const handleShopOnClick = () => {
    navigate({ to: '/shop' });
  };

  const handleQuestOnClick = () => {
    navigate({ to: '/quests' });
  };

  const handleSettingsOnClick = () => {
    navigate({ to: '/settings' });
  };

  return (
    <div className="flex absolute bottom-0 p-2 left-0 w-full justify-center">
      <div className="flex gap-2 justify-around">
        <Button
          onClick={handleShopOnClick}
          className="flex flex-col text-sm w-20 bg-green-500"
        >
          <i className="text-3xl hn hn-shopping-cart-solid"></i>Shop
        </Button>
        <Button
          onClick={handleQuestOnClick}
          className="flex flex-col text-sm w-20 bg-blue-500"
        >
          <i className="text-3xl hn hn-crown-solid"></i>Quests
        </Button>
        <Button
          onClick={handleSettingsOnClick}
          className="flex flex-col text-sm w-20 bg-orange-500"
        >
          <i className="text-3xl hn hn-cog-solid"></i>Settings
        </Button>
      </div>
    </div>
  );
};
