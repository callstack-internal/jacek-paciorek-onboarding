import { NavigatorScreenParams, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export enum RootRoutes {
  WeatherScreen = 'Weather',
  DetailScreen = 'Details',
}

export type RootStackParamList = {
  [RootRoutes.WeatherScreen]: undefined;
  [RootRoutes.DetailScreen]: { cityID: string };
};
export type RootStackParams = NavigatorScreenParams<RootStackParamList>;
export type RootStackProp = NativeStackNavigationProp<RootStackParamList>;

export type DetailScreenParamProps = RouteProp<RootStackParamList, RootRoutes.DetailScreen>;
