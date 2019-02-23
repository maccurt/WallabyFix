import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs/internal/observable/of';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { TestBugComponent } from './test-bug.component';

describe('TestBug', () => {
  let component: TestBugComponent;
  let fixture: ComponentFixture<TestBugComponent>;

  const activateRouteMock = {
    data: of({
      categoryList: []
    })
  };
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestBugComponent],
      providers: [{ provide: ActivatedRoute, useValue: activateRouteMock }],
      imports: [HttpClientTestingModule, MatDialogModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
