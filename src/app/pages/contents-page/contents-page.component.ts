import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/constants/colors';
import { TeiConverterService } from 'src/app/services/tei-converter.service';

@Component({
  selector: 'app-contents-page',
  templateUrl: './contents-page.component.html',
  styleUrls: ['./contents-page.component.sass']
})
export class ContentsPageComponent implements OnInit {
  // Used to change the header color
  Color = Color;
  numberOfTexts = 6;
  textTitles: Array<string> = new Array(this.numberOfTexts);
  constructor(private http: HttpClient, private converter: TeiConverterService) {
    for (let i = 1; i <= this.numberOfTexts; i = i + 1){
      this.http.get(`assets/texts/text_${i}.xml`, { responseType: 'text' as 'text'}).subscribe(data => {
        this.textTitles[i - 1] = this.converter.convertTeiToObject(data).title;
        console.log(this.textTitles);
      });
    }
  }

  ngOnInit(): void {
  }

}
