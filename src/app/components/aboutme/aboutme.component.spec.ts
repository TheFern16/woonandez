import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// component declarations * declarations
import { AboutmeComponent } from './aboutme.component';
import { TechComponent } from './tech/tech.component';
import { RandomfactComponent } from './randomfact/randomfact.component';

// service providers
import { SkillsService, FactService } from '../services/';

describe('AboutmeComponent', () => {
  let component: AboutmeComponent;
  let fixture: ComponentFixture<AboutmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutmeComponent, TechComponent, RandomfactComponent ],
      providers: [ SkillsService, FactService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

