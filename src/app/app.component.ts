import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  apptitle = 'My Angular Blog';
  posts: any[];

}
export class PostService{

  posts = [
    {
      id:0,
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices, tortor et scelerisque suscipit, lorem quam imperdiet erat, ac aliquet leo nisi sed risus. Phasellus porta ultrices mi at mattis.',
      loveits: 1,
      created_at: new Date()
      
    },
    {
      id:1,
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices, tortor et scelerisque suscipit, lorem quam imperdiet erat, ac aliquet leo nisi sed risus. Phasellus porta ultrices mi at mattis.',
      loveits: -1,
      created_at: new Date
    },
    {
      id:2,
      title: 'Encore un post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices, tortor et scelerisque suscipit, lorem quam imperdiet erat, ac aliquet leo nisi sed risus. Phasellus porta ultrices mi at mattis.',
      loveits: 0,
      created_at: new Date
    }
  ];
}
