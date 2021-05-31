import {
  DevitStyled,
  DevitHead,
  DevitContent,
} from "styles/components-Styles/Devit-css";
import { Image } from "styles/Compose-css";
import Avatar from "components/Avatar";
import useTimeAgo from "hooks/useTimeAgo";
import Link from "next/link";

const Devit = ({ id, avatar, img, userName, content, createdAt }) => {
  const timeAgo = useTimeAgo(createdAt);

  return (
    <>
      <DevitStyled>
        <Avatar src={avatar} alt={userName}></Avatar>
        <DevitContent>
          <DevitHead>
            <h4>{userName}</h4>
            <Link href={`/status/${id}`}>
              <a>
                <time>{timeAgo}</time>
              </a>
            </Link>
          </DevitHead>
          <p>{content}</p>
          {img && <Image src={img} alt="" />}
        </DevitContent>
      </DevitStyled>
    </>
  );
};

export default Devit;
