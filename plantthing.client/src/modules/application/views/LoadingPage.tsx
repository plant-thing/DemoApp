import { Card } from 'pixel-retroui';

export const LoadingPage = () => {
  return (
    <div className="flex bg-[url(/assets/background3.png)] h-screen animate-bg">
      <div className="flex flex-col container mx-auto p-2 items-center justify-between">
        <div className="flex flex-col items-center justify-center gap-6 grow">
          <img src="/assets/title.png" />
          <div className="flex flex-col gap-4">
            <img src="/assets/plant.png" width={100} />
            <h1 className="text-xl font-minecraft text-center font-semibold text-white">
              Loading...
            </h1>
          </div>
        </div>
        <div className="w-full">
          <Card className="p-4">
            <h2 className="text-xl font-semibold">Tip</h2>
            <p>Water your plant every day</p>
          </Card>
        </div>
      </div>
    </div>
  );
};
