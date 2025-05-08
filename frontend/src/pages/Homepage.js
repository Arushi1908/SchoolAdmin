import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Box, Button } from '@mui/material';
import styled from 'styled-components';
import Students from "../assets/class1.jpg";
import Navbar from '../components/Navbar';
import About from './AboutUs';
import '../styles/font.css';

const Homepage = () => {
  return (
    <>
      <StyledContainer>
        <Navbar />
        <Grid container spacing={2} sx={{ margin: 0, pt: 3 }}>
          <Grid item xs={12} md={6}>
            <StyledPaper>
              <StyledTitle>
                <span style={{ paddingLeft: '20%' }}>WELCOME TO</span>
                <br />
                <span>SCHOOL ADMIN SYSTEM</span>
              </StyledTitle>
              <StyledText>
                Streamline school management, class organization, and add students and faculty.
                Seamlessly track attendance, assess performance, and provide feedback.
                Access records, view marks, and communicate effortlessly.
              </StyledText>
              <StyledBox>
                <StyledLink to="/choose">
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      marginTop: '30%',
                      color: '#122C4F',
                      bgcolor: '#FCACB3',
                      '&:hover': {
                        bgcolor: '#5B88B2',
                        border: '1px solid #1976d2',
                        color: '#5B88B2'
                      }
                    }}
                  >
                    Login
                  </Button>
                </StyledLink>
                <StyledText>
                  Don't have an account?{' '}
                  <Link to="/Adminregister" style={{ color: '#FCACB3' }}>
                    Sign up
                  </Link>
                </StyledText>
              </StyledBox>
            </StyledPaper>
          </Grid>

          <Grid item xs={12} md={6} sx={{ mt: 6 }}>
            <img src={Students} alt="students" style={{ width: '100%', height: '75%' }} />
          </Grid>
        </Grid>
      </StyledContainer>

      {/* Anchor target for "About Us" scroll */}
      <section id="about-us">
        <About />
      </section>
    </>
  );
};

export default Homepage;

const StyledContainer = styled.div`
  background-color: rgb(255, 255, 255);
  padding: 1% 2% 0 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledPaper = styled.div`
  padding: 2% 2% 0% 2%;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 24px;
`;

const StyledTitle = styled.h1`
  font-size: 3rem;
  color: #5B88B2;
  font-weight: bold;
  padding-top: 10%;
  padding-left: 4%;
  letter-spacing: normal;
  line-height: normal;
  font-family: 'HostGrotesk', sans-serif;
  text-align: left;
`;

const StyledText = styled.p`
  color: #122C4F;
  margin-top: 30px;
  letter-spacing: normal;
  line-height: 1.6;
  text-align: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
