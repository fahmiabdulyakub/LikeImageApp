import {TouchableOpacityProps} from 'react-native';

export type PropsType = {
  title: string;
  textStyle?: object;
  color?: ButtonColor;
} & TouchableOpacityProps;

export type ButtonColor = 'white' | 'red' | 'blue';
