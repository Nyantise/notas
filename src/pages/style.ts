import styled from "styled-components";
import { color } from "../utils/constants/css";

export const StyledPage = styled.div<{ pathname: string }>`
  margin-top: ${({ pathname }) => (pathname === "/entrar" ? "unset" : "60px")};
  width: 100dvw;
  height: 100dvh;
  display: flex;
  justify-content: center;
  background-color: ${color.gray};
`;
