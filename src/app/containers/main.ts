import { Component } from '@angular/core';
import { AppBarComponent } from '../ui';
import { Notes } from './notes';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'main-container',
    directives: [
        AppBarComponent, Notes,
        ...ROUTER_DIRECTIVES
    ],
    template: `
        <div>
            <app-bar></app-bar>
            <main class="main">
                content will go here
                <!--<notes-container></notes-container>-->
                <router-outlet></router-outlet>
            </main>

        </div>
    `
})

export class Main {

}


