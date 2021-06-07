import { Image } from "styles/Compose-css";

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
};

const DevitPage = ({ id, data }) => {
  return (
    <div>
      <p>{id}</p>
      <p>{data.userName}</p>
      {data.img && <Image src={data.img} />}
    </div>
  );
};

export default DevitPage;
