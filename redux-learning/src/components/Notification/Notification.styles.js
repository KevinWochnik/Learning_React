import styled from "styled-components";

const variables = {
  blue: ({ theme }) => theme.colors.blue,
  red: ({ theme }) => theme.colors.red,
  green: ({ theme }) => theme.colors.green,
  white: ({ theme }) => theme.colors.white,
};

export const NotificationWrapper = styled.div.attrs(({ status }) => ({
  status,
}))`
  display: ${(props) => (props.status ? "flex" : "none")};
  position: absolute;
  top: 75%;
  left: 5%;

  height: 150px;
  width: 200px;
  border-radius: 20px;

  background-color: ${(props) =>
    (props.status === null && null) ||
    (props.status === "success" && variables.green) ||
    (props.status === "error" && variables.red) ||
    (props.status === "sent" && variables.blue)};

  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  & * {
    padding: 0;
    margin: 0;
    text-align: center;
    color: ${variables.white};
  }
`;
