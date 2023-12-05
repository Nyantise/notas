import styled from "styled-components";
import { color, minWidth } from "../../utils/constants/css";

export const LoginContainer = styled.form`
  @media (max-width: ${minWidth}) {
    width: 90%;
  }
  width: 450px;
  align-self: center;
  display: grid;
  gap: 8px;
  padding: 30px;
  border: 1px solid ${color.white};
  border-radius: 10px;
  div {
    width: 100%;
  }
  input {
    &::placeholder {
      font-family: 'Roboto';
      font-weight: 300;
      color: white;
      opacity: 0.5;
    }
    &:disabled {
      cursor: wait;
      opacity: 0.7;
    }
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
    font-size: 22px;
  }
  button {
    &:disabled {
      cursor: wait;
      opacity: 0.7;
    }
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
