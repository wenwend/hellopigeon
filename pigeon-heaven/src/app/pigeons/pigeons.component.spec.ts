import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PigeonsComponent } from './pigeons.component';

describe('PigeonsComponent', () => {
  let component: PigeonsComponent;
  let fixture: ComponentFixture<PigeonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PigeonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PigeonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
