import { ComponentFixture, TestBed } from '@angular/core/testing';
import { first } from 'rxjs';
import { Post } from 'src/app/models/posts.model';

import { PostComponent } from './post.component';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should raise an event when delete post is clicked', () => {
    const comp = new PostComponent();
    const post:Post = {id: 1,  title: '1 post', body: 'body 1'};

    comp.delete.pipe(first()).subscribe(
      selectedpost => {
        expect(selectedpost).toBe(post)
      }
    )
    comp.post = post;
    comp.removePost()
  })
});
