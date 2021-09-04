import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/models/comment.model';
import { DataShareService } from 'src/app/services/data-share.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-add-edit-users',
  templateUrl: './add-edit-users.component.html',
  styleUrls: ['./add-edit-users.component.scss']
})
export class AddEditUsersComponent implements OnInit {
  inEditMode: boolean;
  model: Users;
  editIndex: number;
  Roles: string[] = [
    'Admin', 'User'
  ];
  Avatar: string[] = [
    'boy.png', 'man.png', 'man.png', 'woman.png', 'woman2.png'
  ]
  title: string;
  constructor(private router: Router,
    private dataShareService: DataShareService,
    private storage: LocalStorageService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot['_routerState'].url === '/users/add') {
      this.title = 'Add User';
      this.model = {
        name: '',
        email: '',
        password: '',
        role: '',
        avatar: ''
      }
    } else {
      this.title = 'Edit User';
      this.inEditMode = true;
      this.activatedRoute.params.subscribe(params => this.editIndex = params.id);
      let storedUser = this.storage.getFromStorage('users');
      this.model = storedUser[this.editIndex]
    }
  }

  passData() {
    this.dataShareService.sendDataToOtherComponent(null);
  }

  close() {
    this.router.navigate(['users']);
  }

  onSubmit(data) {
    let storedUser = this.storage.getFromStorage('users');

    if (this.inEditMode) {
      storedUser.splice(this.editIndex, 1, data.value);
    } else {
      storedUser.push(data.value);
    }
    this.storage.saveToStorage('users', storedUser);
    this.passData();
    this.close();
  }
}
