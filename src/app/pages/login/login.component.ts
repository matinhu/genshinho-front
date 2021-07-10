import { Component, Input, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Input() params: any;
  @Input() body: any;

  validateForm!: FormGroup;
  login: boolean = true;
  signUp: boolean = false;

  captchaTooltipIcon: NzFormTooltipIcon = {
    type: 'info-circle',
    theme: 'twotone',
  };

  constructor(private modal: NzModalRef, private fb: FormBuilder) {}

  clickSignUp() {
    if (this.login) {
      this.login = false;
      this.signUp = true;
      const x = (document.querySelector('.ant-modal-body') as HTMLElement);
      if (x) {
        x.style.backgroundImage = 'url("assets/imgs/adventurewpp.jpg")'
      }
    } else {
      this.signUp = false;
      this.login = true;
      const x = (document.querySelector('.ant-modal-body') as HTMLElement);
      if (x) {
        x.style.backgroundImage = 'url("assets/imgs/dilucwpp.jepg")'
      }
    }

  }

  ngOnInit(): void {
    console.log(this.params);
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      login: [null, [Validators.required]],
      userName: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      nickname: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required]],
      captcha: [null],
      agree: [false],
      remember: [true],
    });
  }

  clickClose(params?: any) {
    if (params) {
      this.modal.destroy(params);
    } else {
      this.modal.destroy();
    }
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() =>
      this.validateForm.controls.checkPassword.updateValueAndValidity()
    );
  }
  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }
}
