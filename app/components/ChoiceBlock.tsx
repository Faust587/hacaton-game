import {TButton, TMessage, TStory} from '../data/types';
import {Dispatch, FC} from 'react';
import {
  Alert,
  BackHandler,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {isTMessage} from '../utils/validation';
import {generalStory} from '../data/story';

type TProps = {
  buttons: TButton;
  localStory: (TMessage | TButton)[];
  setLocalStory: Dispatch<(TMessage | TButton)[]>;
  setStoryId: Dispatch<number>;
  setStory: Dispatch<TStory | undefined>;
  setTextIndex: Dispatch<number>;
  setIsStarted: Dispatch<boolean>;
};

export const ChoiceBlock: FC<TProps> = ({
  buttons,
  localStory,
  setLocalStory,
  setStoryId,
  setIsStarted,
  setTextIndex,
  setStory,
}) => {
  const styles = StyleSheet.create({
    mainContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    buttonContainer: {
      width: '48%',
      borderRadius: 10,
    },
    text: {
      paddingVertical: 25,
      textAlign: 'center',
      fontFamily: 'JetBrains Mono',
      color: '#fff',
    },
  });

  const onPressButton = (buttonOrder: -1 | 1 | 2, chapter: number) => {
    const newLocalStory = localStory.map(item => {
      if (!isTMessage(item) && item.id === id) {
        const {id, variant1, variant2} = item;
        const updatedButton: TButton = {
          id,
          pressed: buttonOrder,
          variant1,
          variant2,
        };
        return updatedButton;
      }
      return item;
    });
    setLocalStory([...newLocalStory]);
    setStoryId(chapter);
    setTextIndex(0);
    const currentStory = generalStory.find(({id}) => id === chapter);
    if (!currentStory) {
      Alert.alert(
        'ПОМИЛКА',
        'Будь ласка, перезапустіть гру, або зверніться до розробника',
        [
          {
            text: 'OK',
            onPress: () => {
              BackHandler.exitApp();
            },
          },
        ],
      );
    }
    setStory(currentStory);
    setIsStarted(true);
  };

  const {id, pressed, variant1, variant2} = buttons;
  return (
    <View style={styles.mainContainer}>
      <View
        style={[
          styles.buttonContainer,
          {
            backgroundColor:
              pressed !== 1 && pressed !== -1 ? '#292e32' : '#1967a5',
          },
        ]}>
        <TouchableOpacity
          disabled={pressed !== -1}
          onPress={() => onPressButton(1, variant1.chapter)}>
          <Text style={styles.text}>{variant1.text}</Text>
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles.buttonContainer,
          {
            backgroundColor:
              pressed !== 2 && pressed !== -1 ? '#292e32' : '#1967a5',
          },
        ]}>
        <TouchableOpacity
          disabled={pressed !== -1}
          onPress={() => onPressButton(2, variant2.chapter)}>
          <Text style={styles.text}>{variant2.text}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
