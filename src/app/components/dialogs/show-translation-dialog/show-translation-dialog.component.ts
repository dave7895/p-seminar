import { Word } from './../../../classes/text-data';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-show-translation-dialog',
  templateUrl: './show-translation-dialog.component.html',
  styleUrls: ['./show-translation-dialog.component.sass']
})
export class ShowTranslationDialogComponent implements OnInit {
  @Input() word: Word = new Word();

  constructor(private dialogRef: MatDialogRef<ShowTranslationDialogComponent>,) { }

  ngOnInit(): void {
  }
  // Closes the dialog
  closeDialog(): void{
    this.dialogRef.close();
  }
  // Closes the dialog and returns the word that should be put on the word list
  addWordToList(): void{
    this.dialogRef.close(this.word);
  }
}
