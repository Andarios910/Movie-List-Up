import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePages from './pages/HomePages'
import DetailPages from "./pages/DetailPages";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<HomePages />} />
        <Route path="detail/:moviesId" element={<DetailPages />} />
        <Route path="search/:query" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
