export interface Sensor {
  id: number;
  serial: string;
  lastReading: SensorReading;
}

export interface SensorReading {
  created: Date;
  light: number;
  phLevel: number;
  water: number;
  temperature: number;
}

export interface SensorReadingModel {
  light: number;
  phLevel: number;
  water: number;
  temperature: number;
}

export interface GameState {
  username: string;
  plantType: string;
  plantName: string;
  plantHappiness: PlantHappiness;
  coins: number;
  gems: number;
  currentXp: number;
  hasClaimedYesterdayReward: boolean;
  sensorData?: SensorReadingModel;
  lastSensorReading?: Date;
  currentPot: number;
  currentEyes: number;
  currentRoom: number;
  shop: ShopState;
}

export interface ShopState {
  pots: ShopItem[];
  eyes: ShopItem[];
  rooms: ShopItem[];
  others: ShopItem[];
}

export interface ShopItem {
  code: number;
  name: string;
  coinCost?: number;
  gemsCost?: number;
  requiredLevel: number;
  isPurchased: boolean;
}

export enum StatsType {
  water,
  light,
  soil,
  temperature,
}

export enum StatsResult {
  notQuite,
  good,
  great,
  perfect,
}

export enum PlantHappiness {
  neutral,
  good,
  happy,
}
