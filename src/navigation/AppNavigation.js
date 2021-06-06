import { DarkTheme, NavigationContainer, ThemeProvider } from '@react-navigation/native';
import React from 'react';
import UnAuthorizedStack from './UnAuthorizedStack';


function AppNavigation() {

    return(
        <NavigationContainer >
          <UnAuthorizedStack />
        </NavigationContainer>
    )
}

export default AppNavigation;