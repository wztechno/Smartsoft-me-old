/* eslint-disable react-hooks/rules-of-hooks */
import  React  , {FC} from 'react'
import Container from '@mui/material/Container'
import { Typography } from '@mui/material'
import Image from 'next/image'
import { featuresData } from '@/interfaces/features'
interface DetailItemProps {
  data: featuresData;
}

const detailsItems: FC<DetailItemProps> = ({data}) => {

  return (
    <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Typography variant="h5" gutterBottom sx={{ mt: '4px' }}>
        {data.Description}
      </Typography>
      <Image src={data.image} alt="Hero img" objectFit='cover' width={'100%'} height={350} />
    </Container>
  )
}
export default detailsItems
