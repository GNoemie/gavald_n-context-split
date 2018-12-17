import React, { Component, Suspense } from 'react';
import ThemeContext, { themes } from './contexts/ThemeContext';
import UserContext from './contexts/UserContext';
import MainLayout from './layouts/MainLayout';
import ImageLoading from './components/ImageLoading';
const UserProfile = React.lazy(() =>
  import('./components/UserProfile'));
const LoginForm = React.lazy(() =>
  import('./components/LoginForm'));

class App extends Component {
  toggleTheme = () => {
    console.log("miaou")
    if (this.state.theme === themes.light)
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
          <Suspense fallback={ImageLoading}>
            { this.state.isLoggedIn ?
              <UserProfile /> :
              <LoginForm onSubmit={this.onSubmit}/> } 
          </Suspense>
        </MainLayout>
      </ThemeContext.Provider>
      </UserContext.Provider>
    );
  }
}

export default App;
