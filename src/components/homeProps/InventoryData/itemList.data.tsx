import  DetailItems  from "../detailsitem";
import { productData } from "./productitem.data";
import { stockData } from "./stockitem.data";
import { dashBoardData } from "./dashboarditem.data";
export interface ListItemType {
    primary: string;
    secondary: string;
    key: string;
    component: JSX.Element; 
  }

export const listDataItems: ListItemType[] = [
    {
      key: 'products',
      primary: 'Products management',
      secondary: 'Manage your product listings',
      component: <DetailItems data={productData}/>
    },
    {    
        key: 'stock', 
        primary: 'Stock management',   
        secondary: 'Adjust stock levels and manage inventory',
        component: <DetailItems data={stockData}/>
     },
    { 
        key: 'dashboards',
         primary: 'Dashboards and reporting',
          secondary: 'View reports and performance dashboards',
          component: <DetailItems data={dashBoardData}/>
     },
  ];