import express from "express";
import cors from "cors";
/* cors stands for cross origin request => requst accept comming from 
other than your origin  */
import helmet from "helmet";
// for security

const zomoto = express();

// Application  middlewares
zomoto.use(express.json());
zomoto.use(express.urlencoded({ extended: false }));
zomoto.use(helmet());
zomoto.use(cors());

zomoto.get("/", (req, res) => res.json({ massage: "Setup succes" }));

zomoto.listen(4000, () => console.log("Server is running"));
