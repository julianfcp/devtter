import {
  Container,
  Main,
  Logo,
  Title,
  Desc,
  LoginButtons,
  Button,
} from "../styles/Home-css";
import Head from "next/head";
import GitHubIcon from "../components/Icons/GitHub";
import { loginWithGitHub, onAuthStateChanged } from "../firebase/client";
import { useState, useEffect } from "react";
import Avatar from "../components/Avatar";

export default function Home() {
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  const handleClick = () => {
    loginWithGitHub()
      .then((user) => {
        setUser(user);
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <Head>
        <title>Devtter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Logo
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <img src="/dev.svg.png" alt="Logo " />
          <Title>
            <a>Devtter</a>
          </Title>
        </Logo>
        <Desc>Talking about development</Desc>
        <LoginButtons>
          {
            // State 1:  when user is not logged in
            user === null && (
              <Button onClick={handleClick}>
                <GitHubIcon fill="#ffffff" width={24} height={24} />
                Login with GitHub
              </Button>
            )
          }
          {
            // State2: When user is undefined
            // State 3: When user is logged in

            user && user.name && (
              <div>
                <Avatar
                  src={user.avatar}
                  alt={user.name}
                  title="Avatar"
                  text={user.name}
                  withText
                />
              </div>
            )
          }
        </LoginButtons>
      </Main>
    </Container>
  );
}
