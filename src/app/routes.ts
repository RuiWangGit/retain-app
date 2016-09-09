import { RouterConfig } from '@angular/router';
import { Notes, Main, About, Auth } from './containers';
import { AuthService } from './services';

export const routes: RouterConfig = [

    {
        path: '', //on index load main
        component: Main,
        canActivate: [ AuthService ],
        children: [
            {
                path: '',
                component: Notes
            },
            {
                path: 'about',
                component: About
            }
        ]
    },
    {
        path: 'auth', component: Auth
    },
    {
        path: '**',
        redirectTo: ''
    }


]












