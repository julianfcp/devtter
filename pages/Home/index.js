import { AppLayout } from "styles/App-css";
import {
  Header,
  Footer,
  Main,
  Section,
  Devit,
  DContent,
} from "styles/Home-css";
import { useState, useEffect } from "react";
import Avatar from "components/Avatar";

export default function HomePage() {
  const [timeline, setTimeline] = useState([]);
  useEffect(() => {
    fetch("/api/statuses/home_timeline")
      .then((res) => res.json())
      .then(setTimeline);
  }, []);

  return (
    <>
      <AppLayout>
        <Main>
          <Header>Inicio</Header>
          <Section>
            {timeline.length !== 0 &&
              timeline.map((devit) => {
                return (
                  <Devit key={devit.id}>
                    <Avatar src={devit.avatar} alt={devit.username}></Avatar>
                    <DContent>
                      <h4>{devit.username}</h4>

                      {devit.message}
                    </DContent>
                  </Devit>
                );
              })}
          </Section>
          <Footer>Footer</Footer>
        </Main>
      </AppLayout>
    </>
  );
}
