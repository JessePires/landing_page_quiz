import React from 'react'

import {
  Section,
  Title,
  Description,
  RevertColor,
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardImage,
  WrapperButton,
  ArrowEffect,
  StyledButton,
} from './style'

const WhoItIsIndicated: React.FC = () => (
  <Section>
    <Title>Para quem é indicado?</Title>
    <Description>Se interessou pelas nossas ferramentas? </Description>
    <Description>
      Veja se elas são <RevertColor>indicadas para você.</RevertColor>
    </Description>

    <Card>
      <CardImage>a</CardImage>
      <CardContent>
        <CardTitle>Professores</CardTitle>
        <CardDescription>
          Seja você um professor de escola pública ou privada, o Painel de
          Controle foi pensado para atender suas necessidades!
        </CardDescription>
      </CardContent>
    </Card>

    <Card>
      <CardImage>a</CardImage>
      <CardContent>
        <CardTitle>Alunos</CardTitle>
        <CardDescription>
          Quer ficar a poucos cliques das listas de exercícios das suas turmas?
          E ainda ficar por dentro de como você está em relação aos seus amigos?
          O Aplicativo Móvel é para você!
        </CardDescription>
      </CardContent>
    </Card>

    <WrapperButton>
      <StyledButton>ME INTERESSEI!</StyledButton>
      <ArrowEffect />
    </WrapperButton>
  </Section>
)

export default WhoItIsIndicated
