import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SikeresComponent } from './sikeres.component';

describe('SikeresComponent', () => {
  let component: SikeresComponent;
  let fixture: ComponentFixture<SikeresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SikeresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SikeresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
