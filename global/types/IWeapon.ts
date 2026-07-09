import { IEvolution } from "./IEvolution";

export type IWeapon = {
  id: string;
  sprite: string;
  name: string;
  max_level: string;
  unlock_requirements: string;
  evolution: IEvolution;
};
