import express from "express";
import cors from 'cors';
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powerd-by');



const port = 8000;

app.get('/',(req,res) => {
    res.status(201).json("Home GET Request");
})

app.listen(port,() => {
    console.log(`Server connected to http:://localhost:${port}`);
})





