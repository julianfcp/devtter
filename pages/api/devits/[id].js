import { firestore } from "firebase/admin";

export default (request, response) => {
  const { query } = request;
  const { id } = query;

  firestore
    .collection("devitts")
    .doc(id)
    .get()
    .then((doc) => {
      const data = doc.data();
      response.status(200).json(data);
    })
    .catch(() => {
      response.status(404).end();
    });
};
