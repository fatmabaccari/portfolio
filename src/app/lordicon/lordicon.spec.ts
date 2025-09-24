import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lordicon } from './lordicon';

describe('Lordicon', () => {
  let component: Lordicon;
  let fixture: ComponentFixture<Lordicon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lordicon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lordicon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
