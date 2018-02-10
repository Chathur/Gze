import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectSaleEditComponent } from './directSale.edit.component';

describe('DirectSaleEditComponent', () => {
  let component: DirectSaleEditComponent;
  let fixture: ComponentFixture<DirectSaleEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectSaleEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectSaleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});