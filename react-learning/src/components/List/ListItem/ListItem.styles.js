import styled from "styled-components";

export const ListItemWrapper = styled.li`
  width: 100%;
  padding: 0;
  margin: 0;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  & * {
    flex-basis: 50%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    & * {
      padding: 0;
      margin: 5px 0;
    }
  }
`;
