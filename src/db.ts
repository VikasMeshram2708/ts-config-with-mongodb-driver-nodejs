import { MongoClient } from 'mongodb';

// const {
//   MONGO_HOST,
//   MONGO_PORT,
//   MONGO_DBNAME,
//   MONGO_LOCAL,
// } = process.env;

// let MONGO_URI;

// if (MONGO_LOCAL) {
//   MONGO_URI = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DBNAME}`;
// }

// export const client = new MongoClient(MONGO_URI as string);
// export const db = client.db();

const MONGO_URI = 'mongodb://localhost:27017/client';

export const client = new MongoClient(MONGO_URI);

export const db = client.db();
