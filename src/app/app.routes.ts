import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.component';
import { ContentPage } from './pages/content/content.component';

export const routes: Routes = [
    {
        path:'',
        component: HomePage
    },
    {
        path:'content/:id',
        component: ContentPage
    }
];
