import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from './favorites/article/article.model';
import { ArticlesService } from './favorites/article/articles.service';
import { UserService } from './favorites/user/user.service';

@Injectable()
export class MoviesService {
  apikey: string;

  constructor(private _jsonp: Jsonp) {
    this.apikey = '1fc4006c54ca8559696ec59eb395a72f';
    console.log('Movies service is ready');
  }

  // getFavs() {
  //   var favorites = JSON.parse(localStorage.getItem('favorites'));
  //   return favorites;
  // }

  getToken(): String {
    return window.localStorage['lsToken'];
  }

  saveToken(token: String) {
    window.localStorage['lsToken'] = token;
  }

  destroyToken() {
    window.localStorage.removeItem('lsToken');
  }

  getPopular() {
    var search = new URLSearchParams();
    search.set('sort_by', 'popularity.desc');
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK', { search })
      .map(res => {
        return res.json();
      })
  }


  searchMovies(searchStr: string) {
    var search = new URLSearchParams();
    search.set('sort_by', 'popularity.desc');
    search.set('query', searchStr);
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK', { search })
      .map(res => {
        return res.json();
      })
  }

  getMovie(id: string) {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/movie/' + id + '?callback=JSONP_CALLBACK', { search })
      .map(res => {
        return res.json();
      })
  }

  getGenres() {
    var search = new URLSearchParams();
    search.set('language', 'en-US');
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/genre/movie/list?callback=JSONP_CALLBACK', { search })
      .map(res => {
        return res.json();
      })
  }

  getMoviesByGenre(id: string) {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/genre/' + id + '/movies?callback=JSONP_CALLBACK', { search })
      .map(res => {
        return res.json();
      })
  }

  getMovieReviews(id: string) {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/movie/' + id + '/reviews?callback=JSONP_CALLBACK', { search })
      .map(res => {
        return res.json();
      })
  }
  getMovieVideos(id: string) {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/movie/' + id + '/videos?callback=JSONP_CALLBACK', { search })
      .map(res => {
        return res.json();
      })
  }

  getSimilarMovies(id: string) {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/movie/' + id + '/similar?callback=JSONP_CALLBACK', { search })
      .map(res => {
        return res.json();
      })
  }

  getMovieCredits(id: string) {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/movie/' + id + '/credits?callback=JSONP_CALLBACK', { search })
      .map(res => {
        return res.json();
      })
  }

  getPopularMovies() {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/movie/popular?callback=JSONP_CALLBACK', { search })
      .map(res => {
        return res.json();
      })
  }

  private articlesService: ArticlesService;
  private router: Router;
  private userService: UserService;



  @Input() article: Article;
  @Output() onToggle = new EventEmitter<boolean>();
  isSubmitting = false;

  toggleFavorite() {
    this.isSubmitting = true;

    this.userService.isAuthenticated.subscribe(
      (authenticated) => {
        // Favorite the article if it isn't favorited yet
        if (!this.article.favorited) {
          this.articlesService.favorite(this.article.slug)
            .subscribe(
            data => {
              this.isSubmitting = false;
              this.onToggle.emit(true);
            },
            err => this.isSubmitting = false
            );

          // Otherwise, unfavorite the article
        } else {
          this.articlesService.unfavorite(this.article.slug)
            .subscribe(
            data => {
              this.isSubmitting = false;
              this.onToggle.emit(false);
            },
            err => this.isSubmitting = false
            );
        }
      }
    )
  }

