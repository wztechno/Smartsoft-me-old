import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton, { iconButtonClasses } from '@mui/material/IconButton'
import ArrowForward from '@mui/icons-material/ArrowForward'
import Link from 'next/link'; 
import { Course } from '@/interfaces/course'

interface Props {
  item: Course
}

const CourseCardItem: FC<Props> = ({ item }) => {


  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const getPagePath = (id: number | string) => {
    switch (id) {
      case 1: return '/Products/inventory';
      case 2: return '/Products/accounting';
      case 3: return '/Products/invoicing';
      default: return '/';
    }
  };
  return (
    <Box
      sx={{
        px: 1,
        py: 4,
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
            transform: 'scale(1.05)',
            [`& .${iconButtonClasses.root}`]: {
              backgroundColor: 'primary.main',
              color: 'primary.contrastText',
              boxShadow: 2,
            },
          },
        }}
      >
        <Box
          sx={{
            lineHeight: 0,
            overflow: 'hidden',
            borderRadius: 3,
            mb: 2,
          }}
        >
          <Image src={item.image} width={760} height={660} alt={'Course ' + item.id} />
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography component="h2" variant="h5" sx={{mb: 2, height: 56, overflow: 'hidden', fontSize: '1.2rem' }}>
            {item.title}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href={getPagePath(item.id)} passHref> 
            <IconButton color="primary" sx={{ '&:hover': { backgroundColor: 'primary.main', color: 'primary.contrastText' } }}>
              <ArrowForward />
            </IconButton>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default CourseCardItem
