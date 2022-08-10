import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() target: 'home' | 'favorites' = 'home';
  @Input() username: string = 'username';
  title: string = 'Home';
  src: string = 'assets/heart-solid.svg';
  alt: string = 'Other page';
  icon_url_redirect: string = '';

  constructor() { }

  ngOnInit(): void {
    this.title = this.target === 'home' ? 'Home' : 'Favorites';
    this.src = this.target === 'home' ? 'assets/heart-solid.svg' : 'assets/house-solid.svg';
    this.alt = this.target === 'home' ? 'Home' : 'Favorites';
    this.icon_url_redirect = this.target === 'home' ? './favorites' : './home';
  }

}
