import axios from 'axios';
import {
    getRequest,
    getSuccess,
    getFailed,
    getError,
    postDone,
    doneSuccess
} from './teacherSlice';
import { getFailedTwo, setSclasses } from '../sclassRelated/sclassSlice';

export const getAllTeachers = (id) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const result = await axios.get(`http://localhost:5000/Teachers/${id}`);
        if (result.data.message) {
            dispatch(getFailed(result.data.message));
        } else {
            dispatch(getSuccess(result.data));
        }
    } catch (error) {
        dispatch(getError(error));
    }
}

export const getTeacherDetails = (id) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const result = await axios.get(`http://localhost:5000/Teacher/${id}`);
        if (result.data) {
            dispatch(doneSuccess(result.data));
        }
    } catch (error) {
        dispatch(getError(error));
    }
}

export const updateTeachSubject = (teacherId, teachSubject) => async (dispatch) => {
    dispatch(getRequest());

    try {
        await axios.put(`http://localhost:5000/TeacherSubject`, { teacherId, teachSubject }, {
            headers: { 'Content-Type': 'application/json' },
        });
        dispatch(postDone());
    } catch (error) {
        dispatch(getError(error));
    }
}

export const getTeacherSclasses = (teacherID) => async (dispatch) => {
    dispatch(getRequest());
  
    try {
      const result = await axios.get(`http://localhost:5000/TeacherClassList/${teacherID}`);
      console.log("API Response:", result.data);

      if (result.data.message) {
        dispatch(getFailedTwo(result.data.message));
      } else {
        dispatch(setSclasses(result.data));
      }
    } catch (error) {
      dispatch(getError(error));
    }
  };
  