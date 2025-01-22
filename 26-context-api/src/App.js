import Box from './components/Box';
import Profile from './components/Profile';
import { ThemeContext } from './context/ThemeContext';
import AgeProvider from './components/provider/AgeProvider';
import UserProvider from './components/provider/UserProvider';

function App() {
  return (
    <>
      <ThemeContext.Provider value={'dark'}>
        <Box />
      </ThemeContext.Provider>

      <UserProvider>
        <AgeProvider>
          <Profile />
        </AgeProvider>
      </UserProvider>
    </>
  );
}

export default App;
