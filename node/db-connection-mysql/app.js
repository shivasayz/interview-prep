import express from "express";
import db from "./db.js";

const app = express();
app.use(express.json());

// check the health
app.use("/health", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Hello from server! am running all good",
  });
});

// GET all the users
app.get("/users", async (req, res) => {
  try {
    const [rows] = await db.query(`SELECT * from users`);
    res.status(200).json({
      status: "success",
      data: {
        users: rows,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: "something went wrong...",
    });
  }
});

// POST the new user
app.post("/users", async (req, res) => {
  const { name, email } = req.body;
  try {
    const [result] = await db.query(
      `INSERT INTO users (name, email) VALUES (?, ?)`,
      [name, email],
    );
    res.status(201).json({
      status: "success",
      data: {
        id: result.insertId,
        name,
        email,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: err,
    });
  }
});

// GET user by ID
app.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await db.query(`SELECT * from users WHERE id = ?`, [id]);
    if (rows.length > 0) {
      res.status(200).json({
        status: "success",
        data: {
          rows,
        },
      });
    } else {
      res.status(404).json({
        status: "success",
        message: "user not found",
      });
    }
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: "something went wrong...",
    });
  }
});

// UPDATE user by ID
app.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    const [result] = await db.query(
      `UPDATE users SET name = ?, email = ? WHERE id = ?`,
      [name, email, id],
    );

    if (result.affectedRows == 0)
      res.status(400).json({
        status: "failed",
        message: "user not found",
      });

    res.status(201).json({
      status: "success",
      data: {
        id,
        name,
        email,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: err,
    });
  }
});

// DELETE user
app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await db.query(`DELETE FROM users WHERE id = ?`, [id]);
    if (result.affectedRows == 0)
      res.status(404).json({ status: "success", message: "user not found" });
    res.status(204).json({
      status: "success",
      message: "user deleted",
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: "something went wrong...",
    });
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
