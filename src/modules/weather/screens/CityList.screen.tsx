import { useNavigation } from '@react-navigation/native';
import { FC } from 'react';
import { RootRoutes, RootStackProp } from '../../../navigation/routes';
import { useTranslationPrefix } from '../../../translations/i18n';
import { Box, Button, FlatList, Text, VStack } from '@gluestack-ui/themed';
import CityListItem, { ICityListItem } from '../components/CityListItem';

const CityListScreen: FC = () => {
  const t = useTranslationPrefix('cityListScreen');
  const { navigate } = useNavigation<RootStackProp>();

  const mockData = [
    {
      id: 'test1',
      icon: 'https://gravatar.com/avatar/8ac80533c88789d772292576bf448001?s=200&d=retro&r=g',
      name: 'First Item',
    },
    {
      id: 'test2',
      icon: 'https://gravatar.com/avatar/8ac80533c88789d772292576bf448001?s=200&d=retro&r=g',
      name: 'Second Item',
    },
    {
      id: 'test3',
      icon: 'https://gravatar.com/avatar/8ac80533c88789d772292576bf448001?s=200&d=retro&r=g',
      name: 'Third Item',
    },
  ];

  const handlePressCity = async (cityID: string) => {
    navigate(RootRoutes.DetailScreen, { cityID });
  };

  return (
    <Box bg={'primary.main'} w="100%" h="100%">
      <VStack w="100%" alignItems="center">
        <FlatList
          w={'100%'}
          h={'100%'}
          data={mockData}
          renderItem={({ item }) => (
            <CityListItem
              id={item.id}
              icon={item.icon}
              name={item.name}
              onPress={handlePressCity}
            />
          )}
        />
      </VStack>
    </Box>
  );
};

export default CityListScreen;
