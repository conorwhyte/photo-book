import { store } from "./store/store";
import { Provider } from "react-redux";
import { Router } from "./Routes";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
import { BrowserRouter } from "react-router-dom";
import { Authenticator, WithAuthenticatorProps } from "@aws-amplify/ui-react";

import "@aws-amplify/ui-react/styles.css";

Amplify.configure(awsconfig);

export function App() {
  return (
    <div className="App">
      <Authenticator hideSignUp={true} socialProviders={[]}>
        {(authProps: WithAuthenticatorProps) => (
          <BrowserRouter>
            <Provider store={store}>
              <Router {...authProps} />
            </Provider>
          </BrowserRouter>
        )}
      </Authenticator>
    </div>
  );
}

export default App;
