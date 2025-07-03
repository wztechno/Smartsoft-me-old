import * as React from 'react';
import { FC } from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { StyledButton } from '@/components/styled-button'
import  { useState } from 'react';


interface FormDialogProps {
  open: boolean;
  onClose: () => void;
}


const FormDialog: FC<FormDialogProps> = ({open , onClose}) => {
  
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');

  // const resetForm = () => {
  //   setEmail('');
  //   setError('');
  //   setPhone('');
  //   setPhoneError('');
  //   setFirstName('');
  //   setLastName('');
  //   setFirstNameError('');
  //   setLastNameError('');
  // };


  const handleChange = (event :React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(inputEmail)) {
      setError('');
    } else {
      setError('Please enter a valid email address');
    }
  };
  const handlePhoneChange = (event :React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const inputValue = event.target.value;
    setPhone(inputValue);

    const phoneRegex = /^\d{8}$/;

    if (phoneRegex.test(inputValue)) {
      setPhoneError('');
    } else {
      setPhoneError('Please enter a valid 8-digit phone number.');
    }
  };
  

  const handleFirstNameChange = (event :React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const inputValue = event.target.value;
    setFirstName(inputValue);
    const nameRegex = /^[a-zA-Z]+$/;
    if (!nameRegex.test(inputValue)) {
      setFirstNameError('Please enter a valid first name.');
    } else {
      setFirstNameError('');
    }
  };

  const handleLastNameChange = (event :React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const inputValue = event.target.value;
    setLastName(inputValue);
    const nameRegex = /^[a-zA-Z]+$/;
    if (!nameRegex.test(inputValue)) {
      setLastNameError('Please enter a valid last name.');
    } else {
      setLastNameError('');
    }
  };
  
  
  
  return (
    <React.Fragment>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Talk to an expert</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Please fill out the form below and one of our knowledgeable finance and accounting representatives will get back to you.
          </DialogContentText>
          <TextField
          autoFocus
          margin="dense"
          id="email"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
          required
          value={email}
          onChange={handleChange}
          error={Boolean(error)}
          helperText={error}
            
          />
           
           <TextField
        autoFocus
        margin="dense"
        id="Firstname"
        label="First Name"
        type="text"
        fullWidth
        variant="standard"
        required
        value={firstName}
        onChange={handleFirstNameChange}
        error={Boolean(firstNameError)}
        helperText={firstNameError}
      />
      <TextField
        autoFocus
        margin="dense"
        id="Lastname"
        label="Last Name"
        type="text"
        fullWidth
        variant="standard"
        required
        value={lastName}
        onChange={handleLastNameChange}
        error={Boolean(lastNameError)}
        helperText={lastNameError}
      />
             <TextField
     
             autoFocus
              margin="dense"
              id="phone"
              label="Business Phone"
              type="tel"
              fullWidth
              variant="standard"
              required
              value={phone}
              onChange={handlePhoneChange}
              error={Boolean(phoneError)}
              helperText={phoneError}
              />
            <TextField
            autoFocus
            margin="dense"
            id="inquiry"
            label="Your Inquiry (Optional)"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
        <StyledButton onClick={onClose} color="primary" size="large" variant="contained" >
                    Contact us
        </StyledButton>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default FormDialog;
