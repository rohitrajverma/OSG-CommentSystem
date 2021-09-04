import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { LocalStorageService } from "src/app/services/local-storage.service";
import { ToasterService } from "src/app/services/toast-message.service";

@Component({
  selector: "app-comment-box",
  templateUrl: "./comment-box.component.html",
  styleUrls: ["./comment-box.component.scss"]
})
export class CommentBoxComponent implements OnInit {
  @Output() add = new EventEmitter<string>();
  value: string = '';
  constructor(private storage: LocalStorageService, private toaster: ToasterService) { }

  ngOnInit() { }

  cancel() {
    this.value = '';
  }

  post() {
    if (this.storage.getRawFromStorage('loggedInUser')) {
      if (this.value.trim()) {
        this.add.emit(this.value);
        this.value = '';
      }
    } else {
      this.toaster.show('error', 'Please login!', 'Please login to post reply');
    }
  }
}
