import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import type { HomeInvetoryData } from '@/interfaces/homeInventoryData'



interface HomeHeroData{
  homedata:HomeInvetoryData
}
const HomeFeatures: FC<HomeHeroData> = ({homedata}) => {

  return (
    <Box id="herohome" sx={{ bgcolor:'background.paper',position: 'relative', pt: 4, pb: { xs: 8, md: 6 } }}>
      <Container maxWidth="xl" >
        <Grid container spacing={0} sx={{ flexDirection: { xs: 'column'} }}>
          <Grid item xs={12}>
            <Box
              sx={{
                textAlign: { xs: 'center', md: 'center' },
                height: '100%',
                width: { xs: '100%', md: '80%' },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              <Box sx={{ mb: 4, width: { xs: '100%', md: '100%' } }}>
              <Typography variant="h1" sx={{ mt: 2, fontWeight: 600, textAlign: 'center'}}>
                    {homedata.subtitle}
                </Typography>
              </Box>
              <Box sx={{ mb: 4, mt: 2, width: { xs: '100%', md: '100%' } }}>
                <Typography variant='h4' sx={{color: 'text.secondary', lineHeight: 1.6 }}>  
                  {homedata.paragraph}                  
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HomeFeatures
