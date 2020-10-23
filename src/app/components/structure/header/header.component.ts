import { Color } from './../../../constants/colors';
import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

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

  /**
   * Color that should be used for the background
   */
  @Input() color: Color = Color.azul;
  constructor() { }

  ngOnInit(): void {
  }
  // Navigate to the previous page
  goBack(): void{
    window.history.back();
  }
}
