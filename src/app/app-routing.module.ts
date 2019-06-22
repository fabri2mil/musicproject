import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListAlbumComponent } from './album/list-album/list-album.component';
import { ListArtistComponent } from './artist/list-artist/list-artist.component';
import { ListGenreComponent } from './genre/list-genre/list-genre.component';
import { ListTrackComponent } from './track/list-track/list-track.component';
import { CreateAlbumComponent } from './album/create-album/create-album.component';
import { DetailAlbumComponent } from './album/detail-album/detail-album.component';

const routes: Routes = [
  { path: 'album', component: ListAlbumComponent },
  { path: 'album/:id', component: DetailAlbumComponent },
  { path: 'album/add', component: CreateAlbumComponent },
  { path: 'artist', component: ListArtistComponent },
  { path: 'genre', component: ListGenreComponent },
  { path: 'track', component: ListTrackComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
