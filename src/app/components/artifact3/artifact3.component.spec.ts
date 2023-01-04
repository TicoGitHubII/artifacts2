import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Artifact3Component } from './artifact3.component';

describe('Artifact3Component', () => {
  let component: Artifact3Component;
  let fixture: ComponentFixture<Artifact3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Artifact3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Artifact3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
