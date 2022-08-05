import { Component, Input, OnInit } from '@angular/core';
import { play_list_data, user, Song, User} from '../../../../services/data';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }
  
  @Input() playlist_name: string = 'Name of the playlist';
  
  play_list_data: Song[] = play_list_data;

}
