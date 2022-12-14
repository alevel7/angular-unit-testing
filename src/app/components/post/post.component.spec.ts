import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { first } from 'rxjs';
import { Post } from 'src/app/models/posts.model';

import { PostComponent } from './post.component';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostComponent ],
      schemas: [NO_ERRORS_SCHEMA]
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

  it('should render the post title in the anchor element', () => {
    const post:Post = {id: 1,  title: '1 post', body: 'body 1'};
    component.post = post;
    fixture.detectChanges();
    const postElements: HTMLElement = fixture.nativeElement;
    const a = postElements.querySelector('a');
    expect(a?.textContent).toContain(post.title)
  });

  it('should render the post title in the anchor element using debug', () => {
    const post:Post = {id: 1,  title: '1 post', body: 'body 1'};
    component.post = post;
    fixture.detectChanges();
    const postElements = fixture.debugElement;
    const aElement = postElements.query(By.css('a'))
    const aNative: HTMLElement= aElement.nativeElement;
    expect(aNative.textContent).toContain(post.title)
  })

  it('should raise an event when delete post is clicked', () => {
    const post:Post = {id: 1,  title: '1 post', body: 'body 1'};
    component.delete.pipe(first()).subscribe(
      selectedpost => {
        expect(selectedpost).toBe(post)
      }
    )
    component.post = post;
    component.removePost()
  })
});
