import styled from "styled-components";
import { color } from "../../utils/constants/css";
import { SiGoogleclassroom } from "react-icons/si";
import { SiGoogledocs } from "react-icons/si";
import { MdOutlineGrade } from "react-icons/md";

export const StyledGrade = styled.li`
  width: 100%;
  height: 80px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${color.gray};
  border: 1px solid ${color.white};
  div {
    height: 100%;
    font-size: 20px;
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
    }
  }
`;
export const Content = styled.div`
  margin-top: -10px;
  overflow-y: auto;
  overflow-x: hidden;
  max-width: 102px;
  p {
    margin-top: 20px;
    word-break: break-all;
    text-align: center;
    line-height: 18px;
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
`;
