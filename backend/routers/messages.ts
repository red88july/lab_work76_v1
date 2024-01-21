import {Router} from "express";
import crypto from "crypto";
import {Message, RequestPostMessage} from "../types";
import fileDB from "../fileDB";

const messageRouter = Router();

messageRouter.post('/', async (req, res) => {

    if (!('author' in req.body) || !('message' in req.body)) {
        return res.status(400).send({error: `Invalid key on post request`});
    }

    if (req.body.author === '' || req.body.message === '') {
        return res.status(400).send({error: `Author or message value is not to be and empty`});
    }

    const PostMessage: Message = {
        author: req.body.author,
        message: req.body.message,
    }

    const newMessage = await fileDB.addItem(PostMessage);
    res.json(newMessage);
});

messageRouter.get('/', async (req, res) => {
    const getAllMessages = await fileDB.getItems();

    console.log(getAllMessages);

    res.json(getAllMessages);
});

export default messageRouter;