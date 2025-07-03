import React, { ReactNode } from 'react' 
import { NextPageWithLayout } from '@/interfaces/layout'
import { SaasLayout } from '@/components/layout/layoutSaas' 
import {  Box, Container, Grid, Stack, Typography } from '@mui/material'
 
export interface ItemRowProps{
    title1 ?: string,
    title2 ?: string,
    title3 ?: string
}
function ItemRow({title1,title2,title3} : ItemRowProps){

    return (
        <Box textAlign={'center'}>
            <Typography variant='h5'>{title1}</Typography>
            <Typography variant='subtitle1'>{title2}</Typography>
            {!!title3 && <Typography variant='subtitle1'>{title3}</Typography>}
             
        </Box>
    )
}
 
const ContactUs: NextPageWithLayout = () => {
  return (
    <Stack bgcolor={'#005051'} minHeight={'61.8vh'} color={'#fff'} py={3} id="contactUs">
        <Typography textAlign={'center'} variant='h1' py={2}>GET IN TOUCH</Typography>
        <Grid container component={Container}>
            <Grid item xs={12} sm={4} justifyContent={'center'} display={'flex'}>
                <AddressSection/>
            </Grid> 
            <Grid item xs={12} sm={4} justifyContent={'center'} display={'flex'}>
                <PhoneSection/>
            </Grid> 
            <Grid item xs={12} sm={4} justifyContent={'center'} display={'flex'}>
              <EmailSection/>
            </Grid>
        </Grid>
    </Stack>
  )
}

ContactUs.getLayout = (page) => <SaasLayout>{page}</SaasLayout>
export default ContactUs;

 
function AddressSection(){

    return (
        <ContactInfo 
            ContactIconSvg={
                <svg className="mk-svg-icon" data-name="mk-moon-location-3" data-cacheid="icon-65f01c7a4ba94" style={{height:'48px',width:'48px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 480c-88.366 0-160-71.634-160-160 0-160 160-352 160-352s160 192 160 352c0 88.366-71.635 160-160 160zm0-258c-54.124 0-98 43.876-98 98s43.876 98 98 98 98-43.876 98-98-43.876-98-98-98zm-62 98a62 62 1260 1 0 124 0 62 62 1260 1 0-124 0z" transform="scale(1 -1) translate(0 -480)"></path></svg> 
            }
        >
            <Typography variant='h1'>Address</Typography>
            <ItemRow 
                title1='Lebanon' 
                title2='Beirut Airport Road Zaarour Center' 
                title3='Office Nb. 40'
            />
        </ContactInfo>
    )
}

function PhoneSection(){
    return (
        <ContactInfo
            ContactIconSvg={ <svg className="mk-svg-icon" data-name="mk-moon-phone-4" data-cacheid="icon-65f01c7a4f3a4" style={{height:'48px',width:'48px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M321.788 371.146c-11.188 6.236-20.175 2.064-32.764-4.572-11.46-8.748-45.402-35.438-81.226-71.188-26.156-33.084-46.162-64.288-55.375-79.293-.625-1.66-.944-2.632-.944-2.632-5.397-13.476-8.771-22.92-1.324-33.521 6.854-9.727 9.5-12.383 18.24-20.108l-87.79-130.124c-10.604 7.728-27.018 25.106-40.509 44.378-12.538 18.317-23.154 38.587-26.049 53.055 15.295 55.117 52.258 157.896 120.583 231.325l-.021.308c65.73 81.028 170.165 131.43 225.571 153.226 14.679-1.385 35.938-9.844 55.456-20.404 20.598-11.415 39.567-25.945 48.329-35.685l-120.288-100.829c-8.597 7.91-11.498 10.254-21.889 16.064zm-116.178-242.488c7.241-5.302 5.313-14.944 1.926-20.245l-66.579-101.913c-4.344-5.291-13.396-8.064-21.252-5.579l-27.433 18.381 88.034 129.879 25.304-20.523zm287.339 269.188l-94.473-76.788c-4.93-3.918-14.313-6.838-20.325-.188l-23.046 23.05 120.047 101.015 21.136-25.357c3.285-7.564 1.467-16.857-3.339-21.732z"></path></svg>}
        >
            <Typography variant='h1'>Phone</Typography>
            <ItemRow
                title1='Support'
                title2='+961 01 456 774'
            />
            <ItemRow
                title1='Information'
                title2='+961 03 357 739'                
            />
            <ItemRow
                title1='Information'
                title2='+961 70 292 605'
            />            
        </ContactInfo>
    )
}


function EmailSection(){

    return (
        <ContactInfo    
            ContactIconSvg={
                <svg className="mk-svg-icon" data-name="mk-moon-bubble-dots" data-cacheid="icon-65f01c7a51af9" style={{height:'48px',width:'48px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M418 32h-324c-51.7 0-94 42.3-94 94v354l96-96h322c51.7 0 94-42.3 94-94v-164c0-51.7-42.3-94-94-94zm-258 224c-17.673 0-32-14.327-32-32s14.327-32 32-32 32 14.327 32 32-14.327 32-32 32zm96 0c-17.673 0-32-14.327-32-32s14.327-32 32-32 32 14.327 32 32-14.327 32-32 32zm96 0c-17.673 0-32-14.327-32-32s14.327-32 32-32 32 14.327 32 32-14.327 32-32 32z"></path></svg>
            }  
        > 
            <Typography variant='h1'>EMAIL</Typography>

            <ItemRow
                title1='Info'
                title2='info@smartsoft-me.com'
            />
            <ItemRow
                title1='Support'
                title2='support@smartsoft-me.com'
            />        
        </ContactInfo>
    )
}

export interface ContactInfoProps{
    children : ReactNode,
    ContactIconSvg : any
}
function ContactInfo({children,ContactIconSvg} : ContactInfoProps){


    return (
        <Stack id={'mk-icon-box-5'} spacing={2} alignItems={'center'} className='mk-box-icon-2  jupiter-donut- box-align-center'>
        {ContactIconSvg&& <div className="mk-box-icon-2-icon size-48"> 
            {ContactIconSvg}
        </div>}
        {children} 
        </Stack>      
    )
}