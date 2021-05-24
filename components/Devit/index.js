import {
  DevitStyled,
  DevitHead,
  DevitContent,
} from "styles/components-Styles/Devit-css";
import Avatar from "components/Avatar";
import useTimeAgo from "hooks/useTimeAgo";

const Devit = ({ id, avatar, userName, content, userId, createdAt }) => {
  const timeAgo = useTimeAgo(createdAt);
  return (
    <>
      <DevitStyled>
        <Avatar src={avatar} alt={userName}></Avatar>
        <DevitContent>
          <DevitHead>
            <h4>{userName}</h4>
            <small>{timeAgo}</small>
          </DevitHead>

          {content}
        </DevitContent>
      </DevitStyled>
    </>
  );
};

export default Devit;
