import connectMongo from "../db/mongo/client.js";

export async function insert(obj) {
  const db = await connectMongo();
  return await db.collection("users").insertOne(obj);
}

export async function getObjBy(objFilter) {
  const db = await connectMongo();
  return await db.collection("users").findOne(objFilter);
}


export async function updateObjDB(username, content) {
  const db = await connectMongo();
  return await db.collection("users").findOneAndUpdate(
    { username: username },
    { $set: { content } },
    { returnDocument: "after" }
  );
}