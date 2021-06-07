import { firestore } from "firebase/admin";

export default (request, response) => {
  firestore
    .collection("devitts")
    .get()
    .then((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => doc.id);
      // do something with documents)
      response.status(200).json(data);
    })
    .catch(() => {
      response.status(404).end();
    });
};
