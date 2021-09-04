import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LocalStorageService } from './services/local-storage.service';
import { ToasterService } from './services/toast-message.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router, private storage: LocalStorageService, private toast: ToasterService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = this.storage.getFromStorage('loggedInUser')
        if (user && JSON.stringify(user) !== '{}') {
            let allUsers = this.storage.getFromStorage('users');
            if (allUsers.find(x => x.name === user).role === 'Admin') {
                return true;
            } else {
                this.router.navigate([''])
                this.toast.show('error', 'You are not an Admin!', 'Please contact the Admin');
                return false;
            }
        }

        this.router.navigate([''])
        this.toast.show('error', 'Please login!', 'Please login to access the users data');
        return false;
    }
}