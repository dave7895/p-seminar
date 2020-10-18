import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/constants/colors';

@Component({
  selector: 'app-contents-page',
  templateUrl: './contents-page.component.html',
  styleUrls: ['./contents-page.component.sass']
})
export class ContentsPageComponent implements OnInit {
  // Used to change the header color
  Color = Color;
  constructor() { }

  ngOnInit(): void {
  }

}
