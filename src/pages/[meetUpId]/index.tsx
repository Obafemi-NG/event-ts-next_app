import MeetUpDetail from "@/components/meetups/MeetUpDetail";
import { MongoClient, ObjectId } from "mongodb";
import type { WithId, Document } from "mongodb";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";

interface fetchedData extends WithId<Document> {
  image: string;
  title: string;
  address: string;
  description: string;
  id: string;
}

const DetailPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(props);
  return (
    <>
      <Head>
        <title> {props.meetUpDetail.title} </title>
        <meta name="description" content={props.meetUpDetail.description} />
      </Head>
      <MeetUpDetail
        image={props.meetUpDetail.image}
        title={props.meetUpDetail.title}
        id={props.meetUpDetail.id}
        address={props.meetUpDetail.address}
        description={props.meetUpDetail.description}
      />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const client = await MongoClient.connect(
    "mongodb://hezcode:olorosam70@ac-6fjkrus-shard-00-00.4aa1trx.mongodb.net:27017,ac-6fjkrus-shard-00-01.4aa1trx.mongodb.net:27017,ac-6fjkrus-shard-00-02.4aa1trx.mongodb.net:27017/?ssl=true&replicaSet=atlas-680j50-shard-0&authSource=admin&retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetUpCollections = db.collection("meetups");
  const result = await meetUpCollections.find().project({ _id: 1 }).toArray();

  client.close();
  return {
    fallback: false,
    paths: result.map((meetup) => ({
      params: { meetUpId: meetup._id.toString() },
    })),
  };
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  const params = context.params.meetUpId;
  // fetch data from API
  const client = await MongoClient.connect(
    "mongodb://hezcode:olorosam70@ac-6fjkrus-shard-00-00.4aa1trx.mongodb.net:27017,ac-6fjkrus-shard-00-01.4aa1trx.mongodb.net:27017,ac-6fjkrus-shard-00-02.4aa1trx.mongodb.net:27017/?ssl=true&replicaSet=atlas-680j50-shard-0&authSource=admin&retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetUpCollections = db.collection("meetups");
  const meetUp = (await meetUpCollections.findOne({
    _id: new ObjectId(params),
  })) as fetchedData;
  console.log(meetUp);
  client.close();
  return {
    props: {
      meetUpDetail: {
        image: meetUp.image,
        id: meetUp._id.toString(),
        address: meetUp.address,
        description: meetUp.description,
        title: meetUp.title,
      },
    },
  };
};

export default DetailPage;
