import { Component, OnInit, Input } from "@angular/core";
import { Comment } from "src/app/models/comment.model";
import { LocalStorageService } from "src/app/services/local-storage.service";
import { ToasterService } from "src/app/services/toast-message.service";

@Component({
  selector: "app-comment",
  templateUrl: "./comment.component.html",
  styleUrls: ["./comment.component.scss"]
})
export class CommentComponent implements OnInit {
  @Input() comment;
  loggedInUser: string;
  loggedInUserAvatar: string;

  isEditing = false;
  constructor(private storage: LocalStorageService, private toaster: ToasterService) { }

  ngOnInit() {
    this.loggedInUserAvatar = this.storage.getFromStorage('loggedInUserAvatar');
  }

  replyClick() {
    if (this.storage.getRawFromStorage('loggedInUser')) {
      this.isEditing = !this.isEditing;
    } else {
      this.toaster.show('error', 'Please login!', 'Please login to post reply');
    }
  }

  onAdd($event: any) {
    const comment: Comment = {
      text: $event,
      username: this.storage.getFromStorage('loggedInUser'),
      avatar: this.storage.getFromStorage('loggedInUserAvatar'),
      likes: 0,
      date:  new Date().toISOString()
    }
    if (!this.comment.comments) {
      this.comment.comments = [];
    }
    this.comment.comments.unshift(comment);
    this.isEditing = false;
  }

}
