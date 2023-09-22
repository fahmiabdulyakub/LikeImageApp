/* eslint-disable react-hooks/exhaustive-deps */
import {getPhotos} from '@services/UnsplashService';
import {IPhoto} from '@types';
import {useCallback, useEffect, useMemo, useState} from 'react';

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
    setPhotos(prevData =>
      prevData.map(item => ({
        ...item,
        likes: item.likes + 1,
      })),
    );
  };

  const handleResetAll = () => {
    setPhotos(prevData =>
      prevData.map(item => ({
        ...item,
        likes: 0,
      })),
    );
  };

  const handleDislikeAll = () => {
    setPhotos(prevData =>
      prevData.map(item => ({
        ...item,
        likes: item.likes ? item.likes - 1 : 0,
      })),
    );
  };

  const handleLike = useCallback(
    (item: IPhoto) => {
      setPhotos(prevData =>
        prevData.map(dataItem => {
          if (dataItem.id === item.id) {
            return {...dataItem, likes: dataItem.likes + 1};
          }
          return dataItem;
        }),
      );
    },
    [photos],
  );

  const handleDislike = useCallback(
    (item: IPhoto) => {
      if (item.likes) {
        setPhotos(prevData =>
          prevData.map(dataItem => {
            if (dataItem.id === item.id) {
              return {...dataItem, likes: dataItem.likes - 1};
            }
            return dataItem;
          }),
        );
      }
    },
    [photos],
  );

  const memoizedData = useMemo(() => photos, [photos]);

  return {
    memoizedData,
    isLoading,
    handleLike,
    handleDislike,
    handleDislikeAll,
    handleResetAll,
    handleLikeAll,
  };
};

export default useHome;
