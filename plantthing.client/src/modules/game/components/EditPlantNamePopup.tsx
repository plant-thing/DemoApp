import { useGameState } from '@hooks/useGameState';
import { Button, Input, Popup } from 'pixel-retroui';
import { useState } from 'react';

interface EditPlantNamePopupProps {
  isOpen: boolean;
  handleOnClose: () => void;
}

export const EditPlantNamePopup = (props: EditPlantNamePopupProps) => {
  const { gameState, saveGameState } = useGameState();

  const [plantName, setPlantName] = useState(gameState.plantName);

  const isValid = plantName.length > 0;

  const handleOnSave = () => {
    if (isValid) {
      saveGameState({
        ...gameState,
        plantName: plantName,
      });
      props.handleOnClose();
    }
  };

  const handleOnClose = () => {
    props.handleOnClose();
    setPlantName(gameState.plantName);
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
          <h1 className="font-bold">Change plant name</h1>
          <Input
            placeholder="User Id"
            value={plantName}
            onChange={(e) => setPlantName(e.target.value)}
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
