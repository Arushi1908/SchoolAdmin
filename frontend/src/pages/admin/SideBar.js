import * as React from 'react';
import { Divider, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

import HomeIcon from "@mui/icons-material/Home";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import ReportIcon from '@mui/icons-material/Report';
import AssignmentIcon from '@mui/icons-material/Assignment';

const SideBar = () => {
    const location = useLocation();
    return (
        <>
            <React.Fragment>
                <ListItemButton component={Link} to="/">
                    <ListItemIcon>
                        <HomeIcon sx={{ color: location.pathname === "/" || location.pathname === "/Admin/dashboard" ? " #9cb6d1" : "gray" }} />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItemButton>
                <ListItemButton component={Link} to="/Admin/classes">
                    <ListItemIcon>
                        <ClassOutlinedIcon sx={{ color: location.pathname.startsWith('/Admin/classes') ? "#9cb6d1" : "gray" }} />
                    </ListItemIcon>
                    <ListItemText primary="Classes" />
                </ListItemButton>
                <ListItemButton component={Link} to="/Admin/subjects">
                    <ListItemIcon>
                        <AssignmentIcon sx={{ color: location.pathname.startsWith('/Admin/subjects') ? "#9cb6d1" : "gray" }} />
                    </ListItemIcon>
                    <ListItemText primary="Subjects" />
                </ListItemButton>
                <ListItemButton component={Link} to="/Admin/teachers">
                    <ListItemIcon>
                        <SupervisorAccountOutlinedIcon sx={{ color: location.pathname.startsWith('/Admin/teachers') ? "#9cb6d1" : "gray" }} />
                    </ListItemIcon>
                    <ListItemText primary="Teachers" />
                </ListItemButton>
                <ListItemButton component={Link} to="/Admin/students">
                    <ListItemIcon>
                        <PersonOutlineIcon sx={{ color: location.pathname.startsWith('/Admin/students') ? "#9cb6d1" : "gray" }} />
                    </ListItemIcon>
                    <ListItemText primary="Students" />
                </ListItemButton>
                <ListItemButton component={Link} to="/Admin/notices">
                    <ListItemIcon>
                        <AnnouncementOutlinedIcon sx={{ color: location.pathname.startsWith('/Admin/notices') ? "#9cb6d1" : "gray" }} />
                    </ListItemIcon>
                    <ListItemText primary="Notices" />
                </ListItemButton>
                <ListItemButton component={Link} to="/Admin/complains">
                    <ListItemIcon>
                        <ReportIcon sx={{ color: location.pathname.startsWith('/Admin/complains') ? "#9cb6d1" : "gray" }} />
                    </ListItemIcon>
                    <ListItemText primary="Complains" />
                </ListItemButton>
            </React.Fragment>
            <Divider sx={{ my: 0 }} />
            <React.Fragment>
                <ListSubheader component="div" inset sx={{bgcolor:' #122C4F', color:' white'}}>
                    User
                </ListSubheader>
                <ListItemButton component={Link} to="/Admin/profile">
                    <ListItemIcon>
                        <AccountCircleOutlinedIcon sx = {{color: location.pathname.startsWith("/Admin/profile") ? ' #9cb6d1' : 'gray'}} />
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

export default SideBar
