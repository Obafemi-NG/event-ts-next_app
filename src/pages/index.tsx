import Head from "next/head";
import MeetupList from "@/components/meetups/MeetUpList";
import MeetUp from "@/models/MeetUp";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { MongoClient } from "mongodb";

//
const Home = ({ meetups }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>React MeetUp App</title>
        <meta
          name="description"
          content="Get up to date with the latest and trending tips on meet ups in your locality"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MeetupList meetups={meetups} />
    </>
  );
};

export const getStaticProps: GetStaticProps<{
  meetups: MeetUp[];
}> = async () => {
  const client = await MongoClient.connect(
    "mongodb://hezcode:olorosam70@ac-6fjkrus-shard-00-00.4aa1trx.mongodb.net:27017,ac-6fjkrus-shard-00-01.4aa1trx.mongodb.net:27017,ac-6fjkrus-shard-00-02.4aa1trx.mongodb.net:27017/?ssl=true&replicaSet=atlas-680j50-shard-0&authSource=admin&retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetUpCollections = db.collection("meetups");
  const result = await meetUpCollections.find().toArray();

  client.close();
  return {
    props: {
      meetups: result.map((data) => ({
        description: data.description,
        title: data.title,
        image: data.image,
        address: data.address,
        id: data._id.toString(),
      })),
    },
  };
};

export default Home;
