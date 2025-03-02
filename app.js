import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";

import { PORT } from "./config/env.js";
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";
import subscriptionRouter from "./routes/subscriptionRoutes.js";
import connectToDB from "./database/connect.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";
import securityMiddleware from "./middlewares/securityMiddleware.js";


const app = express();

app.use(express.json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(securityMiddleware);

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/subscriptions", subscriptionRouter);

app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.send("Welcome to Subscription Tracker!");
});

app.listen(PORT, async () => {
  console.log(`Server Started on http://localhost:${PORT}`);
  await connectToDB();
});

export default app;
