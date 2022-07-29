import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFavoritesComponent } from './header-favorites.component';

describe('HeaderFavoritesComponent', () => {
  let component: HeaderFavoritesComponent;
  let fixture: ComponentFixture<HeaderFavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderFavoritesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
