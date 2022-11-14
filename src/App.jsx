import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePages from './pages/HomePages'
import DetailPages from "./pages/DetailPages";
import SearchPage from "./pages/SearchPage";
import GenresPages from "./pages/GenresPages";
import LoginPages from "./pages/LoginPages";
import RegisterPages from "./pages/RegisterPages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<HomePages />} />
        <Route path="detail/:moviesId" element={<DetailPages />} />
        <Route path="search/:query" element={<SearchPage />} />
        <Route path="genres/:genreName/:genreId" element={<GenresPages />} />
        <Route path="login" element={<LoginPages />} />
        <Route path="register" element={<RegisterPages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
