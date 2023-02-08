import {Text} from 'react-native';
import React, {FC, ReactNode} from 'react';

export const AppText: FC<{children: ReactNode}> = ({children}) => {
  return (
    <Text style={{fontFamily: 'JetBrains Mono', color: '#fff', fontSize: 16}}>
      {children}
    </Text>
  );
};
