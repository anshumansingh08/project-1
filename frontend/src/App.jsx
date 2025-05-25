import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {Container} from '@mui/material';
import React from 'react';
import {BrowserRouter} from 'react-router';
import HomePage from './pages/HomePage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <HomePage/>
      </Container>
    </BrowserRouter>
  );
}

export default App;
