import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/models/comment.model';
import { CommentsService } from 'src/app/services/comments.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  src: Observable<Comment[]>;
  constructor(private commentService: CommentsService, private storage: LocalStorageService,
  ) { }

  ngOnInit(): void {
    this.src = this.commentService.getComments();

  }

  onSubmit(event: any): void {
    const comment = {
      text: event,
      username: this.storage.getFromStorage('loggedInUser'),
      avatar: this.storage.getFromStorage('loggedInUserAvatar'),
      date:  new Date().toISOString(),
      likes: 0,
      dislikes: 0
    }
    this.commentService.addComment(comment);
  }

}
