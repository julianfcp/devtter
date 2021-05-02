import {
  DevitStyled,
  DevitHead,
  DevitContent,
} from "styles/components-Styles/Devit-css";
import Avatar from "components/Avatar";

const Devit = ({ id, avatar, userName, content, userId, formattedDate }) => {
  return (
    <>
      <DevitStyled>
        <Avatar src={avatar} alt={userName}></Avatar>
        <DevitContent>
          <DevitHead>
            <h4>{userName}</h4>
            <small>{formattedDate}</small>
          </DevitHead>

          {content}
        </DevitContent>
      </DevitStyled>
    </>
  );
};

export default Devit;
