import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import UnAuthorizedStack from './UnAuthorizedStack';

function AppNavigation() {

    return(
        <NavigationContainer>
          <UnAuthorizedStack />
        </NavigationContainer>
    )
}

export default AppNavigation;