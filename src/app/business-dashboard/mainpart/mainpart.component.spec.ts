import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpartComponent } from './mainpart.component';

describe('MainpartComponent', () => {
  let component: MainpartComponent;
  let fixture: ComponentFixture<MainpartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainpartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainpartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
