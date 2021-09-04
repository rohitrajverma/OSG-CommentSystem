import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditUsersComponent } from './add-edit-users/add-edit-users.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
    {
        path: '', component: UsersComponent,
        children: [
            { path: 'add', component: AddEditUsersComponent },
            { path: 'edit/:id', component: AddEditUsersComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule { }