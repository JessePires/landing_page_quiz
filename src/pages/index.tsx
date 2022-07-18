import React from 'react'
import Head from 'next/head'

// Sections
import HeadlineSection from '../sections/Headline'
import AvailableProductsSection from '../sections/AvailableProducts'
import WhoItIsIndicatedSection from '../sections/WhoItIsIndicated'
import ControlPainelSection from '../sections/ControlPainel'
import SmartphoneScreenshotsSection from '../sections/SmartphoneScreenshots'
import FuturePlansSection from '../sections/FuturePlans'
import DoubtsSection from '../sections/Doubts'
import FooterSection from '../sections/Footer'

const Home: React.FC = () => {
  const title = 'Quiz Gamificado UTFPR'
  const description =
    'Plataforma web e móvel para criação e análise de avaliações digitais.'
  const twitterHandle = ''
  const previewImage = ''
  const currentURL = ''

  return (
    <div id="containerElementID">
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content={twitterHandle} key="twhandle" />

        {/* Open Graph */}
        <meta property="og:title" content={title} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
        <meta property="og:url" content={currentURL} key="ogurl" />
        <meta property="og:image" content={previewImage} key="ogimage" />
        <meta property="og:site_name" content={title} key="ogsitename" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeadlineSection />
      <AvailableProductsSection />
      <WhoItIsIndicatedSection />
      <ControlPainelSection />
      <SmartphoneScreenshotsSection />
      <FuturePlansSection />
      <DoubtsSection />
      <FooterSection />
    </div>
  )
}

export default Home
