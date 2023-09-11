import { Routes, Route } from "react-router-dom";
import Desktop from "./desktop";
import { Album } from "./album/album";
import { Shell } from "./shell/shell";

export const Router = () => (
  <Routes>
    <Route path="/" element={<Shell />}>
      <Route path="/albums" element={<Desktop />} />
      <Route path="/albums/:name" element={<Album />} />
    </Route>
  </Routes>
);
