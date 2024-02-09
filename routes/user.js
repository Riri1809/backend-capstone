import express from "express";
import {Router} from "express";
import User from "../models/user.js";
//import jwt from "jsonwebtoken";

const router = new Router();
// register a new user
router.post("/users/register", async (req, res) => {
    const { username,email, password } = req.body;
  
    try {
      // check if the username is already taken
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ message: "Username is already taken" });
      }
      
      // create a new user
      const newUser = new User({
        username,
        email,
        password
      });
  
      // save the user to the database
      const savedUser = await newUser.save();
  
      res.status(201).json(savedUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  

export default router;