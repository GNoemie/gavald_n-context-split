import React from 'react';

export const themes = {
  dark: {
    backgroundColor: '#282c34',
    contrastColor: '#333',
    textColor: 'white',
    linkColor: '#53C6FF'
  },
  light: {
    backgroundColor: '#D82c34',
    contrastColor: '#333',
    textColor: 'white',
    linkColor: '#E3F68F'
  }
};

const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => { console.log("bjr")}
});

export default ThemeContext;
