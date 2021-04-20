import firebase from "firebase/app";
import "firebase/auth";
import "firebase/functions";
import "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQTL6rMNBV4EbiA34e4Nc6pcQiFB5TcoE",
  authDomain: "devtter-94174.firebaseapp.com",
  projectId: "devtter-94174",
  storageBucket: "devtter-94174.appspot.com",
  messagingSenderId: "118082404380",
  appId: "1:118082404380:web:5d36bd848cd2b7cd491fd9",
  measurementId: "G-ZST9MNM8VX",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const mapUserFromFirebaseAuthToUser = (user) => {
  console.log(user);
  const { displayName, photoURL, email } = user;
  return {
    avatar: photoURL,
    name: displayName,
    email,
  };
};

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    // if user is not null mapUser if not return null
    const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null;
    onChange(normalizedUser);
  });
};

export const loginWithGitHub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(githubProvider)
    .then((user) => {
      return mapUserFromFirebaseAuthToUser(user);
    });
};
