import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeradorComponent } from 'src/app/pages/tools/gerador/gerador.component';

const routes: Routes = [
  { path: 'gerador', component: GeradorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolsRoutingModule { }
