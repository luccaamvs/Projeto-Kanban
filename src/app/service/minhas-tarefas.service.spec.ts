import { TestBed } from '@angular/core/testing';

import { MinhasTarefasService } from './minhas-tarefas.service';

describe('MinhasTarefasService', () => {
  let service: MinhasTarefasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinhasTarefasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
