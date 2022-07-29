import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinBtnComponent } from './join-btn.component';

describe('JoinBtnComponent', () => {
  let component: JoinBtnComponent;
  let fixture: ComponentFixture<JoinBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
