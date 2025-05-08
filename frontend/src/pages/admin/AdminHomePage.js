import { Container, Grid, Paper, SvgIcon } from '@mui/material'
import SeeNotice from '../../components/SeeNotice';
// import Students from "../../assets/img1.png";
// import Classes from "../../assets/img2.png";
// import Teachers from "../../assets/img3.png";
// import Fees from "../../assets/img4.png";
import styled from 'styled-components';
import CountUp from 'react-countup';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllSclasses } from '../../redux/sclassRelated/sclassHandle';
import { getAllStudents } from '../../redux/studentRelated/studentHandle';
import { getAllTeachers } from '../../redux/teacherRelated/teacherHandle';

import HomeIcon from "@mui/icons-material/Home";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import ReportIcon from '@mui/icons-material/Report';
import AssignmentIcon from '@mui/icons-material/Assignment';

import SchoolIcon from '@mui/icons-material/School';
import ClassIcon from '@mui/icons-material/Class';
import GroupsIcon from '@mui/icons-material/Groups';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import bgimg from '../../assets/illus1.jpg';
import { Link } from 'react-router-dom';


const AdminHomePage = () => {
    const dispatch = useDispatch();
    const { studentsList } = useSelector((state) => state.student);
    const { sclassesList } = useSelector((state) => state.sclass);
    const { teachersList } = useSelector((state) => state.teacher);

    const { currentUser } = useSelector(state => state.user)

    const adminID = currentUser._id

    useEffect(() => {
        dispatch(getAllStudents(adminID));
        dispatch(getAllSclasses(adminID, "Sclass"));
        dispatch(getAllTeachers(adminID));
    }, [adminID, dispatch]);

    const numberOfStudents = studentsList && studentsList.length;
    const numberOfClasses = sclassesList && sclassesList.length;
    const numberOfTeachers = teachersList && teachersList.length;

    return (
        <>
            <Container maxWidth="100%" sx={{ pt: 5, height:'90vh', backgroundImage: `url(${bgimg})`, backgroundSize:'contain', }}>
                <Grid container spacing={3} sx={{ px: 12 }}>
                    <Grid item xs={12} md={3} lg={3}>
                         <Link to="/" style={{ textDecoration: 'none' }}>
                        <StyledPaper sx={{bgcolor:' #122C4F', color:' #9cb6d1'}}>
                            <HomeIcon sx={{fontSize:80, marginBottom:'10%'}}/>
                            {/* <img src={SchoolIcon} style={{marginTop:'2rem'}}  alt="Students" /> */}
                            <Title>
                                HOME
                            </Title>
                            {/* <Data start={0} end={numberOfStudents} duration={2.5}  /> */}
                        </StyledPaper>
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={3} lg={3}>
                        <Link to="/Admin/classes">
                        <StyledPaper sx={{ bgcolor:' #122C4F', color: ' #9cb6d1'}}>
                            <ClassOutlinedIcon sx={{fontSize:80, marginBottom:'10%', }}/>
                            <Title>
                                CLASSES
                            </Title>
                            {/* <Data start={0} end={numberOfClasses} duration={5} /> */}
                        </StyledPaper>
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={3} lg={3}>
                        <Link to='/Admin/subjects'>
                        <StyledPaper sx={{ bgcolor:' #122C4F', color: ' #9cb6d1'}}>
                            <AssignmentIcon sx={{fontSize:80, marginBottom:'10%'}}/>
                            <Title>
                                SUBJECTS
                            </Title>
                            {/* <Data start={0} end={numberOfTeachers} duration={2.5} /> */}
                        </StyledPaper>
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={3} lg={3}>
                    <Link to='/Admin/teachers'>
                        <StyledPaper sx={{ bgcolor:' #122C4F', color: ' #9cb6d1'}}>
                            <SupervisorAccountOutlinedIcon sx={{fontSize:80, marginBottom:'10%'}}/>
                            <Title>
                                TEACHERS
                            </Title>
                            {/* <Data start={0} end={2300000} duration={2.5} prefix="₹" />                         */}
                            </StyledPaper>
                            </Link>
                    </Grid>
                    <Grid item xs={12} md={3} lg={3} sx={{ml: 18, mt:5}}>
                         <Link to="/Admin/students" style={{ textDecoration: 'none' }}>
                        <StyledPaper sx={{bgcolor:' #122C4F', color:' #9cb6d1'}}>
                            <PersonOutlineIcon sx={{fontSize:80, marginBottom:'10%'}}/>
                            {/* <img src={SchoolIcon} style={{marginTop:'2rem'}}  alt="Students" /> */}
                            <Title>
                                STUDENTS
                            </Title>
                            
                        </StyledPaper>
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={3} lg={3} sx={{mt:5}}>
                        <Link to="/Admin/notices">
                        <StyledPaper sx={{ bgcolor:' #122C4F', color: ' #9cb6d1'}}>
                            <ClassOutlinedIcon sx={{fontSize:80, marginBottom:'10%', }}/>
                            <Title>
                                NOTICES
                            </Title>
                            
                        </StyledPaper>
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={3} lg={3} sx={{mt:5}}>
                        <Link to='/Admin/complains'>
                        <StyledPaper sx={{ bgcolor:' #122C4F', color: ' #9cb6d1'}}>
                            <GroupsIcon sx={{fontSize:80, marginBottom:'10%'}}/>
                            <Title>
                                Complains
                            </Title>
                           
                        </StyledPaper>
                        </Link>
                    </Grid>

                    <Grid item xs={12} md={3} lg={3} sx={{mt:5}}>
                        <Link to='/Admin/attendance'>
                        <StyledPaper sx={{ bgcolor:' #122C4F', color: ' #9cb6d1'}}>
                            <GroupsIcon sx={{fontSize:80, marginBottom:'10%'}}/>
                            <Title>
                                Attendance
                            </Title>
                           
                        </StyledPaper>
                        </Link>
                    </Grid>
                    
                    {/* <Grid item xs={12} md={12} lg={12} >
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', borderRadius:'25px', bgcolor: ' #122C4F', color: ' #9cb6d1' }}>
                            <SeeNotice />
                        </Paper>
                    </Grid> */}
                </Grid>
            </Container>
        </>
    );
};


const StyledPaper = styled(Paper)`
  padding: 16px;
  display: flex;
  flex-direction: column;
  height: 220px;
  width: 220px;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 30px !important;
  
`;

const Title = styled.p`
  font-size: 1.5rem;
`;

const Data = styled(CountUp)`
  font-size: calc(1.3rem + .6vw);
  color: #9cb6d1;
`;

export default AdminHomePage