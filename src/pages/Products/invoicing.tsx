import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { LayoutInvoicing } from '@/components/layout/layoutInvoicing'
import { HomeInvocing } from '../../components/homeProps/InvoicingData/homeinvoincing.data'
import { listDataItems } from '@/components/homeProps/InvoicingData/itemList.data'


const DynamicHomeHero = dynamic(() => import('../../components/homeProps/home'))
 const DynamicHomePerksInvoicing = dynamic(() => import('../../components/homeProps/features'))
const SmartAccounting: NextPageWithLayout = () => {
  return (
    <>
      <DynamicHomeHero homedata={HomeInvocing}/>
      <DynamicHomePerksInvoicing data={listDataItems}/>
    </>
  )
}

SmartAccounting.getLayout = (page) => <LayoutInvoicing>{page}</LayoutInvoicing>
export default SmartAccounting;

