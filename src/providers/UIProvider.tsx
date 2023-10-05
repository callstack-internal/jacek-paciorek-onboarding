import React, { FC, PropsWithChildren, useState } from 'react';

import { Button, ButtonText, GluestackUIProvider, config } from '@gluestack-ui/themed';

const UIProvider: FC<PropsWithChildren> = ({ children }) => {
  return <GluestackUIProvider config={config.theme}>{children}</GluestackUIProvider>;
};

export default UIProvider;
