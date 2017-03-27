import { Component } from '@angular/core';
import { MoviesService } from './movies.service';
import { ArticlesService } from './favorites/article/articles.service';
import { ApiService } from './favorites/api.service';
import { UserService } from './favorites/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MoviesService, ArticlesService, ApiService, UserService]
})
export class AppComponent {
  genres: Array<Object>;

  constructor(private _moviesServices: MoviesService) {
    this._moviesServices.getGenres().subscribe(res => {
      this.genres = res.genres.slice(0, 20);
    });
  }
}
