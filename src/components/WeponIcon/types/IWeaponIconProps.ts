import { IWeapon } from "../../../../global/types";

export type IWeaponIconProps = {
  weapon: IWeapon;
  setModalVisible: (visibility: boolean) => void;
  disable?: boolean;
};