import { Component, OnInit, Output } from '@angular/core';
import { getData, getUser, Song, User} from '../../../services/data';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  play_list_data: Song[] = getData();
  user: User = getUser();
  playlist_name: string = 'Name of the playlist';
  song_list: Song[] = this.play_list_data.filter(song => song.favorite);

}
