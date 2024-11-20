// import { Routes } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { ModeComponent } from './mode/mode.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
// import { BinfoComponent } from './binfo/binfo.component';
import { BusinessComponent } from './business/business.component';
import { SearchComponent } from './search/search.component';
import { AddvehicleComponent } from './addvehicle/addvehicle.component';
import { NavbarComponent } from './navbar/navbar.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { BooknotificationComponent } from './booknotification/booknotification.component';
import { BasicinfoComponent } from './basicinfo/basicinfo.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { ServicepageComponent } from './servicepage/servicepage.component';
import { FaqpageComponent } from './faqpage/faqpage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { BusinesslistComponent } from './businesslist/businesslist.component';

import { BusinesstypeComponent } from './businesstype/businesstype.component';
import { CompanyComponent } from './company/company.component';
import { BusinessregisterComponent } from './businessregister/businessregister.component';

export const routes: Routes = [
    
    {
        path: 'navbar',
        component: NavbarComponent
    },
    
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    // {
    //     path:'signUp-mode',
    //     children:[
    //         {path:"", component: ModeComponent},
    //         {path:"user-signup", component: UsersignupComponent} 
    //     ]
        
    // },
    {
        path:'signUp-mode',
        component: ModeComponent

    },
    {
        path: 'user-signup',
        component: UsersignupComponent
    },
    {
        path: 'business-signup',
        component: BusinessregisterComponent
    },
    // {
    //     path: 'basic-info',
    //     component: BinfoComponent
    // },
    {
        path: 'basic',
        component: BasicinfoComponent

    },
    {
        path: 'business-mode',
        component: BusinessComponent
    },
    {
        path:'businesstype',
        component: BusinesstypeComponent
    },
    {
        path: 'company',
        component: CompanyComponent

    },
    {
       path: 'search',
       component: SearchComponent
    },
    {
        path: 'addvehicle',
        component: AddvehicleComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'notification',
        component: BooknotificationComponent
    },
    {
        path: 'about',
        component: AboutpageComponent
    },
    {
        path: 'service',
        component: ServicepageComponent
    },
    {
        path: 'faq',
        component: FaqpageComponent
    },
    {
        path: 'contact',
        component: ContactpageComponent
    },
    {
        path:'businesslist',
        component: BusinesslistComponent
    }
    
];
