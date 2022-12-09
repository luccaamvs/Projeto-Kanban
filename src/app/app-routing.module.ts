import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from "./views/tasks/tasks/tasks.component";
import { ConteudoComponent } from "./views/conteudo/conteudo.component";

const routes: Routes = [
    {path: '', component: TasksComponent},
    {path: 'conteudo', component: ConteudoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
