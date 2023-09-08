import {IPhoto} from '@types';
import {ViewProps} from 'react-native';

export type PhotoItemProps = {
  photo: IPhoto;
  onPressLike: (item: IPhoto) => void;
  onPressDislike: (item: IPhoto) => void;
} & ViewProps;
