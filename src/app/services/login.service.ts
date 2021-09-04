import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Users } from "../models/comment.model";
import { LocalStorageService } from "./local-storage.service";
import { ToasterService } from "./toast-message.service";


@Injectable({
    providedIn: "root"
})

export class LoginService {
    loggedInUser: string;
    nameChange: Subject<string> = new Subject<string>();

    constructor(private storage: LocalStorageService, private toaster: ToasterService) { }
    registerUser(data: Users) {
        var storedUsers = this.storage.getFromStorage('users');
        var userEmail = data.email;
        let userExist = storedUsers.find((x: { email: any; }) => x.email === userEmail);
        if (userExist) {
            this.toaster.show('error', 'User already exist!', 'Please register with other email');
            return false;
        } else {
            data.avatar = "boy.png";
            data.role = "User"
            storedUsers.push(data);
            this.storage.saveToStorage('users', storedUsers);
            this.toaster.show('success', 'Signup successful!', 'Now you can login');
            return true;
        }
    }

    emitUserName(name: string) {
        this.nameChange.next(name);
    }

    checkLogin(data: Users): boolean {
        var storedUsers = this.storage.getFromStorage('users');
        var userEmail = data.email;
        var userPw = data.password;
        let userExist = storedUsers.find((x: { email: any; }) => x.email === userEmail);
        if (userExist) {
            if (userExist.password === userPw) {
                this.toaster.show('success', 'Login successful!', 'yipee... you are logged in', 2000);
                this.storage.saveToStorage('loggedInUser', userExist.name);
                this.storage.saveToStorage('loggedInUserAvatar', userExist.avatar);
                this.emitUserName(userExist.name);
                return true;
            } else {
                this.toaster.show('error', 'Incorrect password!', 'Please try again with correct password');
                return false;
            }
        } else {
            this.toaster.show('error', 'User not found!', 'Please register');
            return false;
        }
    }
}