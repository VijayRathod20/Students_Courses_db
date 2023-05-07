const courseQuery = require("../repositories/studentsQueries");

const addCourse = async (req,res)=>{
    const course = req.body;
    const data = await courseQuery.addCourse(course);
    res.json(data)
}

const getCoursesData = async (req,res)=>{
    const data = await courseQuery.getCoursesData();
    res.json(data)
}

const updateCourse = async (req,res)=>{
    const cid = req.params.id;
    const course = req.body;
    const data = await courseQuery.updateCourseData(course,cid);
    res.json(data)
}

module.exports = {
    addCourse,
    getCoursesData,
    updateCourse
}