import styled from "styled-components";
import { color } from "../utils/constants/css";

export const StyledPage = styled.div<{ pathname: string }>`
  margin-top: ${({ pathname }) => (pathname === "/entrar" ? "unset" : "60px")};
  width: 100dvw;
  height: 100dvh;
  display: grid;
  place-content: ${({ pathname }) =>
    pathname === "/entrar" ? "center" : "unset"};
  place-items: center;
  background-color: ${color.gray};
`;
