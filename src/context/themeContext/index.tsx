import {createContext, PropsWithChildren} from 'react';
import { themes } from '../../themes';
import {IThemeContext} from './types';

export const ThemeContext = createContext<IThemeContext>({
  colors: themes.defaultTheme,
});

export const ThemeProvider = ({children}: PropsWithChildren) => {
  const theme = themes.defaultTheme;
  
  return (
    <ThemeContext.Provider value={{colors: theme}}>
      {children}
    </ThemeContext.Provider>
  );
};