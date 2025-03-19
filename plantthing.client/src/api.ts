import axios from "axios";
import { Sensor, SensorReadingModel } from "./types";

export const SensorsApi = {
    getSensor: (id: number) : Promise<Sensor> => axios.get(`/api/sensors/${id}`).then(response => response.data),
    addSensorReading: (id: number, data: SensorReadingModel) : Promise<number> => axios.post(`/api/sensors/${id}/reading`, data).then(response => response.data)
}