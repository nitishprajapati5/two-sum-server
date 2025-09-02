import express from "express";

const app = express();

// Root endpoint
app.get("/", (req, res) => {
  return res.json({ message: "Server is up and running" });
});

// Random sum endpoint
app.get("/sum", (req, res) => {
  const a = Math.floor(Math.random() * 100);
  const b = Math.floor(Math.random() * 100);

  return res.json({ a, b, sum: a + b });
});


app.listen(3000, () => {
  console.log("✅ Server Running on http://localhost:3000");
});
