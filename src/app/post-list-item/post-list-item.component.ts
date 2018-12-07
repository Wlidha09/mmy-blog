import { Component, OnInit, Input } from '@angular/core';
import { PostListComponent } from '../post-list/post-list.component';
import { Subject } from 'rxjs';
import { Subscription } from 'rxjs';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  @Input() loveits: number = 0;
  @Input() created_at: Date;
  @Input() id: number=0;

  posts = this.postList.posts;
  postSubscription: Subscription;
  postSubject = new Subject<any[]>();

  constructor(private postList : PostListComponent) { }

  ngOnInit() {
    this.postSubscription = this.postList.postSubject.subscribe(
      (posts: any[]) => {
        this.posts = posts;
      }
    );
  }
  emitPostSubject(){
    this.postSubject.next(this.posts.slice());
  }

  switchOnOne(i: number) {
    console.log("identifiant"+i);
    this.posts[i].loveits ++;
    console.log("love it:"+this.posts[i].loveits);
  }

  switchOffOne(i: number) {
      this.posts[i].loveits --;
      console.log("do not love it:"+this.posts[i].loveits);
  }



}
