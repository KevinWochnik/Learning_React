import React from 'react';
import { MainTemplateWrapper } from './MainTemplate.styles';

const MainTemplate = ({children})=>(
<MainTemplateWrapper>
    {children}
</MainTemplateWrapper>
);

export default MainTemplate;