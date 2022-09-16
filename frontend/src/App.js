import React from 'react';
import { Container} from '@material-ui/core';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { Route, Routes, Navigate } from 'react-router-dom';
import Auth from './components/Auth/Auth';


const App = () => {
  return (
    <Container maxWidth="lg">

      <Navbar />
      <Routes>
        <Route path='/' exact element={<Navigate to='/posts' />} />
        <Route path='/posts' element={<Home />} />
        <Route path={"/posts/:id"} element={<div>this is tag</div>} />
        <Route path='/auth' element={<Auth />} />
        <Route path='*' element={<h1>Error 404! Page not found</h1>} />
      </Routes>
    </Container>
  )
}

export default App;