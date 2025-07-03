import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Easy Accessible',
    description: 'Experience seamless accessibility anytime, anywhere – your app, your control, at your fingertips.',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'More Affordable Cost',
    description: 'Experience affordability with flexibility – our prices are defined and adjustable, tailored to meet your unique needs.',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'Unified Expertise: The Ultimate Solution',
    description: 'Our ERP specialists converge to craft a tailored, all-encompassing platform. From financing to accounting, invoicing to inventory, experience a unified approach to excellence, designed to elevate your business journey',
    icon: <LocalLibraryIcon />,
  },
 /* {
    title: 'Consultation With Mentor',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
    icon: <ContactSupportIcon />,
  },*/
]
