import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Box, Button } from '@mui/material';
import styled from 'styled-components';
import Students from "../assets/class1.jpg";
import { LightPurpleButton } from '../components/buttonStyles';


const Homepage = () => {
    return (
        <StyledContainer  sx={{ width:'100%'}}>
            <Grid container  spacing={2} sx={{ margin: 0}}>
                <Grid item xs={12} md={6}  >
                    <StyledPaper elevation={3}>
                        <StyledTitle>
                            <span style={{paddingLeft:'20%'}}> Welcome to </span>
                            <br />
                            School Admin
                            
                            System
                        </StyledTitle>
                        <StyledText>
                            Streamline school management, class organization, and add students and faculty.
                            Seamlessly track attendance, assess performance, and provide feedback.
                            Access records, view marks, and communicate effortlessly.
                        </StyledText>
                        <StyledBox>
                            <StyledLink to="/choose">
                                <Button variant="contained" fullWidth style={{marginTop:'30%'}} sx={{color:' #122C4F', bgcolor:'#FCACB3', '&:hover': {bgcolor: ' #5B88B2', border: '1px solid #1976d2', color:' ##5B88B2'}}}>
                                    Login
                                </Button>
                            </StyledLink>
                           {/* <StyledLink to="/chooseasguest">
                                <Button variant="outlined" fullWidth style={{marginTop:'10%'}}
                                    sx={{ mt: 2, mb: 3, color: "#5B88B2", borderColor: " #122C4F" ,'&:hover': {bgcolor: ' #FCACB3', border: '1px solid #1976d2', color:' #122C4F'}}}
                                >
                                    Login as Guest
                                </Button>
                            </StyledLink> */}
                            
                            <StyledText style={{paddingTop: '0.7%', paddingRight:'5%'}}>
                                Don't have an account?{' '}
                                <Link to="/Adminregister" style={{color:" #FCACB3"}}>
                                    Sign up
                                </Link>
                            </StyledText>
                        </StyledBox>
                    </StyledPaper>
                </Grid>

                <Grid item xs={12} md={6} >
                    <img src={Students} alt="students" style={{ width: '100%' }} />
                </Grid>
            </Grid>
        </StyledContainer>
    );
};

export default Homepage;

const StyledContainer = styled.div`
  display: flex;
  background-color:rgb(255,255,255)) ;
  padding: 10px 30px;
  flexDirection: 'column';
  align-items: center;
   justify-content: center;
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
  color: #5B88B2;
  /* font-family: "Manrope"; */
  font-weight: bold;
  padding-top: 10%;
  padding-left: 4%;
  letter-spacing: normal;
  line-height: normal;
`;

const StyledText = styled.p`
  /* color: #550080; */
  color: #122C4F ;
  margin-top: 30px;
  margin-bottom: 30px; 
  letter-spacing: normal;
  line-height: normal;
  text-align: center;

`;

const StyledLink = styled(Link)`
  text-decoration: none;
  
`;

