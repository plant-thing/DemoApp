import { Button, Popup } from 'pixel-retroui';

interface NotAvailableInDemoPopupProps {
  isOpen: boolean;
  handleOnClose: () => void;
}

export const NotAvailableInDemoPopup = (
  props: NotAvailableInDemoPopupProps,
) => {
  return (
    <Popup
      isOpen={props.isOpen}
      onClose={() => {}}
      closeButtonText=""
      className="p-4"
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-xl text-center text-red-500">
            Not available in Demo
          </h1>
          <span className="text-center">
            Sorry, but this feature is not available in this version of the game
          </span>
        </div>

        <div className="flex">
          <Button onClick={props.handleOnClose} className="w-full">
            Close
          </Button>
        </div>
      </div>
    </Popup>
  );
};
