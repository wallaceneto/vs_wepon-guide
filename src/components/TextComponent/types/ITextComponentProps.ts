import { StyleProp, TextStyle } from "react-native";

export type ITextComponentProps = {
  text: string;
  size?: number;
  bold?: boolean;
  styles?: StyleProp<TextStyle>;
};
