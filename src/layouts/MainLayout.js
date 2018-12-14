import React from 'react';
import ThemeContext from '../contexts/ThemeContext';
import ToggleButton from '../components/ToggleButton';


const MainLayout = ({ children }) => (
  <ThemeContext.Consumer>
    {({ theme, toggleTheme }) => (
      <div
        style={{
          backgroundColor: theme.backgroundColor,
          textAlign: 'center',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 'calc(10px + 2vmin)'
        }}
      >
        <ToggleButton
          backgroundColor={theme.linkColor}
          textColor={theme.backgroundColor}
          onClick={toggleTheme}
        >
          change theme
        </ToggleButton>
        {children}
      </div>
    )}
  </ThemeContext.Consumer>
);

export default MainLayout;
