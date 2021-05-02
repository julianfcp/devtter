import { onAuthStateChanged } from "firebase/client";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

// User States
export const USER_STATES = {
  NOT_LOGGED_IN: null,
  LOADING: undefined,
};

const userHook = () => {
  const [user, setUser] = useState(USER_STATES.LOADING);
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  useEffect(() => {
    user === USER_STATES.NOT_LOGGED_IN && router.push("/");
  }, [user]);

  return user;
};

export default userHook;
