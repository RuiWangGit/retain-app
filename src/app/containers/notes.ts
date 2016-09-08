import { Component } from '@angular/core';
import { NoteCard, NoteCreator } from '../ui'


@Component ( {
    selector: 'notes-container',
    directives: [ NoteCard, NoteCreator ],
    styles: [`
     .notes {
          padding-top: 50px;
        }
        .creator {
          margin-bottom: 40px;
        }



    `],
    template: `
        <div class="row center-xs notes">
      <div class="col-xs-6 creator">
            note creator here
            <note-creator></note-creator>
      </div>

      <div class="notes col-xs-8">
        <div class="row between-xs">
          <note-card
            class="col-xs-4"
            [note]="note"
            (checked)="onNoteChecked($event, i)"

            *ngFor="let note of notes; let i = index"
          >
          </note-card>
        </div>
      </div>
    </div>
    `
})

//<!--(checked)="onNoteChecked(note)"-->


export class Notes {

    //note = {title: 'new note', value: 'note here', color: 'seagreen'};
    notes = [
        {title: 'new note', value: 'note here', color: 'seagreen'},
        {title: 'new note', value: 'note here', color: 'seagreen'},
        {title: 'new note', value: 'note here', color: 'seagreen'},
    ]

    onNoteChecked(note, i) {
        console.log(note);
        this.notes.splice(i, 1)
    }
};