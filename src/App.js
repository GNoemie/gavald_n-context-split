import React, { Component } from 'react';
import LoginForm from './components/LoginForm';
import ThemeContext, { themes } from './contexts/ThemeContext';
import MainLayout from './layouts/MainLayout';

class App extends Component {
  toggleTheme = () => {
    console.log("miaou")
    if (this.state.theme == themes.light)
      this.setState({
        theme: themes.dark
      })
    else
      this.setState({
        theme: themes.light
      })
  };
  
  state = {
    theme: themes.light,
    toggleTheme: this.toggleTheme
  };

  

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <MainLayout>
          <LoginForm />
        </MainLayout>
      </ThemeContext.Provider>
    );
  }
}

export default App;
