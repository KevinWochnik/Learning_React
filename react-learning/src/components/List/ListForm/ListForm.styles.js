import styled from "styled-components";
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
  & button {
    flex-basis: 25%;
    width: 30px;
    justify-content: center;
    padding: 2px;
    background-color: ${({ theme: { colors } }) => colors.brown};
    border: 3px solid ${({ theme: { colors } }) => colors.brown};
    border-radius: 15px;
    color: ${({ theme: { colors } }) => colors.white};
    font-weight: bold;
    cursor: pointer;
  }
`;
