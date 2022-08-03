import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  @Input() type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h1';
}
