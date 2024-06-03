import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatcheditorComponent } from './patcheditor.component';

describe('PatcheditorComponent', () => {
  let component: PatcheditorComponent;
  let fixture: ComponentFixture<PatcheditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatcheditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatcheditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
