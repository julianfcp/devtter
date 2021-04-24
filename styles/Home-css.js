import styled from "styled-components";
import { motion } from "framer-motion";

export const Main = styled(motion.main)`
  width: 500px;
  border-radius: 10px 10px;
  margin: 10px;
  box-shadow: #000 0px 2px 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  border: 1px solid black;
  background-color: white;
`;

export const Footer = styled(motion.footer)`
  width: inherit;
  background-color: white;
  height: 49px;
  position: fixed;
  bottom: 0;
  border: 1px solid black;
`;

export const Section = styled(motion.section)`
  padding-top: 50px;
`;
