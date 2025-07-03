import React, { FC } from "react";
import { Cards } from "../../interfaces/cardsnew"
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'


interface Props {
    item: Cards
  }
const NewCardItem: FC<Props>=({ item })=>{
  return (
    <Box
      sx={{
        px: 1.5,
        py: 5,
      }}
    >
      <Box
        sx={{
          p: 2,
          backgroundColor: 'background.paper',
          borderRadius: 4,
          transition: (theme) => theme.transitions.create(['box-shadow']),
          '&:hover': {
            boxShadow: 2,
          },
          textAlign : 'center'
        }}
      >
        <Box sx={{ mb:.5 }}>
          <Typography component="h2" variant="h4" sx={{ fontSize: '1.4rem' }}>
            {item.title}
          </Typography>
          {/* <Typography sx={{ mb: 2, color: 'text.secondary' }}>{item.price}</Typography> */}
           {item.price && <Typography sx={{fontSize: '1.4rem', mb: 2, color: 'red' }} variant="subtitle1">
            {item.price}
          </Typography> }
        </Box>
      </Box>
    </Box>
  )
}
export default NewCardItem
