import {IPhoto} from '@types';
import {ViewProps} from 'react-native';

export type PhotoItemProps = {
  photo: IPhoto;
  onPressLike: () => void;
  onPressDislike: () => void;
} & ViewProps;
