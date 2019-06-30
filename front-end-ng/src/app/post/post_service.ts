import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpRequest, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { map } from 'rxjs/operators';
import { Post } from './post';

@Injectable()
export class PostService {
	private postUrl = 'http://localhost:3000/posts';

	constructor(private http: HttpClient) {}

	getPosts(url: string): Observable<Post[]> {
		return this.http.get<Post[]>(this.postUrl)
		  // following was commented out do to it not working. .map w/ Observable no longer works.
		  //.map((response: Response) => <Post[]>response.json())
	}
}