import { TopBar } from '@components/TopBar';

interface GameLayoutProps {
  children: React.ReactNode;
}

export const GameLayout = (props: GameLayoutProps) => {
  return (
    <>
      <TopBar />
      {props.children}
    </>
  );
};
