const express = require('express'); 
const mongoose = require('mongoose'); 

const app = express();


mongoose.connect('mongodb://127.0.0.1:27017/courses')
  .then(() => {
    console.log('DB now is connected'); 
  })
  .catch((err) => {
    console.log('Error connecting to DB:', err); 
  });

const coursesschema = new mongoose.Schema({
  id: Number,
  name: String,
  duaration: String,
});
let coursesmodel = new mongoose.model("courses", coursesschema);

const studentsschema = new mongoose.Schema({
  student_id: Number,
  name: String,
  phone: String,
});
let studentsmodel = new mongoose.model("students", studentsschema);

const instructorsschema = new mongoose.Schema({
  instructor_id: Number,
  name: String,
  phone: String,
});
let instructorsmodel = new mongoose.model("instructors", instructorsschema);


let courses = [
  { id: 1, name: "python", duaration: "5 hours" },
  { id: 2, name: "JavaScript", duaration: "10 hours" },
  { id: 3, name: "Java", duaration: "15 hours" },
  { id: 4, name: "C#", duaration: "12 hours" },
  { id: 5, name: "HTML & CSS", duaration: "8 hours" },
  { id: 6, name: "React", duaration: "6 hours" },
  { id: 7, name: "Node.js", duaration: "7 hours" },
  { id: 8, name: "Angular", duaration: "9 hours" },
  { id: 9, name: "SQL", duaration: "4 hours" },
  { id: 10, name: "MongoDB", duaration: "5 hours" },
  { id: 11, name: "PHP", duaration: "10 hours" },
  { id: 12, name: "C++", duaration: "6 hours" },
  { id: 13, name: "Kotlin", duaration: "7 hours" },
  { id: 14, name: "Swift", duaration: "9 hours" },
  { id: 15, name: "Ruby", duaration: "8 hours" },
  { id: 16, name: "Django", duaration: "11 hours" },
  { id: 17, name: "Flask", duaration: "6 hours" },
  { id: 18, name: "Go", duaration: "12 hours" },
  { id: 19, name: "R", duaration: "5 hours" },
  { id: 20, name: "Matlab", duaration: "10 hours" },
];
courses.forEach(course => new coursesmodel(course).save());


let students = [
  { student_id: 1, name: "Ahmed Ali", phone: "01012345678" },
  { student_id: 2, name: "Sara Mohamed", phone: "01098765432" },
  { student_id: 3, name: "Omar Hassan", phone: "01123456789" },
  { student_id: 4, name: "Mona Ibrahim", phone: "01187654321" },
  { student_id: 5, name: "Khaled Saleh", phone: "01234567890" },
  { student_id: 6, name: "Nour Adel", phone: "01298765432" },
  { student_id: 7, name: "Yasmine Tarek", phone: "01512345678" },
  { student_id: 8, name: "Hany Mahmoud", phone: "01598765432" },
  { student_id: 9, name: "Eman Wael", phone: "01056789012" },
  { student_id: 10, name: "Ramy Samir", phone: "01167890123" },
  { student_id: 11, name: "Aya Khaled", phone: "01278901234" },
  { student_id: 12, name: "Mostafa Yasser", phone: "01589012345" },
  { student_id: 13, name: "Dina Fathy", phone: "01090123456" },
  { student_id: 14, name: "Ali Gamal", phone: "01101234567" },
  { student_id: 15, name: "Salma Hisham", phone: "01234567012" },
  { student_id: 16, name: "Tamer Ehab", phone: "01545670123" },
  { student_id: 17, name: "Heba Ahmed", phone: "01056701234" },
  { student_id: 18, name: "Amr Youssef", phone: "01167801245" },
  { student_id: 19, name: "Laila Sami", phone: "01278901256" },
  { student_id: 20, name: "Ola Hamdy", phone: "01589012367" },
];
students.forEach(student => new studentsmodel(student).save());


let instructors = [
  { instructor_id: 1, name: "Mohamed Saeed", phone: "01022334455" },
  { instructor_id: 2, name: "Hossam Ebrahim", phone: "01055667788" },
  { instructor_id: 3, name: "Nada Hassan", phone: "01122334455" },
  { instructor_id: 4, name: "Rania Mahmoud", phone: "01155667788" },
  { instructor_id: 5, name: "Omar Taha", phone: "01222334455" },
  { instructor_id: 6, name: "Khaled Adel", phone: "01255667788" },
  { instructor_id: 7, name: "Mona Fares", phone: "01522334455" },
  { instructor_id: 8, name: "Hani Wael", phone: "01555667788" },
  { instructor_id: 9, name: "Eman Shady", phone: "01066778899" },
  { instructor_id: 10, name: "Ramy Farid", phone: "01166778899" },
  { instructor_id: 11, name: "Aya Sameh", phone: "01266778899" },
  { instructor_id: 12, name: "Dina Nabil", phone: "01566778899" },
  { instructor_id: 13, name: "Ahmed Magdy", phone: "01077889900" },
  { instructor_id: 14, name: "Yasmine Hany", phone: "01177889900" },
  { instructor_id: 15, name: "Ola Ahmed", phone: "01277889900" },
  { instructor_id: 16, name: "Tarek Fathy", phone: "01577889900" },
  { instructor_id: 17, name: "Heba Ayman", phone: "01088990011" },
  { instructor_id: 18, name: "Ali Salah", phone: "01188990011" },
  { instructor_id: 19, name: "Laila Khaled", phone: "01288990011" },
  { instructor_id: 20, name: "Amr Hamdy", phone: "01588990011" },
];
instructors.forEach(instructor => new instructorsmodel(instructor).save());





app.get('/courses', async (req, res) => {
  let allcourses = await coursesmodel.find();
  res.status(200).json(allcourses);
});


app.get('/courses/:id', async (req, res) => {
  let course = await coursesmodel.findOne({ id: req.params.id });
  if (!course) {
    return res.status(404).send("Course not found");
  }
  res.status(200).json(course);
});


app.post('/courses', express.json(), async (req, res) => {
  const newCourse = new coursesmodel(req.body);
  await newCourse.save();
  res.status(201).send("Course created successfully");
});


app.put('/courses/:id', express.json(), async (req, res) => {
  let course = await coursesmodel.findOne({ id: req.params.id });
  if (!course) {
    return res.status(404).send("Course not found");
  }
  Object.assign(course, req.body);
  await course.save();
  res.status(200).send("Course updated successfully");
});


app.delete('/courses/:id', async (req, res) => {
  try {
    const course = await coursesmodel.findOneAndDelete({ id: req.params.id });
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.status(200).json({ message: "Course deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});





app.get('/students', async (req, res) => {
  let allstudents = await studentsmodel.find();
  res.status(200).json(allstudents);
});


app.get('/students/:id', async (req, res) => {
  let student = await studentsmodel.findOne({ student_id: req.params.id });
  if (!student) {
    return res.status(404).send("Student not found");
  }
  res.status(200).json(student);
});

app.post('/students', express.json(), async (req, res) => {
  const newStudent = new studentsmodel(req.body);
  await newStudent.save();
  res.status(201).send("Student created successfully");
});


app.put('/students/:id', express.json(), async (req, res) => {
  let student = await studentsmodel.findOne({ student_id: req.params.id });
  if (!student) {
    return res.status(404).send("Student not found");
  }
  Object.assign(student, req.body);
  await student.save();
  res.status(200).send("Student updated successfully");
});

app.delete('/students/:id', async (req, res) => {
  try {
    const student = await studentsmodel.findOneAndDelete({ student_id: req.params.id });
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});





app.get('/instructors', async (req, res) => {
  let allinstructors = await instructorsmodel.find();
  res.status(200).json(allinstructors);
});


app.get('/instructors/:id', async (req, res) => {
  let instructor = await instructorsmodel.findOne({ instructor_id: req.params.id });
  if (!instructor) {
    return res.status(404).send("Instructor not found");
  }
  res.status(200).json(instructor);
});


app.post('/instructors', express.json(), async (req, res) => {
  const newInstructor = new instructorsmodel(req.body);
  await newInstructor.save();
  res.status(201).send("Instructor created successfully");
});


app.put('/instructors/:id', express.json(), async (req, res) => {
  let instructor = await instructorsmodel.findOne({ instructor_id: req.params.id });
  if (!instructor) {
    return res.status(404).send("Instructor not found");
  }
  Object.assign(instructor, req.body);
  await instructor.save();
  res.status(200).send("Instructor updated successfully");
});

app.delete('/instructors/:id', async (req, res) => {
  try {
    const instructor = await instructorsmodel.findOneAndDelete({ instructor_id: req.params.id });
    if (!instructor) {
      return res.status(404).json({ message: "Instructor not found" });
    }
    res.status(200).json({ message: "Instructor deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



app.listen(4000, () => {
  console.log('Server is running on port 4000');
});