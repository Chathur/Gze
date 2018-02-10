import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesMainEditComponent } from './salesMain.edit.component';

describe('SalesMainEditComponent', () => {
  let component: SalesMainEditComponent;
  let fixture: ComponentFixture<SalesMainEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesMainEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesMainEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});