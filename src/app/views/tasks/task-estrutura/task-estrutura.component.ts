import { Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MinhasTarefasService } from 'src/app/service/minhas-tarefas.service';

@Component({
  selector: 'app-task-estrutura',
  templateUrl: './task-estrutura.component.html',
  styleUrls: ['./task-estrutura.component.css']
})

export class TaskEstruturaComponent{
//Com esse arquivo o Modal do Tasks.component podera funcionar.

  constructor(
    public dialogRef: MatDialogRef<TaskEstruturaComponent>,
    private minhasTarefasService: MinhasTarefasService,

  @Inject(MAT_DIALOG_DATA) public data:{
      id:       number,
      title:    string,
      mensagem: string,
      tag:      string,
      state:    string,
      update?:  boolean
  },) { }


  ngOnInit(): void { }

  cancel(): void { this.dialogRef.close(); }

  salvar() {
      if(!this.data) { return; }

      if (!this.data.update) {
          delete this.data.update;
          this.minhasTarefasService.post(this.data).subscribe(data=> {
            this.cancel();});
      }else{
        delete this.data.update;
        this.minhasTarefasService.put(this.data);
      }
    }
  }