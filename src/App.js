import React, {useState} from 'react';
import {  ThemeProvider, createTheme } from '@material-ui/core'

import Home from './Home';



function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({
   palette: {
    type: darkMode ? 'dark' : 'light',
    primary: {
      main: '#f44336'
    },
    secondary: {
      main: '#3e4aff'
    },
    background:{
      default: darkMode ? '#232323' : '#ff',
      dark: darkMode ? '#181818' : '#f4f6f8',
      paper: darkMode ? '#232323' :  '#fff',
    },
   }
});

  return(
    <ThemeProvider theme={theme}>
      <Home darkMode={darkMode} setDarkMode={setDarkMode}/>
    </ThemeProvider>
  );
}

export default App;