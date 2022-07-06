import React, { useState } from 'react'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay, bindKeyboard } from 'react-swipeable-views-utils'

// Icons
import { IoChevronForwardOutline, IoChevronBackOutline } from 'react-icons/io5'

// Style
import { Container, NextButton, PrevButton } from './style'

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

const BindKeyboardSwipeableViews = bindKeyboard(autoPlay(SwipeableViews))

const SmartPhoneSlider: React.FC<SmartPhoneSlider> = ({
  width,
  height,
  ...props
}) => {
  const [activeImage, setActiveImage] = useState<number>(0)
  const images = [Example, Example2]

  const handleNext = () => {
    setActiveImage(prevActiveImage => (prevActiveImage + 1) % images.length)
  }

  const handleBack = () => {
    setActiveImage(prevActiveImage => prevActiveImage - 1)
  }

  const handleChangeActiveImage = (step: number) => {
    setActiveImage(step)
  }

  return (
    <Container {...props}>
      {images.length > 1 && (
        <PrevButton onClick={handleBack} disabled={activeImage === 0}>
          <IoChevronBackOutline />
        </PrevButton>
      )}

      <BindKeyboardSwipeableViews
        index={activeImage}
        onChangeIndex={handleChangeActiveImage}
        enableMouseEvents
        className="SwipeableViews"
        style={{
          width: width + 20,
        }}
      >
        {images.map((item, idx) => (
          <Smartphone
            // eslint-disable-next-line react/no-array-index-key
            key={idx}
            width={width}
            height={height}
            image={item.src}
          />
        ))}
      </BindKeyboardSwipeableViews>

      {images.length > 1 && (
        <NextButton
          disabled={activeImage === images.length - 1}
          onClick={handleNext}
        >
          <IoChevronForwardOutline />
        </NextButton>
      )}
    </Container>
  )
}

SmartPhoneSlider.defaultProps = {
  width: 320,
  height: 640,
  style: {},
}

export default SmartPhoneSlider
