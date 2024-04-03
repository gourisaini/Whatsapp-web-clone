import React from 'react'
import Messenger from "./components/messenger"
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './context/AccountProvider';

function App() {
  const clientId = process.env.CLIENT_ID
  return (
    <>
      < GoogleOAuthProvider clientId={clientId}>
        <AccountProvider>
          <Messenger />
        </AccountProvider>
      </ GoogleOAuthProvider >
    </>
  );
}

export default App;
