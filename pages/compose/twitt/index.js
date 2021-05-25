import { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "styles/App-css";
import { TextAreaTwitt } from "styles/Compose-css";
import userHook from "hooks/userHook";
import { addDevitt } from "firebase/client";
import Head from "next/head";

const COMPOSE_STATUS = {
  USER_UNKNOWN: 0,
  LOADING: 1,
  SUCCESS: 2,
  ERROR: -1,
};

const ComposeTwitt = () => {
  const user = userHook();
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(COMPOSE_STATUS.USER_UNKNOWN);
  const router = useRouter();

  const handleChange = (e) => {
    const { value } = e.target;
    setMessage(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(COMPOSE_STATUS.LOADING);
    addDevitt({
      avatar: user.avatar,
      content: message,
      userId: user.uid,
      userName: user.name,
    })
      .then(() => {
        router.push("/Home");
        setStatus(COMPOSE_STATUS.SUCCESS);
        setMessage("");
      })
      .catch((err) => {
        setStatus(COMPOSE_STATUS.ERROR);
      });
  };

  // Button state
  const buttonIsDisabled =
    message.length === 0 || status === COMPOSE_STATUS.LOADING;

  return (
    <>
      <Head>
        <title>Devter / Create a Twitt</title>
      </Head>
      <form onSubmit={handleSubmit}>
        <TextAreaTwitt
          onChange={handleChange}
          placeholder="What's going on ?"
        ></TextAreaTwitt>
        <Button disabled={buttonIsDisabled}>Send</Button>
      </form>
    </>
  );
};

export default ComposeTwitt;
