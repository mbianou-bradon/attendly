export interface User {
    matriculeNumber : string,
    studentName : string,
    email : string,
    phoneNumber : string,
    faculty : string,
    department : string,
    password : string,
    confirmPassword : string
    institutionalEmail : string
}

export interface Course {
    courseTitle : string,
    courseCode : string, 
    openForAttendance : boolean
}

export interface Attendance {
    studentMatriculeNumber : string,
    courseCode : string,
    dateSigned : Date
}