import styled from "styled-components";
import { color } from "../../utils/constants/css";

export const StyledGrade = styled.li`
  width: 100%;
  height: 40px;
  background: white;
  border-radius: 15px;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  background-color: ${color.white};
  p {
    span {
      text-decoration: underline;
    }
    color: ${color.darkGray};
  }
`;
