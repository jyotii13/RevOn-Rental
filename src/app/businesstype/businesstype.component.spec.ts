import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinesstypeComponent } from './businesstype.component';

describe('BusinesstypeComponent', () => {
  let component: BusinesstypeComponent;
  let fixture: ComponentFixture<BusinesstypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinesstypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusinesstypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
