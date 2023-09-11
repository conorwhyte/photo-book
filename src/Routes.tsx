import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Desktop } from "./desktop/desktop";
import { Album } from "./album/album";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Desktop />} />
      <Route path="/album/:name" element={<Album />} />
    </Routes>
  </BrowserRouter>
);
