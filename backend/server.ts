import express from 'express';
import cors from 'cors';
import messageRouter from "./routers/messages";
import bodyParser from 'body-parser';
import fileDB from "./fileDB";

const app = express();
const port = 8000;

app.use(cors());
app.use(bodyParser.json());
app.use('/messages', messageRouter)

const run = async () => {
    await fileDB.init();
    app.listen(port, () => {
        console.log(`Server is running ${port}`);
    });
}

void run();