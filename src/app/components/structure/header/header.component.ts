import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  /**
   * Title of the displayed text/book
   */
  @Input() title: string;

  /**
   * Image fitting the displayed text/book
   */
  @Input() imgSrc: string;

  constructor() { }

  ngOnInit(): void {
  }

}
