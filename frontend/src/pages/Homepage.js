import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Box, Button } from '@mui/material';
import styled from 'styled-components';
import Students from "../assets/students.svg";
import { LightPurpleButton } from '../components/buttonStyles';


const Homepage = () => {
    return (
        <StyledContainer sx={{ width:'100%'}}>
            <Grid container spacing={0} sx={{ width: '100%', margin: 0 }}>
                <Grid item xs={12} md={6} >
                    <StyledPaper elevation={3}>
                        <StyledTitle>
                            Welcome to
                            <br />
                            School Admin
                            <br />
                            System
                        </StyledTitle>
                        <StyledText>
                            Streamline school management, class organization, and add students and faculty.
                            Seamlessly track attendance, assess performance, and provide feedback.
                            Access records, view marks, and communicate effortlessly.
                        </StyledText>
                        <StyledBox>
                            <StyledLink to="/choose">
                                <Button variant="contained" fullWidth sx={{color:' #273287', bgcolor:' #dbebae', '&:hover': {bgcolor: ' transparent', border: '1px solid #1976d2', color:' #dbebae'}}}>
                                    Login
                                </Button>
                            </StyledLink>
                            <StyledLink to="/chooseasguest">
                                <Button variant="outlined" fullWidth
                                    sx={{ mt: 2, mb: 3, color: " #dbebae", borderColor: " #dbebae" }}
                                >
                                    Login as Guest
                                </Button>
                            </StyledLink>
                            <StyledText>
                                Don't have an account?{' '}
                                <Link to="/Adminregister" style={{color:" #dbebae"}}>
                                    Sign up
                                </Link>
                            </StyledText>
                        </StyledBox>
                    </StyledPaper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={Students} alt="students" style={{ width: '100%' }} />
                </Grid>
            </Grid>
        </StyledContainer>
    );
};

export default Homepage;

const StyledContainer = styled.div`
  display: flex;
  background-color: black ;
  padding: 10px 30px;
`;


const StyledPaper = styled.div`
  padding: 24px;
  height: 100vh;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  gap: 16px;
  padding: 24px;
`;

const StyledTitle = styled.h1`
  font-size: 3rem;
  color: #dbebae;
  /* font-family: "Manrope"; */
  font-weight: bold;
  padding-top: 0;
  letter-spacing: normal;
  line-height: normal;
`;

const StyledText = styled.p`
  /* color: #550080; */
  color: #b7f19e ;
  margin-top: 30px;
  margin-bottom: 30px; 
  letter-spacing: normal;
  line-height: normal;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  
`;

