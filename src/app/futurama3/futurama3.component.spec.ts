import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Futurama3Component } from './futurama3.component';

describe('Futurama3Component', () => {
  let component: Futurama3Component;
  let fixture: ComponentFixture<Futurama3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Futurama3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Futurama3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
