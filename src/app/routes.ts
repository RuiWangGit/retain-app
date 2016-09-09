import { RouterConfig } from '@angular/router';
import { Notes, Main, About } from './containers';

export const routes: RouterConfig = [

    {
        path: '', //on index load main
        component: Main,
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
        path: '**',
        redirectTo: ''
    }


]












