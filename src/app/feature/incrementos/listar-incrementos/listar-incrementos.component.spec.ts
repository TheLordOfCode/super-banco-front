import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarIncrementosComponent } from './listar-incrementos.component';


describe('ListarIncrementosComponent', () => {
  let component: ListarIncrementosComponent;
  let fixture: ComponentFixture<ListarIncrementosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarIncrementosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarIncrementosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
