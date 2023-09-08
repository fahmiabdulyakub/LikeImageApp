import {PhotoItemProps} from '../types';

const usePhotoItem = (props: PhotoItemProps) => {
  const {photo, onPressLike, onPressDislike} = props;

  const handleLike = () => {
    onPressLike(photo);
  };

  const handleDislike = () => {
    onPressDislike(photo);
  };

  return {
    handleLike,
    handleDislike,
  };
};

export default usePhotoItem;
