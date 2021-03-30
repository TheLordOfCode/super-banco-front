import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarIncrementoComponent } from './registrar-incremento.component';

describe('RegistrarIncrementoComponent', () => {
  let component: RegistrarIncrementoComponent;
  let fixture: ComponentFixture<RegistrarIncrementoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarIncrementoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarIncrementoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
