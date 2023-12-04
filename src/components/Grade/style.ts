import styled from "styled-components";
import { color } from "../../utils/constants/css";
import { SiGoogleclassroom } from "react-icons/si";
import { SiGoogledocs } from "react-icons/si";
import { MdOutlineGrade } from "react-icons/md";

export const StyledGrade = styled.li`
  min-width: 100%;
  height: 65px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${color.gray};
  border: 1px solid ${color.white};
  div {
    height: 100%;
    color: ${color.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    div {
      width: 110px;
      display: flex;
      flex-direction: row;
      gap: 4px;
      span {
        font-size: 18px;
      }
    }
  }
`;
export const Content = styled.div<{ length: number }>`
  margin-top: -10px;
  overflow-y: auto;
  overflow-x: hidden;
  max-width: 102px;
  p {
    font-size: 16px;
    margin-top: ${({ length }) =>
      length >= 21 ? "46" : length >= 11 ? "38" : "-5"}px;
    word-break: break-all;
    text-align: center;
    line-height: 20px;
  }
`;
export const ClassIcon = styled(SiGoogleclassroom)`
  font-size: 20px;
  margin-top: 4px;
`;
export const RGMicon = styled(SiGoogledocs)`
  font-size: 20px;
  margin-top: 4px;
`;
export const GradeIcon = styled(MdOutlineGrade)`
  font-size: 20px;
  margin-top: 4px;
`;
export const GradeN = styled.p<{ value: number }>`
  color: ${({ value }) => (value >= 7 ? "green" : "red")};
  font-weight: 700;
  font-size: 20px;
`;
