import React from "react";
import { useMediaQuery } from "react-responsive";
import { scroller, Element } from "react-scroll";

import {
  Section,
  Header,
  Logo,
  Navbar,
  NavbarLink,
  Body,
  LeftSide,
  RightSide,
  WelcomeText,
  Title,
  Description,
  LineEffect,
  StyledButton,
  NavbarDocumentationLink,
} from "./style";

import { Smartphone } from "../../components";

// Assets
import Initial from "../../assets/mobile_screenshots/initial.png";
import Avatar from "../../assets/mobile_screenshots/avatar.png";

const Headline: React.FC = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 700px)" });

  const scrollTo = (to: string) => {
    scroller.scrollTo(to, {
      duration: 1000,
      smooth: "easeInOutQuad",
      ignoreCancelEvents: true,
    });
  };

  return (
    <Element name="Headline">
      <Section>
        <Header>
          <Logo />

          <Navbar>
            {!isTablet && (
              <>
                <NavbarLink onClick={() => scrollTo("WhoItIsIndicated")}>
                  Alvos
                </NavbarLink>
                <NavbarLink onClick={() => scrollTo("SmartphoneScreenshots")}>
                  App Smartphone
                </NavbarLink>
                <NavbarLink onClick={() => scrollTo("Doubts")}>
                  Dúvidas
                </NavbarLink>
              </>
            )}
            <NavbarDocumentationLink href="#">Técnico</NavbarDocumentationLink>
          </Navbar>
        </Header>

        <Body>
          <LeftSide
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.8 },
            }}
            transition={{ type: "spring", duration: 5, bounce: 0.6 }}
            viewport={{
              once: false,
            }}
          >
            <Smartphone
              image={Initial.src}
              width={320}
              height={640}
              style={{ zIndex: 2 }}
            />
            <Smartphone
              image={Avatar.src}
              width={300}
              height={600}
              style={{
                transform: "rotateZ(19deg)",
                position: "absolute",
                top: "16px",
                left: "115px",
              }}
            />
            {/* <ArrowEffect /> */}
          </LeftSide>
          <RightSide
            initial={{ opacity: 0, x: 300 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.8 },
            }}
            transition={{ type: "spring", duration: 5, bounce: 0.6 }}
            viewport={{
              once: false,
            }}
          >
            <WelcomeText>
              Seja bem-vindo ao projeto do Quiz Gamificado.
            </WelcomeText>
            <Title>Totalmente gratuito e customizável!</Title>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod
              egestas odio sapien dis massa massa massa. Accumsan, cras
              tristique adipiscing consectetur. Laoreet ante quisque in nulla
              eleifend neque sed rutrum donec.
            </Description>

            <StyledButton>SOBRE NÓS</StyledButton>
            <LineEffect />
          </RightSide>
        </Body>
      </Section>
    </Element>
  );
};

export default Headline;
