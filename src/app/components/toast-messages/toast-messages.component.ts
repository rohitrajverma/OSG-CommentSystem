import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Toast } from 'src/app/models/comment.model';

@Component({
  selector: 'app-toast-messages',
  templateUrl: './toast-messages.component.html',
  styleUrls: ['./toast-messages.component.scss']
})
export class ToastMessagesComponent implements OnInit {

  @Input() toast: Toast;
  @Input() i: number = 0;
  @Output() remove = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
