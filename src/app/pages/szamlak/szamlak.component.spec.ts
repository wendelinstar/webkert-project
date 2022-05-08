import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SzamlakComponent } from './szamlak.component';

describe('SzamlakComponent', () => {
  let component: SzamlakComponent;
  let fixture: ComponentFixture<SzamlakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SzamlakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SzamlakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
