import styled from "styled-components";

export const WelcomingTagWrapper = styled.div`
  height: 210px;
  width: 700px;
  border-radius: 10px;
  background-color: ${({ theme: { colors } }) => colors.charcoal};
  box-shadow: 0 0 10px 0.2px ${({ theme: { colors } }) => colors.Grey};

  grid-area: banner;
  position: relative;
  top: 70%;
  left: 50%;
  transform: translateX(-50%);

  & * {
    text-align: center;
    margin-right: 15px;
    margin-left: 15px;
    color: ${({ theme: { colors } }) => colors.white};
  }
`;
