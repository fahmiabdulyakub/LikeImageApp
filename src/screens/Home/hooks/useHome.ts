import {getPhotos} from '@services/UnsplashService';
import {IPhoto} from '@types';
import {useEffect, useState} from 'react';

const useHome = () => {
  const [photos, setPhotos] = useState<IPhoto[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = () => {
    getPhotos()
      .then(response => {
        setPhotos(response);
      })
      .catch(error => {
        console.error('Error fetching photos:', error);
      })
      .finally(() => setIsLoading(false));
  };

  const handleLikeAll = () => {
    const updatedData = photos.map(item => ({
      ...item,
      likes: item.likes + 1,
    }));
    setPhotos(updatedData);
  };

  const handleResetAll = () => {
    const updatedData = photos.map(item => ({
      ...item,
      likes: 0,
    }));
    setPhotos(updatedData);
  };

  const handleDislikeAll = () => {
    const updatedData = photos.map(item => ({
      ...item,
      likes: item.likes ? item.likes - 1 : 0,
    }));
    setPhotos(updatedData);
  };

  const handleLike = (item: IPhoto) => {
    const updatedData = photos.map(dataItem => {
      if (dataItem.id === item.id) {
        return {...dataItem, likes: dataItem.likes + 1};
      }
      return dataItem;
    });
    setPhotos(updatedData);
  };

  const handleDislike = (item: IPhoto) => {
    if (item.likes > 0) {
      const updatedData = photos.map(dataItem => {
        if (dataItem.id === item.id) {
          return {...dataItem, likes: dataItem.likes - 1};
        }
        return dataItem;
      });
      setPhotos(updatedData);
    }
  };

  return {
    photos,
    isLoading,
    handleLike,
    handleDislike,
    handleDislikeAll,
    handleResetAll,
    handleLikeAll,
  };
};

export default useHome;
