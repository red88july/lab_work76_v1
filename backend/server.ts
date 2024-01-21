import express from 'express';
import messageRouter from "./routers/messages";
import bodyParser from 'body-parser';
import cors from 'cors';
import fileDB from "./fileDB";

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use('/messages', messageRouter)
app.use(cors());

const run = async () => {
    await fileDB.init();
    app.listen(port, () => {
        console.log(`Server is running ${port}`);
    });
}

void run();