import { Component } from '@angular/core';
import { AppBarComponent } from '../ui'

@Component({
    selector: 'main-container',
    directives: [
        AppBarComponent
    ],
    template: `
        <div>
            <app-bar></app-bar>
            <main class="main">
                content will go here
            </main>

        </div>
    `
})

export class Main {

}


