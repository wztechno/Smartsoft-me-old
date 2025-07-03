/* eslint-disable @next/next/link-passhref */
import React, { FC, useRef } from 'react'
import Box from '@mui/material/Box'
import Slider, { Settings } from 'react-slick'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import IconArrowBack from '@mui/icons-material/ArrowBack'
import IconArrowForward from '@mui/icons-material/ArrowForward'

import { SolutionItem } from '@/components/solutions'
import { data } from './solutions.data'

interface SliderArrowArrow {
  onClick?: () => void
  type: 'next' | 'prev'
  className?: 'string'
}

const SliderArrow: FC<SliderArrowArrow> = (props) => {
  const { onClick, type, className } = props
  return (
    <IconButton
      sx={{
        backgroundColor: 'background.paper',
        color: 'primary.main',
        '&:hover': { backgroundColor: 'primary.main', color: 'primary.contrastText' },
        bottom: { xs: '-28px !important', md: '-20px !important' },
        left: 'unset !important',
        right: type === 'prev' ? '90px !important' : '30px !important',
        zIndex: 10,
        boxShadow: 1,
      }}
      disableRipple
      color="inherit"
      onClick={onClick}
      className={className}
    >
      {type === 'next' ? <IconArrowForward sx={{ fontSize: 22 }} /> : <IconArrowBack sx={{ fontSize: 22 }} />}
    </IconButton>
  )
}

const StyledSlickContainer = styled('div')(() => ({
  position: 'relative',

  '& .slick-list': { marginLeft: '-30px', marginBottom: '24px' },
}))

const HomeSolutions: FC = () => {
  const sliderRef = useRef(null)

  const sliderConfig: Settings = {
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SliderArrow type="prev" />,
    nextArrow: <SliderArrow type="next" />,
  }

  return (
    <Box id="Solutions" sx={{ pb: { xs: 6, md: 10 }, backgroundColor: 'background.paper' }}>
    <Container>
      <StyledSlickContainer>
        <Slider ref={sliderRef} {...sliderConfig}>
          {data.map((item, index) => (
            <SolutionItem key={String(index)} item={item} />
          ))}
        </Slider>
      </StyledSlickContainer>
    </Container>
  </Box>
  )
}

export default HomeSolutions
