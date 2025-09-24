import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarBackground } from './star-background';

describe('StarBackground', () => {
  let component: StarBackground;
  let fixture: ComponentFixture<StarBackground>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarBackground]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarBackground);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
