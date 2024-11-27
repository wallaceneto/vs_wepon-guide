import { IWeapon } from "../../../../global/types";

export type IWeaponSectionProps = {
  handleOpenModal: (weapon: IWeapon, type: string) => void;
  title: string;
  data: ArrayLike<any>;
  type: 'base' | 'evolution' | 'castlevania';
};
