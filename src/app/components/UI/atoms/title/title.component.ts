import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})

export class TitleComponent {
  @Input() type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h1';
  @Input() class: string = '';
  @Input() text: string = '';
}
