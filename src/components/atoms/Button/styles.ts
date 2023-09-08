import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '@themes';
import {hp, wp} from '@utils/StyleUtils';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    paddingHorizontal: hp(3),
    width: wp(20),
  },
  title: {
    fontSize: hp(2),
    color: Colors.white,
    fontFamily: Fonts.PoppinsMedium,
    top: 1,
  },
});
