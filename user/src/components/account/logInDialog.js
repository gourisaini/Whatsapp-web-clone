import React, { useContext } from 'react'
import { Dialog, Box, Typography, List, ListItem, styled } from '@mui/material';
import { qrCodeImage } from '../../constants/data';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { AccountContext } from '../../context/AccountProvider';
import { addUser } from '../../service/api';

const Component = styled(Box)`
    display: flex;
`;

const Container = styled(Box)`
    padding: 56px 0 56px 56px;
`;

const QRcode = styled('img')({
  height: 264,
  width: 264,
  margin: '50px 0 0 50px',
});

const Title = styled(Typography)`
   font-size: 26px;
   color: #525252;
   font-weight:100;
   font-family:inherit;
   margin-bottom:25px;   
`;

const Styledlist = styled(List)`
   & > li{
    padding: 0;
    margin-top: 15px;
    font-size: 18px;
    line-height: 14px;
    color: #4a4a4a;
   }
`;


const dialogStyle = {
  height: '96%',
  marginTop: '12%',
  width: '60%',
  maxWidth: '100vw',
  maxHeight: '100vh',
  boxShadow: 'none',
  overflow: 'hidden',
};

const LogInDialog = () => {

  const { setAccount } = useContext(AccountContext);

  const onLoginSuccess = async (res) => {
    const decoded = jwtDecode(res.credential);
    setAccount(decoded);
    await addUser(decoded);
  }

  const logInError = (res) => {
    console.log('LogIn Failed', res);

  }
  return (
    <div>
      <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true}>
        <Component>
          <Container>
            <Title>To use WhatsApp on your computer:</Title>
            <Styledlist>
              <ListItem>1. Open WhatsApp on your phone</ListItem>
              <ListItem>2. Tap Menu or Settings and select Linked Devices</ListItem>
              <ListItem>3. Point your phone to this screen to capture code</ListItem>
            </Styledlist>
          </Container>
          <Box style={{ position: 'relative' }}>
            <QRcode src={qrCodeImage} alt="" />
            <Box style={{ position: 'absolute', top: "50%", left: '25%' }}>
              <GoogleLogin
                onSuccess={onLoginSuccess}
                onError={logInError} />
            </Box>
          </Box>
        </Component>
      </Dialog>
    </div>
  )
}

export default LogInDialog;