import { store } from "./store/store";
import { Provider } from "react-redux";
import { Router } from "./Routes";
import { Amplify } from "aws-amplify";
import type { WithAuthenticatorProps } from "@aws-amplify/ui-react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import awsconfig from "./aws-exports";
import { BrowserRouter } from "react-router-dom";

import "@aws-amplify/ui-react/styles.css";

Amplify.configure(awsconfig);

export function App({ signOut, user }: WithAuthenticatorProps) {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Router />
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default withAuthenticator(App);
