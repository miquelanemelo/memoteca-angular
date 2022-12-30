import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirPensamentoComponent } from './excluir-pensamentos.component';

describe('ExcluirPensamentosComponent', () => {
  let component: ExcluirPensamentoComponent;
  let fixture: ComponentFixture<ExcluirPensamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirPensamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluirPensamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
