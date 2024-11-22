import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config()
const port = 3001;

const app = express();
app.use(cors());
app.use(express.json())
 

app.get('/api', (req, res) => {
    console.log("req comming")
  res.status(200).json({ message: 'hello from express' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
mongoose.connect(process.env.ATLAS_URI).then(()=>{
    console.log("connected succ")
    }).catch((error)=>{
      console.log("--------------------------------------------------")
      console.log(error)
    })

