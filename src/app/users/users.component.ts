import { Component, OnInit } from '@angular/core';
import { Users } from '../models/comment.model';
import { DataShareService } from '../services/data-share.service';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  list: Users[]

  constructor(private storage: LocalStorageService, private dataShareService: DataShareService) {
  }
  ngOnInit(): void {
    this.list = this.storage.getFromStorage('users');
    this.dataShareService.shareDataSubject.subscribe(receiveddata => {
      this.list = this.storage.getFromStorage('users');
    });
  }

  deleteUser(index) {
    let storedUsers = this.storage.getFromStorage('users');
    storedUsers.splice(index, 1);
    this.storage.saveToStorage('users', storedUsers)
    this.list = this.storage.getFromStorage('users');
  }

}
