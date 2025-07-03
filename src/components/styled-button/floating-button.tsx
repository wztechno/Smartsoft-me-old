import React, { FC ,useState} from 'react';
import { Fab, useTheme } from '@mui/material';
// import useMediaQuery from '@mui/material/useMediaQuery';
import FormDialog from '../Popup/Popup-button'
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

const FloatingButton: FC = () => {
    const [dialogOpen , setDialogOpen]=useState(false);

  const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleButtonOnClick  = () =>{
    setDialogOpen(true);      
    console.log("open")

  };
  
  const handleDialogClose = () =>{
          setDialogOpen(false);
          console.log("close")
  };

  return (
    <>
    <Fab
      color="primary"
      sx={{
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        zIndex: theme.zIndex.tooltip, 
      }}
      onClick={handleButtonOnClick}

    >
      <ContactPhoneIcon />     
    </Fab>
    <FormDialog open={dialogOpen} onClose={handleDialogClose} />
    </>
  );
};

export default FloatingButton;
