import {promises as fs} from 'fs';
import {Message, RequestPostMessage} from "./types";
import crypto from "crypto";

const fileName = './db.json';

let data: RequestPostMessage[] = [];

const fileDB = {

    async init() {
        try {
            const fileContents = await fs.readFile(fileName);
            data = JSON.parse(fileContents.toString());
        } catch (e) {
            data = [];
        }
    },

    async getItems() {
        return data.slice(-30).reverse();
    },

    async addItem(item: Message) {
        const id = crypto.randomUUID();
        const datetime = new Date().toISOString();
        const message = {id, datetime, ...item};

        data.push(message);
        await this.save();

        return message;
    },

    async save() {
        return fs.writeFile(fileName, JSON.stringify(data));
    },
}

export default fileDB;