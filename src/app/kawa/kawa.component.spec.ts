import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KawaComponent } from './kawa.component';

describe('KawaComponent', () => {
  let component: KawaComponent;
  let fixture: ComponentFixture<KawaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KawaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KawaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
