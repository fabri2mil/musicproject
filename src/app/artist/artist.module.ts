import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListArtistComponent } from './list-artist/list-artist.component';
import { CreateArtistComponent } from './create-artist/create-artist.component';
import { DetailArtistComponent } from './detail-artist/detail-artist.component';

@NgModule({
  declarations: [ListArtistComponent, CreateArtistComponent, DetailArtistComponent],
  imports: [
    CommonModule
  ]
})
export class ArtistModule { }
