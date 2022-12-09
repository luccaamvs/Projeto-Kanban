//Aqui ficarão todas as funcionalidades da parte principal do Kanban.

import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { MinhasTarefasService } from 'src/app/service/minhas-tarefas.service';
import { TaskEstruturaComponent } from '../task-estrutura/task-estrutura.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  listaTasks: Task[] = [];
  task?: Task;
  estaEditando = false;

  constructor(private minhasTarefasService: MinhasTarefasService,
  public dialog: MatDialog ) { }

  ngOnInit(): void { this.list();}


//Inscrever-se em todos os eventos do Service e declarar funcoes do card.

  list(){
    this.minhasTarefasService.list().subscribe(task => {
      this.listaTasks = task;
    })
  }

  new(status:string){
    this.task = new Task();
    this.estaEditando = false;
    this.modal(status);
  }

  delete(id?: number){
    if(!id){return}
    const resposta = confirm('Excluir?');
    if (resposta){
      this.minhasTarefasService.delete(id).subscribe( () => {this.list(); })
    }
  }

  select(task:Task){
    this.task = task;
    this.estaEditando = true;
    this.modal(this.task.state);
  }

  refresh(task:Task, status:string){
    task.state = status;
    this.minhasTarefasService.put(task).subscribe( ()=>{
      this.list();
    })
  }
  
//Modal que ira surgir ao tentar editar a estrutura.

  modal(status?:string):void{
    if(this.task){
      const dialogRef = this.dialog.open(TaskEstruturaComponent, {
        width: '250px',
        data:{
          id:       this.task.id,
          title:    this.task.title,
          tag:      this.task.tag,
          mensagem: this.task.mensagem,
          state:    status,
          update:   this.estaEditando
        },
      });
      dialogRef.afterClosed().subscribe( () => { this.list(); });
    }
  }

}