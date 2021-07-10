import { Component, Input, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() params: any;
  constructor(private modal: NzModalRef) { }

  ngOnInit(): void {
    console.log(this.params)
  }

  clickClose(params?: any) {
    if (params) {
      this.modal.destroy(params);
    } else {
      this.modal.destroy();
    }
  }
}
