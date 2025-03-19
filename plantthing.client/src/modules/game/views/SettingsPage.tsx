import { BackButton } from '@components/BackButton';
import { useGameState } from '@hooks/useGameState';
import { Button, Card } from 'pixel-retroui';

export const SettingsPage = () => {
  const { gameState, clearGameState } = useGameState();

  const handleLogout = () => {
    clearGameState();
    (window as Window).location = '/';
  };

  return (
    <div className="flex bg-[url(/assets/background2.png)] grow justify-center animate-bg">
      <BackButton to="/" />

      <div className="container mx-auto p-1 flex flex-col gap-2 pt-32 pb-8">
        <h1 className="text-3xl font-minecraft text-center font-semibold">
          Settings
        </h1>
        <Card className="p-2">
          <div className="flex flex-col gap-6">
            <h2 className="text-lg font-semibold">User preferences</h2>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <span className="font-bold">User Id:</span>
                  <span>{gameState.username}</span>
                </div>
                <div className="text-2xl text-blue-500 cursor-pointer">
                  <i className="hn hn-edit-solid"></i>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <span className="font-bold">Plant name:</span>
                  <span>{gameState.plantName}</span>
                </div>
                <div className="text-2xl text-blue-500 cursor-pointer">
                  <i className="hn hn-edit-solid"></i>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <span className="font-bold">Plant type:</span>
                  <span>{gameState.plantType}</span>
                </div>
                <div className="text-2xl text-blue-500 cursor-pointer">
                  <i className="hn hn-edit-solid"></i>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <Button
                bg="red"
                textColor="white"
                className="flex items-center gap-2"
                onClick={handleLogout}
              >
                Logout
                <i className="hn hn-logout-solid"></i>
              </Button>
            </div>
          </div>
        </Card>
        <Card className="p-2">
          <div className="flex flex-col gap-6">
            <h2 className="text-lg font-semibold">Sensor information</h2>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <span className="font-bold">Id:</span>
                <span>PT-00299182</span>
              </div>
              <div className="flex gap-2">
                <span className="font-bold">Status:</span>
                <span className="text-green-700">Connected</span>
              </div>
              <div className="flex gap-2">
                <span className="font-bold">Battery:</span>
                <span className="text-orange-500">40%</span>
              </div>
            </div>
            <div className="flex justify-end">
              <Button
                bg="red"
                textColor="white"
                className="flex items-center gap-2"
              >
                Disconnect
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
