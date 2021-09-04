import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { of } from "rxjs";
import { data } from "./data";
import { Comment } from "../models/comment.model";

@Injectable({
  providedIn: "root"
})
export class CommentsService {
  src: any = data;

  constructor() { }

  getComments() {
    return of(data);
  }

  addComment(comment: Comment) {
    data.unshift(comment)
  }
}
