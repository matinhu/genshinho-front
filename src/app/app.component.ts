import { Component, ViewContainerRef } from '@angular/core';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public vars: MasterService, private vcr: ViewContainerRef) {}
  isCollapsed = false;
  async login() {
    const params: any = {
      username: '',
      password: '',
      class: 'login',
      body: {
        backgroundImage: 'url("assets/imgs/dilucwpp.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      },
    };

    const result = await this.vars.createComponentModal(
      LoginComponent,
      this.vcr,
      params
    );
    if (result) {
    }
  }

  logout(){}
}
