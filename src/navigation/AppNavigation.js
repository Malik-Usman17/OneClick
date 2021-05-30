import React, {useState} from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme, ThemeProvider } from '@react-navigation/native';
import UnAuthorizedStack from './UnAuthorizedStack';
import {colors} from '../Constants/colors';
import { useColorScheme } from 'react-native';


function AppNavigation() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // const scheme = useColorScheme();

  // const MyTheme = {
  //   ...DefaultTheme,
  //   //dark: false,
  //   colors: {
  //     ...DefaultTheme.colors,
  //     primary: 'white',
  //     background: 'rgb(158, 104, 104)',
  //     //background: 'rgb(242, 242, 242)',
  //     card: 'red',
  //     //card: 'rgb(255, 255, 255)',
  //     text: 'rgb(87, 87, 194)',
  //     text: colors.colorPrimary,
  //     // text: 'rgb(28, 28, 30)',
  //     border: 'rgb(199, 199, 204)',
  //     notification: 'green'
  //     //notification: 'rgb(255, 69, 58)',
  //   },
  // }

  const appTheme = isDarkTheme == true ? DarkTheme : DefaultTheme

    return(
      <ThemeProvider theme={DarkTheme}>
        <NavigationContainer
          //theme={appTheme}
          //theme={scheme === 'dark' ? DarkTheme : DefaultTheme}
          //theme={MyTheme} 
          //theme={DarkTheme}
        >
          <UnAuthorizedStack />
        </NavigationContainer>
      </ThemeProvider>
    )
}

export default AppNavigation;