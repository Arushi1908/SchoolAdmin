import { Grid, } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Students from "../assets/class1.jpg";

const About = () => {
  return (
    <>
      <StyledContainer sx={{ width:'100%'}}>
      <Grid container spacing={2} sx={{ alignItems: 'center', margin: 0, pt: 0 }}>
      <Grid item xs={12} md={6} sx={{ mt: '-10%' }}>
          <img
            src={Students}
            alt="students"
            style={{ width: "100%", height: "75vh" }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <StyledPaper elevation={3}>
            <StyledTitle style={{ marginTop: '-25.5%', fontFamily:" 'HostGrotesk' " }}>
              <span>ABOUT US</span>
            </StyledTitle>
            <StyledText>
            Welcome to Eudora, a modern, intuitive, and powerful school management system designed to streamline administrative tasks, 
            enhance communication, and improve the overall efficiency of educational institutions.
            <br/>
            <br/>
            At Eudora, we believe that managing a school should be effortless, 
            so educators can focus on what truly matters—teaching and nurturing students. 
            Our platform integrates all essential school operations into one seamless, cloud-based solution, 
            making daily tasks faster, smarter, and more secure.
            <br/>
            <br/>
            Eudora was built to empower schools with technology that saves time, reduces costs, and improves productivity.
            We combine innovation with reliability to help educational institutions thrive in the digital age.
            </StyledText>
            
          </StyledPaper>
        </Grid>        
      </Grid>
      </StyledContainer>
    </>
  );
};

export default About;

const StyledContainer = styled.div`
  display: flex;
  background-color:rgb(255,255,255)) ;
  padding: 1% 2% 0% 2%;
  flexDirection: 'column';
  align-items: center;
   justify-content: center;
   
`;

const StyledTitle = styled.h1`
  font-size: 3rem;
  color: #5b88b2;
  /* font-family: "Manrope"; */
  font-weight: bold;
  letter-spacing: normal;
  line-height: normal;
  text-align: center;
  // padding-right: 25%;
`;

const StyledText = styled.p`
  /* color: #550080; */
  color: #122c4f;
  margin-top: 2%;
  letter-spacing: normal;
  line-height: normal;
  text-align: justify;
  padding-right: 5%;
  
`;

const StyledPaper = styled.div`
  margin: 0 auto ;
  text-align: center;
`;
