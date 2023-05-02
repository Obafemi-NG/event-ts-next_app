import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

interface Data {
  title: string;
  image: string;
  address: string;
  description: string;
  id: string;
}

const newMeetUpHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const data: Data = req.body;

    const client = await MongoClient.connect(
      "mongodb://hezcode:olorosam70@ac-6fjkrus-shard-00-00.4aa1trx.mongodb.net:27017,ac-6fjkrus-shard-00-01.4aa1trx.mongodb.net:27017,ac-6fjkrus-shard-00-02.4aa1trx.mongodb.net:27017/?ssl=true&replicaSet=atlas-680j50-shard-0&authSource=admin&retryWrites=true&w=majority"
    );

    const db = client.db();
    const meetUpCollection = db.collection("meetups");
    const result = await meetUpCollection.insertOne(data);
    console.log(result);
    res.status(200).json({ message: "meetup inserted" });
  }
};

export default newMeetUpHandler;
