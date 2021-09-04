import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() closedLogin: any;
  @Output() openLogin = new EventEmitter<boolean>();
  loggedInUserName: string;
  loggedInUserAvatar: string;
  _subscription: Subscription;
  constructor(private login: LoginService, private storage: LocalStorageService, private router: Router) { }
  ngOnInit(): void {
    if (this.storage.getRawFromStorage('loggedInUser')) {
      this.getCurrentUser();
    }
    this._subscription = this.login.nameChange.subscribe((value) => {
      this.getCurrentUser();
      this.loggedInUserName = value;

    });
  }
  isUserLoggedIn() {
    if (this.loggedInUserName) {

    }
  }

  getCurrentUser() {
    this.loggedInUserName = this.storage.getFromStorage('loggedInUser');
    this.loggedInUserAvatar = this.storage.getFromStorage('loggedInUserAvatar');
    console.log(this.loggedInUserAvatar);
    
  }

  openLoginModal() {
    this.openLogin.emit(true);
  }

  ngOnDestroy() {
    if (this._subscription)
      this._subscription.unsubscribe();
  }

  logout() {
    this.storage.removeFromStorage('loggedInUser');
    this.storage.removeFromStorage('loggedInUserAvatar');
    this.loggedInUserName = ''
    this.router.navigate([''])
  }
}
