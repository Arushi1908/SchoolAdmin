import { Container, Grid, Paper, SvgIcon } from '@mui/material'
import SeeNotice from '../../components/SeeNotice';
import Students from "../../assets/img1.png";
import Classes from "../../assets/img2.png";
import Teachers from "../../assets/img3.png";
import Fees from "../../assets/img4.png";
import styled from 'styled-components';
import CountUp from 'react-countup';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllSclasses } from '../../redux/sclassRelated/sclassHandle';
import { getAllStudents } from '../../redux/studentRelated/studentHandle';
import { getAllTeachers } from '../../redux/teacherRelated/teacherHandle';

import SchoolIcon from '@mui/icons-material/School';
import ClassIcon from '@mui/icons-material/Class';
import GroupsIcon from '@mui/icons-material/Groups';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import bgimg from '../../assets/illus1.jpg';

import { Height } from '@mui/icons-material';

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
            <Container maxWidth="100%" sx={{ pt: 10, pb: 4, height:'100vh', backgroundImage: `url(${bgimg})`, backgroundSize:'contain', }}>
                <Grid container spacing={3} sx={{ px: 10 }}>
                    <Grid item xs={12} md={3} lg={3}>
                        <StyledPaper sx={{bgcolor:' #122C4F', color:' #9cb6d1'}}>
                            <SchoolIcon sx={{fontSize:70, marginBottom:'10%'}}/>
                            {/* <img src={SchoolIcon} style={{marginTop:'2rem'}}  alt="Students" /> */}
                            <Title>
                                TOTAL STUDENTS
                            </Title>
                            <Data start={0} end={numberOfStudents} duration={2.5}  />
                        </StyledPaper>
                    </Grid>
                    <Grid item xs={12} md={3} lg={3}>
                        <StyledPaper sx={{ bgcolor:' #122C4F', color: ' #9cb6d1'}}>
                            <ClassIcon sx={{fontSize:70, marginBottom:'10%'}}/>
                            <Title>
                                TOTAL CLASSES
                            </Title>
                            <Data start={0} end={numberOfClasses} duration={5} />
                        </StyledPaper>
                    </Grid>
                    <Grid item xs={12} md={3} lg={3}>
                        <StyledPaper sx={{ bgcolor:' #122C4F', color: ' #9cb6d1'}}>
                            <GroupsIcon sx={{fontSize:70, marginBottom:'10%'}}/>
                            <Title>
                                TOTAL TEACHERS
                            </Title>
                            <Data start={0} end={numberOfTeachers} duration={2.5} />
                        </StyledPaper>
                    </Grid>
                    <Grid item xs={12} md={3} lg={3}>
                        <StyledPaper sx={{ bgcolor:' #122C4F', color: ' #9cb6d1'}}>
                            <AccountBalanceIcon sx={{fontSize:70, marginBottom:'10%'}}/>
                            <Title>
                                FEES COLLECTION
                            </Title>
                            <Data start={0} end={2300000} duration={2.5} prefix="₹" />                        </StyledPaper>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12} >
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', borderRadius:'25px', bgcolor: ' #122C4F', color: ' #9cb6d1' }}>
                            <SeeNotice />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};


const StyledPaper = styled(Paper)`
  padding: 16px;
  display: flex;
  flex-direction: column;
  height: 280px;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 30px !important;
  
`;

const Title = styled.p`
  font-size: 1.25rem;
`;

const Data = styled(CountUp)`
  font-size: calc(1.3rem + .6vw);
  color: #9cb6d1;
`;

export default AdminHomePage