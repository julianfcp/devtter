import { Header, Footer, Section } from "styles/Home-css";
import { useState, useEffect } from "react";
import userHook from "hooks/userHook";
import Devit from "components/Devit";
import { fetchLatestDevitts } from "firebase/client";

export default function HomePage() {
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
      <Header>Inicio</Header>
      <Section>
        {timeline.length !== 0 &&
          timeline.map((devit) => {
            return (
              <Devit
                key={devit.id}
                id={devit.id}
                avatar={devit.avatar}
                userName={devit.userName}
                content={devit.content}
                userId={devit.userId}
                formattedDate={devit.formattedDate}
              ></Devit>
            );
          })}
      </Section>
      <Footer>Footer</Footer>
    </>
  );
}
