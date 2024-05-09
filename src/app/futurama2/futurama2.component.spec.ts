import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Futurama2Component } from './futurama2.component';

describe('Futurama2Component', () => {
  let component: Futurama2Component;
  let fixture: ComponentFixture<Futurama2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Futurama2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Futurama2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
