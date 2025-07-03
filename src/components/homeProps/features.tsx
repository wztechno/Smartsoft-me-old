import React, { FC, useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'; 
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ItemList from './itemList'; 
import AccordionUsage from './accordionItem';
import { ListItemType } from './InventoryData/itemList.data'; 
import { Zoom } from '@mui/material';

interface PerksFeaturesProps {
  data: ListItemType[]
}

const Perks: FC<PerksFeaturesProps> = ({ data }) => {
   
  const theme = useTheme();
 
  const [selectedItem,setItem] = useState<ListItemType | null>(data.length > 0 ? data[0] : null)
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const handleSelect = (item: ListItemType) => { 
    setItem(item) 
  };

  return (
    <Box id="Section2" sx={{ py: { xs: 6, md: 6 } }}>
      <Container>
          <Typography variant="h1" sx={{ textAlign: 'center', mb: 3, pl: '' }}>
            Features
          </Typography>
        {isMobile ? (
          <AccordionUsage items={data} />
        ) : (
          <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '24px' }}>
            <ItemList items={data} onSelect={handleSelect} />
            <Zoom in key={selectedItem?.key}  >
            <Box sx={{ flex: 1 }}> 
              {!!selectedItem?.component && selectedItem?.component} 
            </Box></Zoom> 
          </Box>
        )}
      </Container>
    </Box>
  )
}

export default Perks
