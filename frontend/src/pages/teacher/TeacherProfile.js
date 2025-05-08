import React from 'react'
import styled from 'styled-components';
import { Card, CardContent, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const TeacherProfile = () => {
  const { currentUser, response, error } = useSelector((state) => state.user);

  if (response) { console.log(response) }
  else if (error) { console.log(error) }

  const teachSclass = currentUser.teachSclass
  const teachSubject = currentUser.teachSubject
  const teachSchool = currentUser.school

  return (
    <>
      <ProfileCard sx={{bgcolor:' #122C4F', borderRadius:'10%',}}>
        <ProfileCardContent >
          <ProfileText>Name: {currentUser.name}</ProfileText>
          <ProfileText>Email: {currentUser.email}</ProfileText>
          <ProfileText>Class: {teachSclass.sclassName}</ProfileText>
          <ProfileText>Subject: {teachSubject.subName}</ProfileText>
          <ProfileText>School: {teachSchool.schoolName}</ProfileText>
        </ProfileCardContent>
      </ProfileCard>
    </>
  )
}

export default TeacherProfile

const ProfileCard = styled(Card)`
  margin: 10% auto;
  width: 25%;
  height: 40%;
  border-radius: 20%;
  background-color: #122C4F; 
  align-content : center;
`;

const ProfileCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #122C4F;
  align-text: center;
  
`;

const ProfileText = styled(Typography)`
  margin: 10px;
  color: #9cb6d1;
  font-size: 120%;
`;