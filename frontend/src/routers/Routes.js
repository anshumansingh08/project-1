import React from 'react';
import {Route, Routes} from 'react-router';
import HomePage from '../pages/HomePage.jsx';
import ChatPage from '../pages/ChatPage.jsx';
import NoPage from '../pages/NoPage.jsx';

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage/>}/>
      <Route
        path="/chat"
        element={<ChatPage/>}/>11
      <Route
        path="*"
        element={<NoPage/>}/>
    </Routes>
  );
};

export default AppRoutes;
