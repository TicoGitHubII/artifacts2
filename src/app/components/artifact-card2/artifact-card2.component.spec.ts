import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtifactCard2Component } from './artifact-card2.component';

describe('ArtifactCard2Component', () => {
  let component: ArtifactCard2Component;
  let fixture: ComponentFixture<ArtifactCard2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtifactCard2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtifactCard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
