import {
  Alert,
  BackHandler,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {TButton, TMessage, TStory} from '../data/types';
import {generalStory} from '../data/story';
import {isTMessage} from '../utils/validation';
import {TextBlock} from '../components/TextBlock';
import {ChoiceBlock} from '../components/ChoiceBlock';
import {AppText} from '../ui/text/AppText';

export const GameScreen = () => {
  const [localStory, setLocalStory] = useState<(TMessage | TButton)[]>([]);
  const [isStarted, setIsStarted] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [storyId, setStoryId] = useState(0);
  const [story, setStory] = useState<TStory>();

  const scrollViewRef = useRef<ScrollView>(null);

  const [scrollToBottom, setScrollToBottom] = useState(true);
  const [currentScrollYPos, setCurrentScrollYPos] = useState(0);
  const [lastScrollYPos, setLastScrollYPos] = useState(0);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!isStarted) return;
    if (!story) return;
    if (textIndex === story.story.length) {
      if (!story.choice) {
        if (story.fail) {
          setFailed(true);
          return;
        }
        if (story.finish) console.log('STORY FINISHED');
        setIsStarted(false);
        return;
      }
      const {variant1, variant2, id} = story.choice;
      setLocalStory(prevState => [
        ...prevState,
        {id, variant1, variant2, pressed: -1},
      ]);
      return;
    }
    if (textIndex === story.story.length) return;
    setLocalStory(prevState => [...prevState, story.story[textIndex]]);
    setTimeout(() => setTextIndex(prevState => prevState + 1), 2500);
  }, [textIndex, isStarted, story]);

  useEffect(() => {
    if (currentScrollYPos + 2 < lastScrollYPos) {
      setScrollToBottom(false);
    } else {
      setScrollToBottom(true);
    }
  }, [currentScrollYPos, lastScrollYPos]);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#1c2023" />
      <View style={styles.header}>
        <AppText>STARLINK: IS032-324</AppText>
      </View>
      <ScrollView
        ref={scrollViewRef}
        scrollEventThrottle={16}
        onScroll={event => {
          setLastScrollYPos(currentScrollYPos);
          setCurrentScrollYPos(event.nativeEvent.contentOffset.y);
        }}
        onContentSizeChange={() =>
          scrollToBottom ? scrollViewRef.current?.scrollToEnd() : null
        }>
        <View style={styles.storyWrapper}>
          {localStory.map((value, index) => {
            if (isTMessage(value))
              return (
                <TextBlock
                  key={`${value.text}-${index}`}
                  color={value.color}
                  text={value.text}
                />
              );
            return (
              <ChoiceBlock
                key={value.id}
                buttons={value}
                localStory={localStory}
                setLocalStory={setLocalStory}
                setStoryId={setStoryId}
                setStory={setStory}
                setTextIndex={setTextIndex}
                setIsStarted={setIsStarted}
              />
            );
          })}
        </View>
      </ScrollView>
      {!isStarted && !failed ? (
        <Button
          title={'ПОЧАТИ'}
          onPress={() => {
            const currentStory = generalStory.find(({id}) => id === storyId);
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
              return;
            }
            setStory(currentStory);
            setIsStarted(true);
          }}
        />
      ) : null}
      {failed ? (
        <Button
          title={'ЗАНОВО'}
          onPress={() => {
            setStoryId(0);
            setTextIndex(0);
            setLocalStory([]);
            setFailed(false);
            setIsStarted(false);
          }}
        />
      ) : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    backgroundColor: '#1c2023',
  },
  header: {
    height: '10%',
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: '#25292c',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  storyWrapper: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
});
