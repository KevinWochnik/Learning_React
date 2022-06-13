import styled from "styled-components";
import { DefaultButton } from "../../Buttons/DefaultButton/DefaultButton.styles";

export const ListFormWrapper = styled.form`
  flex-basis: 50%;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  & label {
    justify-content: right;
    flex-basis: 70%;
    margin-right: 10px;

    font-weight: bold;
  }
  & input {
    flex-basis: 12%;
    width: 10px;
    justify-content: center;
  }
  & ${DefaultButton} {
    justify-content: center;
    flex-basis: 25%;
  }
`;
