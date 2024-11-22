import express from 'express';
import cors from 'cors'
const app =express()
app.use(cors())
const port = 3000


app.get("/",(req,res)=>{

    res.status(200).json({message:"hello from express"})

})
app.listen(port,()=>{
    console.log(`server running on port ${port}`)

});
