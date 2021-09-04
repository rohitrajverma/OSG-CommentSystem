import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showSignUpForm: boolean = false;
  @Input() showLogin: boolean = false;
  @Output() close = new EventEmitter<boolean>();

  constructor(private loginService: LoginService) { }
  ngOnInit(): void {
  }
  model: any = {};

  closeLogin() {
    this.showLogin = false;
    this.close.emit(false);
  }

  onSubmit(data: any) {
    let success = this.loginService.checkLogin(data.value);
    if (success) {
      this.closeLogin();
      this.model = {};
      this.showSignUpForm = false;
    }
  }

  onSignUp(data: any) {
    let success = this.loginService.registerUser(data.value);
    if (success) {
      this.closeLogin();
      this.model = {};
      this.showSignUpForm = false;
    }
  }

  openSignupForm(bool: boolean) {
    this.showSignUpForm = bool;
  }

}
