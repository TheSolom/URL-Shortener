import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";

import urlRoutes from "./routes/url.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));

app.use("/url", urlRoutes);

app.use((error, _req, res) => {
  console.error(error);

  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ error: { message } });
});

try {
  await mongoose.connect(process.env.MONGO_URI);
} catch (err) {
  console.error(err);
}

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server is running on port ${ PORT }`));
