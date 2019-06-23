import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListAlbumComponent } from './album/list-album/list-album.component';
import { ListArtistComponent } from './artist/list-artist/list-artist.component';
import { ListGenreComponent } from './genre/list-genre/list-genre.component';
import { ListTrackComponent } from './track/list-track/list-track.component';
import { CreateAlbumComponent } from './album/create-album/create-album.component';
import { DetailAlbumComponent } from './album/detail-album/detail-album.component';
import { CreateArtistComponent } from './artist/create-artist/create-artist.component';
import { DetailArtistComponent } from './artist/detail-artist/detail-artist.component';
import { CreateGenreComponent } from './genre/create-genre/create-genre.component';
import { DetailGenreComponent } from './genre/detail-genre/detail-genre.component';
import { CreateTrackComponent } from './track/create-track/create-track.component';
import { DetailTrackComponent } from './track/detail-track/detail-track.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'album'},
  { path: 'album', component: ListAlbumComponent },
  { path: 'album/add', component: CreateAlbumComponent },
  { path: 'album/:id', component: DetailAlbumComponent },  
  { path: 'artist', component: ListArtistComponent },
  { path: 'artist/add', component: CreateArtistComponent },
  { path: 'artist/:id', component: DetailArtistComponent },
  { path: 'genre', component: ListGenreComponent },
  { path: 'genre/add', component: CreateGenreComponent },
  { path: 'genre/:id', component: DetailGenreComponent },
  { path: 'track', component: ListTrackComponent },
  { path: 'track/add', component: CreateTrackComponent },
  { path: 'track/:id', component: DetailTrackComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
