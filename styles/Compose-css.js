import styled from "styled-components";
import { motion } from "framer-motion";

export const TextAreaTwitt = styled(motion.textarea)`
  margin: 10px;
  width: 95%;
  height: 200px;
  border: 1px solid #cccccc;
  padding: 15px;
  resize: none;
  outline: 0;
  // Passing states to props
  border: ${(props) =>
    props.drag === props.dragStates.DRAG_OVER
      ? "3px dashed #09F"
      : "1px solid #cccccc;"};
`;

export const Image = styled(motion.img)`
  border-radius: 10px;
  height: auto;
  width: 100%;
  margin-top: 10px;
`;

export const QuitImage = styled(motion.button)`
  top: 10px;
  right: 10px;
  position: absolute;
  border: 0;
  font-size: 24px;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  border-radius: 999px;
  cursor: pointer;
  width: 30px;
  height: 30px;
`;

export const SectionImage = styled(motion.section)`
  position: relative;
`;

export const SectionCompose = styled(motion.section)`
  display: flex;
  justify-content: flex-start;
  form {
    width: 100%;
  }
`;
export const SectionAvatar = styled(motion.section)`
  margin: 10px 0px 0px 10px;
`;
