import express from "express";
import cors from 'cors';
import morgan from "morgan";
import connect from "./database/conn.js";
import router from "./router/route.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powerd-by');

const port = 8000;

app.get('/',(req,res) => {
    res.status(201).json("Home GET Request");
})

//api routes
app.use('/api', router);

connect().then(() => {
    try {
        app.listen(port,() => {
            console.log(`Server connected to http://localhost:${port}`);
        })
    } catch (error) {
        console.log('Cannot connnect to the server');
    }
}).catch(error => {
    console.log("Invalid Database Connection!!");
})







