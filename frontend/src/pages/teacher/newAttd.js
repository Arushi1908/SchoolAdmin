import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSclasses, getClassStudents } from '../../redux/sclassRelated/sclassHandle';
import { updateStudentFields } from '../../redux/studentRelated/studentHandle';
import {
  Container, Typography, Select, MenuItem, FormControl, InputLabel, CircularProgress,
  Button, Box
} from '@mui/material';
import TableTemplate from '../../components/TableTemplate';
import { getTeacherSclasses } from '../../redux/teacherRelated/teacherHandle';

const Attendance = () => {
  const dispatch = useDispatch();
  const { sclassesList, sclassStudents, loading: sclassesLoading, sclassStudentsLoading } = useSelector((state) => state.sclass);
  const { currentUser } = useSelector((state) => state.user);
  const adminID = currentUser._id;

  const [selectedClassId, setSelectedClassId] = useState('');
  const [status, setStatus] = useState('');
  const [studentID, setStudentID] = useState("");
  const [loader, setLoader] = useState(false)

  // Fetch classes on mount
  useEffect(() => {
    console.log("Fetching classes...");
    dispatch(getTeacherSclasses(currentUser._id));
  }, [currentUser._id, dispatch]);
  

  // Handle class selection and dispatch student fetch
  const handleClassChange = (e) => {
    const classId = e.target.value;
    setSelectedClassId(classId);
    dispatch(getClassStudents(classId));
  };

  // Define table columns
  const studentColumns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'rollNum', label: 'Roll Number', minWidth: 100 },
    // { id: 'attendance', label: 'Attendance', minWidth: 100 }, // New column for Present/Absent buttons
  ];

  // Map students to rows
  const studentRows = sclassStudents.map((student) => ({
    name: student.name,
    rollNum: student.rollNum,
    id: student._id,
  }));

  const fields = { status, date: new Date().toISOString() }

  // Update student attendance (Present/Absent)
  const submitHandler = (event) => {
          event.preventDefault()
          setLoader(true)
          dispatch(updateStudentFields(studentID, fields, "StudentAttendance"))
      }

      const AttendanceButtons = ({ row }) => {
        const handleAttendance = (newStatus) => {
          setStatus(newStatus);
          setStudentID(row.id);
      
          const fields = {
            status: newStatus,
            date: new Date().toISOString(),
          };
      
          setLoader(true);
          dispatch(updateStudentFields(row.id, fields, "StudentAttendance"));
        };
      
        return (
          <Box display="flex" gap={1}>
            <Button
              variant="contained"
              color="success"
              onClick={() => handleAttendance("Present")}
            >
              Present
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => handleAttendance("Absent")}
            >
              Absent
            </Button>
          </Box>
        );
      };
      

  return (
    <Container>
      <Typography variant="h5" sx={{ mb: 2 }}>Mark Attendance</Typography>

      {/* Class dropdown */}
      {sclassesLoading ? (
        <CircularProgress />
      ) : (
        <FormControl fullWidth sx={{ my: 2 }}>
          <InputLabel>Select Class</InputLabel>
          <Select value={selectedClassId} onChange={handleClassChange}>
            {sclassesList.map((sclass) => (
              <MenuItem key={sclass._id} value={sclass._id}>
                {sclass.sclassName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}

      {/* Student list loading and table */}
      {selectedClassId && (
        sclassStudentsLoading ? (
          <CircularProgress />
        ) : (
          <>
            <Typography variant="h6" gutterBottom>Students List:</Typography>
            <TableTemplate columns={studentColumns} rows={studentRows} buttonHaver={AttendanceButtons} />
          </>
        )
      )}
    </Container>
  );
};

export default Attendance;
