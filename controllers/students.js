const studentsQueries = require('../repositories/studentsQueries')

const Insert = async (req, res) => {
    const student = req.body;
    const data =  await studentsQueries.addStudent(student);
    res.json(data);
}

const getStudentsData = async (req, res) => {
    const data = await studentsQueries.getStudentsData();
    res.json(data);
}

const updateStudent = async (req, res) => {
    const sid = req.params.id;
    const student = req.body;
    const data = await studentsQueries.updateStudentData(student,sid);
    res.json(data);
}

module.exports = {
    Insert,
    getStudentsData,
    updateStudent
}
