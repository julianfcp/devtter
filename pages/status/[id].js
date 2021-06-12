import { Image } from "styles/Compose-css";
import { firestore } from "firebase/admin";
import Devit from "components/Devit";
import { Section } from "styles/Home-css";

// Static Generation
// Runs in build time, this is visible in production mode

// Nota: La api no estara disponible en build time por lo que
// se debe usar otra api o reemplazar el servicio de firestore
// en la api o en su defecto hacer el fetch directamente en el metodo

/*
export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/devits/ids");
  const data = await res.json();

  const paths = data.map((devitsIDs) => {
    return {
      params: { id: devitsIDs.toString() },
    };
  });

  return { paths, fallback: "blocking" };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await fetch("http://localhost:3000/api/devits/" + id);
  const res = await data.json();

  return {
    props: {
      id,
      data: res,
    },
  };
};*/

// Server Side Rendering
// Runs when request

/*export const getServerSideProps = async (context) => {
  const id = context.params.id;
  const data = await fetch("http://localhost:3000/api/devits/" + id);
  const res = await data.json();

  return {
    props: {
      id,
      data: res,
    },
  };
};*/

export const getServerSideProps = async (context) => {
  const id = context.params.id;

  return firestore // this is a promise
    .collection("devitts")
    .doc(id)
    .get()
    .then((doc) => {
      const data = doc.data();
      const id = doc.id;
      const { createdAt } = data;

      const props = {
        ...data,
        id,
        createdAt: +createdAt.toDate(),
      };
      return { props };
    })
    .catch(() => {
      return {
        props: {},
      };
    });
};

const DevitPage = ({
  createdAt,
  id,
  avatar,
  img,
  userName,
  content,
  userId,
}) => {
  return (
    <div>
      <Section>
        <Devit
          key={id}
          id={id}
          avatar={avatar}
          img={img}
          userName={userName}
          content={content}
          userId={userId}
          createdAt={createdAt}
        ></Devit>
      </Section>
    </div>
  );
};

export default DevitPage;
