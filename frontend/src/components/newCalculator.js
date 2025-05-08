// Calculate overall attendance percentage based on unique dates (day-wise)
export const calculateDayWiseAttendancePercentage = (subjectAttendance) => {
    const attendanceByDate = {};

    subjectAttendance.forEach((attendance) => {
        if (!attendance.date) return;

        const dateKey = new Date(attendance.date).toISOString().split('T')[0]; // Format: YYYY-MM-DD

        // Mark present status per day (first occurrence takes priority)
        if (!attendanceByDate[dateKey]) {
            attendanceByDate[dateKey] = attendance.status === "Present" ? "Present" : "Absent";
        }
    });

    const totalDays = Object.keys(attendanceByDate).length;
    const presentDays = Object.values(attendanceByDate).filter(status => status === "Present").length;

    if (totalDays === 0) return 0;

    const percentage = (presentDays / totalDays) * 100;
    return percentage; // Return number without formatting
};
