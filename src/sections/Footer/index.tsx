import React from 'react'

// Style
import {
  StyledFooter,
  LeftSide,
  RightSide,
  Info,
  Explanation,
  Title,
  Paragraph,
  Email,
  Link,
} from './style'

const Footer: React.FC = () => (
  <StyledFooter>
    <LeftSide>
      <div>
        <Paragraph>Quiz UTFPR - {new Date().getFullYear()}</Paragraph>
        <Paragraph>Software Livre</Paragraph>
      </div>
    </LeftSide>

    <RightSide>
      <Info>
        <div>
          <Title>Contatos</Title>
          <Email href="mailto:quizutfpr@gmail.com">quizutfpr@gmail.com</Email>
        </div>

        <div>
          <Title>UTFPR</Title>
          <Link
            href="http://www.utfpr.edu.br/campus/campomourao"
            target="_blank"
          >
            Site Principal
          </Link>
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
)

export default Footer
