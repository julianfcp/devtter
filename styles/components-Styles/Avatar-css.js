import styled from "styled-components";
import { motion } from "framer-motion";

export const Image = styled(motion.img)`
  width: 50px;
  border-radius: 50%;
  // if there is an strong text then add a margin left
  + strong {
    margin-left: 8px;
  }
`;

export const Card = styled(motion.div)`
  display: flex;
  align-items: center;
`;
