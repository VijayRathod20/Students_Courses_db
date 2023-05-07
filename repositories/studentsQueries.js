const Model = require('../models');
const studentModel = Model.student;
const courseModel = Model.course;
const enrollmentModel = Model.enrollment;

console.log(courseModel);

const addStudent = async (student) =>{
    const result = await studentModel.create(student);
    return result;
}

const addCourse = async(course)=>{
    const result = await courseModel.create(course);
    return result;
}

const addEnrollment = async(student)=>{
    const studentData = await studentModel.create(
        {
            name: student.name,
            email: student.email,
            phone: student.phone, 
        }
        );
        if(studentData){
            await enrollmentModel.create({
                studentId: studentData.id,
                courseId: 1
            })
        }
}


const getStudentsData = async() =>{
    const result = await studentModel.findAll();
    return result;
};

const getCoursesData = async() =>{
    const result = await courseModel.findAll();
    return result;
}

const getEnrollmentData = async() =>{
    const result = await enrollmentModel.findAll({
        include: [
            {
                model: courseModel,studentModel
            }
        ]
    });

    // const result = courseModel.findOne({
    //     where: { name: 'flutter' },
    //     include: [{ model:  studentModel}]
    //   })
    return result;
}

const updateStudentData = async(student,sid)=>{
    const result = await studentModel.update(student,{
        where: {id: sid}
    });
    return result;
}

const updateCourseData = async(course,cid)=>{
    const result = await courseModel.update(course,{
        where: {id: cid}
    });
    return result;
}

const updateEnrollmentData = async(sid,cid)=>{
    const result = await enrollmentModel.update({
        courseId: cid
    },{
        where: {studentId: sid}
    });
    return result;

}

module.exports = {
    addStudent,
    addCourse,
    addEnrollment,
    getStudentsData,
    getCoursesData,
    getEnrollmentData,
    updateStudentData,
    updateCourseData,
    updateEnrollmentData
};