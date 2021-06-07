import { firestore } from "firebase/admin";

export default (request, response) => {
  firestore
    .collection("devitts")
    .orderBy("createdAt", "desc")
    .get()
    .then((querySnapshot) => {
      const dataArray = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        const id = doc.id;
        const { createdAt } = data;

        return {
          ...data,
          id,
          createdAt: +createdAt.toDate(), // + converts to integer
        };
      });
      // do something with documents)

      response.status(200).json(dataArray);
    })
    .catch(() => {
      response.status(404).end();
    });
};
