import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationDialogComponent } from './configuration-dialog.component';

describe('ConfigurationDialogComponent', () => {
  let component: ConfigurationDialogComponent;
  let fixture: ComponentFixture<ConfigurationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigurationDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfigurationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
