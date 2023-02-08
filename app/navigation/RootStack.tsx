import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GameScreen} from '../screens/GameScreen';
import {SettingsScreen} from '../screens/SettingsScreen';

export type RootStackParams = {
  Settings: undefined;
  Game: undefined;
};

export const RootStack = () => {
  const Stack = createNativeStackNavigator<RootStackParams>();

  return (
    <Stack.Navigator
      initialRouteName="Game"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Game" component={GameScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};
