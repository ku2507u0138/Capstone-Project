const express = require("express");
const mysql = require("mysql2");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve frontend
app.use(express.static(path.join(__dirname, "public")));

// MySQL connection (XAMPP default)
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // XAMPP default = empty
  database: "event_registration"
});

// Connect to DB
db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err);
  } else {
    console.log("✅ Connected to MySQL (XAMPP)");
  }
});

// API: Register user
app.post("/api/register", (req, res) => {
  const { full_name, email, phone, event_name } = req.body;

  if (!full_name || !email || !event_name) {
    return res.json({ message: "All fields are required!" });
  }

  const sql = `
    INSERT INTO registrations (full_name, email, phone, event_name)
    VALUES (?, ?, ?, ?)
  `;

  db.query(sql, [full_name, email, phone, event_name], (err, result) => {
    if (err) {
      console.error(err);
      return res.json({ message: "Database error!" });
    }

    res.json({ message: "✅ Registration successful!" });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});