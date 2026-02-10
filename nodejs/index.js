import express from "express";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

const app = express();
const port = process.env.PORT;



// app.use("/", (req, res) => {
//   const result = {
//     name: "dilan",
//     age: 22,
//   };
//   res
//     .status(201)
//     .json({ status: true, message: "User is created", data: result });
// });

app.get("/user", (req, res) => {
  const user = {
    id: "123",
    name: "Dilan",
    email: "dilan@gmail.com",
    role: "admin",
    isVerified: true,
  };

  res
    .status(200)
    .json({ status: true, message: "User successfully send", data: user });
});

// app.use('/land',(req,res)=>{
//     res.send([1,2,3,4])
// })
// app.use('/about',(req,res)=>{
//     res.send('this is about page..')
// })
// app.use('/contact',(req,res)=>{
//     res.send('this is contact page.')
// })

app.listen(port, () => {
  console.log("Server is running at", port);
});
