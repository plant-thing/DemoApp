import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Button, Card, Popup } from 'pixel-retroui';
import { useEffect, useState } from 'react';
import {
  MaxLuxValue,
  MaxpHValue,
  MaxTempatureValue,
  MaxWaterValue,
} from 'src/constants';
import { SensorsApi } from '../../../api';
import { ProgressBarWithInput } from '../../../components/ProgressBarWithInput';
import { SensorReadingModel } from '../../../types';

interface Props {
  sensorId: number;
}

export const SimulatorFormCard = (props: Props) => {
  const [lightValue, setLightValue] = useState(0);
  const [phLevelValue, setPhLevelValue] = useState(0);
  const [waterValue, setWaterValue] = useState(0);
  const [tempatureValue, setTempatureValue] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const queryClient = useQueryClient();

  const { isPending, isFetching, isError, data } = useQuery({
    queryKey: ['sensors-simulator', props.sensorId],
    queryFn: () => SensorsApi.getSensor(props.sensorId),
  });

  const mutation = useMutation({
    mutationFn: (data: SensorReadingModel) =>
      SensorsApi.addSensorReading(props.sensorId, data),
    onSuccess: () => {
      setPopupMessage('New values applied successfully');
      setIsPopupOpen(true);
      queryClient.invalidateQueries({ queryKey: ['sensors', props.sensorId] });
    },
    onError: (error) => {
      setPopupMessage(error.message);
      setIsPopupOpen(true);
    },
  });

  useEffect(() => {
    if (!isFetching && data != undefined) {
      setLightValue(data.lastReading.light);
      setPhLevelValue(data.lastReading.phLevel);
      setWaterValue(data.lastReading.water);
      setTempatureValue(data.lastReading.temperature);
    }
  }, [data, isFetching]);

  const onApplyClicked = () => {
    mutation.mutate({
      light: lightValue,
      phLevel: phLevelValue,
      water: waterValue,
      temperature: tempatureValue,
    });
  };

  const onResetClicked = () => {
    queryClient.invalidateQueries({ queryKey: ['sensors', props.sensorId] });
  };

  const onPopupClosed = () => {
    setIsPopupOpen(false);
  };

  if (mutation.isPending) {
    <Card className="p-4" bg="#ffe3f0">
      <h2 className="text-2xl font-minecraft text-center font-semibold">
        Saving...
      </h2>
    </Card>;
  }

  if (isPending) {
    return (
      <Card className="p-4" bg="#ffe3f0">
        <h2 className="text-2xl font-minecraft text-center font-semibold">
          Loading...
        </h2>
      </Card>
    );
  }

  if (isError || data == undefined) {
    return (
      <Card className="p-4" bg="#ffe3f0">
        <h2 className="text-2xl font-minecraft text-center">
          Oops...an error has occurred!
        </h2>
      </Card>
    );
  }

  return (
    <Card className="p-2" bg="#ffe3f0">
      <div className="flex flex-col gap-8">
        <ProgressBarWithInput
          label="Light (Lux)"
          progressBarColor="yellow"
          value={lightValue}
          min={0}
          max={MaxLuxValue}
          step={100}
          onChange={setLightValue}
        />
        <ProgressBarWithInput
          label="pH level"
          progressBarColor="green"
          min={0}
          max={MaxpHValue}
          step={0.1}
          value={phLevelValue}
          onChange={setPhLevelValue}
        />
        <ProgressBarWithInput
          label="Water"
          progressBarColor="blue"
          value={waterValue}
          min={0}
          max={MaxWaterValue}
          step={1}
          onChange={setWaterValue}
        />
        <ProgressBarWithInput
          label="Temperature (°C)"
          progressBarColor="red"
          min={0}
          max={MaxTempatureValue}
          step={0.5}
          value={tempatureValue}
          onChange={setTempatureValue}
        />
        <div className="flex flex-row gap-2 justify-center">
          <Button bg="#ffffff" onClick={onResetClicked}>
            Reset
          </Button>
          <Button bg="#fefcd0" onClick={onApplyClicked}>
            Apply
          </Button>
        </div>
      </div>
      <Popup isOpen={isPopupOpen} onClose={onPopupClosed}>
        <div className="p-4">{popupMessage}</div>
      </Popup>
    </Card>
  );
};
