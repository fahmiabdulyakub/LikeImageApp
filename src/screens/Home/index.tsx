import {FlatList, View} from 'react-native';
import React from 'react';
import useHome from './hooks/useHome';
import styles from './styles';
import {Button, Loading} from '@components/atoms';
import {PhotoItem} from '@components/molecules';
import {IPhotoItem} from './types';

const Home = () => {
  const {
    photos,
    isLoading,
    handleLike,
    handleDislike,
    handleDislikeAll,
    handleResetAll,
    handleLikeAll,
  } = useHome();

  const renderItem = ({item, index}: IPhotoItem) => {
    return (
      <PhotoItem
        key={index}
        photo={item}
        onPressLike={handleLike}
        onPressDislike={handleDislike}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.topButtonContainer}>
        <Button title="Like All" color="blue" onPress={handleLikeAll} />
        <Button title="Reset All" color="white" onPress={handleResetAll} />
        <Button title="Dislike All" color="red" onPress={handleDislikeAll} />
      </View>
      <FlatList
        data={photos}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
        ListFooterComponent={<Loading isLoading={isLoading} />}
      />
    </View>
  );
};

export default Home;
