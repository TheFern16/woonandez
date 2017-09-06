import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunWithTextComponent } from './fun-with-text.component';

describe('FunWithTextComponent', () => {
  let component: FunWithTextComponent;
  let fixture: ComponentFixture<FunWithTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunWithTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunWithTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
