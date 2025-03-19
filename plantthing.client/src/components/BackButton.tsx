import { useNavigate } from '@tanstack/react-router';
import { Button } from 'pixel-retroui';

interface BackButtonProps {
  to: string;
}

export const BackButton = (props: BackButtonProps) => {
  const navigate = useNavigate();

  const handleOnBackClicked = () => {
    navigate({ to: props.to });
  };

  return (
    <div className="absolute top-12 right-4">
      <Button onClick={handleOnBackClicked} className="flex gap-1 items-center">
        <i className="hn hn-arrow-left-solid" />
        Back
      </Button>
    </div>
  );
};
