import ReactDOM from 'react-dom'
import React from 'react'
import App from "./components/App";
import { AuthClient } from '../../../node_modules/@dfinity/auth-client/lib/cjs/index';

const init = async () => { 
  ReactDOM.render(<App />, document.getElementById("root"));

  const authClient = await AuthClient.create();

  if (await authClient.isAuthenticated()) {
    console.log("Logged in");
    handleAuthenticated(authClient);
  } else {
    await authClient.login({
      identifyProvider: "http://identity.ic0.app/#authorize",
      onSuccess: () => {
        handleAuthenticated(authClient);
      }
    });
  }
}

async function handleAuthenticated(authClient) {
  ReactDom.render(<App />, document.getElementById("root"));
}

init();


