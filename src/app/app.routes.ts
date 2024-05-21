import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path : 'admin' ,
        loadChildren : ()=> import('./admin/admin.module').then(module => module.AdminModule)
    },
    {
        path : 'add-user',
        loadComponent : () => import('./admin/add-user/add-user.component').then(component => component.AddUserComponent)
    }
];
