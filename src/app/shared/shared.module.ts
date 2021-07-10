import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { LoginComponent } from '../pages/login/login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzUploadModule,
    NzMessageModule,
    PdfViewerModule,
    NzProgressModule,
    NzStepsModule,
    NzPopoverModule,
    NzModalModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzUploadModule,
    NzMessageModule,
    PdfViewerModule,
    NzProgressModule,
    NzStepsModule,
    NzPopoverModule,
    NzModalModule,
  ],
})
export class SharedModule {}
