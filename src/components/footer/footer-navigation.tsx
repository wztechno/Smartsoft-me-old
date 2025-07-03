import React, { FC } from 'react' 
import Grid from '@mui/material/Grid'
import MuiLink from '@mui/material/Link'
import type { Navigation } from '@/interfaces/navigation'
import { navigations as headerNavigations } from '@/components/navigation/navigation.data'
import { FooterSectionTitle } from '@/components/footer'
import { Link as ScrollLink ,scroller } from 'react-scroll'
import { Typography } from '@mui/material'
import { useState } from 'react'
import  FormDialog  from '../../components/Popup/Popup-button'
import { useRouter } from 'next/router';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const courseMenu: Array<Navigation> = [
  {
    label: 'UI/UX Design',
    path: '#',
  },
  {
    label: 'Mobile Development',
    path: '#',
  },
  {
    label: 'Machine Learning',
    path: '#',
  },
  {
    label: 'Web Development',
    path: '#',
  },
]

const pageMenu = headerNavigations

const companyMenu: Array<Navigation> = [
  { label: 'Contact Us', path: 'contactUs' },
  // { label: 'Privacy & Policy', path: '../../privacy&Policy' },
  // { label: 'Term & Condition', path: '../../term&Condition' },
  // { label: 'FAQ', path: '../../faq'},
]

interface NavigationItemProps {
  label: string
  path: string
  openDialog: () => void;
}

const NavigationItem: FC<NavigationItemProps> = ({ label, path, openDialog }) => {
  const router = useRouter();

  const handleClick = () => {  
    if (path === "contactUs") {
      router.push("/" + path).then(()=>{
        scroller.scrollTo("contactUs", {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
        });
      })
    }
    else if (router.pathname !== '/')
    {
      router.push('/#' + path).then(() => {
        scroller.scrollTo(path.substring(1), {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
        });
      });
    }
  };
  return (
    <ScrollLink to={path} smooth>
      <MuiLink
        component={Typography}
        underline="hover"
        sx={{
          display: 'block',
          cursor : 'pointer',
          mb: 1,
          color: 'primary.contrastText',
        }}
       onClick={handleClick}
      >
        {label}
      </MuiLink>
    </ScrollLink>
    
  )
}

const FooterNavigation: FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => {
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };
  
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <FooterSectionTitle title="Menu" />
        {pageMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={path} openDialog={openDialog} />
        ))}
      </Grid>
      {/* <Grid item xs={12} md={4}>
        <FooterSectionTitle title="About" />
        {companyMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={path} openDialog={openDialog}/>
        ))}
      </Grid> */}
      <FormDialog open={dialogOpen} onClose={closeDialog} />
    </Grid>
  )
}

export default FooterNavigation
