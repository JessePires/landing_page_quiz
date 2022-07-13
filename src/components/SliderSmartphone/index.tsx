import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, EffectCards, Autoplay, Keyboard } from 'swiper'

import NextButton from '../NextSwipperButton'
import PrevButton from '../PrevSwipperButton'

// Style
import { Container, SliderContainer, ContentSlider } from './style'

// Assets
import Example from '../../assets/mobile_screenshots/example.png'
import Example2 from '../../assets/mobile_screenshots/example2.png'

// Components
import { Smartphone } from '../index'

type SmartPhoneSlider = {
  width?: number
  height?: number
  style?: React.CSSProperties
}

const SmartPhoneSlider: React.FC<SmartPhoneSlider> = ({
  width,
  height,
  ...props
}) => {
  const images = [Example, Example2, Example, Example2]

  return (
    <Container {...props}>
      <SliderContainer width={width + 80}>
        <Swiper
          slidesPerView={1}
          spaceBetween={1}
          modules={[Navigation, EffectCards, Autoplay, Keyboard]}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          keyboard={{
            enabled: true,
          }}
          effect="cards"
          loop
          centeredSlides
          navigation
          roundLengths
        >
          <div className="swiper-button-prev">
            <PrevButton />
          </div>
          <div className="swiper-button-next">
            <NextButton />
          </div>

          {images.map((item, idx) => (
            <SwiperSlide key={idx}>
              <ContentSlider>
                <Smartphone width={width} height={height} image={item.src} />
              </ContentSlider>
            </SwiperSlide>
          ))}
        </Swiper>
      </SliderContainer>
    </Container>
  )
}

SmartPhoneSlider.defaultProps = {
  width: 320,
  height: 640,
  style: {},
}

export default SmartPhoneSlider
