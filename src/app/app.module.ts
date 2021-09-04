import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommentBoxComponent } from './components/comment-box/comment-box.component';
import { CommentComponent } from './components/comment/comment.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { ToastMessagesComponent } from './components/toast-messages/toast-messages.component';
import { ToasterContainerComponent } from './components/toast-messages/toast-message-container.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { LikeDislikeComponent } from './components/like-dislike/like-dislike.component';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    CommentBoxComponent,
    NavbarComponent,
    LoginComponent,
    ToastMessagesComponent,
    ToasterContainerComponent,
    HomeComponent,
    LikeDislikeComponent,
    TimeAgoPipe,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
