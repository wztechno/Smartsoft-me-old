import React, { FC, useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Logo } from '@/components/logo'
import { Navigation /*AuthNavigation*/ } from '@/components/navigation'
import { useTheme } from '@mui/material/styles'
import { Menu, Close } from '@mui/icons-material'
import theme from '@/config/theme'

const Header: FC = () => {
  const [visibleMenu, setVisibleMenu] = useState<boolean>(false)
  const { breakpoints } = useTheme()
  const matchMobileView = useMediaQuery(breakpoints.down('md'))

  return (
    <Box>
    <Container sx={{ width:"95%",py: { xs: 1, md: 2 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{flex: '0 0 auto', padding: '2px' }}>
            <Logo />
          </Box>
          <Box sx={{ ml: 'auto', display: { xs: 'inline-flex', md: 'none' } }}>
            <IconButton onClick={() => setVisibleMenu(!visibleMenu)}>
              <Menu />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: { xs: 'column', md: 'row' },
              transition: theme.transitions.create(['top']),
              ...(matchMobileView && {
                py: { xs: 3, md: 0 },
                backgroundColor: 'background.paper',
                zIndex: 'appBar',
                position: 'fixed',
                top: visibleMenu ? 0 : '-100%',
                left: 0,
                right: 0,
                maxHeight: '100vh',
                overflowY: 'auto',
              })
            }}
          >
            <Navigation 
              onCLose={()=>{
                setVisibleMenu(false) 
              }}
            />
            {visibleMenu && matchMobileView && (
              <IconButton
                sx={{
                  position: 'fixed',
                  top: theme.spacing(1),
                  right: theme.spacing(1),
                }}
                onClick={() => setVisibleMenu(!visibleMenu)}
              >
                <Close />
              </IconButton>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
export default Header
