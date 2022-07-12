import React from "react";
import { MdSmartphone } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";

// Style
import {
  Section,
  Title,
  Description,
  RevertColor,
  Body,
  UnorderedList,
  ListElementText,
} from "./style";

// Components
import { Card } from "../../components";

const AvailableProducts: React.FC = () => (
  <Section>
    <Title>Produtos Disponíveis</Title>
    <Description>Veja abaixo as ferramentas desenvolvidas que</Description>
    <Description>
      disponibilizamos de <RevertColor>forma gratuita.</RevertColor>
    </Description>

    <Body>
      <Card
        icon={<FaChalkboardTeacher />}
        title="Painel de Controle para Professores"
      >
        <UnorderedList>
          <ListElementText>Cadastre seus questionários.</ListElementText>

          <ListElementText>Acompanhe suas turmas.</ListElementText>
          <ListElementText>
            Acompanhe o desempenho das turmas e alunos.
          </ListElementText>
        </UnorderedList>
      </Card>

      <Card
        icon={<MdSmartphone />}
        title="Aplicativo para Estudantes"
        note="*Android"
      >
        <UnorderedList>
          <ListElementText>
            Permita que seus alunos respondam os questionários das turmas.
          </ListElementText>

          <ListElementText>
            Deixe-os atualizados de seu desempenho através do sistema de ranking
            geral e ranking das turmas.
          </ListElementText>

          <ListElementText>
            Deixe o aplicativo com a cara da sua instituição.
          </ListElementText>
        </UnorderedList>
      </Card>
    </Body>
  </Section>
);

export default AvailableProducts;
