import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardForItemsComponent } from './card-for-items.component';

describe('CardForItemsComponent', () => {
  let component: CardForItemsComponent;
  let fixture: ComponentFixture<CardForItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardForItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardForItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
