import styled from "styled-components";
import { motion } from "framer-motion";

export const colors = {
  primary: "#0099ff",
  secondary: "#1c0588",
  next: "#0070f3",
};

export const AppLayout = styled(motion.div)`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 600px) {
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;

export const Main = styled(motion.main)`
  width: 500px;
  border-radius: 10px 10px;
  margin: 10px;
  box-shadow: #000 0px 2px 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  @media screen and (max-width: 600px) {
    width: 100%;
    margin: 0;
    box-shadow: 0;
    padding: 0;
    border-radius: 0;
  }
`;

export const LoginPage = styled(motion.section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const Title = styled(motion.h1)`
  margin: 0;
  line-height: 1.15;
  font-size: 24px;
  padding: 10px 10px;
  a {
    color: ${colors.primary};
    text-decoration: none;
  }
  a:hover,
  a:focus,
  a:active {
    text-decoration: underline;
  }
`;

export const Logo = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  img {
    width: 50px;
  }
`;

export const Desc = styled(motion.h2)`
  font-size: 12px;
`;

export const Button = styled(motion.button)`
  background-color: black;
  border-radius: 9999px;
  color: white;
  cursor: pointer;
  border: 0;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 800;
  padding: 8px 24px;
  transition: opacity 0.3s ease;
  -webkit-transition: opacity 0.3s ease;
  :hover {
    opacity: 0.7;
  }
  svg {
    margin-right: 10px;
  }
  :disabled {
    pointer-events: none;
    opacity: 0.2;
  }
`;

export const LoginButtons = styled(motion.div)`
  margin-top: 10px;
`;
