import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FC } from 'react';

import { RootRoutes, RootStackParamList } from './routes';
import CityListScreen from '../modules/weather/screens/CityList.screen';
import DetailedWeatherScreen from '../modules/weather/screens/DetailedWeather.screen';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator: FC = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName={RootRoutes.WeatherScreen}>
        <RootStack.Screen name={RootRoutes.WeatherScreen} component={CityListScreen} />
        <RootStack.Screen name={RootRoutes.DetailScreen} component={DetailedWeatherScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
