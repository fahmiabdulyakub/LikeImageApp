import React, {memo} from 'react';
import {View, Image} from 'react-native';
import {PhotoItemProps} from './types';
import styles from './styles';
import {Button} from '@components/atoms';

const PhotoItem = (props: PhotoItemProps) => {
  const {photo, onPressLike, onPressDislike, ...baseProps} = props;
  return (
    <View style={styles.container} {...baseProps}>
      <Image source={{uri: photo.urls.regular}} style={styles.thumbnail} />
      <View style={styles.contentContainer}>
        <Button title={photo.likes + ' Like'} disabled color="white" />
        <View style={styles.likeContainer}>
          <Button title="Like" color="blue" onPress={onPressLike} />
          <Button title="Dislike" color="red" onPress={onPressDislike} />
        </View>
      </View>
    </View>
  );
};

export default memo(PhotoItem);
