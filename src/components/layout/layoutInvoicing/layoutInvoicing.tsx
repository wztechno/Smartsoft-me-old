
import React, { FC, ReactNode } from 'react'
import Box from '@mui/material/Box'
// import { HeaderProps } from '../../headerProps'
// import {navigationsInvoicing} from '../../navigationp/navigationInvoicing'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

interface Props {
  children: ReactNode
}

const AccountingLayout: FC<Props> = ({ children }) => {
  return (
    <Box component="main">
      <Header/>
      {/* <HeaderProps navigations={navigationsInvoicing} /> */}
      {children}
      <Footer/>
    </Box>
  )
}

export default AccountingLayout
