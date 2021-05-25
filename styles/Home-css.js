import styled from "styled-components";
import { motion } from "framer-motion";

export const Header = styled(motion.header)`
  height: 49px;
  border-radius: 10px 0px 0px 0px;
  width: inherit;
  position: fixed;
  top: 10px;
  border: 0.01em solid #cccccc;
  background-color: white;
  @media screen and (max-width: 600px) {
    width: 100%;
    top: 0;
  }
`;

export const Footer = styled(motion.footer)`
  width: inherit;
  border-radius: 0px 0px 0px 10px;
  background-color: white;
  height: 49px;
  position: fixed;
  bottom: 10px;
  border: 0.01em solid #cccccc;
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  align-items: center;
  @media screen and (max-width: 600px) {
    width: 100%;
    bottom: 0;
  }
  a:hover {
    background: radial-gradient(#0099ff22 15%, transparent 16%);
    background-size: 180px 180px;
    background-position: center;
  }
`;

export const Section = styled(motion.section)`
  margin-top: 50px;
  height: 80vh;
`;
