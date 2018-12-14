import React, { Component } from 'react';
import LoginForm from './components/LoginForm';
import ThemeContext, { themes } from './contexts/ThemeContext';
import UserContext from './contexts/UserContext';
import MainLayout from './layouts/MainLayout';
import UserProfile from './components/UserProfile';

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
  


  onSubmit = (user) => {
    this.setState({
      username: user.value,
      isLoggedIn: true
    })
  }

  state = {
    theme: themes.light,
    toggleTheme: this.toggleTheme,
    username: "test",
    isLoggedIn: false
  };

  render() {
    return (
      <UserContext.Provider value={this.state}>
      <ThemeContext.Provider value={this.state}>
        <MainLayout>
          
    { this.state.isLoggedIn ? <UserProfile /> : <LoginForm onSubmit={this.onSubmit}/> } 
          
        </MainLayout>
      </ThemeContext.Provider>
      </UserContext.Provider>
    );
  }
}

export default App;
