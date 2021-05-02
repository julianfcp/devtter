import {
  LoginPage,
  Logo,
  Title,
  Desc,
  LoginButtons,
  Button,
} from "styles/App-css";
import GitHubIcon from "components/Icons/GitHub";
import { loginWithGitHub, onAuthStateChanged } from "firebase/client";
import { useState, useEffect } from "react";
import userHook, { USER_STATES } from "hooks/userHook";
import { useRouter } from "next/router";
import Avatar from "components/Avatar";

export default function Home() {
  const user = userHook();
  const router = useRouter();

  useEffect(() => {
    user && router.replace("/Home");
  }, [user]); // every time user changes

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
    <>
      <LoginPage>
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
            user === USER_STATES.NOT_LOGGED_IN && (
              <Button onClick={handleClick}>
                <GitHubIcon fill="#ffffff" width={24} height={24} />
                Login with GitHub
              </Button>
            )
          }
          {
            // State2: When user is undefined
            user === USER_STATES.LOADING && <span>loading...</span>
          }
          {
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
      </LoginPage>
    </>
  );
}
