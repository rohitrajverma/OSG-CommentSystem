import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-like-dislike',
  templateUrl: './like-dislike.component.html',
  styleUrls: ['./like-dislike.component.scss']
})
export class LikeDislikeComponent implements OnInit {
  @Input() likes: number
  constructor() { }

  likeClicked = false
  dislikeClicked = false;
  
  ngOnInit(): void {
  }

  likeButtonClick() {
    this.likes++;
    this.likeClicked = true;
    this.dislikeClicked = false;
  }

  dislikeButtonClick() {
    this.likes--;
    this.dislikeClicked = true
    this.likeClicked = false;
  }

}
