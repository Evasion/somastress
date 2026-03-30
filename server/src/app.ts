import express from "express";
import cors from "cors";
import routes from "./routes/index";
import authRoutes from "./routes/auth";

const app = express();

// CORS - allow Angular dev server
app.use(
  cors({
    origin: ["http://localhost:4200", "http://localhost:4000"],
    credentials: true,
  })
);

app.use(express.json());

// API routes
app.use("/api", routes);
app.use("/api/auth", authRoutes);

export default app;
