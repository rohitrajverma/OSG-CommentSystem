import { Component, OnInit } from '@angular/core';
import { users } from './services/data';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'osgComments';
  showLogin: boolean = false;
  constructor(
    private storage: LocalStorageService,
  ) { }

  ngOnInit() {
    if (!this.storage.getRawFromStorage('users')) {
      this.storage.saveToStorage('users', users);
    }    
  }

  showLoginModal(event: any) {
    this.showLogin = true;
  }
  closeLoginModal(event: any) {
    this.showLogin = false;
  }
}
