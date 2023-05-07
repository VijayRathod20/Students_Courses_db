const express = require('express');
const router = express.Router();

const studentController = require('../controllers/students');
const courseController = require('../controllers/courses');
const enrollmentController = require('../controllers/enrollment')

router.post('/addStudent',studentController.Insert);

router.post('/addCourse',courseController.addCourse);

router.post('/addEnrollment',enrollmentController.addEnrollment);

router.get('/getStudents',studentController.getStudentsData);

router.get('/getCourses',courseController.getCoursesData);

router.get('/getEnrollment',enrollmentController.getEnrollmentData);

router.put('/updateStudent/:id',studentController.updateStudent);

router.put('/updateCourse/:id',courseController.updateCourse);

router.put('/updateEnrollment/:id',enrollmentController.updateEnrollment);


module.exports = router;