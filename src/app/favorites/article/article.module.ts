import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ArticleComponent } from './article.component';
import { ArticleResolver } from './article-resolver.service';
import { AppModule } from '../../app.module';

const articleRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'article/:slug',
    component: ArticleComponent,
    resolve: {
      article: ArticleResolver
    }
  }
]);

@NgModule({
  imports: [
    articleRouting,
    AppModule
  ],
  declarations: [
    ArticleComponent
  ],

  providers: [
    ArticleResolver
  ]
})
export class ArticleModule {}
