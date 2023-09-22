import {FlatList, View} from 'react-native';
import React, {useCallback} from 'react';
import useHome from './hooks/useHome';
import styles from './styles';
import {Button, Loading} from '@components/atoms';
import {PhotoItem} from '@components/molecules';
import {IPhotoItem} from './types';
import {IPhoto} from '@types';

const Home = () => {
  const {
    memoizedData,
    isLoading,
    handleLike,
    handleDislike,
    handleDislikeAll,
    handleResetAll,
    handleLikeAll,
  } = useHome();

  const renderItem = ({item}: IPhotoItem) => {
    return (
      <PhotoItem
        photo={item}
        onPressLike={handleLike}
        onPressDislike={handleDislike}
      />
    );
  };

  const keyExtractor = useCallback((item: IPhoto) => item?.id.toString(), []);

  return (
    <View style={styles.container}>
      <View style={styles.topButtonContainer}>
        <Button title="Like All" color="blue" onPress={handleLikeAll} />
        <Button title="Reset All" color="white" onPress={handleResetAll} />
        <Button title="Dislike All" color="red" onPress={handleDislikeAll} />
      </View>
      <FlatList
        data={memoizedData}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
        ListFooterComponent={<Loading isLoading={isLoading} />}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default Home;
