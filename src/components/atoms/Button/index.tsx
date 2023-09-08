import {Text, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import styles from './styles';
import {PropsType} from './types';
import useButton from './hooks/useButton';
import {Colors} from '@themes';

const Button = (props: PropsType) => {
  const {title, style, textStyle, color, ...baseProps} = props;
  const {getColor} = useButton(color);
  return (
    <TouchableOpacity
      style={[styles.container, style, {backgroundColor: getColor()}]}
      {...baseProps}>
      <Text
        style={[
          styles.title,
          textStyle,
          {color: color === 'white' && Colors.black},
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default memo(Button);
