<<<<<<< HEAD
import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { CgGirl } from "react-icons/cg";
=======
import React from 'react'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { CgGirl } from 'react-icons/cg'
import { Element } from 'react-scroll'
>>>>>>> c25f721b998230dfad7f599919481b9173368807

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
} from "./style";

const WhoItIsIndicated: React.FC = () => (
  <Element name="WhoItIsIndicated">
    <Section>
      <Title>Para quem é indicado?</Title>
      <Description>Se interessou pelas nossas ferramentas? </Description>
      <Description>
        Veja se elas são <RevertColor>indicadas para você.</RevertColor>
      </Description>

<<<<<<< HEAD
    <Card
      initial={{ opacity: 0, x: -300 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { duration: 0.8 },
      }}
      viewport={{
        once: false,
      }}
      transition={{ type: "spring", duration: 5, bounce: 0.6 }}
    >
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

    <Card
      initial={{ opacity: 0, x: 300 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { duration: 0.8 },
      }}
      viewport={{
        once: false,
      }}
      transition={{ type: "spring", duration: 5, bounce: 0.6 }}
    >
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

    <WrapperButton
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { duration: 1.3 },
      }}
      viewport={{
        once: false,
      }}
      transition={{ type: "spring", duration: 5, bounce: 0.6 }}
    >
      <StyledButton>ME INTERESSEI!</StyledButton>
      <ArrowEffect />
    </WrapperButton>
  </Section>
);
=======
      <Card
        initial={{ opacity: 0, x: -300 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.8 },
        }}
        viewport={{
          once: false,
        }}
        transition={{ type: 'spring', duration: 5, bounce: 0.6 }}
      >
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

      <Card
        initial={{ opacity: 0, x: 300 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.8 },
        }}
        viewport={{
          once: false,
        }}
        transition={{ type: 'spring', duration: 5, bounce: 0.6 }}
      >
        <CardIcon>
          <CgGirl />
        </CardIcon>
        <CardContent>
          <CardTitle>Alunos</CardTitle>
          <CardDescription>
            Quer ficar a poucos cliques das listas de exercícios das suas
            turmas? E ainda ficar por dentro de como você está em relação aos
            seus amigos? O Aplicativo Móvel é para você!
          </CardDescription>
        </CardContent>
      </Card>

      <WrapperButton
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 1.3 },
        }}
        viewport={{
          once: false,
        }}
        transition={{ type: 'spring', duration: 5, bounce: 0.6 }}
      >
        <StyledButton>ME INTERESSEI!</StyledButton>
        <ArrowEffect />
      </WrapperButton>
    </Section>
  </Element>
)
>>>>>>> c25f721b998230dfad7f599919481b9173368807

export default WhoItIsIndicated;
