import express from "express";

import { PORT } from "./config/env.js";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import connectToDB from "./database/connect.js";

const app = express();

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/subscriptions", subscriptionRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Subscription Tracker!");
});

app.listen(PORT, async () => {
  console.log(`Server Started on http://localhost:${PORT}`);
  await connectToDB();
});

export default app;
