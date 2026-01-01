import { MongoClient, Db } from 'mongodb';
import dotenv from "dotenv";
dotenv.config();


const client = new MongoClient(process.env.MONGO_URI);

/**
 * @type {Db | null}
 */
let db = null;

/**
 * @returns {Promise<Db>}
 */
export default async function connect() {
    try {
        if (!db) {
            await client.connect();
            db = client.db("two_db_project");
            console.log("Connected to MongoDB");
        }
        return db;
    } catch (err) {
        console.error(err);
    }
}

connect();
