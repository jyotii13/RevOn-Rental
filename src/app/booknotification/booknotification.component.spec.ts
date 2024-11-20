import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooknotificationComponent } from './booknotification.component';

describe('BooknotificationComponent', () => {
  let component: BooknotificationComponent;
  let fixture: ComponentFixture<BooknotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooknotificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BooknotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
