import { Injectable } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private modal: NzModalService) {}

  createComponentModal(comp, view, params_) {
    const params = params_;
    params_ = { params };
    const body: any = {
      height: params.height
        ? isNaN(params.height)
          ? params.height
          : params.height + 'px'
        : '',
      width: params.width
        ? isNaN(params.width)
          ? params.width
          : params.width + 'px'
        : '',
    };

    return new Promise<any>((resolve) => {
      const modal = this.modal.create({
      nzTitle: null,
        nzWidth: params_.width ? params_.width : 520,
        nzClosable: false,
        nzBodyStyle: params.body,
        // nzClassName: params.class ? params.class : false,
        // nzWrapClassName: params.class ? params.class : false,
        nzContent: comp,
        nzViewContainerRef: view,
        nzComponentParams: params_,
        nzOnOk: () => new Promise((resolve) => setTimeout(resolve, 1000)),
        nzFooter: null /*[
          {
            label: 'change component title from outside',
            onClick: (componentInstance: any) => {
              componentInstance!.title = 'title in inner component is changed';
            }
          }
        ]*/,
      });
      const instance: any = modal.getContentComponent();
      modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));
      // Return a result when closed
      modal.afterClose.subscribe((result) => resolve(result));
    });
  }
}
