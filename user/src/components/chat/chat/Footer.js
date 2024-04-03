import React, { useEffect } from 'react'
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined';
import { Box, InputBase } from '@mui/material';
import styled from '@emotion/styled';
import { uploadFile } from '../../../service/api';
const Container = styled(Box)`
   height: 60px;
   background: #ededed;
   display: flex;
   width: 100%;
   align-items: center;
   padding: 0 15px;
   & > * {
    margin: 5px;
    color: #6A6A6A;
   }
`

const Search = styled(Box)`
    background-color: #FFFFFF;
    border-radius: 5px;
    // padding: 0 5px;
    width: calc(98% - 100px);
`

const InputField = styled(InputBase)`
    width: 100%;
    padding: 20px;
    height: 20px;
    padding-left: 25px;
    font-size: 14px;
`
const ClipIcon = styled(AttachFileOutlinedIcon)`
   transform: rotate(40deg);
`


const Footer = ({ sendText, value, setValue, file, setFile, setImage }) => {

    useEffect(() => {
        const getImage = async () => {
            if (file) {
                const data = new FormData();
                data.append('name', file.name);
                data.append('file', file);
                let response = await uploadFile(data);
                setImage(response.data);
            }
        }
        getImage();
    }, [file])

    const onFileChange = (e) => {
        console.log(e);
        setFile(e.target.files[0]);
        setValue(e.target.files[0].name);
    }

    return (
        <Container>
            <EmojiEmotionsOutlinedIcon />
            <label htmlFor="fileInput">
                <ClipIcon />
            </label>
            <input type="file"
                id='fileInput'
                style={{ display: 'none' }}
                onChange={(e) => onFileChange(e)} />
            <Search>
                <InputField placeholder='Type a Message' onChange={(e) => setValue(e.target.value)} value={value} onKeyDown={(e) => sendText(e)} />
            </Search>
            <MicNoneOutlinedIcon />
        </Container>
    )
}

export default Footer