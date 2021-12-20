// Library
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Models
import { UserModel } from "../../Database/user";

const Router = express.Router();

/*
Route:-    /signup
Desc:-     signup with gmail, and passwaqrd
params:-   none
Acces:-    public
Method:- POST
*/
Router.post("/signup", async (req, res) => {
  try {
    const { email, password, fullName, phoneNumber } = req.body.cridentials;

    // check whether user exist or not
    const checkUserByEmail = await UserModel.findOne({ email });
    const checkUserByPhone = await UserModel.findOne({ phoneNumber });

    if (checkUserByEmail || checkUserByPhone) {
      return res.json({ error: "User already exist!" });
    }

    //hash password
    const bcryptSalt = await bcrypt.genSalt(8);
    const hashedPassword = await bcrypt.hash(password, bcryptSalt);

    // save to DB
    await UserModel.create({
      ...req.body.cridentials,
      password: hashedPassword,
    });

    // generate JWT auth token
    const token = jwt.sign({ user: { fullName, email } }, "ZomotoAPP");

    //return
    return res.status(200).json({ token, status: "succes" });
  } catch (error) {
    return res.status(500).json({ error: error.massage });
  }
});

export default Router;
