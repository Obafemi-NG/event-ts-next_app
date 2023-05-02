import NewMeetupForm from "@/components/meetups/NewMeetUpForm";
import MeetUp from "@/models/MeetUp";
import Head from "next/head";
import React from "react";

const NewMeetUp = () => {
  const addEventHandler = async (data: MeetUp) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const meetUpData = await response.json();
    console.log(meetUpData);
    return;
  };
  return (
    <>
      <Head>
        <title> Add New Meet Up</title>
        <meta
          name="description"
          content="Add a new meet up to the pool of meetups on this app"
        />
      </Head>
      <NewMeetupForm onAddMeetup={addEventHandler} />
    </>
  );
};

export default NewMeetUp;
