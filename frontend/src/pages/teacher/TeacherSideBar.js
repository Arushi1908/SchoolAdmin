import * as React from 'react';
import { Divider, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import { useSelector } from 'react-redux';

const TeacherSideBar = () => {
    const { currentUser } = useSelector((state) => state.user);
    const sclassName = currentUser.teachSclass

    const location = useLocation();
    return (
        <>
            <React.Fragment>
                <ListItemButton component={Link} to="/">
                    <ListItemIcon>
                        <HomeIcon sx={{ color: location.pathname === ("/" || "/Teacher/dashboard") ? ' #9cb6d1' : 'gray'}} />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItemButton>
                <ListItemButton component={Link} to="/Teacher/class">
                    <ListItemIcon>
                        <ClassOutlinedIcon sx={{ color:location.pathname.startsWith("/Teacher/class") ? ' #9cb6d1' : 'gray'}} />
                    </ListItemIcon>
                    <ListItemText primary={`Class ${sclassName.sclassName}`} />
                </ListItemButton>
                {/* <ListItemButton component={Link} to="/Teacher/complain">
                    <ListItemIcon>
                        <AnnouncementOutlinedIcon sx={{ color: location.pathname.startsWith("/Teacher/complain") ? 'primary' : 'inherit'}} />
                    </ListItemIcon>
                    <ListItemText primary="Complain" />
                </ListItemButton> */}
            </React.Fragment>
            <Divider sx={{ my: 0 }} />
            <React.Fragment>
                <ListSubheader component="div" inset sx={{bgcolor:' #122C4F', color:' white'}}>
                    User
                </ListSubheader>
                <ListItemButton component={Link} to="/Teacher/profile">
                    <ListItemIcon>
                        <AccountCircleOutlinedIcon sx={{color:location.pathname.startsWith("/Teacher/profile") ? ' #9cb6d1' : 'gray'}} />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                </ListItemButton>
                <ListItemButton component={Link} to="/logout">
                    <ListItemIcon>
                        <ExitToAppIcon sx={{color: location.pathname.startsWith("/logout") ? ' #9cb6d1' : 'gray'}} />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                </ListItemButton>
            </React.Fragment>
        </>
    )
}

export default TeacherSideBar