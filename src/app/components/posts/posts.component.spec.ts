import { Post } from "src/app/models/posts.model"
import { PostsComponent } from './posts.component';
import { PostsServiceService } from '../../services/post/posts-service.service';
import { of } from "rxjs";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe('Post component', () => {
  let fixture: ComponentFixture<PostsComponent>;
  let posts: Post[];
  let postsComponent: PostsComponent;
  let mockPostService: any;

  beforeEach(() => {
    posts = [
      {
        id: 1,
        body: 'lorem ipsum lood 1',
        title: 'some other title'
      },
      {
        id: 2,
        body: 'lorem ipsum lood 2',
        title: 'some other title'
      },
      {
        id: 3,
        body: 'lorem ipsum lood 3',
        title: 'some other title'
      },
    ];
    mockPostService = jasmine.createSpyObj(['getPosts', 'deletePost'])

    TestBed.configureTestingModule({
      declarations: [ PostsComponent ],
      providers: [
        {
          provide: PostsServiceService,
          useValue: mockPostService
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    mockPostService.getPosts.and.returnValue(of(posts))
    fixture = TestBed.createComponent(PostsComponent);
    postsComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('DELETE', () => {

    it('should create', () => {
      expect(postsComponent).toBeTruthy();
    });

    it('should delete the selected post from the post array', () => {
      mockPostService.deletePost.and.returnValue(of(true))
      postsComponent.posts = posts;
      postsComponent.deletePost(postsComponent.posts[1]);
      expect(postsComponent.posts.length).toBe(2)
    });

    it('should call delete method in post service once', () => {
      mockPostService.deletePost.and.returnValue(of(true))
      postsComponent.posts = posts;
      postsComponent.deletePost(postsComponent.posts[1]);
      expect(mockPostService.deletePost).toHaveBeenCalledTimes(1)
    });

    it('should deleted the selected post from post array', () => {
      mockPostService.deletePost.and.returnValue(of(true))
      postsComponent.posts = posts;
      postsComponent.deletePost(posts[1]);
      const deletedPost = postsComponent.posts.find(p => p.id === 2)
      expect(deletedPost).toBe(undefined)
    })

  })
})
