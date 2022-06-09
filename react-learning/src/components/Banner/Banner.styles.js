import styled from "styled-components";
import image from "../../assets/images/catering-normal.jpg";

export const Banner = styled.div`
  grid-area: banner;
  width: 100%;
  height: 100%;
  background-image: url(${image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;
