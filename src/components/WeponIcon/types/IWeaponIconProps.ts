import { IWeapon } from "../../../../global/types";

export type IWeaponIconProps = {
  weapon: IWeapon;
  onPress?: (weapon: IWeapon) => void;
  disable?: boolean;
};