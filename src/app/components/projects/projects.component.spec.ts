import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// component imports * delcarations
import { ProjectsComponent } from './projects.component';
import { PhotoComponent } from './photo/photo.component';

// service imports * providers
import { StateService } from '../services/state.service';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsComponent, PhotoComponent ],
      providers: [ StateService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
