const express = require("express");
const cors = require("cors");

const studentRouter = require("./controller/student-controller");
const classroomRouter = require("./controller/classroom-controller");
const subjectRouter = require("./controller/subject-controller");
const gradeRouter = require("./controller/grade-controller");

const app = express();

// Middleware for JSON parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS configuration - Allow frontend domain
app.use(cors({
  origin: "https://react-js-fundamentals-client.vercel.app", // Povoliť iba frontendovú URL
  methods: ["GET", "POST", "PUT", "DELETE"], // Povolené HTTP metódy
  allowedHeaders: ["Content-Type", "Authorization"], // Povolené hlavičky
  credentials: true // Ak používate cookies alebo autentifikáciu
}));

// Middleware na logovanie požiadaviek (voliteľné)
app.use((req, res, next) => {
  console.log(`Received request: ${req.method} ${req.url}`);
  next();
});

// Root route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// API routes
app.use("/student", studentRouter);
app.use("/classroom", classroomRouter);
app.use("/subject", subjectRouter);
app.use("/grade", gradeRouter);

// Fallback route for unknown paths
app.get("/*", (req, res) => {
  res.status(404).send("Unknown path!");
});

// Export Express app
module.exports = app;
