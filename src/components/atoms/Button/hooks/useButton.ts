import {Colors} from '@themes';
import {ButtonColor} from '../types';

const useButton = (color?: ButtonColor) => {
  const getColor = () => {
    switch (color) {
      case 'blue': {
        return Colors.blue;
      }
      case 'red': {
        return Colors.red;
      }
      default:
        return Colors.white;
    }
  };

  return {getColor};
};

export default useButton;
