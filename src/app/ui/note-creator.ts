


import { Component, OnInit, Output, EventEmitter } from '@angular/core'

import { ColorPicker } from './color-picker'


@Component({
    selector: 'note-creator',
    directives: [ColorPicker],
    styles: [
        `.note-creator {
          padding: 20px;
          background-color: white;
          border-radius: 3px;
        }
        .title {
          font-weight: bold;
          color: rgba(0,0,0,0.8);
        }
        .full {
          height: 100px;
        }
	`
    ],
    template: `
            <div class="note-creator shadow-2" [ngStyle]="{'background-color':newNote.color}">
                <!--<pre>{{newNote | json}}</pre>-->
              <form class="row" (submit)="onCreateNote()">
                <input
                  type="text"
                  [(ngModel)]="newNote.title"
                  name="newNoteTitle"
                  placeholder="Title"
                  class="col-xs-10 title"
                  *ngIf="fullForm"
                >
                <input
                  (focus)="toggle(true)"
                  type="text"
                  [(ngModel)]="newNote.value"
                  name="newNoteValue"
                  placeholder="Take a note..."
                  class="col-xs-10"
                >
                <div class="actions col-xs-12 row between-xs">
                    <div class="col-xs-3">
                        <color-picker [colors]="colors" (selected)="onColorSelect($event)"></color-picker>
                    </div>
                  <button
                    type="submit"
                    class="btn-light"
                   >
                    Done
                  </button>
                </div>
              </form>
            </div>

    `
    //template: `
    //        <div class="note-creator shadow-2">
    //            <pre>{{newNote | json}}</pre>
    //          <form class="row">
    //            <input
    //              type="text"
    //              [(ngModel)]="newNote.title"
    //              (ngModleChange)="newNote.title = $event"
    //              name="newNoteTitle"
    //              placeholder="Title"
    //              class="col-xs-10 title"
    //            >
    //            <input
    //              type="text"
    //              [(ngModel)]="newNote.value"
    //              (ngModleChange)="newNote.value = $event"
    //              name="newNoteValue"
    //              placeholder="Take a note..."
    //              class="col-xs-10"
    //            >
    //            <div class="actions col-xs-12 row between-xs">
    //              <button
    //                type="submit"
    //                class="btn-light"
    //               >
    //                Done
    //              </button>
    //            </div>
    //          </form>
    //        </div>
    //
    //`
})
export class NoteCreator {

    @Output() createNote = new EventEmitter();

    colors: Array<string> = ['#b19cd9', '#ff9691', '#77dd77', '#aec6cf', '#f49ac2', 'white'];

    newNote = {
        title: '',
        value: '',
        color: 'white',
    }


    fullForm: boolean = false;

    toggle(value: boolean) {
        this.fullForm = value;
    }

    onCreateNote() {
        const { title, value, color } = this.newNote;
        if ( title && value) {
            this.createNote.next({title, value, color});
            this.reset();
        }
    }

    reset() {
        this.newNote  = {
            title: '',
            value: '',
            color: 'white'
        }
    }

    onColorSelect (color) {
        this.newNote.color = color;
    }




    constructor() { }

    ngOnInit() { }
}


