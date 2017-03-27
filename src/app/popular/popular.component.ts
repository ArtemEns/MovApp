import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  movies: Array<Object>;
  searchRes: Array<Object>;
  searchStr: string;

  constructor(private _moviesService: MoviesService) {
    this._moviesService.getPopularMovies().subscribe(res => {
      this.movies = res.results;
    });
  }

  ngOnInit() {
  }

  searchMovies() {
    this._moviesService.searchMovies(this.searchStr).subscribe(res => {
      this.searchRes = res.results;
    })
  }

}
