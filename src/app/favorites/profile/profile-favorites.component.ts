import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ArticleListConfig } from '../article/article-list-config.model';
import { Profile } from './profile.model';

@Component({
  selector: 'profile-favorites',
  templateUrl: './profile-favorites.component.html'
})
export class ProfileFavoritesComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  profile: Profile;
  favoritesConfig: ArticleListConfig = new ArticleListConfig();

  ngOnInit() {
    this.route.parent.data.subscribe(
      (data: {profile: Profile}) => {
        this.profile = data.profile;
        this.favoritesConfig.filters.favorited = this.profile.username;
      }
    );
  }

}
