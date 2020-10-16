import { Word } from './../../../classes/text-data';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-translation-dialog',
  templateUrl: './show-translation-dialog.component.html',
  styleUrls: ['./show-translation-dialog.component.sass']
})
export class ShowTranslationDialogComponent implements OnInit {
  @Input() word: Word = new Word();

  constructor() { }

  ngOnInit(): void {
  }

}
