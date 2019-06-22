import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumModule } from './album/album.module';
import { HttpClientModule } from '@angular/common/http';
import { ArtistModule } from './artist/artist.module';
import { GenreModule } from './genre/genre.module';
import { TrackModule } from './track/track.module';

@NgModule({
  declarations: [
    AppComponent,     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AlbumModule,
    ArtistModule,
    GenreModule,
    TrackModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
