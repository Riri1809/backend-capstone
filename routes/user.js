import express from "express";
import {Router} from "express";
import User from "../models/user.js";
//import order from "../models/orders.js";

/**
 *  Get all users
 */
const router = new Router();

router.get("/", async (req, res) => {
    try {
      const user = await User.find();
      res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });


  /**
 * GET/:id
 * @description returns user by id
 */
  router.get('/:userId', async (req, res) => {
    const userId = req.params.userId;
  
    try {
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ error: 'user not found' });
      }
  
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
/**
 * POST /
 * @description creates a new user
 */
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      const newUser = await User.create(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  /**
 * PUT /:id
 */
router.put("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { body } = req;
      
      const updatedUser = await User.findByIdAndUpdate(id, body, { new: true });
      res.json(updatedUser);
  
    } catch (error) {
      console.log(error);
      res.json({msg: 'User Not found!'})
    }
  });

  /***
   * delete/:id
   * Delete a product
   */
   
router.delete('/:userId', async (req, res) => {
  const userId = req.params.userId;

  try {
    const user = await User.findByIdAndDelete(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



  export default router;