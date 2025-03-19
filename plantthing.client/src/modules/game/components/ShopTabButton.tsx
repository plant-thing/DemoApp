import { useNavigate, useSearch } from '@tanstack/react-router';
import { Button } from 'pixel-retroui';

interface ShopTabButtonProps {
  title: string;
  search: string;
}

export const ShopTabButton = (props: ShopTabButtonProps) => {
  const { type } = useSearch({ from: '/_game/shop' });
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate({ to: '/shop', search: { type: props.search } });
  };

  const isActive = type === props.search;
  const className = isActive ? 'bg-blue-500 text-white' : '';

  return (
    <Button className={className} onClick={handleOnClick}>
      {props.title}
    </Button>
  );
};
