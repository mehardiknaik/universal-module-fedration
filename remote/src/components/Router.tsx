import React from 'react';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router';
import HomePage from '../pages/HomePage';
import Header from './Header';
import AboutPage from '../pages/AboutPage';
import { remote } from './Remote';

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default remote({ Component: Router });
