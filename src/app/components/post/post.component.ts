import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from 'src/app/models/posts.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: Post | null | undefined;
  @Output() delete = new EventEmitter<Post | null>();
  constructor() { }

  ngOnInit(): void {
  }

  removePost() {
    this.delete.emit(this.post)
  }

}
