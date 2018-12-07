import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../app.component';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  @Input() loveits: number = 0;
  @Input() created_at: Date;
  @Input() id: number=0;

  posts = this.postService.posts;
  postSubject = new Subject<any[]>();
  

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  emitPostSubject(){
    this.postSubject.next(this.posts.slice());
  }

}
