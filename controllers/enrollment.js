const enrollmentQuery = require("../repositories/studentsQueries");


const addEnrollment = async (req,res) =>{
    const {name,email,phone,course} = req.body;
    const student = {
        name:name,
        email:email,
        phone:phone
    }

    const data = await enrollmentQuery.addEnrollment(student);

    res.json(data);

}

const getEnrollmentData = async (req,res) =>{
    const data = await enrollmentQuery.getEnrollmentData();
    res.json(data);
}

const updateEnrollment = async (req,res) =>{
    const sid = req.params.id;
    const cid = req.body.courseId;
    const data = await enrollmentQuery.updateEnrollmentData(sid,cid);
    res.json(data);
}

module.exports = {
    addEnrollment,
    getEnrollmentData  ,
    updateEnrollment 
}