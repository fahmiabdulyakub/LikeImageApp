import {TouchableOpacityProps} from 'react-native';

export type PropsType = {
  text: string;
  textStyle?: object;
  color?: ButtonColor;
} & TouchableOpacityProps;

export type ButtonColor = 'white' | 'red' | 'blue';
