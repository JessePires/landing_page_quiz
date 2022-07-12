import React from "react";

// Style
import {
  StyledFooter,
  LeftSide,
  RightSide,
  Info,
  Explanation,
  Title,
  Paragraph,
} from "./style";

const Footer: React.FC = () => (
  <StyledFooter>
    <LeftSide>
      <div>
        <Paragraph>Quiz UTFPR - 2022</Paragraph>
        <Paragraph>Software Livre</Paragraph>
      </div>
    </LeftSide>

    <RightSide>
      <Info>
        <div>
          <Title>Contatos</Title>
          <Paragraph>quizutfpr@gmail.com</Paragraph>
        </div>

        <div>
          <Title>UTFPR</Title>
          <Paragraph>Site Principal</Paragraph>
        </div>
      </Info>

      <Explanation>
        <Paragraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </Paragraph>
      </Explanation>
    </RightSide>
  </StyledFooter>
);

export default Footer;
