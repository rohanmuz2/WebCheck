import React from 'react';
import Stack from "@mui/material/Stack";
import useJumboLayoutSidebar from "@jumbo/hooks/useJumboLayoutSidebar";
import AuthUserDropdown from "../../../../shared/widgets/AuthUserDropdown";
import NotificationsDropdown from "../../../../shared/NotificationsDropdown";
import MessagesDropdown from "../../../../shared/MessagesDropdown";
import SearchGlobal from "../../../../shared/SearchGlobal";
import { IconButton, Slide, Typography, useMediaQuery } from "@mui/material";
import Div from "@jumbo/shared/Div";
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import JumboIconButton from "@jumbo/components/JumboIconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Logo from "../../../../shared/Logo";
import { SIDEBAR_STYLES, SIDEBAR_VARIANTS } from "@jumbo/utils/constants";
import useJumboHeaderTheme from "@jumbo/hooks/useJumboHeaderTheme";



const Header = () => {
    const { sidebarOptions, setSidebarOptions } = useJumboLayoutSidebar();
    const [dropdownSearchVisibility, setDropdownSearchVisibility] = React.useState(false);
    const { headerTheme } = useJumboHeaderTheme();

    const showDropdownSearch = useMediaQuery('(max-width:575px)');

    return (
        <React.Fragment>
            {<img src='../../../../../../../HSBCLogo.png' />}

            <Stack direction="row" alignItems="center" spacing={1.25} sx={{ ml: "auto" }}>
                {
                    showDropdownSearch &&
                    <JumboIconButton elevation={25} onClick={() => setDropdownSearchVisibility(true)}>
                        <SearchIcon fontSize={"small"} />
                    </JumboIconButton>
                }
                <MessagesDropdown />
                {/* <NotificationsDropdown /> */}
                <AuthUserDropdown />
            </Stack>

        </React.Fragment>
    );
};

export default Header;
