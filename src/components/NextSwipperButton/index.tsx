import React from 'react'
import { useSwiper } from 'swiper/react'

// Icons
import { IoChevronForwardOutline } from 'react-icons/io5'

// Style
import { NextButton } from './style'

type NextButtonProps = {
  style?: React.CSSProperties
}

const NextButtonComponent: React.FC<NextButtonProps> = ({
  style,
  ...props
}) => {
  const swiper = useSwiper()

  return (
    <NextButton onClick={() => swiper.slideNext()} style={style} {...props}>
      <IoChevronForwardOutline />
    </NextButton>
  )
}

NextButtonComponent.defaultProps = {
  style: {},
}

export default NextButtonComponent
