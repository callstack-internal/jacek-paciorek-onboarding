import React, { FC } from 'react';
import { SafeAreaView, ScrollView, StatusBar, useColorScheme } from 'react-native';
import { config, GluestackUIProvider } from '@gluestack-ui/themed';
import { Colors, Header } from 'react-native/Libraries/NewAppScreen';
import UIProvider from '../../providers/UIProvider';
import RootNavigator from '../../navigation/RootNavigator';

const Main: FC = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <UIProvider>
      <RootNavigator />
    </UIProvider>
  );
};

export default Main;
