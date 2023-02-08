import {FC} from 'react';
import {TMessage} from '../data/types';
import {StyleSheet, Text, View} from 'react-native';

export const TextBlock: FC<TMessage> = ({text, color}) => {
  return (
    <View style={styles.block}>
      <Text style={{color, fontSize: 14, fontFamily: 'JetBrains Mono'}}>
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    paddingHorizontal: 10,
    display: 'flex',
    justifyContent: 'center',
    paddingVertical: 20,
    backgroundColor: '#25292c',
    marginVertical: 10,
    borderRadius: 10,
    fontFamily: 'roboto',
  },
});
