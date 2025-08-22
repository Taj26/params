import express from "express";

const app = express();

app.use(express.json()) // This line imp for post,put,delete apis

const PORT = 5001;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/global",(req,res)=>{
  res.send("Hello Global")
})

app.get("/global",(req,res)=>{
  res.send("Hello Students")
})

app.post("/register",(req,res)=>{
    let userData = req.body
    console.log(userData)
    // res.json(userData)
    // // or
    res.json({msg:"user registered successfully"})
})

// app.post("/students/22U61A0580",(req,res)=>{
//   res.send("Hello taj")
// })
// app.post("/students/22U61A0567",(req,res)=>{
//   res.send("Hello bhagya")
// })

// req.params

app.post("/students/:roll",(req,res)=>{
  let id = req.params.roll;
  console.log(id)
  res.json(id)
})
app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})