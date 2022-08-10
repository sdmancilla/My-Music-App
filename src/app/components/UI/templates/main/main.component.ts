import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Song, modifyFavorite } from '../../../../services/data';

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
  @Input() song_list: Song[] = [];
  // @Input() id_song: number = 0;

  // fill the spaces for grid display in the main component
  numInsertSequence(): Array<number> {
    const size = this.song_list.length <= 5 ? 5 : 0;
    return Array(size);
  }

  @ViewChild('favorite') viewChild: any;
  switchFavorite(id_song: number) {
    // console.log(this.id_song);
    // modifyFavorite( this.id_song );
    // console.log('holapppp');
    // if (this.id_song !== 0) {
    //   console.log('kkkkk');
    // }
    console.log(id_song);
    // this.viewChild.classList.add('favorite__fill');
  }
  

}
