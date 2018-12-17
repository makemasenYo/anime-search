import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

import { SortbarComponent } from './sortbar/sortbar.component';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { MainbarComponent } from './mainbar/mainbar.component';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';
import { AnimeDetailDateComponent } from './anime-detail-date/anime-detail-date.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    SortbarComponent,
    AnimeListComponent,
    MainbarComponent,
    AnimeDetailComponent,
    AnimeDetailDateComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    GraphQLModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
