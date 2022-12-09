import { Injectable } from '@angular/core';
//Para Fazer as requisicoes HTTP e usar o requisito de Observable Task.
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//Serve para retornar uma tarefa vazia caso necessario.
import { EMPTY }      from 'rxjs';
//Importar a Model
import { Task }       from '../model/task'; 

@Injectable({
  providedIn: 'root'
})

export class MinhasTarefasService {

  constructor(private http: HttpClient) { }

  list(): Observable<Task[]>{
    //Estrutura: get<ModeloImportardo[]array>(linkdatarefa);
    return this.http.get<Task[]>("http://localhost:3000/task");
  }

   //post(tarefa:ModeloImportado) É necessário parametro para passar o que deve ser inserido.
  post(task: Task): Observable<Task>{
    //Estrutura: post<ModeloImportardo>(linkdatarefa);
    return this.http.post<Task>("http://localhost:3000/task", task);
  }

  delete(id:number): Observable<any>{
    return this.http.delete("http://localhost:3000/task/" + id);
  }

  put(task:Task): Observable<Task> {
    if(!task.id) return EMPTY;
    return this.http.put<Task>("http://localhost:3000/task/" + task.id, task);
  }
}
