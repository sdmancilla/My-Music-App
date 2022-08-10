import { Component, OnInit } from '@angular/core';
import { getData, getUser, Song, User} from '../../../services/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // console.log(play_list_data);
  }

  user: User = getUser();
  playlist_name: string = 'Name of the playlist';
  song_list: Song[] = getData();

}
