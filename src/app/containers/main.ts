import { Component } from '@angular/core';
import { AppBarComponent } from '../ui';

import { Notes } from './notes'

@Component({
    selector: 'main-container',
    directives: [
        AppBarComponent, Notes
    ],
    template: `
        <div>
            <app-bar></app-bar>
            <main class="main">
                content will go here
                <notes-container></notes-container>
            </main>

        </div>
    `
})

export class Main {

}


