import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopThreeVehicleComponent } from './top-three-vehicle.component';

describe('TopThreeVehicleComponent', () => {
  let component: TopThreeVehicleComponent;
  let fixture: ComponentFixture<TopThreeVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopThreeVehicleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopThreeVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
