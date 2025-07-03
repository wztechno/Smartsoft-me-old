import React, { FC, useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { green } from '@mui/material/colors';
import { ListItemType } from './InventoryData/itemList.data';


interface ItemListProps {
  onSelect: (itemKey: ListItemType) => void;
  items: ListItemType[];
}

const ItemList: FC<ItemListProps> = ({ onSelect , items }) => {
  const [selectIndex, setSelectIndex] = useState<number>(0);

  const handleListItemClick = (index: number, itemKey: ListItemType): void => {
    setSelectIndex(index);
    onSelect(itemKey);
  };

  
  return (
    <Box
    sx={{
      width: '100%',
      maxWidth: 360,
      overflow: 'auto',
      position: 'relative',
      border: '1px solid #ddd', 
      boxShadow: '5px 5px 10px #ccc',
      borderRadius: '4px', 
      zIndex: 0,  
      height : 'fit-content'
    }}
  >
      <nav aria-label="main mailbox folders">
        <List>
          {items.map((item, index) => (
            <ListItem disablePadding key={item.primary}>
              <ListItemButton
                selected={selectIndex === index}
                onClick={() => handleListItemClick(index, item)}
                sx={{
                  borderBottom: '1px solid #e0e0e0',
                  '&.Mui-selected': {
                    background: green[200],
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      bottom: 0,
                      left: 0,
                      width: '0px',
                      backgroundColor: green[600],
                      transition: 'width 0.3s ',
                    },
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    width: '0',
                    backgroundColor: green[600],
                    transition: 'width 0.3s ',
                  },
                  '&:hover': {
                    background: 'background.paper',
                  },
                  '&.Mui-selected::before': {
                    width: '5px',
                  },
                }}
              >
                <ListItemText
                  primary={item.primary}
                  secondary={item.secondary}
                  primaryTypographyProps={{
                    style: {
                      fontWeight: selectIndex === index ? 'bold' : 'normal',
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <Divider />
        </List>
      </nav>
    </Box>
  )
}
export default ItemList
