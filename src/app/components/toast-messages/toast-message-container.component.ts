import { Component, Input, OnInit } from '@angular/core';
import { ToasterService } from 'src/app/services/toast-message.service';


@Component({
    selector: 'app-toaster-container',
    template: `<app-toast-messages *ngFor="let toast of toasts; let i=index" 
      [toast]="toast" [i]="i"
      (remove)="remove($event)"></app-toast-messages>`,
    styles: []
})
export class ToasterContainerComponent implements OnInit {

    toasts: any = [];

    constructor(public toaster: ToasterService) { }

    ngOnInit() {
        this.toaster.toast$
            .subscribe(toast => {
                this.toasts = [toast, ...this.toasts];
                setTimeout(() => this.toasts.pop(), toast?.delay || 6000);
            });
    }

    remove(index: number) {
        this.toasts = this.toasts.filter((v: any, i: any) => i !== index);
    }
}