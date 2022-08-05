import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() favorite: boolean = false;
  @Input() src_img: string = 'assets/non-image-song.png';
  @Input() song_name: string = 'Song name';
  @Input() artist_name: string = 'Artist name';
  @Input() album_name: string = 'Album name';
  @Input() url_fav: string = '';
  class_article_fav: string = "";
  class_svg_fav: string = "";

  constructor() { }
  
  ngOnInit(): void {
    this.class_article_fav = !this.favorite? "": ' favorite';
    this.class_svg_fav = !this.favorite? "": ' favorite__fill';
  }
  
}
