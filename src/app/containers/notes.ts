import { Component, Output, OnDestroy } from '@angular/core';
import { NoteCard, NoteCreator } from '../ui';
import { NoteService } from '../services'


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
            <note-creator (createNote)="onCreateNote($event)"></note-creator>
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


export class Notes implements OnDestroy {

    ngOnDestroy() {
        console.log('destroyed');
    }

    //note = {title: 'new note', value: 'note here', color: 'seagreen'};

    //notes = [
    //    {title: 'new note', value: 'note here', color: 'seagreen'},
    //    {title: 'new note', value: 'note here', color: 'seagreen'},
    //    {title: 'new note', value: 'note here', color: 'seagreen'},
    //]

    notes = [];

    constructor(private noteService: NoteService) {
        console.log('00000000');

        this.noteService.getNotes().subscribe( res => this.notes = res.data )
        console.log('......dddd....')
        console.log(this.notes)

    }

    onNoteChecked(note, i) {
        //console.log(note);
        //this.notes.splice(i, 1);

        this.noteService.completeNote(note)
            .subscribe(note => {
                this.notes.splice(i,1);
                //or
                //const i = this.notes.findIndex(localNote => localNote.id === note.id );
                //this.notes.splice(i, 1);

            })


    }

    onCreateNote(note) {
        //this.notes.push(note);
        this.noteService.createNote(note).subscribe(note =>this.notes.push(note));
    }




};