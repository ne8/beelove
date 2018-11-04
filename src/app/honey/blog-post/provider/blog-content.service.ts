import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const blogContentLocation = '/assets/data/blog-posts.json';


@Injectable({
  providedIn: 'root'
})
export class BlogContentService {

  constructor(private http: HttpClient) {
  }

  getBlogContent() {
    return this.http.get(blogContentLocation);
  }
}
