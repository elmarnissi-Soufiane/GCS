import { Routes } from '@angular/router';
import { Login } from './features/Auth/components/login/login';
import { ForgotPassword } from './features/Auth/components/forgot-password/forgot-password';
import { Register } from './features/Auth/components/register/register';
import { Dashboard } from './features/Dashboard/components/dashboard/dashboard';
import { LayoutPage } from './features/Layout/components/layout-page/layout-page';
import { NotFound } from './shared/components/not-found/not-found';
import { Item } from './features/items/components/item/item';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: Login },
    { path: 'register', component: Register },
    { path: 'forgot-password', component: ForgotPassword },
    {
        path: '',
        component: LayoutPage,
        children: [
            { path: 'dashboard', component: Dashboard },
            { path: 'items', component: Item },
            { path: '**', component: NotFound }
        ]
    },
];