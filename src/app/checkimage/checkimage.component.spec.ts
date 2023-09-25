import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckimageComponent } from './checkimage.component';

describe('CheckimageComponent', () => {
  let component: CheckimageComponent;
  let fixture: ComponentFixture<CheckimageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckimageComponent]
    });
    fixture = TestBed.createComponent(CheckimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
