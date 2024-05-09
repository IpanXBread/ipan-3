import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuturamaComponent } from './futurama.component';

describe('FuturamaComponent', () => {
  let component: FuturamaComponent;
  let fixture: ComponentFixture<FuturamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuturamaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FuturamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
