import { useGameState } from '@hooks/useGameState';
import { Button, Input, Popup } from 'pixel-retroui';
import { useState } from 'react';

interface EditUserIdPopupProps {
  isOpen: boolean;
  handleOnClose: () => void;
}

export const EditUserIdPopup = (props: EditUserIdPopupProps) => {
  const { gameState, saveGameState } = useGameState();

  const [userId, setUserId] = useState(gameState.username);

  const isValid = userId.length > 0;

  const handleOnSave = () => {
    if (isValid) {
      saveGameState({
        ...gameState,
        username: userId,
      });
      props.handleOnClose();
    }
  };

  const handleOnClose = () => {
    props.handleOnClose();
    setUserId(gameState.username);
  };

  return (
    <Popup
      isOpen={props.isOpen}
      onClose={() => {}}
      closeButtonText=""
      className="p-4"
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <h1 className="font-bold">Change your User Id</h1>
          <Input
            placeholder="User Id"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>

        <div className="flex">
          <Button onClick={handleOnClose} className="w-full">
            Cancel
          </Button>
          <Button
            disabled={!isValid}
            className={`w-full ${isValid ? 'bg-green-500' : 'bg-gray-400'}`}
            onClick={handleOnSave}
          >
            Save
          </Button>
        </div>
      </div>
    </Popup>
  );
};
