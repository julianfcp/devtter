import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Button } from "styles/App-css";
import {
  TextAreaTwitt,
  Image,
  QuitImage,
  SectionCompose,
  SectionAvatar,
  SectionImage,
} from "styles/Compose-css";
import userHook from "hooks/userHook";
import { addDevitt, uploadImage } from "firebase/client";
import Head from "next/head";
import Avatar from "components/Avatar";
import { Header } from "styles/Home-css";

const COMPOSE_STATUS = {
  USER_UNKNOWN: 0,
  LOADING: 1,
  SUCCESS: 2,
  ERROR: -1,
};

const DRAG_IMAGES_STATES = {
  ERROR: -1,
  NONE: 0,
  DRAG_OVER: 1,
  UPLOADING: 2,
  COMPLETE: 3,
};

const ComposeTwitt = () => {
  const user = userHook();
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(COMPOSE_STATUS.USER_UNKNOWN);
  const router = useRouter();
  //Image states
  const [drag, setDrag] = useState(DRAG_IMAGES_STATES.NONE);
  const [task, setTask] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  // Effect

  useEffect(() => {
    if (task) {
      // if the task is setted, there are 3 methods
      const onProgress = () => {
        setDrag(DRAG_IMAGES_STATES.UPLOADING);
      };
      const onError = () => {
        setDrag(DRAG_IMAGES_STATES.ERROR);
      };
      const onComplete = () => {
        console.log("Upload Complete!");
        setDrag(DRAG_IMAGES_STATES.COMPLETE);
        // firebase method to get imgURL
        task.snapshot.ref.getDownloadURL().then((URL) => {
          setImgUrl(URL);
          console.log(URL);
        });
      };
      task.on("state_changed", onProgress, onError, onComplete);
    }
  }, [task]);

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
      img: imgUrl,
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
  // Drag handles
  const handleDragEnter = (e) => {
    e.preventDefault();
    setDrag(DRAG_IMAGES_STATES.DRAG_OVER);
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    setDrag(DRAG_IMAGES_STATES.NONE);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    setDrag(DRAG_IMAGES_STATES.NONE);
    const file = e.dataTransfer.files[0];
    const task = uploadImage(file);
    setTask(task);
  };

  // Button state
  const buttonIsDisabled =
    message.length === 0 || status === COMPOSE_STATUS.LOADING;

  return (
    <>
      <Head>
        <title>Devter / Create a Twitt</title>
      </Head>
      <Header>Inicio</Header>
      <SectionCompose>
        <SectionAvatar>
          {user && <Avatar src={user.avatar} alt={user.name} />}
        </SectionAvatar>

        <form onSubmit={handleSubmit}>
          <TextAreaTwitt
            onChange={handleChange}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            drag={drag}
            dragStates={DRAG_IMAGES_STATES}
            placeholder="What's going on ?"
          ></TextAreaTwitt>
          {drag === DRAG_IMAGES_STATES.UPLOADING && (
            <strong>Loading ...</strong>
          )}
          {drag === DRAG_IMAGES_STATES.ERROR && (
            <strong>Something went wrong</strong>
          )}
          {imgUrl && (
            <SectionImage>
              <QuitImage onClick={() => setImgUrl(null)}>x</QuitImage>
              <Image src={imgUrl} alt={imgUrl} />
            </SectionImage>
          )}
          <Button disabled={buttonIsDisabled}>Send</Button>
        </form>
      </SectionCompose>
    </>
  );
};

export default ComposeTwitt;
