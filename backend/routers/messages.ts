import {Router} from "express";
import {Message} from "../types";
import fileDB from "../fileDB";

const messageRouter = Router();

messageRouter.post('/', async (req, res, next) => {

    try {
        if (!('author' in req.body) || !('message' in req.body)) {
            return res.status(422).send({error: `Invalid key on post request`});
        }

        if (req.body.author === '' || req.body.message === '') {
            return res.status(422).send({error: `Author or message value is not to be and empty`});
        }

        const PostMessage: Message = {
            author: req.body.author,
            message: req.body.message,
        }

        const newMessage = await fileDB.addItem(PostMessage);
        res.json(newMessage);
    } catch (e) {
        next(e);
    }
});

messageRouter.get('/', async (req, res, next) => {
    try {
        const getAllMessages = await fileDB.getItems();
        const queryDate = req.query.datetime as string;

        if (queryDate !== undefined) {
            const date = new Date(queryDate);

            if (isNaN(date.getTime())) {
                return res.status(400).send({ error: `Invalid datetime format` });
            }

            const filteredMessages = getAllMessages.filter(post => {
                const messageTimestamp = new Date(post.datetime);
                return messageTimestamp > date;
            });

            if (filteredMessages.length === 0) {
                return res.json([]);
            } else {
                return res.json(filteredMessages);
            }

        } else {
            res.json(getAllMessages);
        }
    } catch (e) {
        next(e);
    }
});

export default messageRouter;