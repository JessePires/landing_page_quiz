import React from 'react'
// import { useMediaQuery } from 'react-responsive'
import { Element } from 'react-scroll'

// Style
import {
  Section,
  Title,
  Description,
  Body,
  AuthorWrapper,
  AuthorImage,
  AuthorName,
  AuthorDescription,
  AuthorInformations,
} from './style'

// Components
// import { Card } from '../../components'

const About: React.FC = () => {
  const authors = [
    {
      name: 'Jessé Pires Barbato Rocha',
      description:
        'Jessé Pires é aluno do curso de Ciências da Computação da UTFPR-CM. Seus interesses atuais são programação web e mobile (front e backend), porém se interessa por quase tudo na Computação.',
      image: 'https://github.com/JessePires.png',
      link: 'https://www.linkedin.com/in/jesse-pires-barbato-rocha-933714202',
    },
    {
      name: 'Jhonatan Guilherme de Oliveira Cunha',
      description:
        'Jhonatan Cunha é aluno do curso de Ciências da Computação da UTFPR/CM. Seu foco de estudo atualmente se concentra no desenvolvimento de aplicações web/mobile abordando o lado do frontend e backend. Adora utilizar as ferramentas disponíveis na programação em busca de uma solução viável para uma aplicação real.',
      image: 'https://github.com/jhonatancunha.png',
      link: 'https://www.linkedin.com/in/jhocunha/',
    },
    {
      name: 'Juliano Henrique Foleis',
      description:
        'Doutorado em Engenharia Elétrica na área de Engenharia de Computação pela Faculdade de Engenharia Elétrica e de Computação da UNICAMP. Atualmente é Professor Adjunto do Magistério Superior da Universidade Tecnológica Federal do Paraná. Pesquisador na área de Aprendizado de Máquina e Processamento Digital de Sinais, com ênfase em sinais de áudio. Possui 10 anos de experiência em docência. Possui experiência com desenvolvimento de software em Python, C/C++, linguagens de montagem para dispositivos embarcados, Javascript.',
      image:
        'https://media-exp2.licdn.com/dms/image/C4E03AQGTj3tkBTxP8Q/profile-displayphoto-shrink_800_800/0/1566308003810?e=1663804800&v=beta&t=CjaWxl8RqfPlJ6AP6pdmbY8EwWO2D15zSBWLDRX1iJ0',
      link: 'https://www.linkedin.com/in/juliano-foleis-784548a0/',
    },
    {
      name: 'Marcos Silvano Almeida',
      description:
        'Doutor em Ciência da Computação pela Universidade de São Paulo, atualmente é Professor da Universidade Tecnológica Federal do Paraná, Campus Campo Mourão. Tem experiência na área de Ciência da Computação, com ênfase em Metodologia e Técnicas da Computação. Atua principalmente nos seguintes temas: Aplicativos Móveis, Engenharia de Software e Desenvolvimento de Jogos.',
      image: 'https://github.com/marcossilvano.png',
      link: 'https://github.com/marcossilvano',
    },
  ]

  return (
    // const isMediumScreen = useMediaQuery({ query: '(max-width: 1130px)' })

    <Element name="About">
      <Section>
        <Title>Sobre Nós</Title>
        <Description>
          Veja abaixo informações sobre os desenvolvedores do sistema.
        </Description>

        <Body>
          {authors.map((item, idx) => (
            <AuthorWrapper
              key={item.name}
              initial={{ opacity: 0, x: idx % 2 ? 300 : -300 }}
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
              <AuthorImage
                draggable="false"
                src={item.image}
                alt={`Avatar ${item.name}`}
              />

              <AuthorInformations>
                <AuthorName
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.name}
                </AuthorName>
                <AuthorDescription>{item.description}</AuthorDescription>
              </AuthorInformations>
            </AuthorWrapper>
          ))}
        </Body>
      </Section>
    </Element>
  )
}

export default About
