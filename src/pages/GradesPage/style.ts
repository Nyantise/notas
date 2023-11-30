import styled from "styled-components";
import { color, minWidth } from "../../utils/constants/css";

export const GradeForm = styled.form`
  @media (max-width: ${minWidth}) {
    width: 85%;
  }
  width: 450px;
  padding: 30px;
  border: 1px solid ${color.white};
  border-radius: 10px;
  display: grid;
  input {
    &::placeholder {
      opacity: 0.1;
    }
    &:disabled {
      cursor: not-allowed;
      opacity: 0.4;
    }
    margin-bottom: 8px;
    padding-left: 10px;
    height: 40px;
    width: 100%;
    background-color: unset;
    border-radius: 5px;
    border: 1px solid ${color.white};
    font-size: 18px;
    color: ${color.white};
  }
  label {
    align-self: flex-start;
    color: ${color.white};
  }
  button {
    cursor: pointer;
    height: 40px;
    width: 100%;
    background-color: ${color.white};
    color: ${color.gray};
    border-radius: 5px;
    border: none;
    p {
      font-size: 24px;
      margin-bottom: 6px;
    }
  }
`;
export const GradeInputs = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    input {
      width: 100%;
    }
  }
`;
export const ColumnContainer = styled.div`
  margin-top: 30px;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const UlScrollContainer = styled.div`
  @media (max-width: ${minWidth}) {
    width: 85%;
  }
  width: 450px;
  max-height: 200px;
  overflow-y: auto;
  overflow-x: hidden;
  margin-bottom: 20px;
`;
export const GradesContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
