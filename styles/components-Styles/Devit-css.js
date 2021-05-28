import styled from "styled-components";
import { motion } from "framer-motion";

export const DevitStyled = styled(motion.div)`
  border-bottom: 0.01em solid #cccccc;
  margin: 2px;
  display: flex;
  align-items: flex-start;
  margin: 0px;
  padding: 10px;
  h4 {
    margin-top: 2px;
    margin-bottom: 5px;
  }
`;
export const DevitContent = styled(motion.div)`
  margin: 0px 10px;
  padding-top: 0px;
  p {
    margin: 0px;
  }
`;

export const DevitHead = styled(motion.div)`
  margin: 0;
  display: flex;
  flex: 1;
  align-items: center;
  cursor: pointer;
  small {
    margin: 0px 10px;
  }
`;
