import  DetailItems  from "../detailsitem";
import { advancedBook } from "./advancedBook.data";
import { worldwideData } from "./worldwideData.data";
import { dynamicReporting } from "./dynamicReporting.data";
export interface ListItemType {
    primary: string;
    secondary: string;
    key: string;
    component: JSX.Element; 
  }

export const listDataItems: ListItemType[] = [
    {
      key: 'worldwide',
      primary: 'Worldwide compatibility',
      secondary: ' ',
      component: <DetailItems data={worldwideData}/>
    },
    {    
        key: 'advancedbook', 
        primary: 'Advanced book keeper',   
        secondary: '',
        component: <DetailItems data={advancedBook}/>
     },
    { 
        key: 'dynamicreporting',
         primary: 'Dynamic reporting',
          secondary: '',
          component: <DetailItems data={dynamicReporting}/>
     },
  ];