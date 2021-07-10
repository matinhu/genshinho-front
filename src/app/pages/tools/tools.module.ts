import { NgModule } from '@angular/core';

import { ToolsRoutingModule } from './tools-routing.module';
import { ToolsComponent } from './tools.component';
import { GeradorComponent } from './gerador/gerador.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ToolsComponent, GeradorComponent],
  imports: [ToolsRoutingModule, SharedModule],
})
export class ToolsModule {}
