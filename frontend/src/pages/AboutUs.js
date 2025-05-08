// About.jsx
import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Students from "../assets/class1.jpg"; // adjust path as needed

const About = () => {
  return (
    <StyledContainer>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <ResponsiveImage src={Students} alt="students" />
        </Grid>

        <Grid item xs={12} md={6}>
          <StyledPaper>
            <StyledTitle>ABOUT US</StyledTitle>
            <StyledText>
              Welcome to Eudora, a modern, intuitive, and powerful school management system designed to streamline administrative tasks, 
              enhance communication, and improve the overall efficiency of educational institutions.
              <br /><br />
              At Eudora, we believe that managing a school should be effortless, 
              so educators can focus on what truly matters—teaching and nurturing students. 
              Our platform integrates all essential school operations into one seamless, cloud-based solution, 
              making daily tasks faster, smarter, and more secure.
              <br /><br />
              Eudora was built to empower schools with technology that saves time, reduces costs, and improves productivity.
              We combine innovation with reliability to help educational institutions thrive in the digital age.
            </StyledText>
          </StyledPaper>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default About;

const StyledContainer = styled.div`
  background-color: rgb(255, 255, 255);
  padding: 2% 5%;
`;

const ResponsiveImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 75vh;
  object-fit: cover;
  border-radius: 8px;
`;

const StyledPaper = styled.div`
  padding: 1rem;
  text-align: center;
`;

const StyledTitle = styled.h1`
  font-size: 2.5rem;
  color: #5b88b2;
  font-weight: bold;
  text-align: center;
  font-family: 'HostGrotesk', sans-serif;
  margin-bottom: 1rem;
`;

const StyledText = styled.p`
  color: #122c4f;
  text-align: justify;
  font-size: 1rem;
  line-height: 1.6;
`;
