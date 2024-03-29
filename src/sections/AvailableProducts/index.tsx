import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { Element } from 'react-scroll'

import { MdSmartphone } from 'react-icons/md'
import { FaChalkboardTeacher } from 'react-icons/fa'

// Style
import {
  Section,
  Title,
  Description,
  RevertColor,
  Body,
  UnorderedList,
  ListElementText,
} from './style'

// Components
import { Card } from '../../components'

const AvailableProducts: React.FC = () => {
  const isMediumScreen = useMediaQuery({ query: '(max-width: 1130px)' })

  const cardHeight = isMediumScreen ? 'auto' : '350px'

  return (
    <Element name="AvailableProducts">
      <Section>
        <Title>Módulos Disponíveis</Title>
        <Description>Veja abaixo as ferramentas desenvolvidas que</Description>
        <Description>
          disponibilizamos de <RevertColor>forma gratuita.</RevertColor>
        </Description>

        <Body>
          <Card
            icon={<FaChalkboardTeacher />}
            title="Painel de Controle para Professores"
            height={cardHeight}
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
            height={cardHeight}
          >
            <UnorderedList>
              <ListElementText>
                Permita que seus alunos respondam os questionários das turmas.
              </ListElementText>

              <ListElementText>
                Deixe-os atualizados de seu desempenho através do sistema de
                ranking geral e ranking das turmas.
              </ListElementText>

              <ListElementText>
                Deixe o aplicativo com a cara da sua instituição.
              </ListElementText>
            </UnorderedList>
          </Card>
        </Body>
      </Section>
    </Element>
  )
}

export default AvailableProducts
