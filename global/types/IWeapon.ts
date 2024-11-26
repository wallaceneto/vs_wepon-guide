import { IEvolution } from "./IEvolution";

export type IWeapon = {
  id: string;
  sprit: string;
  name: string;
  max_level: number;
  unlock_requirements: string;
  evolution: IEvolution;
};
