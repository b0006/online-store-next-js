import { MongoClient, Db } from 'mongodb';

interface IMongo {
  client: MongoClient;
  db: Db;
}

declare global {
  namespace NodeJS {
    interface Global {
      mongo: {
        client: MongoClient;
        db: Db;
        conn: any;
        promise: Promise<Partial<IMongo>>;
      };
    }
  }
}
