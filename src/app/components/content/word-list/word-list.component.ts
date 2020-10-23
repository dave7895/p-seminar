import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Word } from 'src/app/classes/text-data';

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.sass']
})
export class WordListComponent implements OnInit, OnChanges {
  @Input() words: Set<Word> = new Set();
  @Input() textId = '';
  @Input() static = false;
  @Output() removeWordEvent: EventEmitter<Word> = new EventEmitter();
  constructor(private route: ActivatedRoute) {
    if (this.route.snapshot.paramMap.get(`text_${this.textId}`)){
      this.textId = this.route.snapshot.paramMap.get(`text_${this.textId}`);
    }
  }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.words){
      const wordArray = [];
      for (const word of this.words){
        wordArray.push(JSON.stringify(word));
      }
      localStorage.setItem(`text_${this.textId}`, JSON.stringify(wordArray));
    }
  }
  removeWordFromList(word: Word): void{
    this.removeWordEvent.emit(word);
  }
  printWordsList(): void{
    const wordArray = [];
    for (const word of this.words){
      wordArray.push(JSON.stringify(word));
    }
    localStorage.setItem(`text_${this.textId}`, JSON.stringify(wordArray));
    window.open(`/print/${this.textId}`, '_blank');
  }
}
