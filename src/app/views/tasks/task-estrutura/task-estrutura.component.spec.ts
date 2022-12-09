import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskEstruturaComponent } from './task-estrutura.component';

describe('TaskEstruturaComponent', () => {
  let component: TaskEstruturaComponent;
  let fixture: ComponentFixture<TaskEstruturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskEstruturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskEstruturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
