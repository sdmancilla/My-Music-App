import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-join-btn',
  templateUrl: './join-btn.component.html',
  styleUrls: ['./join-btn.component.scss']
})
export class JoinBtnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() url: string = '';

}
