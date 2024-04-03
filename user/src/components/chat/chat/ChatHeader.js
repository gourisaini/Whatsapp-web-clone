import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { Search, MoreVert } from '@mui/icons-material'
import styled from '@emotion/styled'
import { AccountContext } from '../../../context/AccountProvider'

const Header = styled(Box)`
    height: 54px;
    background: #ededed;
    padding: 8px 16px;
    display: flex;
    align-items: center;
`

const Image = styled("img")({
    height: 40,
    width: 40,
    objectFit: "cover",
    borderRadius: '50%',
});

const Name = styled(Typography)`
    margin-left: 12px !important;
`

const Status = styled(Typography)`
    margin-left: 12px !important;
    font-size: 12px;
    color: rgb(0,0,0,0.6);
`
const RightContainer = styled(Box)`
    margin-left: auto;
    & > svg {
        margin: 8px;
        font-size: 22px;
        color: 	#6A6A6A;
    }

`
const ChatHeader = ({ person }) => {
    const { activeUsers } = useContext(AccountContext);
    return (
        <Header>
            <Image src={person.picture} alt="dp" />
            <Box>
                <Name>{person.name}</Name>
                <Status>{activeUsers?.find(user => user.sub === person.sub) ? 'Online' : 'Offline'}</Status>
            </Box>
            <RightContainer>
                <Search />
                <MoreVert />
            </RightContainer>
        </Header>
    )
}

export default ChatHeader