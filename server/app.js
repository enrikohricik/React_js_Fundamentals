const express = require("express");
const cors = require("cors");

const studentRouter = require("./controller/student-controller");
const classroomRouter = require("./controller/classroom-controller");
const subjectRouter = require("./controller/subject-controller");
const gradeRouter = require("./controller/grade-controller");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/student", studentRouter);
app.use("/classroom", classroomRouter);
app.use("/subject", subjectRouter);
app.use("/grade", gradeRouter);

app.get("/*", (req, res) => {
  res.send("Unknown path!");
});

// Export Express app
module.exports = app;
