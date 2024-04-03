import { getUsers } from '../../../service/api';
import { Box, styled, Divider } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import Conversation from './Conversation';
import { AccountContext } from '../../../context/AccountProvider';

const Component = styled(Box)`
    height: 81vh;
    overflow: overlay;
`;

const StyleDivider = styled(Divider)`
   margin : 15px 0 0 70px;
   background-color: #e9edef;
   opacity: .6;
`;

const Conversations = ({ text }) => {

    const [users, setUsers] = useState([]);

    const { account, socket, setActiveUsers } = useContext(AccountContext);

    const fetchData = async () => {
        let data = await getUsers();
        let fiteredData = data.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
        setUsers(fiteredData);
    }

    useEffect(() => {
        fetchData();
    }, [text]);

    useEffect(() => {
        socket.current.emit('addUser', account);
        socket.current.on("getUsers", users => {
            setActiveUsers(users);
        })
    }, [account])

    return (
        <Component>
            {
                users.map(user => (
                    user.sub !== account.sub &&
                    <>
                        <Conversation user={user} />
                        <StyleDivider />
                    </>
                ))
            }
        </Component>
    )
}

export default Conversations;