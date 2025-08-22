const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

// GET all tasks
router.get("/", async (req, res) => {
  const tasks = await Task.find().sort({ order: 1 });
  res.json(tasks);
});
 // fetching a single task 
router.get("/:id" , async(req , res ) =>{

   try {
    const task = await Task.findById(req.params.id) ;
    if (!task ) return res.status(404).json ({msg: "Task not found "})
      res.json(task)
   }
   catch(err){
    res.status(500).json({error: err.message})
   }
});

// POST new task
router.post("/", async (req, res) => {
  const { title, duration } = req.body;
  const newTask = new Task({ title, duration });
  await newTask.save();
  res.json(newTask);
});

// this si to update the task 
// router.put("/:id" , async(req ,res) => {
//   try{
//     const {title , duration , order } = req.body ;
//     const updateTask =await Task.findbyIdAndUpdate(
//       req.params.id,
//       {title , duration , order } ,
//       {new:true}
//       if(!updatedTask) return res.sattus 
//     )`

//   }
//   catch {

//   }
// });



module.exports = router;
