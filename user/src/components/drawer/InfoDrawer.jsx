import React from 'react'
import { Drawer, Box, Typography, styled } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import Profile from './Profile';
const drawerStyle = {
  left: 20,
  top: 17,
  height: '95%',
  width: '30%',
  boxShadow: 'none',
}

const Header = styled(Box)`
   background-color: #008069;
   height: 107px;
   color: #FFFFFF;
   display: flex;
   padding-left: 15px;
   & > svg ,& > p {
    margin-top: auto;
   margin-bottom: 15px;
    // padding: 15px;
    font-weight: 600;
  }
`

const Text = styled(Typography)`
   padding-left: 15px;
   font-size: 15px;
`


const Component = styled(Typography)`
   background: #ededed;
   height: 85%;
`


const InfoDrawer = ({ open, setOpen }) => {

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <>
      <Drawer
        open={open}
        onClose={handleClose}
        PaperProps={{ sx: drawerStyle }}
        style={{ zIndex: 1500 }}
      >
        <Header>
          <ArrowBack onClick={() => { setOpen(false) }} />
          <Text>Profile</Text>
        </Header>
        <Component>
          <Profile/>
        </Component>
        {/* hideBackdrop={true} */}
      </Drawer>
    </>
  )
}

export default InfoDrawer;