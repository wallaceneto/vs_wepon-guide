import { IWeapon } from "../../../../global/types";

export type IItemModalProps = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  weapon: IWeapon;
};
