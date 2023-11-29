import styled from "styled-components";
import { color } from "../../utils/constants/css";
import { IoMdExit } from "react-icons/io";

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  height: 60px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${color.darkGray};
  z-index: 2;
  div {
    gap: 5px;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-end;
    p {
      font-size: 24px;
      color: ${color.white};
    }
  }
`;
export const ExitIcon = styled(IoMdExit)`
  cursor: pointer;
  color: ${color.white};
  font-size: 30px;
`;
