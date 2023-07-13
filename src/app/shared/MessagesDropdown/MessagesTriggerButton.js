import React from 'react';
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import JumboIconButton from "@jumbo/components/JumboIconButton";
import useJumboHeaderTheme from "@jumbo/hooks/useJumboHeaderTheme";
import {ThemeProvider} from "@mui/material";


const MessagesTriggerButton = () => {
    const {headerTheme} = useJumboHeaderTheme();
    return (
        <ThemeProvider theme={headerTheme}>
            <JumboIconButton sx={{backgroundColor:'#FFF', width:'40px', height:'40px'}} elevation={25}>
                <ChatBubbleOutlineOutlinedIcon sx={{fontSize: '1rem'}}/>
            </JumboIconButton>
        </ThemeProvider>
    );
};

export default MessagesTriggerButton;
