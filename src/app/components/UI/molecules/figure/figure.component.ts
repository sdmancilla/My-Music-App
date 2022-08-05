import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-figure',
  templateUrl: './figure.component.html',
  styleUrls: ['./figure.component.scss']
})
export class FigureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() class_fig: string = '';
  @Input() class_img: string = '';
  @Input() alt: string = '';
  @Input() src: string = '';
  @Input() type_content: string = '';

}
