import React, { useContext } from 'react'
import { AppBar, Toolbar, styled, Box } from '@mui/material';
import LogInDialog from './account/logInDialog'
import { AccountContext } from '../context/AccountProvider';
import ChatDialog from './chat/ChatDialog';


const Component = styled(Box)`
    height: 100vh;
    background-color: #DCDCDC;    
`

const Header = styled(AppBar)`
    height: 125px;
    background-color: #00A884;    
    box-shadow: none;
`

const LoginHeader = styled(AppBar)`
    height: 220px;
    background-color: #00a783;    
    box-shadow: none;
`

const Messenger = () => {
  const { account } = useContext(AccountContext);

  return (
    <Component>
      {
        account ?
          <>
           <Header>
              <Toolbar>

              </Toolbar>
            </Header>
            <ChatDialog/>
          </> :
          <>
            <LoginHeader>
              <Toolbar>

              </Toolbar>
            </LoginHeader>
            <LogInDialog></LogInDialog>
          </>
      }
    </Component>
  )
}

export default Messenger;