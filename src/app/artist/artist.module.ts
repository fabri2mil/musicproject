import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListArtistComponent } from './list-artist/list-artist.component';
import { CreateArtistComponent } from './create-artist/create-artist.component';
import { DetailArtistComponent } from './detail-artist/detail-artist.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListArtistComponent, CreateArtistComponent, DetailArtistComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ArtistModule { }
