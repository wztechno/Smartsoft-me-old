import React, { FC,useState,useRef } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Link as ScrollLink } from 'react-scroll'
import { StyledButton } from '@/components/styled-button'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import Dialog from '@mui/material/Dialog'
import CancelIcon from '@mui/icons-material/Cancel';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import { Button, DialogTitle } from '@mui/material'


const HomeHero: FC = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleWatchVideoClick = () => {
    setVideoModalOpen(true)
  }

  const closeVideoModal = () => {
    setVideoModalOpen(false)
  }
  
  const handleFullscreen = () => {
    const iframe = iframeRef.current;
    if (iframe) {
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if ((iframe as any).mozRequestFullScreen) { 
        (iframe as any).mozRequestFullScreen();
      } else if ((iframe as any).webkitRequestFullscreen) { 
        (iframe as any).webkitRequestFullscreen();
      } else if ((iframe as any).msRequestFullscreen) { 
        (iframe as any).msRequestFullscreen();
      }
    }
  };
  return (
    <Box id="/" sx={{ backgroundColor: 'background.paper', position: 'relative', pt: 4, pb: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={0} sx={{ flexDirection: { xs: 'column', md: 'unset' } }}>
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                textAlign: { xs: 'center', md: 'left' },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Box sx={{ mb: 3 }}>
                <Typography
                  component="h2"
                  sx={{
                    position: 'relative',
                    fontSize: { xs: 40, md: 72 },
                    letterSpacing: 1.5,
                    fontWeight: 'bold',
                    lineHeight: 1.3,
                  }}
                >
                  <Typography
                    component="mark"
                    sx={{
                      position: 'relative',
                      color: 'primary.main',
                      fontSize: 'inherit',
                      fontWeight: 'inherit',
                      backgroundColor: 'unset',
                    }}
                  >
                    Innovate{' '}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: { xs: 24, md: 34 },
                        left: 2,
                        transform: 'rotate(3deg)',
                        '& img': { width: { xs: 146, md: 210 }, height: 'auto' },
                      }}
                    >
                      {/* eslint-disable-next-line */}
                      <img src="/images/headline-curve.svg" alt="Headline curve" />
                    </Box>
                  </Typography>
                  Integrate{' '}
                  <Typography
                    component="span"
                    sx={{
                      fontSize: 'inherit',
                      fontWeight: 'inherit',
                      position: 'relative',
                      '& svg': {
                        position: 'absolute',
                        top: -16,
                        right: -21,
                        width: { xs: 22, md: 30 },
                        height: 'auto',
                      },
                    }}
                    // Innovate. Integrate. Elevate. Securely Infused with Smart ERP Solutions
                  >
                    Elevate
                    <svg version="1.1" viewBox="0 0 3183 3072">
                      <g id="Layer_x0020_1">
                        <path
                          fill="#127C71"
                          d="M2600 224c0,0 0,0 0,0 236,198 259,562 52,809 -254,303 -1849,2089 -2221,1776 -301,-190 917,-1964 1363,-2496 207,-247 570,-287 806,-89z"
                        />
                        <path
                          fill="#127C71"
                          d="M3166 2190c0,0 0,0 0,0 64,210 -58,443 -270,516 -260,90 -1848,585 -1948,252 -104,-230 1262,-860 1718,-1018 212,-73 437,39 500,250z"
                        />
                        <path
                          fill="#127C71"
                          d="M566 3c0,0 0,0 0,0 -219,-26 -427,134 -462,356 -44,271 -255,1921 90,1962 245,62 628,-1392 704,-1869 36,-221 -114,-424 -332,-449z"
                        />
                      </g>
                    </svg>
                  </Typography>{' '}
                  <br />
                 with SmartSoft ERP Solutions                </Typography>
              </Box>
              <Box sx={{ mb: 4, width: { xs: '100%', md: '70%' } }}>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  {
                    "Sculpt the future of your enterprise with our cutting-edge ERP solution, seamlessly blending AI prowess with unparalleled security. From meticulous financial management and inventory control to dynamic sales, purchases, and streamlined point-of-sale experiences, our comprehensive platform ensures efficiency, innovation, and prosperity, all in one integrated package."
                  }
                </Typography>
              </Box>
              <Box sx={{ '& button': { mr: 2 }, mt: { xs: 2, md: 0 } }}> 
                <ScrollLink to="video-section" spy={true} smooth={true} offset={0} duration={350}>
                <StyledButton
                    color="primary"
                    size="large"
                    variant="outlined"
                    startIcon={<PlayArrowIcon />}
                    onClick={handleWatchVideoClick}
                  >
                    Watch Video
                  </StyledButton>
                </ScrollLink>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={5} sx={{ position: 'relative' }}>
   
            <Box sx={{ lineHeight: 0, mt: { xs: 2, md: 0 }}}>
              <Image src="/images/HomeERP.jpg" width={975} height={600} alt="Hero img" objectFit='contain'  />
            </Box>
          </Grid>
        </Grid>

      </Container>
      <Dialog open={videoModalOpen} onClose={closeVideoModal} maxWidth="md" fullWidth>
      <DialogTitle sx={{ 
            cursor: 'pointer', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            height:'20px'
          }}
        > 
        
           <Button onClick={handleFullscreen}>
            FullScreen
           <FullscreenIcon/>
          </Button>
          <CancelIcon onClick={closeVideoModal} />

        </DialogTitle>
        <Box sx={{ padding: '56.25% 0 0 0', position: 'relative' }}>
        <iframe
        ref={iframeRef}
        src="https://www.youtube.com/embed/tG13npLnqss"        
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
      />

        </Box>
      </Dialog>
    </Box>
  )
}

export default HomeHero
