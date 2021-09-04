import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Toast } from '../models/comment.model';

@Injectable({
    providedIn: 'root'
})
export class ToasterService {
    subject: BehaviorSubject<Toast | null>;
    toast$: Observable<Toast | null>;

    constructor() {
        this.subject = new BehaviorSubject<Toast | null>(null);
        this.toast$ = this.subject.asObservable()
            .pipe(filter(toast => toast !== null));
    }

    show(type: 'success' | 'error' | 'warning', title?: any, body?: any, delay?: any) {
        this.subject.next({ type, title, body, delay });
    }
}