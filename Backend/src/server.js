import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowHeaders: ["Content-type", "Authorization"],
  credentials: true
};

app.use(express.json());
app.use(cors(corsOptions));

app.get("/", (req, res) => { res.json({message : "Hello World"}); });
app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server: Running on ${PORT}`)
})
