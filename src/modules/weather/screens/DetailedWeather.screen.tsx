import { FC } from 'react';

import { Box, Text, VStack } from '@gluestack-ui/themed';
import { useRoute } from '@react-navigation/core';
import { DetailScreenParamProps } from '../../../navigation/routes';

const DetailedWeatherScreen: FC = () => {
  const { params } = useRoute<DetailScreenParamProps>();
  const cityID = params?.cityID ?? '';
  return (
    <Box bg={'primary.main'} w="100%" h="100%">
      <VStack w="100%" alignItems="center">
        <Text>Details {cityID}</Text>
      </VStack>
    </Box>
  );
};

export default DetailedWeatherScreen;
