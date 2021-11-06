import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { generateToDos, ToDo } from './state/todo/todo.model';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let _toDo: Partial<ToDo>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should test selected', () => {
    el = fixture.debugElement.query(By.css('li')).nativeElement;
    expect(el.classList.has('selected')).toBe(false);

    comp.onSelect(heroes[0]);
    expect(el.classList.has('selected')).toBe(true);
});
});
