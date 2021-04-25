import styled from "styled-components";
import { motion } from "framer-motion";

export const Main = styled(motion.main)`
  width: 500px;
  //border-radius: 10px 10px;
  box-shadow: #000 0px 2px 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  //border: 3px solid blue;
  margin: 0px 0px;
  @media screen and (max-width: 600px) {
    width: 100%;
    margin: 0;
    box-shadow: 0;
    padding: 0;
    border-radius: 0;
  }
`;

export const Header = styled(motion.header)`
  height: 49px;
  width: inherit;
  position: fixed;
  top: 0;
  border 0.01em solid #cccccc;
  background-color: white;
`;

export const Footer = styled(motion.footer)`
  width: inherit;
  background-color: white;
  height: 49px;
  position: fixed;
  bottom: 0;
  border: 0.01em solid #cccccc;
`;

export const Section = styled(motion.section)`
  padding-top: 50px;
  margin-top: 0px;
`;

export const Devit = styled(motion.div)`
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
export const DContent = styled(motion.div)`
  margin: 0px 10px;
  padding-top: 0px;
`;
