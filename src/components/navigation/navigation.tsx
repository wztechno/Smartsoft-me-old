import React, { FC , useEffect } from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { navigations } from './navigation.data';

export interface NavigationProps{
  onCLose : () => void
}
const Navigation: FC<NavigationProps> = ({onCLose}) => {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === '/' && window.location.hash) {
      const sectionId = window.location.hash.substring(1); 
      scroller.scrollTo(sectionId, {
        duration: 350,
        delay: 0,
        smooth: 'easeInCubic',
      });
    }
  }, [router.asPath, router.pathname]); 

  const handleClick = (destination: string)  => { 
    if(destination == "contactUs"){ 
      router.push("/"+destination).then(()=>{
        scroller.scrollTo("contactUs", {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
        });
      })
    }
    else if (router.pathname !== '/') {
      router.push('/#' + destination);
    } else {
      scroller.scrollTo(destination, {
        duration: 350,
        delay:0,
        smooth: 'easeInOutQuart',
      });
    }
    onCLose?.()
  };

  const getNavColor = (destination: string) => {
    if (router.pathname === '/' && destination === '/') {
      return 'primary.main';
    } else if (router.pathname.includes(destination) && destination !== '/') {
      return 'primary.main';
    }
    return 'text.disabled';
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
      {navigations.map(({ path: destination, label }) => (
        <Box
          component={ScrollLink}
          key={destination}
          onClick={() => handleClick(destination)}
          activeClass="current"
          to={destination}
          spy={true}
          smooth={true}
          duration={350}
          sx={{
            position: 'relative',
            color: getNavColor(destination),
            cursor: 'pointer',
            fontWeight: 800,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            px: { xs: 0, md: 3 },
            mb: { xs: 3, md: 0 },
            fontSize: { xs: '1.2rem', md: '16px' },
            '& > div': { display: 'none' },
            '&.current > div': { display: 'block' },
            '&:hover': {
              color: 'primary.main',
              '& > div': { display: 'block' },
            },
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 12,
              transform: 'rotate(3deg)',
              '& img': { width: 44, height: 'auto' },
            }}
          >
          {/* eslint-disable-next-line */}
            <img src="/images/headline-curve.svg" alt="Headline curve" />
          </Box>
          {label}
        </Box>
      ))}
    </Box>
  );
};

export default Navigation;

            {/* eslint-disable-next-line */}
