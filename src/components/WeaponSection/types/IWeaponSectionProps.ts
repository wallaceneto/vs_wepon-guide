import { IWeapon } from "../../../../global/types";

export type IWeaponSectionProps = {
  handleOpenModal: (weapon: IWeapon) => void;
  title: string;
  data: ArrayLike<any>;
};
