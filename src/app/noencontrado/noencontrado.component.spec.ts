import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoencontradoComponent } from './noencontrado.component';

describe('NoencontradoComponent', () => {
  let component: NoencontradoComponent;
  let fixture: ComponentFixture<NoencontradoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoencontradoComponent]
    });
    fixture = TestBed.createComponent(NoencontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
