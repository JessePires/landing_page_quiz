import React from 'react'
import { useSwiper } from 'swiper/react'

// Icons
import { IoChevronBackOutline } from 'react-icons/io5'

// Style
import { PrevButton } from './style'

type PrevButtonProps = {
  style?: React.CSSProperties
}

const PrevButtonComponent: React.FC<PrevButtonProps> = ({
  style,
  ...props
}) => {
  const swiper = useSwiper()

  return (
    <PrevButton onClick={() => swiper.slidePrev()} style={style} {...props}>
      <IoChevronBackOutline />
    </PrevButton>
  )
}

PrevButtonComponent.defaultProps = {
  style: {},
}

export default PrevButtonComponent
