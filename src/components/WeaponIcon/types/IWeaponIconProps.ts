import { IWeapon } from "../../../../global/types";

export type IWeaponIconProps = {
  weapon: IWeapon;
  type: string;
  onPress?: (weapon: IWeapon, type: string) => void;
  disable?: boolean;
};