import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Word } from 'src/app/classes/text-data';

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.sass']
})
export class WordListComponent implements OnInit {
  @Input() words: Set<Word> = new Set();
  @Output() removeWordEvent: EventEmitter<Word> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  removeWordFromList(word: Word): void{
    this.removeWordEvent.emit(word);
  }
}
