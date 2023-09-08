import {Colors, Fonts} from '@themes';
import {wp} from '@utils/StyleUtils';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    backgroundColor: Colors.white,
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  thumbnail: {
    width: '100%',
    aspectRatio: 1.5,
  },
  contentContainer: {
    paddingHorizontal: 12,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    fontFamily: Fonts.PoppinsMedium,
    color: Colors.blue,
  },
  likeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp(43),
  },
});

export default styles;
