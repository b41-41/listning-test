import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from 'components/Login/Login';
import Main from 'pages/Main/Main';
import NotFound from 'pages/NotFound/NotFound';
import loginStore from 'store/loginStore';

const Router = () => {
  const loginState = loginStore((state) => state.isLogin);
  return (
    <BrowserRouter basename="/">
      <Routes>
        {loginState ? (
          <Route path="/" element={<Main />} />
        ) : (
          <Route path="/*" element={<Login />} />
        )}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
