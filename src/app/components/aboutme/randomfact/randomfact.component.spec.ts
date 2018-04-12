import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomfactComponent } from './randomfact.component';

describe('RandomfactComponent', () => {
  let component: RandomfactComponent;
  let fixture: ComponentFixture<RandomfactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomfactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomfactComponent);
    component = fixture.componentInstance;
    component.fact = { link: 'woonandez.com', info: 'this is my website'};
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});


