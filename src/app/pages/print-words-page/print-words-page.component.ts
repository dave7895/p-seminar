import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Word } from 'src/app/classes/text-data';

@Component({
  selector: 'app-print-words-page',
  templateUrl: './print-words-page.component.html',
  styleUrls: ['./print-words-page.component.sass']
})
export class PrintWordsPageComponent implements OnInit, AfterContentInit {
  wordsList: Set<Word> = new Set();
  textId: string;
  constructor(private route: ActivatedRoute) {
    this.textId = this.route.snapshot.paramMap.get('textId');
  }

  ngOnInit(): void {
  }
  ngAfterContentInit(): void {
    console.log(localStorage.getItem(`text_${this.textId}`));
    if (localStorage.getItem(`text_${this.textId}`)){
      for (const word of JSON.parse(localStorage.getItem(`text_${this.textId}`))){
        this.wordsList.add(JSON.parse(word));
      }
    }
    print();
  }
}
