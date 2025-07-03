import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { green } from '@mui/material/colors'
import { ListItemType } from './InventoryData/itemList.data'
import { Container } from '@mui/material'

interface ItemListProps{
  items : ListItemType[];
}


const AccordionUsage: React.FC<ItemListProps> = ({items}) => {
  return (
    <Container>
      {items.map((item) => (
        <Accordion
        key={item.key}
        sx={{
          boxShadow: 'none',
          borderBottom: '1px solid #e0e0e0',
          bgcolor: '#f5f5f9',
          margin: '10px 0', 
        }}
      >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel-${item.key}-content`}
            id={`panel-${item.key}-header`}
            sx={{
              backgroundColor: '#f0f0f0;',
              borderRadius: '25px',
              '&.Mui-expanded': {
                background: green[200],
                borderRadius: '0px',
              },
            }}
          >
            {item.primary}
            <br />
            {item.secondary}
          </AccordionSummary>
          <AccordionDetails>
              {item.component}
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  )
}

export default AccordionUsage
