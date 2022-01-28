import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragAndDropComponentComponent } from './drag-and-drop-component.component';

describe('DragAndDropComponentComponent', () => {
  let component: DragAndDropComponentComponent;
  let fixture: ComponentFixture<DragAndDropComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragAndDropComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragAndDropComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
