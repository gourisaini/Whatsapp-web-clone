import React from 'react'
import Messenger from './components/messenger'
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from '@/context/AccountProvider';
import Head from "next/head";

const index = () => {
  const clientId = '142359347064-qdah3a64gf3mi0dslarspv9gdi9s0qtp.apps.googleusercontent.com';

  return (
    <>
    <Head>
      <title>WhatsApp Web</title>
    </Head>
    < GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
            <Messenger />
        </AccountProvider>
    </ GoogleOAuthProvider >
    </>
  )
}

export default index;