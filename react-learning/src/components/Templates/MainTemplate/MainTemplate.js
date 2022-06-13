import React from "react";
import { MainTemplateWrapper } from "./MainTemplate.styles";
import Modal from "../../Modal/Modal";

const MainTemplate = ({ children }) => (
  <MainTemplateWrapper>
    {false && <Modal />}
    {children}
  </MainTemplateWrapper>
);

export default MainTemplate;
