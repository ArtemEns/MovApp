import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { GenresComponent } from './genres/genres.component';
import { PopularComponent } from './popular/popular.component';
import { FavoriteButtonComponent } from './favorites/fav/favorite-button.component';
import { MoviesService } from './movies.service';
import {ArticlePreviewComponent} from './favorites/article/article-preview.component';
import {ArticleMetaComponent} from './favorites/article/article-meta.component';
const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
    MovieCardComponent,
    GenresComponent,
    PopularComponent,
    FavoriteButtonComponent,
    ArticlePreviewComponent,
    ArticleMetaComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
