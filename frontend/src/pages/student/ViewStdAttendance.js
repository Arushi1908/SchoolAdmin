import React, { useEffect, useState } from 'react'
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { BottomNavigation, BottomNavigationAction, Box, Button, Collapse, Paper, Table, TableBody, TableHead, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails } from '../../redux/userRelated/userHandle';
import { calculateOverallAttendancePercentage } from '../../components/attendanceCalculator';  // Updated to calculate day-wise attendance percentage

import CustomBarChart from '../../components/CustomBarChart'

import InsertChartIcon from '@mui/icons-material/InsertChart';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import TableChartIcon from '@mui/icons-material/TableChart';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import { StyledTableCell, StyledTableRow } from '../../components/styles';
import { calculateDayWiseAttendancePercentage } from '../../components/newCalculator';

const ViewStdAttendance = () => {
    const dispatch = useDispatch();

    const [openStates, setOpenStates] = useState({});

    const handleOpen = (subId) => {
        setOpenStates((prevState) => ({
            ...prevState,
            [subId]: !prevState[subId],
        }));
    };

    const { userDetails, currentUser, loading, response, error } = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(getUserDetails(currentUser._id, "Student"));
    }, [dispatch, currentUser._id]);

    if (response) { console.log(response) }
    else if (error) { console.log(error) }

    const [attendanceData, setAttendanceData] = useState([]);
    const [selectedSection, setSelectedSection] = useState('table');

    useEffect(() => {
        if (userDetails) {
            setAttendanceData(userDetails.attendance || []);  // Assuming attendance is now day-wise
        }
    }, [userDetails])

    // Calculate overall attendance based on day-wise data (Present vs Absent)
    const overallAttendancePercentage = calculateDayWiseAttendancePercentage(attendanceData);

    const handleSectionChange = (event, newSection) => {
        setSelectedSection(newSection);
    };

    const renderTableSection = () => {
        return (
            <>
                <Typography variant="h4" align="center" gutterBottom>
                    Attendance
                </Typography>
                <Table>
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell customHeadBg=' #122C4F' customHeadColor=' white' sx={{ fontSize: '100%' }}>Date</StyledTableCell>
                            <StyledTableCell customHeadBg=' #122C4F' customHeadColor=' white' sx={{ fontSize: '100%' }}>Status</StyledTableCell>
                           
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {attendanceData.map((data, index) => {
                            const date = new Date(data.date);
                            const dateString = date.toString() !== "Invalid Date" ? date.toISOString().substring(0, 10) : "Invalid Date";
                            return (
                                <StyledTableRow key={index}>
                                    <StyledTableCell>{dateString}</StyledTableCell>
                                    <StyledTableCell>{data.status}</StyledTableCell>
                                    
                                </StyledTableRow>
                            );
                        })}
                    </TableBody>
                </Table>
                <div>
                    Overall Attendance Percentage: {overallAttendancePercentage.toFixed(2)}%
                </div>
            </>
        );
    }

    const renderChartSection = () => {
        // Prepare the chart data
        const chartData = attendanceData.map((data) => ({
            name: data.date,
            value: data.status === 'Present' ? 100 : 0,  // 100% if present, 0% if absent
        }));

        return (
            <>
                <CustomBarChart chartData={chartData} dataKey="value" />
            </>
        );
    };

    return (
        <>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div>
                    {attendanceData && Array.isArray(attendanceData) && attendanceData.length > 0 ? (
                        <>
                            {selectedSection === 'table' && renderTableSection()}
                            {selectedSection === 'chart' && renderChartSection()}

                            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                                <BottomNavigation value={selectedSection} onChange={handleSectionChange} showLabels>
                                    <BottomNavigationAction
                                        label="Table"
                                        value="table"
                                        icon={selectedSection === 'table' ? <TableChartIcon /> : <TableChartOutlinedIcon />}
                                    />
                                    <BottomNavigationAction
                                        label="Chart"
                                        value="chart"
                                        icon={selectedSection === 'chart' ? <InsertChartIcon /> : <InsertChartOutlinedIcon />}
                                    />
                                </BottomNavigation>
                            </Paper>
                        </>
                    ) : (
                        <Typography variant="h6" gutterBottom component="div">
                            Currently You Have No Attendance Details
                        </Typography>
                    )}
                </div>
            )}
        </>
    );
}

export default ViewStdAttendance;
