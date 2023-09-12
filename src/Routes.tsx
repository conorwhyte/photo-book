import { Routes, Route } from "react-router-dom";
import Desktop from "./desktop";
import { Album } from "./album/album";
import { Shell } from "./shell/shell";
import { WithAuthenticatorProps } from "@aws-amplify/ui-react";

export const Router: React.FC<WithAuthenticatorProps> = (props) => (
  <Routes>
    <Route path="/" element={<Shell {...props} />}>
      <Route path="/albums" element={<Desktop />} />
      <Route path="/albums/:name" element={<Album />} />
    </Route>
  </Routes>
);
