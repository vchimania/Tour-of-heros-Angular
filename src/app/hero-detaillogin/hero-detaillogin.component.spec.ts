import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailloginComponent } from './hero-detaillogin.component';

describe('HeroDetailloginComponent', () => {
  let component: HeroDetailloginComponent;
  let fixture: ComponentFixture<HeroDetailloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroDetailloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
