import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { SaasLayout } from '@/components/layout/layoutSaas'
import { HeroOnPremise } from '@/components/homeSolution/onpremise.data'
const DynamicHomeHero = dynamic(() => import('../../components/homeSolution/homeSolutionl'))
const saasERPSoftware: NextPageWithLayout = () => {
  return (
    <>
      <DynamicHomeHero herodata={HeroOnPremise}/>
    </>
  )
}

saasERPSoftware.getLayout = (page) => <SaasLayout>{page}</SaasLayout>
export default saasERPSoftware;

