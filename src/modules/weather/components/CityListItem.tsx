import { useNavigation } from '@react-navigation/native';
import { FC } from 'react';
import { RootRoutes, RootStackProp } from '../../../navigation/routes';
import { useTranslationPrefix } from '../../../translations/i18n';
import {
  Avatar,
  AvatarImage,
  Box,
  Button,
  FlatList,
  HStack,
  Pressable,
  Text,
  VStack,
} from '@gluestack-ui/themed';

export interface ICityListItem {
  icon: string;
  name: string;
  id: string;
  onPress: (cityID: string) => void;
}
const CityListItem: FC<ICityListItem> = ({ icon, name, onPress, id: cityID }) => {
  const handleOnPress = () => {
    if (onPress) {
      onPress(cityID);
    }
  };
  return (
    <Pressable onPress={handleOnPress}>
      <Box
        borderBottomWidth="$1"
        borderColor="$trueGray800"
        sx={{
          _dark: {
            borderColor: '$trueGray100',
          },
          '@base': {
            pl: 0,
            pr: 0,
          },
          '@sm': {
            pl: '$4',
            pr: '$5',
          },
        }}
        py="$2">
        <HStack space="md" justifyContent="space-between">
          <Avatar size="md">
            <AvatarImage source={{ uri: icon }} />
          </Avatar>
          <VStack>
            <Text
              color="$coolGray800"
              fontWeight="$bold"
              sx={{
                _dark: {
                  color: '$warmGray100',
                },
              }}>
              {name}
            </Text>
          </VStack>
        </HStack>
      </Box>
    </Pressable>
  );
};

export default CityListItem;
