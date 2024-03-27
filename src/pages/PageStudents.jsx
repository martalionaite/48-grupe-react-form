import { useState } from 'react';
import { StudentList } from "../components/students/StudentList";
import { StudentsNoData } from "../components/students/StudentsNoData";

export function PageStudents() {
    const [studentData, setStudentData] = useState([]);
        const dataURL = 'https://raw.githubusercontent.com/martalionaite/48-grupe-react-form/main/public/students.json';

        useEffect(() => {
            fetch(dataURL)
                .then(res => res.jason())
                .then(data =>setStudentData(data))
                .catch( e => console.error(e));
        }, []);
    return (
        <>
            <h1 className="page-title">Students</h1>
            <p className="page-description">Students attending this class:</p>
            {studentData.length === 0 ? <StudentsNoData /> : <StudentList />}
        </>
    );
}