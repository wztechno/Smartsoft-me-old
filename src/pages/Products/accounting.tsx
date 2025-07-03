import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { LayoutAccounting } from '@/components/layout/layoutAccountig'
import { HomeAccountig } from '@/components/homeProps/AccountingData/homeAccounting.data'
import { listDataItems } from '@/components/homeProps/AccountingData/itemList.data'

const DynamicHomeHero = dynamic(() => import('../../components/homeProps/home'))
 const DynamicHomePerksAccountig = dynamic(() => import('../../components/homeProps/features'))

const SmartAccounting: NextPageWithLayout = () => {
  return (
    <>
      <DynamicHomeHero homedata={HomeAccountig}/>
      <DynamicHomePerksAccountig data={listDataItems}/>

    </>
  )
}

SmartAccounting.getLayout = (page) => <LayoutAccounting>{page}</LayoutAccounting>
export default SmartAccounting;
