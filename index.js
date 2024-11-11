require("dotenv").config()
const express=require("express")
const app=express()

const githubnotes={
    "project": "Website Redesign",
    "client": "Acme Corp",
    "deadline": "2024-12-31",
    "team": [
      {
        "name": "Jane Doe",
        "role": "UI Designer",
        "hours_per_week": 20
      },
      {
        "name": "John Smith",
        "role": "Frontend Developer",
        "hours_per_week": 30
      }
    ],
    "tasks": [
      {
        "task_id": 1,
        "description": "Create wireframes",
        "status": "Completed"
      },
      {
        "task_id": 2,
        "description": "Develop homepage",
        "status": "In Progress"
      }
    ]
  }
  

app.get("/",(req,res)=>{
    res.send("Hello there")
})

app.get("/login",(req,res)=>{
    res.send("Welcome to my login page")
})
app.get("/signup",(req,res)=>{
    res.send("Github Data Added")
})

app.get("/github",(req,res)=>{
    res.json(githubnotes)
})

app.listen(process.env.port,()=>{
    console.log(`Listening at port ${process.env.port}!`)
})