import { useContext, useState } from 'react'
import { AccountContext } from '../../../context/AccountProvider'
import { Box, styled } from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';
import HeaderMenu from './HeaderMenu';
import InfoDrawer from '../../drawer/InfoDrawer';


const Component = styled(Box)`
    height: 54px;
    background: #ededed;
    padding: 8px 16px;
    display: flex;
    align-items: center;
`

const Wrapper = styled(Box)`
  margin-left: auto;
  & > * {
    margin-left: 2px;
    padding: 2px;
    color: #919191;
  }

  & :first-child {
    font-size: 22px;
    margin-right:8px;
    margin-top:3px;
  }
`
const Image = styled('img')({
  height: 40,
  width: 40,
  borderRadius: '50%'
});

const Header = () => {

  const { account } = useContext(AccountContext);

  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(true);
  }
  return (
    <>
      <Component>
        <Image onClick={() => toggleDrawer()} src={account.picture} alt="dp"/>
        <Wrapper>
          <MessageIcon />
          <HeaderMenu setOpenDrawer={setOpenDrawer} />
        </Wrapper>
      </Component>
      <InfoDrawer open={openDrawer} setOpen={setOpenDrawer}/>
    </>
  )
}

export default Header;