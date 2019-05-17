import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {SongSearchComponent} from './song-search/song-search.component';
import {SongCreateComponent} from './song-create/song-create.component';
import {SongPresentComponent} from './song-present/song-present.component';

const routes: Routes = [
    { path: 'song-search', component: SongSearchComponent },
    { path: 'song-create', component: SongCreateComponent },
    { path: 'song-present', component: SongPresentComponent }
];

@NgModule({
  imports: [
      CommonModule,
      RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
