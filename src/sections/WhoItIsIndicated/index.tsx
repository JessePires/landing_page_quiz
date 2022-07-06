import React from 'react'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { CgGirl } from 'react-icons/cg'

import {
  Section,
  Title,
  Description,
  RevertColor,
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardIcon,
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
      <CardIcon>
        <FaChalkboardTeacher />
      </CardIcon>
      <CardContent>
        <CardTitle>Professores</CardTitle>
        <CardDescription>
          Seja você um professor de escola pública ou privada, o Painel de
          Controle foi pensado para atender suas necessidades!
        </CardDescription>
      </CardContent>
    </Card>

    <Card>
      <CardIcon>
        <CgGirl />
      </CardIcon>
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
