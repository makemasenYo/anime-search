import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 

import { AnimeListComponent } from '../anime-list/anime-list.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'seasons', component: AnimeListComponent },
  { path: '', redirectTo: 'seasons', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }