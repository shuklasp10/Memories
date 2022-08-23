import React from 'react';
import { Container} from '@material-ui/core';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Auth from './components/Auth/Auth';


const App = () => {
  return (
    <Container maxWidth="lg">

      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='*' element={<h1>Error 404! Page not found</h1>} />
      </Routes>
    </Container>
  )
}

export default App;