import { Header, Footer, Section } from "styles/Home-css";
import { useState, useEffect } from "react";
import userHook from "hooks/userHook";
import Devit from "components/Devit";
import { fetchLatestDevitts } from "firebase/client";
import Link from "next/link";
import Head from "next/head";
import Create from "components/Icons/Create";
import Home from "components/Icons/Home";
import Search from "components/Icons/Search";

export const getStaticProps = async (context) => {
  const res = await fetch("http://localhost:3000/api/devits/");
  const timelineData = await res.json();

  // Fetching data from the api Server Side

  return {
    props: { timelineData },
  };
};

// Fetchin data from the Client Side
export default function HomePage({ timelineData }) {
  const [timeline, setTimeline] = useState([]);
  const user = userHook();

  useEffect(() => {
    user &&
      fetchLatestDevitts().then((data) => {
        setTimeline(data);
      });
    //fetch("/api/statuses/home_timeline")
    //.then((res) => res.json())
    //.then(setTimeline);
  }, [user]); // when user changes

  return (
    <>
      <Head>
        <title>Devter / Home</title>
      </Head>
      <Header>Inicio</Header>
      <Section>
        {timeline.length === 0 && <p> Loading ... </p>}
        {timeline.length !== 0 &&
          timeline.map((devit) => {
            return (
              <Devit
                key={devit.id}
                id={devit.id}
                avatar={devit.avatar}
                img={devit.img}
                userName={devit.userName}
                content={devit.content}
                userId={devit.userId}
                createdAt={devit.createdAt}
              ></Devit>
            );
          })}
      </Section>

      <Footer>
        <Link href="/home">
          <a>
            <Home width={32} height={32} stroke="#09F" />
          </a>
        </Link>
        <Link href="/search">
          <a>
            <Search width={32} height={32} stroke="#09F" />
          </a>
        </Link>
        <Link href="/compose/twitt">
          <a>
            <Create width={32} height={32} stroke="#09F" />
          </a>
        </Link>
      </Footer>
    </>
  );
}
