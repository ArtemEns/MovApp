import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Article } from '../article/article.model';
import { ArticlesService } from '../article//articles.service';
import { UserService } from '../user/user.service';

@Component({
  selector: 'favorite-button',
  templateUrl: './favorite-button.component.html'
})
export class FavoriteButtonComponent {
  constructor(
    private articlesService: ArticlesService,
    private router: Router,
    private userService: UserService
  ) { }

  @Input() article: Article;
  @Output() onToggle = new EventEmitter<boolean>();
  isSubmitting = false;

  toggleFavorite() {
    this.isSubmitting = true;

    this.userService.isAuthenticated.subscribe(
      (authenticated) => {
  
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

}
