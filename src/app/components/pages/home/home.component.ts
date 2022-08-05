import { Component, OnInit } from '@angular/core';
import { play_list_data, user, Song, User} from '../../../services/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(play_list_data);
  }

  user: User = user;
  playlist_name: string = 'Name of the playlist';

  // {
  //   song_name: 'Callaita',
  //   src_img: 'https://m.media-amazon.com/images/I/91z4elDbREL._SS500_.jpg',
  //   artist_name: 'Bad Bunny',
  //   album_name: 'Unknown',
  //   favorite: false
  // },

}
