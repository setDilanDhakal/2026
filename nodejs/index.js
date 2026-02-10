import express from 'express'
import dotenv from 'dotenv'

dotenv.config({
    path:'./.env'
})

const app = express();
const port = process.env.PORT;


app.use('/',(req,res)=>{
    res.send("this is default page");
})

app.use('/home',(req,res)=>{
    res.send('this is home page')
})
app.use('/about',(req,res)=>{
    res.send('this is about page')
})
app.use('/contact',(req,res)=>{
    res.send('this is contact page')
})

app.listen(port,()=>{
    console.log("Server is running at",port)
});


