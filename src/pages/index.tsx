import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'
const DynamicHomeHero = dynamic(() => import('../components/home/hero'))
const DynamicHomeFeature = dynamic(() => import('../components/home/feature'))
const DynamicHomeProducts = dynamic(() => import('../components/home/products'))
const DynamicHomeSolutions = dynamic(() => import('../components/home/solutions'))
const DynamicHomeOurCard = dynamic(() => import('../components/home/card'))
const Home: NextPageWithLayout = () => {
  return (
    <><DynamicHomeHero />
      <DynamicHomeProducts />
      <DynamicHomeFeature />
      <DynamicHomeSolutions />
      <DynamicHomeOurCard />
      
    </>
  )
}

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Home
